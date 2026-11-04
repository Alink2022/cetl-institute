// Ablage der Umfrageantworten: ein Google Sheet im Drive-Ordner "CETL Pulse Umfrage".
// Ein eigenes Apps-Script (survey-sink/) nimmt die Zeilen an. Die Seite spricht es nur serverseitig an.
// Env: SURVEY_SINK_URL (Web-App-URL) und SURVEY_SINK_SECRET (gemeinsames Geheimnis).
// Lokal ohne diese Variablen landen die Antworten nur im Arbeitsspeicher (nur für Entwicklung).

export type SinkRow = {
  id: string; ts: string; lang: string; country: string; country_src: string; geo: string; duration_s: number | null; version: string;
  answers: Record<string, string>; // Frage-ID -> Option-IDs, mehrere mit "|" getrennt
  elephant: string; unasked: string; email: string;
};
export type PublicRow = { country: string; answers: Record<string, string> };

const URL_ = process.env.SURVEY_SINK_URL || "";
const SECRET = process.env.SURVEY_SINK_SECRET || "";
export const sinkConfigured = !!(URL_ && SECRET);
export const sinkAvailable = sinkConfigured || process.env.NODE_ENV !== "production";

const dev = globalThis as unknown as { __pulseRows?: SinkRow[] };

async function call(body: Record<string, unknown>) {
  const res = await fetch(URL_, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ secret: SECRET, ...body }),
    redirect: "follow",
    cache: "no-store",
    signal: AbortSignal.timeout(25_000),
  });
  if (!res.ok) throw new Error(`sink http ${res.status}`);
  const data = await res.json();
  if (!data || data.ok !== true) throw new Error(`sink error ${data?.error ?? "unknown"}`);
  return data;
}

export async function sinkAdd(row: SinkRow) {
  if (!sinkConfigured) { (dev.__pulseRows ||= []).push(row); return; }
  await call({ action: "add", row });
}

export async function sinkRows(): Promise<PublicRow[]> {
  if (!sinkConfigured) return (dev.__pulseRows || []).map((r) => ({ country: r.country, answers: r.answers }));
  const data = await call({ action: "rows" });
  return Array.isArray(data.rows) ? (data.rows as PublicRow[]) : [];
}
