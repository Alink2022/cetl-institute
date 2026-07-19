import type { Insight } from "./content-types";

// Client-sichere Insights-Metadaten: Slugs, Karten-Metadaten und Key-Visuals.
// Enthält bewusst KEINE Artikel-Volltexte (blocks) — diese liegen server-seitig
// in insights-articles.ts, damit sie nicht ins Client-Bundle gelangen.

export const ARTICLE_SLUGS = [
  "poc-to-production-gap",
  "vendor-lock-in-sovereignty",
  "ai-judgment-gap",
  "eu-ai-act-governance",
  "embedded-engineering"
] as const;

// Karten-Metadaten pro Sprache. Einzige Quelle für Titel/Teaser/Tag der Übersicht
// und der Artikel-Navigation (prev/next/weitere).
export const ARTICLE_META: Record<"de" | "en", Insight[]> = {
  de: [
  {
    "slug": "poc-to-production-gap",
    "category": "Research Brief",
    "tag": "AI Governance",
    "title": "Die PoC-to-Production-Lücke: Warum 85% der AI-Projekte nicht skalieren",
    "teaser": "Eine strukturelle Analyse der häufigsten Scheiternsmuster bei großflächigen KI-Initiativen, und was Governance-Reife damit zu tun hat.",
    "readTime": "8 Min. Lesezeit"
  },
  {
    "slug": "vendor-lock-in-sovereignty",
    "category": "Architecture Whitepaper",
    "tag": "Technische Bewertung",
    "title": "Vendor Lock-In in Enterprise AI: Architekturmuster für technologische Souveränität",
    "teaser": "Welche Plattform-Entscheidungen heute Lock-in-Strukturen erzeugen, die in drei Jahren operative Abhängigkeiten bedeuten, und wie man sie vermeidet.",
    "readTime": "12 Min. Lesezeit"
  },
  {
    "slug": "ai-judgment-gap",
    "category": "Executive Education",
    "tag": "Leadership",
    "title": "Die AI-Urteilskompetenz-Lücke: Warum Strategie ohne technologisches Urteilsvermögen scheitert",
    "teaser": "Führungsteams, die Vendor-Narrative nicht dekodieren können, treffen Architekturentscheidungen unter Informationsasymmetrie. Ein Framework für strukturierte Urteilskompetenz.",
    "readTime": "6 Min. Lesezeit"
  },
  {
    "slug": "eu-ai-act-governance",
    "category": "Research Brief",
    "tag": "AI Governance",
    "title": "Der EU AI Act ist keine Compliance-Übung: Governance-Reife als Wettbewerbsvorteil",
    "teaser": "Während die meisten Organisationen den AI Act als Rechtsabteilungsthema behandeln, bauen die klügsten daraus einen strukturellen Vorsprung. Eine Einordnung für Entscheider in regulierten Branchen.",
    "readTime": "9 Min. Lesezeit"
  },
  {
    "slug": "embedded-engineering",
    "category": "Perspective",
    "tag": "ELaaS",
    "title": "Kompetenz, die bleibt: Warum Embedded Engineering das klassische Beratungsmodell ablöst",
    "teaser": "Jedes Beratungsengagement endet mit einem Abschlussbericht, und einem Kompetenzverlust. Forward Deployed Engineers drehen das Modell um: externe Expertise, deren Erfolgskriterium die eigene Überflüssigkeit ist.",
    "readTime": "7 Min. Lesezeit"
  }
],
  en: [
  {
    "slug": "poc-to-production-gap",
    "category": "Research Brief",
    "tag": "AI Governance",
    "title": "The PoC-to-Production Gap: Why 85% of AI Projects Never Scale",
    "teaser": "A structural analysis of the most common failure patterns in large-scale AI initiatives, and what governance maturity has to do with it.",
    "readTime": "8 min read"
  },
  {
    "slug": "vendor-lock-in-sovereignty",
    "category": "Architecture Whitepaper",
    "tag": "Technical Assessment",
    "title": "Vendor Lock-In in Enterprise AI: Architecture Patterns for Technological Sovereignty",
    "teaser": "Which platform decisions create lock-in structures today that will mean operational dependency in three years, and how to avoid them.",
    "readTime": "12 min read"
  },
  {
    "slug": "ai-judgment-gap",
    "category": "Executive Education",
    "tag": "Leadership",
    "title": "The AI Judgment Gap: Why Strategy Fails Without Technological Judgment",
    "teaser": "Leadership teams that cannot decode vendor narratives make architecture decisions under information asymmetry. A framework for structured technological judgment.",
    "readTime": "6 min read"
  },
  {
    "slug": "eu-ai-act-governance",
    "category": "Research Brief",
    "tag": "AI Governance",
    "title": "The EU AI Act Is Not a Compliance Exercise: Governance Maturity as Competitive Advantage",
    "teaser": "While most organisations treat the AI Act as a legal department topic, the smartest are building structural advantage from it. A perspective for decision-makers in regulated industries.",
    "readTime": "9 min read"
  },
  {
    "slug": "embedded-engineering",
    "category": "Perspective",
    "tag": "ELaaS",
    "title": "Capability That Stays: Why Embedded Engineering Is Replacing the Classic Consulting Model",
    "teaser": "Every consulting engagement ends with a final report, and a loss of capability. Forward Deployed Engineers invert the model: external expertise whose success criterion is its own obsolescence.",
    "readTime": "7 min read"
  }
],
};

// Key-Visuals der Publikationen (KI-generiert, Brand-Farbwelt Dark/Gold).
// a.webp dient zugleich als Hero-Hintergrund der Startseite.
export const ARTICLE_IMAGES: Record<string, { src: string; alt: string }> = {
  "poc-to-production-gap": {
    "src": "/d.webp",
    "alt": "Fragmentierte Wireframe-Struktur, die in eine präzise goldene Brückenkonstruktion übergeht. Metapher für den Weg vom Prototyp in die Produktion"
  },
  "vendor-lock-in-sovereignty": {
    "src": "/c.webp",
    "alt": "Goldener Schachkönig zwischen gläsernen Bauern auf dunkler Fläche. Metapher für strategische Kontrolle und Unabhängigkeit"
  },
  "ai-judgment-gap": {
    "src": "/e.webp",
    "alt": "Abstraktes goldenes Netzwerk-Gitter auf dunklem Grund. Visualisierung von KI-Infrastruktur"
  },
  "eu-ai-act-governance": {
    "src": "/b.webp",
    "alt": "Goldener Pfad durch eine geordnete labyrinthartige Struktur. Metapher für Navigation durch Regulierung"
  },
  "embedded-engineering": {
    "src": "/a.webp",
    "alt": "Führungskräfte im Gespräch vor einem dunklen Display mit goldenen Datenvisualisierungen in einem Wiener Büro"
  }
};
