import { ARTICLE_META } from "./insights-index";

// Client-sicheres Think-Tank-Register: Formate, Forschungsfelder, Zielgruppen,
// Autorenschaft und die Publikationsliste. Artikel-Volltexte liegen bewusst
// server-seitig in thinktank-articles.ts.
//
// Neue Publikation anlegen: (1) Eintrag in TT_PUBLICATIONS, (2) Titel/Teaser/
// Lesezeit in insights-index.ts (ARTICLE_META) bzw. bei Gastbeiträgen direkt
// über `meta`, (3) Volltext + Zusatzblöcke in thinktank-articles.ts.

export type Lang = "de" | "en";
type L10n<T = string> = Record<Lang, T>;

export type FormatId =
  | "research-brief" | "position-paper" | "architecture-whitepaper" | "executive-note"
  | "annual-outlook" | "guest-perspective" | "skills-market-report";
export type FieldId = "governance" | "sovereignty" | "leadership" | "competence" | "skills";
export type AudienceId = "board" | "hr" | "ld";

export interface TTFormat {
  id: FormatId;
  name: L10n;
  length: L10n;
  purpose: L10n;
}

export const TT_FORMATS: TTFormat[] = [
  { id: "research-brief", name: { de: "Research Brief", en: "Research Brief" }, length: { de: "6 bis 10 Min. Lesezeit", en: "6 to 10 min read" }, purpose: { de: "Strukturierte Analyse eines Problems mit Belegen und Konsequenzen", en: "Structured analysis of one problem with evidence and implications" } },
  { id: "position-paper", name: { de: "Position Paper", en: "Position Paper" }, length: { de: "10 bis 15 Min. Lesezeit", en: "10 to 15 min read" }, purpose: { de: "Die Haltung des CETL zu einer umstrittenen Frage (Regulierung, Souveränität, KI in der Arbeitswelt)", en: "CETL's stance on a contested question (regulation, sovereignty, AI in the workforce)" } },
  { id: "architecture-whitepaper", name: { de: "Architecture Whitepaper", en: "Architecture Whitepaper" }, length: { de: "12 bis 20 Min. Lesezeit", en: "12 to 20 min read" }, purpose: { de: "Technische Tiefe für CIOs, CDOs und Architekten", en: "Technical depth for CIOs, CDOs and architects" } },
  { id: "executive-note", name: { de: "Executive Note", en: "Executive Note" }, length: { de: "3 bis 4 Min. Lesezeit", en: "3 to 4 min read" }, purpose: { de: "Kurze, scharfe Einordnung aktueller Entwicklungen", en: "A short, sharp take on a current development" } },
  { id: "annual-outlook", name: { de: "Annual Outlook", en: "Annual Outlook" }, length: { de: "Langform, PDF", en: "Long-form, PDF" }, purpose: { de: "Einmal jährlich: die Flaggschiff-Publikation zum Stand der KI-Kompetenz in Zentraleuropa", en: "Once a year: the flagship publication on the state of AI capability in Central Europe" } },
  { id: "guest-perspective", name: { de: "Guest Perspective", en: "Guest Perspective" }, length: { de: "6 bis 12 Min. Lesezeit", en: "6 to 12 min read" }, purpose: { de: "Analyse einer führenden internationalen Expertin oder eines Experten, gemeinsam mit dem CETL verfasst", en: "Analysis by a leading international expert, co-authored with CETL" } },
  { id: "skills-market-report", name: { de: "Skills & Market Report", en: "Skills & Market Report" }, length: { de: "Langform, PDF", en: "Long-form, PDF" }, purpose: { de: "Marktforschung zu KI-Kompetenzbedarf, Rollenwandel und Lernansätzen, für HR und L&D", en: "Market research on AI skills demand, changing roles and learning approaches, for HR and L&D" } },
];

export interface TTField {
  id: FieldId;
  title: L10n;
  desc: L10n;
  links: L10n;
}

