// SQLite-Datenbank (libSQL) für die Umfrage. Produktion: Turso (gehostetes SQLite) über
// TURSO_DATABASE_URL und TURSO_AUTH_TOKEN. Lokal ohne Konto: Datei ./data/pulse.db.
// Das Schema wird beim ersten Zugriff automatisch angelegt.

import fs from "node:fs";
import type { Client } from "@libsql/client";

const isProd = process.env.NODE_ENV === "production";
const url = process.env.TURSO_DATABASE_URL || (isProd ? "" : "file:./data/pulse.db");
export const dbConfigured = !!url;

const SCHEMA = `
CREATE TABLE IF NOT EXISTS responses (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  public_id      TEXT    NOT NULL UNIQUE,
  created_at     TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  survey_id      TEXT    NOT NULL,
  survey_version TEXT    NOT NULL,
  lang           TEXT    NOT NULL CHECK (lang IN ('en', 'de')),
  country        TEXT,
  country_src    TEXT,
  country_geo    TEXT,
  elephant       TEXT,
  unasked        TEXT,
  email          TEXT,
  duration_s     INTEGER
);
CREATE TABLE IF NOT EXISTS answers (
  response_id    INTEGER NOT NULL REFERENCES responses(id) ON DELETE CASCADE,
  question_id    TEXT    NOT NULL,
  option_id      TEXT    NOT NULL,
  PRIMARY KEY (response_id, question_id, option_id)
);
CREATE INDEX IF NOT EXISTS idx_answers_question ON answers (question_id, option_id);
CREATE INDEX IF NOT EXISTS idx_responses_created ON responses (created_at);
CREATE INDEX IF NOT EXISTS idx_responses_country ON responses (country);
CREATE VIEW IF NOT EXISTS v_option_counts AS
  SELECT question_id, option_id, COUNT(*) AS n FROM answers GROUP BY question_id, option_id;
CREATE VIEW IF NOT EXISTS v_answers_by_country AS
  SELECT r.country, a.question_id, a.option_id, COUNT(*) AS n
  FROM answers a JOIN responses r ON r.id = a.response_id GROUP BY r.country, a.question_id, a.option_id;
CREATE VIEW IF NOT EXISTS v_responses_by_country AS
  SELECT country, COUNT(*) AS n FROM responses GROUP BY country ORDER BY n DESC;
`;

let client: Client | null = null;
let ready: Promise<void> | null = null;

// Lokal (Datei) der Node-Client, bei Turso die Web-Variante ohne native Bauteile, passend für Vercel.
async function db(): Promise<Client> {
  if (!client) {
    if (url.startsWith("file:")) {
      fs.mkdirSync("data", { recursive: true });
      client = (await import("@libsql/client")).createClient({ url });
    } else {
      // Pro Anfrage über HTTPS statt dauerhafter WebSocket-Verbindung, das passt zu Serverless.
      const httpUrl = url.trim().replace(/^libsql:\/\//, "https://");
      client = (await import("@libsql/client/web")).createClient({ url: httpUrl, authToken: (process.env.TURSO_AUTH_TOKEN || "").trim() });
    }
  }
  return client;
}

async function ensureSchema() {
  ready ??= db().then((c) => c.executeMultiple(SCHEMA)).catch((e) => { ready = null; throw e; });
  await ready;
}

export type SaveRow = {
  id: string; lang: string; country: string; countrySrc: string; geo: string; durationS: number | null; version: string; surveyId: string;
  answers: Record<string, string[]>; elephant: string; unasked: string; email: string;
};

/** Speichert eine Antwort samt Auswahl in einer Transaktion. */
export async function saveResponse(r: SaveRow) {
  await ensureSchema();
  const stmts = [{
    sql: `INSERT INTO responses (public_id, survey_id, survey_version, lang, country, country_src, country_geo, elephant, unasked, email, duration_s)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [r.id, r.surveyId, r.version, r.lang, r.country, r.countrySrc || null, r.geo || null, r.elephant || null, r.unasked || null, r.email || null, r.durationS],
  }];
  for (const [q, vals] of Object.entries(r.answers)) {
    for (const o of vals) stmts.push({ sql: "INSERT INTO answers (response_id, question_id, option_id) SELECT id, ?, ? FROM responses WHERE public_id = ?", args: [q, o, r.id] });
  }
  await (await db()).batch(stmts, "write");
}

export type Stats = {
  n: number; countries: Record<string, number>;
  questions: Record<string, { n: number; counts: Record<string, number> }>;
};

/** Aggregierte Zahlen, optional für ein Land. Enthält keinen Freitext und keine E-Mail. */
export async function loadStats(country: string): Promise<Stats> {
  await ensureSchema();
  const c = await db();
  const [total, byCountry, qn, counts] = await Promise.all([
    c.execute({ sql: "SELECT COUNT(*) AS n FROM responses WHERE (? = '' OR country = ?)", args: [country, country] }),
    c.execute("SELECT country, COUNT(*) AS n FROM responses GROUP BY country"),
    c.execute({ sql: "SELECT a.question_id AS q, COUNT(DISTINCT a.response_id) AS n FROM answers a JOIN responses r ON r.id = a.response_id WHERE (? = '' OR r.country = ?) GROUP BY a.question_id", args: [country, country] }),
    c.execute({ sql: "SELECT a.question_id AS q, a.option_id AS o, COUNT(*) AS n FROM answers a JOIN responses r ON r.id = a.response_id WHERE (? = '' OR r.country = ?) GROUP BY a.question_id, a.option_id", args: [country, country] }),
  ]);
  const questions: Stats["questions"] = {};
  for (const r of qn.rows) questions[String(r.q)] = { n: Number(r.n), counts: {} };
  for (const r of counts.rows) (questions[String(r.q)] ||= { n: 0, counts: {} }).counts[String(r.o)] = Number(r.n);
  const countries: Record<string, number> = {};
  for (const r of byCountry.rows) if (r.country) countries[String(r.country)] = Number(r.n);
  return { n: Number(total.rows[0]?.n ?? 0), countries, questions };
}

/** Alle Antworten, eine Zeile je Antwort, für den Export. */
export async function exportRows(): Promise<Record<string, string | number | null>[]> {
  await ensureSchema();
  const c = await db();
  const [resp, ans] = await Promise.all([
    c.execute("SELECT * FROM responses ORDER BY id"),
    c.execute("SELECT response_id, question_id, option_id FROM answers ORDER BY rowid"),
  ]);
  const byResp = new Map<number, Map<string, string[]>>();
  const qids = new Set<string>();
  for (const a of ans.rows) {
    const id = Number(a.response_id);
    const m = byResp.get(id) ?? new Map<string, string[]>();
    const q = String(a.question_id);
    qids.add(q);
    m.set(q, [...(m.get(q) ?? []), String(a.option_id)]);
    byResp.set(id, m);
  }
  return resp.rows.map((r) => {
    const row: Record<string, string | number | null> = {
      id: String(r.public_id), eingang: String(r.created_at), sprache: String(r.lang), land: r.country == null ? null : String(r.country),
      land_quelle: r.country_src == null ? null : String(r.country_src), dauer_s: r.duration_s == null ? null : Number(r.duration_s), version: String(r.survey_version),
    };
    const m = byResp.get(Number(r.id));
    for (const q of [...qids].sort()) row[q] = m?.get(q)?.join("|") ?? null;
    row.elephant = r.elephant == null ? null : String(r.elephant);
    row.unasked = r.unasked == null ? null : String(r.unasked);
    row.email = r.email == null ? null : String(r.email);
    return row;
  });
}
