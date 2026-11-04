import { NextResponse } from "next/server";
import { GEO, SURVEY } from "@/lib/survey";
import { MIN_PUBLIC } from "@/lib/survey-copy";
import { sinkAvailable, sinkRows, type PublicRow } from "@/lib/survey-sink";

const COUNTRY_CODES = new Set(GEO.codes);
let cache: { at: number; rows: PublicRow[] } | null = null;

async function rows() {
  if (cache && Date.now() - cache.at < 30_000) return cache.rows;
  const r = await sinkRows();
  cache = { at: Date.now(), rows: r };
  return r;
}

// Nur Aggregate, kein Freitext, keine E-Mail. Unter MIN_PUBLIC Antworten wird nichts gezeigt.
export async function GET(request: Request) {
  if (!sinkAvailable) return NextResponse.json({ error: "server_not_configured" }, { status: 503 });
  const c = (new URL(request.url).searchParams.get("country") || "").toUpperCase();
  if (c && !COUNTRY_CODES.has(c)) return NextResponse.json({ error: "bad_country" }, { status: 400 });
  try {
    const all = await rows();
    const countries: Record<string, number> = {};
    for (const r of all) if (r.country) countries[r.country] = (countries[r.country] || 0) + 1;
    const sel = c ? all.filter((r) => r.country === c) : all;
    const open = sel.length >= MIN_PUBLIC;
    const questions: Record<string, { n: number; counts: Record<string, number> }> = {};
    if (open) {
      for (const r of sel) {
        for (const [qid, v] of Object.entries(r.answers || {})) {
          if (!v) continue;
          const q = (questions[qid] ||= { n: 0, counts: {} });
          q.n++;
          for (const o of String(v).split("|")) q.counts[o] = (q.counts[o] || 0) + 1;
        }
      }
    }
    // Länder mit zu wenigen Antworten nicht einzeln ausweisen
    const shown: Record<string, number> = {};
    let rest = 0;
    for (const [k, n] of Object.entries(countries)) { if (n >= MIN_PUBLIC) shown[k] = n; else rest += n; }
    if (rest) shown["--"] = rest;
    return NextResponse.json(
      { n: sel.length, open, min: MIN_PUBLIC, country: c || null, countries: shown, questions: open ? questions : {}, survey: SURVEY.id, version: SURVEY.version },
      { headers: { "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60" } },
    );
  } catch (err) {
    console.error("Pulse-Auswertung fehlgeschlagen:", err);
    return NextResponse.json({ error: "stats_failed" }, { status: 502 });
  }
}