export const TT_FIELDS: TTField[] = [
  {
    id: "governance",
    title: { de: "AI Governance und Skalierung", en: "AI Governance and Scaling" },
    desc: { de: "Warum KI-Initiativen vom Pilot nicht in den Betrieb kommen, und welche Governance- und Operating-Model-Strukturen Skalierung tragen.", en: "Why AI initiatives stall between pilot and operation, and which governance and operating-model structures carry scale." },
    links: { de: "Embedded Engineering, Governance Frameworks", en: "Embedded Engineering, Governance Frameworks" },
  },
  {
    id: "sovereignty",
    title: { de: "Technologische Souveränität", en: "Technological Sovereignty" },
    desc: { de: "Wo Abhängigkeit vertretbar ist und wo Reversibilität zählt: Architektur-, Daten- und Kompetenzfragen hinter Plattform-Entscheidungen.", en: "Where dependency is acceptable and where reversibility matters: the architecture, data and capability questions behind platform decisions." },
    links: { de: "Technische Bewertung", en: "Technical Assessment" },
  },
  {
    id: "leadership",
    title: { de: "Leadership und Urteilskompetenz", en: "Leadership and Judgment" },
    desc: { de: "Wie Führungsteams Anbieter-Narrative dekodieren und KI-Entscheidungen unter Informationsasymmetrie sicher treffen.", en: "How leadership teams decode vendor narratives and take AI decisions safely under information asymmetry." },
    links: { de: "Executive Education", en: "Executive Education" },
  },
  {
    id: "competence",
    title: { de: "Kompetenzsysteme und Assessment", en: "Competence Systems and Assessment" },
    desc: { de: "Wie Organisationen Kompetenz aufbauen, die bleibt, und wie sie belastbar beurteilen, was ihre Teams tatsächlich können.", en: "How organisations build capability that stays, and how they reliably assess what their teams can actually do." },
    links: { de: "Executional Learning, Capability Audit", en: "Executional Learning, Capability Audit" },
  },
  {
    id: "skills",
    title: { de: "Skills, Lernen und Zukunft der Arbeit", en: "Skills, Learning and the Future of Work" },
    desc: { de: "KI-Kompetenz der Belegschaft, sich wandelnde Rollen, Reskilling und die Frage, wie sich Lernen selbst durch KI verändert. Das Feld für HR und L&D.", en: "AI literacy in the workforce, changing roles, reskilling and how learning itself changes with AI. The field for HR and L&D." },
    links: { de: "Executional Learning (Foundation, Customized)", en: "Executional Learning (Foundation, Customized)" },
  },
];

export const TT_AUDIENCES: { id: AudienceId; name: L10n }[] = [
  { id: "board", name: { de: "Geschäftsführung", en: "Executive management" } },
  { id: "hr", name: { de: "HR / People", en: "HR / People" } },
  { id: "ld", name: { de: "Learning & Development", en: "Learning & Development" } },
];

export interface TTAuthor {
  id: string;
  name: string;
  role: L10n;
  org?: string;
  country?: string;
  photo?: string;
  guest?: boolean;
  // Offenlegung bei Gastautorinnen und -autoren aus Technologieunternehmen.
  disclosure?: L10n;
  linkedin?: string;
}

export const TT_AUTHORS: Record<string, TTAuthor> = {
  alin: {
    id: "alin",
    name: "Alin Kalam",
    role: { de: "Managing Director & Academic Coordinator", en: "Managing Director & Academic Coordinator" },
    org: "CETL Institute",
    country: "AT",
    photo: "/team-alin-v2.png",
    linkedin: "https://www.linkedin.com/in/alinkalam/",
  },
  ivo: {
    id: "ivo",
    name: "Karl Ivo Sokolov",
    role: { de: "Co-Founder & Industry Expert", en: "Co-Founder & Industry Expert" },
    org: "CETL Institute",
    country: "AT",
    photo: "/team-ivo-v2.png",
  },
  stefan: {
    id: "stefan",
    name: "Stefan Bauer",
    role: { de: "Community & Academic Expert", en: "Community & Academic Expert" },
    org: "CETL Institute",
    country: "AT",
    photo: "/team-stefan-v2.png",
  },
};

export type ServiceTopic = "thinktank" | "executional-assessments" | "executive-education" | "executional-learning" | "fde" | "market-analysis";

