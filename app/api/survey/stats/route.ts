import { NextResponse } from "next/server";
import { GEO, SURVEY } from "@/lib/survey";
import { MIN_PUBLIC } from "@/lib/survey-copy";
import { dbConfigured, loadStats, type Stats } from "@/lib/db";

const COUNTRY_CODES = new Set(GEO.codes);
const cache = new Map<string, { at: number; data: Stats }>();

async function stats(country: string) {
  const hit = cache.get(country);
  if (hit && Date.now() - hit.at < 30_000) return hit.data;
  const data = await loadStats(country);
  cache.set(country, { at: Date.now(), data });
  return data;
}

// Nur Aggregate, kein Freitext, keine E-Mail. Unter MIN_PUBLIC Antworten wird nichts gezeigt.
export async function GET(request: Request) {
  if (!dbConfigured) return NextResponse.json({ error: "server_not_configured" }, { status: 503 });
  const c = (new URL(request.url).searchParams.get("country") || "").toUpperCase();
  if (c && !COUNTRY_CODES.has(c)) return NextResponse.json({ error: "bad_country" }, { status: 400 });
  try {
    const d = await stats(c);
    const open = d.n >= MIN_PUBLIC;
    // Länder mit zu wenigen Antworten nicht einzeln ausweisen
    const shown: Record<string, number> = {};
    let rest = 0;
    for (const [k, n] of Object.entries(d.countries)) { if (n >= MIN_PUBLIC) shown[k] = n; else rest += n; }
    if (rest) shown["--"] = rest;
    return NextResponse.json(
      { n: d.n, open, min: MIN_PUBLIC, country: c || null, countries: shown, questions: open ? d.questions : {}, survey: SURVEY.id, version: SURVEY.version },
      { headers: { "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60" } },
    );
  } catch (err) {
    console.error("Pulse-Auswertung fehlgeschlagen:", err);
    return NextResponse.json({ error: "stats_failed" }, { status: 502 });
  }
}
