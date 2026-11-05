import { NextResponse } from "next/server";
import { GEO, SURVEY } from "@/lib/survey";

// Fragenkatalog und Länderlogik für die 8-Bit-Version (/pulse). Eine Quelle für beide Darstellungen.
export function GET() {
  return NextResponse.json({ SURVEY, GEO }, { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" } });
}