export interface TTPublication {
  slug: string;
  number: number;
  format: FormatId;
  field: FieldId;
  audiences: AudienceId[];
  authors: string[];
  dateISO: string;
  version: string;
  // Gastbeitrag in Co-Autorenschaft (steuert Badge und Filter).
  guest?: boolean;
  // Nur für Beiträge, die nicht in ARTICLE_META liegen (z. B. neue Gastbeiträge).
  meta?: L10n<{ title: string; teaser: string; readTime: string }>;
}

// Reihenfolge = fortlaufende Nummerierung der Publikationsreihe.
export const TT_PUBLICATIONS: TTPublication[] = [
  { slug: "poc-to-production-gap", number: 1, format: "research-brief", field: "governance", audiences: ["board"], authors: ["alin"], dateISO: "2026-07-11", version: "1.0" },
  { slug: "vendor-lock-in-sovereignty", number: 2, format: "architecture-whitepaper", field: "sovereignty", audiences: ["board", "ld"], authors: ["alin"], dateISO: "2026-07-11", version: "1.0" },
  { slug: "ai-judgment-gap", number: 3, format: "research-brief", field: "leadership", audiences: ["board", "hr", "ld"], authors: ["alin"], dateISO: "2026-07-11", version: "1.0" },
  { slug: "eu-ai-act-governance", number: 4, format: "position-paper", field: "governance", audiences: ["board", "hr", "ld"], authors: ["alin"], dateISO: "2026-07-11", version: "1.0" },
  { slug: "embedded-engineering", number: 5, format: "position-paper", field: "competence", audiences: ["board", "hr", "ld"], authors: ["alin"], dateISO: "2026-07-11", version: "1.0" },
];

const MONTHS: L10n<string[]> = {
  de: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
};

export function monthYear(iso: string, lang: Lang): string {
  const [y, m] = iso.split("-").map(Number);
  return `${MONTHS[lang][m - 1]} ${y}`;
}

export function pubMeta(pub: TTPublication, lang: Lang) {
  if (pub.meta) return pub.meta[lang];
  const m = ARTICLE_META[lang].find((a) => a.slug === pub.slug);
  if (!m) throw new Error(`Think-Tank-Metadaten fehlen für ${pub.slug}`);
  return { title: m.title, teaser: m.teaser, readTime: m.readTime };
}

// Titel "Hauptteil: Untertitel" in Überschrift und Untertitel zerlegen.
export function splitTitle(title: string): { main: string; sub?: string } {
  const i = title.indexOf(": ");
  return i < 0 ? { main: title } : { main: title.slice(0, i), sub: title.slice(i + 2) };
}

export function formatName(id: FormatId, lang: Lang): string {
  return TT_FORMATS.find((f) => f.id === id)!.name[lang];
}

export function fieldTitle(id: FieldId, lang: Lang): string {
  return TT_FIELDS.find((f) => f.id === id)!.title[lang];
}

export function authorNames(pub: TTPublication): string {
  return pub.authors.map((id) => TT_AUTHORS[id]?.name).filter(Boolean).join(", ");
}

// Neueste zuerst; bei gleichem Datum aufsteigend nach Nummer.
export function sortedPublications(): TTPublication[] {
  return [...TT_PUBLICATIONS].sort((a, b) => b.dateISO.localeCompare(a.dateISO) || a.number - b.number);
}

export function getPublication(slug: string): TTPublication | undefined {
  return TT_PUBLICATIONS.find((p) => p.slug === slug);
}

// Zitiervorschlag, z. B. "Kalam, A. (2026): Die PoC-to-Production-Lücke. CETL Think Tank Research Brief Nr. 1, Wien."
export function citation(pub: TTPublication, lang: Lang): string {
  const names = pub.authors
    .map((id) => TT_AUTHORS[id])
    .filter(Boolean)
    .map((a) => {
      const parts = a.name.split(" ");
      const last = parts[parts.length - 1];
      const initials = parts.slice(0, -1).map((p) => `${p[0]}.`).join(" ");
      return `${last}, ${initials}`;
    })
    .join(" / ");
  const year = pub.dateISO.slice(0, 4);
  const { main } = splitTitle(pubMeta(pub, lang).title);
  const nr = lang === "de" ? "Nr." : "No.";
  const city = lang === "de" ? "Wien" : "Vienna";
  return `${names} (${year}): ${main}. CETL Think Tank ${formatName(pub.format, lang)} ${nr} ${pub.number}, ${city}.`;
}
