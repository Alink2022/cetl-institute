import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_ADDRESS = "alinkalam@cetl.institute";
const FROM_ADDRESS = "CETL Kontaktformular <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY ist nicht gesetzt.");
    return NextResponse.json({ error: "server_not_configured" }, { status: 500 });
  }

  let body: { name?: string; email?: string; role?: string; topic?: string; context?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const oneLine = (v: string) => v.replace(/[\r\n]+/g, " ");
  const name = oneLine(clean(body.name, 200));
  const email = oneLine(clean(body.email, 200));
  const role = oneLine(clean(body.role, 200));
  const topic = oneLine(clean(body.topic, 200));
  const context = clean(body.context, 5000);

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject: `Neue Kontaktanfrage${topic ? `: ${topic}` : ""} — ${name}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Funktion / Organisation:</strong> ${escapeHtml(role || "—")}</p>
        <p><strong>Themenbereich:</strong> ${escapeHtml(topic || "—")}</p>
        <p><strong>Organisatorischer Kontext:</strong></p>
        <p>${escapeHtml(context || "—").replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend-Fehler:", error);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Unerwarteter Fehler beim Mailversand:", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
