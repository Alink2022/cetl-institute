import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_ADDRESS = "alinkalam@cetl.institute";
const FROM_ADDRESS = "CETL Faculty <onboarding@resend.dev>";

// Einfache Bremse pro IP, damit das öffentliche Formular nicht geflutet wird.
const hits = new Map<string, number[]>();
function tooMany(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const FIELDS = [
  "role", "salutation", "title", "first", "last", "company", "position", "email", "phone", "city", "linkedin", "website", "birth", "languages", "bio",
  "education", "school", "field", "certs", "expertise", "tools", "years", "teaching", "topics", "refs",
  "billing", "rate", "via", "uid", "sideJob", "delivery", "availability", "conflict",
] as const;
const LONG = new Set(["bio", "expertise", "tools", "certs", "topics", "refs", "availability", "conflict"]);

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "server_not_configured" }, { status: 500 });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (tooMany(ip)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });

  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "invalid_body" }, { status: 400 }); }

  // Honeypot: Bots füllen das versteckte Feld aus, wir tun so, als wäre alles gut.
  if (typeof body.hp === "string" && body.hp.trim()) return NextResponse.json({ ok: true });

  const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const data: Record<string, string> = {};
  for (const k of FIELDS) data[k] = LONG.has(k) ? clean(body[k], 2500) : clean(body[k], 300).replace(/[\r\n]+/g, " ");

  if (!data.first || !data.last || !data.company || !data.position || !data.education || !data.billing) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  if (body.consent !== true) return NextResponse.json({ error: "no_consent" }, { status: 400 });

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
    `Abrechnung: ${data.billing}${data.rate ? ", " + data.rate + " Euro netto" : ""}`,
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
