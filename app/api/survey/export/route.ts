import { createHash, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import { dbConfigured, exportRows } from "@/lib/db";

export const dynamic = "force-dynamic";

// Export aller Antworten inklusive Freitext und E-Mail. Nur mit Admin-Token im Header:
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
    return NextResponse.json({ error: "export_failed" }, { status: 502 });
  }
}
