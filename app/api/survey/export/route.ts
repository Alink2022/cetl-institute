import { createHash, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import { dbConfigured, deleteResponses, exportRows } from "@/lib/db";

export const dynamic = "force-dynamic";

// Export (GET) und Löschung (DELETE ?id=… oder ?email=…) aller Antworten inklusive Freitext und E-Mail. Nur mit Admin-Token im Header:
//   curl -H "Authorization: Bearer <SURVEY_ADMIN_TOKEN>" https://www.cetl.institute/api/survey/export -o pulse.csv
const TOKEN = process.env.SURVEY_ADMIN_TOKEN || "";
const sha = (s: string) => createHash("sha256").update(s).digest();

const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 10;
}

const cell = (v: string | number | null) => {
  if (v == null) return "";
  let t = String(v);
  if (/^[=+\-@\t\r]/.test(t)) t = "'" + t; // Formel-Schutz für Excel und Sheets
  return /[",\n;]/.test(t) ? '"' + t.replace(/"/g, '""') + '"' : t;
};

export async function GET(request: Request) {
  if (TOKEN.length < 24 || !dbConfigured) return NextResponse.json({ error: "not_available" }, { status: 404 });
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  const given = (request.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  if (!given || !timingSafeEqual(sha(given), sha(TOKEN))) return NextResponse.json({ error: "forbidden" }, { status: 403 });
  try {
    const rows = await exportRows();
    const cols = rows.length ? Object.keys(rows[0]) : ["id"];
    const csv = [cols.join(","), ...rows.map((r) => cols.map((c) => cell(r[c] ?? null)).join(","))].join("\n") + "\n";
    return new Response("\ufeff" + csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="pulse-${new Date().toISOString().slice(0, 10)}.csv"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("Pulse-Export fehlgeschlagen:", err);
    // Nur mit gültigem Admin-Token erreichbar, daher darf die Ursache mit ausgegeben werden.
    return NextResponse.json({ error: "export_failed", detail: String((err as Error)?.message ?? err).slice(0, 300) }, { status: 502 });
  }
}

// Löschung einer Teilnahme (per ID) oder aller Teilnahmen einer E-Mail-Adresse. Antwort: Zahl der gelöschten Teilnahmen.
export async function DELETE(request: Request) {
  if (TOKEN.length < 24 || !dbConfigured) return NextResponse.json({ error: "not_available" }, { status: 404 });
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  const given = (request.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  if (!given || !timingSafeEqual(sha(given), sha(TOKEN))) return NextResponse.json({ error: "forbidden" }, { status: 403 });
  const q = new URL(request.url).searchParams;
  const id = (q.get("id") || "").trim();
  const email = (q.get("email") || "").trim();
  if ((id ? 1 : 0) + (email ? 1 : 0) !== 1) return NextResponse.json({ error: "give_exactly_one_of_id_or_email" }, { status: 400 });
  if (id && !/^[A-Za-z0-9_-]{4,32}$/.test(id)) return NextResponse.json({ error: "bad_id" }, { status: 400 });
  try {
    const deleted = await deleteResponses(id ? { id } : { email });
    return NextResponse.json({ ok: true, deleted }, { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("Pulse-Löschung fehlgeschlagen:", err);
    return NextResponse.json({ error: "delete_failed" }, { status: 502 });
  }
}
