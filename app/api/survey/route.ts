import { createHmac, randomBytes, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import { altchaConfigured, altchaSecret, altchaStore, deriveKey } from "@/lib/altcha";
import { verify } from "altcha-lib/frameworks/shared";
import { GEO, SURVEY, allQuestions } from "@/lib/survey";
import { dbConfigured, saveResponse } from "@/lib/db";

const MAX_BODY = 32_000;
const MIN_FILL_MS = 20_000;
const MAX_AGE_MS = 4 * 60 * 60_000;
const RATE_PER_HOUR = 30;

// Schlüssel für das Formular-Token. Ohne eigene Variable wird vom Resend-Schlüssel abgeleitet.
const BASE = process.env.SURVEY_SECRET || process.env.TURSO_AUTH_TOKEN || process.env.RESEND_API_KEY || "";
// Ohne ausreichend langes Geheimnis (nur in Produktion) wird nichts angenommen, damit Tokens nicht fälschbar sind.
const keyed = BASE.length >= 16 || process.env.NODE_ENV !== "production";
const secret = () => `survey:${BASE}`;
const sign = (t: string) => createHmac("sha256", secret()).update(t).digest("hex");

function validToken(tk: unknown) {
  if (typeof tk !== "string") return false;
  const [t, sig] = tk.split(".");
  if (!t || !sig || !/^\d+$/.test(t)) return false;
  const expected = sign(t);
  if (sig.length !== expected.length || !timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return false;
  const age = Date.now() - Number(t);
  return age >= MIN_FILL_MS && age <= MAX_AGE_MS;
}

const ipHits = new Map<string, number[]>();
function over(key: string) {
  const now = Date.now();
  const recent = (ipHits.get(key) ?? []).filter((t) => now - t < 60 * 60_000);
  recent.push(now);
  ipHits.set(key, recent);
  if (ipHits.size > 5000) for (const [k, v] of ipHits) if (!v.some((t) => now - t < 60 * 60_000)) ipHits.delete(k);
  return recent.length > RATE_PER_HOUR;
}

const COUNTRY_CODES = new Set(GEO.codes);
const COUNTRY_SRC = new Set(["geo", "tz", "locale", "manual"]);
const QUESTIONS = allQuestions();
const CATALOGUE = new Map(QUESTIONS.map((q) => [q.id, { type: q.type, max: q.max ?? 1, optional: !!q.optional, options: new Set(q.options.map((o) => o.id)) }]));
const FREE_TEXT = new Map(SURVEY.boss.freeText.map((f) => [f.id, f.max]));
const EMAIL_RE = /^[A-Za-z0-9._%+'-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
const strip = (s: string) => s.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "");

// Das Formular holt sich beim Öffnen ein signiertes Token und die Länderangabe des Netzwerks (falls vorhanden).
export async function GET(request: Request) {
  if (!keyed) return NextResponse.json({ error: "server_not_configured" }, { status: 503 });
  const t = String(Date.now());
  const geo = (request.headers.get("x-vercel-ip-country") || "").toUpperCase();
  return NextResponse.json({ tk: `${t}.${sign(t)}`, geo: COUNTRY_CODES.has(geo) ? geo : null }, { headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  if (!dbConfigured || !keyed || !altchaConfigured) return NextResponse.json({ error: "server_not_configured" }, { status: 503 });
  if (Number(request.headers.get("content-length") ?? 0) > MAX_BODY) return NextResponse.json({ error: "too_large" }, { status: 413 });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (over(ip)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });

  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY) return NextResponse.json({ error: "too_large" }, { status: 413 });
    body = JSON.parse(raw);
    if (!body || typeof body !== "object") throw new Error("bad");
  } catch { return NextResponse.json({ error: "invalid_body" }, { status: 400 }); }

  // Honeypot: Bots füllen das versteckte Feld aus, wir tun so, als wäre alles gut.
  if (typeof body.hp === "string" && body.hp.trim()) return NextResponse.json({ ok: true });
  if (!validToken(body.tk)) return NextResponse.json({ error: "invalid_token" }, { status: 400 });
  const captcha = await verify(body.altcha, deriveKey, altchaSecret, undefined, altchaStore);
  if (captcha.error || !captcha.verification?.verified) return NextResponse.json({ error: "captcha_failed" }, { status: 400 });

  if (body.survey !== SURVEY.id) return NextResponse.json({ error: "wrong_survey" }, { status: 422 });
  const lang = body.lang === "en" ? "en" : body.lang === "de" ? "de" : "";
  if (!lang) return NextResponse.json({ error: "bad_lang" }, { status: 422 });
  const country = typeof body.country === "string" ? body.country.toUpperCase() : "";
  if (!COUNTRY_CODES.has(country)) return NextResponse.json({ error: "bad_country" }, { status: 422 });
  const countrySrc = typeof body.country_src === "string" && COUNTRY_SRC.has(body.country_src) ? body.country_src : "";

  const input = body.answers && typeof body.answers === "object" ? (body.answers as Record<string, unknown>) : {};
  const answers: Record<string, string[]> = {};
  for (const qid of Object.keys(input)) if (!CATALOGUE.has(qid)) return NextResponse.json({ error: `unknown:${qid}` }, { status: 422 });
  for (const [qid, spec] of CATALOGUE) {
    const v = input[qid];
    if (v === undefined || v === null || v === "" || (Array.isArray(v) && !v.length)) {
      if (spec.optional) continue;
      return NextResponse.json({ error: `missing:${qid}` }, { status: 422 });
    }
    const vals = Array.isArray(v) ? v : [v];
    if (spec.type !== "multi" && vals.length !== 1) return NextResponse.json({ error: `single:${qid}` }, { status: 422 });
    if (vals.length > spec.max || new Set(vals).size !== vals.length) return NextResponse.json({ error: `max:${qid}` }, { status: 422 });
    for (const o of vals) if (typeof o !== "string" || !spec.options.has(o)) return NextResponse.json({ error: `option:${qid}` }, { status: 422 });
    answers[qid] = vals as string[];
  }

  const texts: Record<string, string> = {};
  for (const [id, max] of FREE_TEXT) {
    const t = body.texts && typeof (body.texts as Record<string, unknown>)[id] === "string" ? strip(String((body.texts as Record<string, unknown>)[id]).trim()) : "";
    if (t.length > max) return NextResponse.json({ error: `long:${id}` }, { status: 422 });
    texts[id] = t;
  }
  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (email && (email.length > 200 || !EMAIL_RE.test(email))) return NextResponse.json({ error: "bad_email" }, { status: 422 });
  if (body.agree !== true || (email && body.consent !== true)) return NextResponse.json({ error: "no_consent" }, { status: 400 });
  const dur = typeof body.duration_ms === "number" && Number.isFinite(body.duration_ms) ? Math.max(0, Math.min(86_400_000, Math.round(body.duration_ms))) : null;
  const geoHeader = (request.headers.get("x-vercel-ip-country") || "").toUpperCase();
  const variant = body.variant === "8bit" ? "8bit" : body.variant === "classic" ? "classic" : "";

  try {
    await saveResponse({
      id: randomBytes(6).toString("base64url"),
      surveyId: SURVEY.id, version: SURVEY.version,
      lang, country, countrySrc,
      geo: COUNTRY_CODES.has(geoHeader) ? geoHeader : "",
      durationS: dur === null ? null : Math.round(dur / 1000),
      answers, elephant: texts.elephant ?? "", unasked: texts.unasked ?? "", email, variant,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Pulse-Speicherung fehlgeschlagen:", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
