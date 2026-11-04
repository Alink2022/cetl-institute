import { createHmac, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { altchaConfigured, altchaSecret, altchaStore, deriveKey } from "@/lib/altcha";
import { verify } from "altcha-lib/frameworks/shared";

const TO_ADDRESS = "alinkalam@cetl.institute";
const FROM_ADDRESS = "CETL Faculty <onboarding@resend.dev>";
const MAX_BODY = 60_000;
const MIN_FILL_MS = 6_000;
const MAX_AGE_MS = 2 * 60 * 60_000;

// Schlüssel für das Formular-Token. Ohne eigene Variable wird vom Resend-Schlüssel abgeleitet.
const BASE = process.env.FACULTY_SECRET || process.env.RESEND_API_KEY || "";
const keyed = BASE.length >= 16 || process.env.NODE_ENV !== "production";
const secret = () => `faculty:${BASE}`;
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

// Bremsen pro IP und pro E-Mail-Adresse. Zusammen mit dem Token reicht das gegen einfache Bots.
const ipHits = new Map<string, number[]>();
const mailHits = new Map<string, number[]>();
function over(map: Map<string, number[]>, key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const recent = (map.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  map.set(key, recent);
  if (map.size > 5000) for (const [k, v] of map) if (!v.some((t) => now - t < windowMs)) map.delete(k);
  return recent.length > limit;
}

const FIELDS = [
  "role", "salutation", "title", "first", "last", "company", "position", "email", "phone", "city", "linkedin", "website", "languages", "bio",
  "education", "school", "field", "certs", "expertise", "tools", "years", "teaching", "topics", "refs",
  "delivery", "availability", "conflict",
] as const;
const LONG = new Set(["bio", "expertise", "tools", "certs", "topics", "refs", "availability", "conflict"]);
const EMAIL_RE = /^[A-Za-z0-9._%+'-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

// Das Formular holt sich beim Öffnen ein signiertes Token. Ohne Token oder bei zu schneller Abgabe wird nichts angenommen.
export async function GET() {
  if (!keyed) return NextResponse.json({ error: "server_not_configured" }, { status: 503 });
  const t = String(Date.now());
  return NextResponse.json({ tk: `${t}.${sign(t)}` }, { headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || !keyed || !altchaConfigured) return NextResponse.json({ error: "server_not_configured" }, { status: 500 });

  const len = Number(request.headers.get("content-length") ?? 0);
  if (len > MAX_BODY) return NextResponse.json({ error: "too_large" }, { status: 413 });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (over(ipHits, ip, 5, 10 * 60_000)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });

  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY) return NextResponse.json({ error: "too_large" }, { status: 413 });
    body = JSON.parse(raw);
  } catch { return NextResponse.json({ error: "invalid_body" }, { status: 400 }); }

  // Honeypot: Bots füllen das versteckte Feld aus, wir tun so, als wäre alles gut.
  if (typeof body.hp === "string" && body.hp.trim()) return NextResponse.json({ ok: true });
  if (!validToken(body.tk)) return NextResponse.json({ error: "invalid_token" }, { status: 400 });
  // Spamschutz (ALTCHA): gültige, frische und noch nicht benutzte Lösung nötig.
  const captcha = await verify(body.altcha, deriveKey, altchaSecret, undefined, altchaStore);
  if (captcha.error || !captcha.verification?.verified) return NextResponse.json({ error: "captcha_failed" }, { status: 400 });

  // Steuerzeichen und die Marker des CRM-Imports aus allen Feldern entfernen.
  const strip = (s: string) => s.replace(/<<<|>>>|CETL-FACULTY-JSON/g, "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "");
  const clean = (v: unknown, max: number) => (typeof v === "string" ? strip(v.trim().slice(0, max)) : "");
  const data: Record<string, string> = {};
  for (const k of FIELDS) data[k] = LONG.has(k) ? clean(body[k], 2500) : clean(body[k], 300).replace(/[\r\n]+/g, " ");

  if (!data.first || !data.last || !data.company || !data.position || !data.education) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(data.email)) return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  if (body.consent !== true) return NextResponse.json({ error: "no_consent" }, { status: 400 });
  if (over(mailHits, data.email.toLowerCase(), 3, 60 * 60_000)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });

  const fullName = `${data.first} ${data.last}`;
  const lines = [
    `Neue Selbstauskunft für die CETL Faculty`,
    ``,
    `Name: ${data.salutation ? data.salutation + " " : ""}${data.title ? data.title + " " : ""}${fullName}`,
    `Mitwirkung als: ${data.role}`,
    `Unternehmen: ${data.company}`,
    `Rolle: ${data.position}`,
    `E-Mail: ${data.email}`,
    `Telefon: ${data.phone || "—"}`,
    `Ausbildung: ${data.education}${data.school ? ", " + data.school : ""}`,
    `Fachexpertise: ${data.expertise || "—"}`,
    `Toolstack: ${data.tools || "—"}`,
    `Kundenkonflikte: ${data.conflict || "—"}`,
    ``,
    `Maschinenlesbar für das CRM (nicht ändern):`,
    `<<<CETL-FACULTY-JSON`,
    JSON.stringify({ ...data, lang: clean(body.lang, 4), submittedAt: new Date().toISOString() }),
    `CETL-FACULTY-JSON>>>`,
  ];

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: data.email,
      subject: `Faculty-Onboarding: ${fullName}`,
      text: lines.join("\n"),
    });
    if (error) { console.error("Resend-Fehler:", error); return NextResponse.json({ error: "send_failed" }, { status: 502 }); }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Faculty-Onboarding Fehler:", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
