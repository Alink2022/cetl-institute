// 1:1 aus CETL_Website_Dev_Package/03_Website_Entwicklerpaket/index.html portiert.
// Deutsch im Markup, Englisch in data-en-Attributen im Referenzentwurf — hier als
// zwei komplette, parallele Sprachobjekte statt Client-Attribut-Swap (Empfehlung
// des Pakets selbst für die Produktion).

export interface RedesignFigure {
  num: string;
  text: string;
  src: string;
}

export interface RedesignStepCard {
  icon: "magnifying-glass" | "gear" | "path" | "clipboard-text";
  num: string;
  title: string;
  claim: string;
  checks: string[];
  foot: string;
}

export interface RedesignModule {
  lvl: string;
  title: string;
  desc: string;
}

export interface RedesignProduct {
  label: string;
  title: string;
  desc: string;
  items: string[];
  foot: string;
}

export type PortfolioIcon = "certificate" | "path" | "gear" | "chats-circle" | "clipboard-text" | "magnifying-glass" | "chart-line";

export interface RedesignPortfolioCard {
  icon: PortfolioIcon;
  flag?: string;
  label: string;
  title: string;
  desc: string;
  items: string[];
  foot: string;
}

export interface RedesignEcoCard {
  icon: "graduation-cap" | "chats-circle" | "buildings";
  title: string;
  desc: string;
}

export interface RedesignFaq {
  q: string;
  a: string;
}

export interface RedesignContent {
  nav: { methodik: string; portfolio: string; oekosystem: string; markt: string; praxis: string; insights: string; faq: string; cta: string; langLabel: string; menuOpen: string; menuClose: string; home: string };
  hero: { eyebrow: string; hl1: string; hl2: string; lead: string; ctaPrimary: string; ctaSecondary: string; badgesLabel: string };
  beweis: {
    items: { icon: "graduation-cap" | "chats-circle" | "briefcase"; strong: string; span: string }[];
    keywords: string[];
  };
  zahlen: {
    eyebrow: string; title: string;
    stats: { kpi: string; text: string }[];
    cards: { chip: string; title: string; text: string }[];
  };
  methodik: { eyebrow: string; title: string; lead: string; modulesTitle: string; modules: RedesignModule[] };
  prozess: { eyebrow: string; title: string; lead: string; steps: RedesignStepCard[] };
  portfolio: {
    eyebrow: string; title: string; lead: string;
    learningTitle: string; learning: RedesignPortfolioCard[];
    assessmentTitle: string; assessment: RedesignPortfolioCard[];
  };
  oekosystem: {
    eyebrow: string; title: string; lead: string;
    cards: RedesignEcoCard[];
    partnerLabels: { academic: string; community: string; industry: string };
  };
  markt: { eyebrow: string; title: string; lead: string; figures: RedesignFigure[] };
  zitat: { eyebrow: string; quote: string; body: string };
  praxis: { eyebrow: string; title: string; lead: string; cards: RedesignProduct[]; cta: string };
  insights: { eyebrow: string; title: string; lead: string; cta: string };
  stimmen: { eyebrow: string; title: string; lead: string };
  faq: { eyebrow: string; title: string; items: RedesignFaq[] };
  kontakt: {
    eyebrow: string; title: string; lead: string;
    addressName: string; addressStreet: string; addressCity: string;
    fields: { name: string; email: string; topic: string; topicPlaceholder: string; topics: string[]; context: string; submit: string; sending: string; success: string; error: string };
  };
  team: { eyebrow: string; title: string; lead: string };
  footer: { tagline: string; navLabel: string; contactLabel: string; legal: string; insuranceNote: string; imprint: string };
}

export const REDESIGN_DE: RedesignContent = {
  nav: {
    methodik: "Methodik", portfolio: "Portfolio", oekosystem: "Ökosystem", markt: "Markt",
    praxis: "Referenzen", insights: "Insights", faq: "Fragen",
    cta: "Gespräch vereinbaren", langLabel: "Sprache / Language",
    menuOpen: "Menü öffnen", menuClose: "Menü schließen", home: "CETL Institute, zur Startseite",
  },
  hero: {
    eyebrow: "Central European Tech Leadership Institute",
    hl1: "Executional Learning",
    hl2: "as a Service",
    lead: "Vom Kompetenzaufbau zur Umsetzung und skalierbaren Wirkung. Mit Executional Learning, dem eigens entwickelten Framework des CETL, wird Maßschneiderung zum Prinzip: Lernprogramme, etwa im KI-Umfeld, die präzise auf Rollen, Prozesse und die Ziele Ihrer Organisation zugeschnitten sind.",
    ctaPrimary: "Programmbeispiele ansehen",
    ctaSecondary: "Gespräch vereinbaren",
    badgesLabel: "Ausgewählte Partner",
  },
  beweis: {
    items: [
      { icon: "graduation-cap", strong: "Akademischer Partner: TU Wien", span: "Dazu BOKU, MedUni Wien, BFI, Lauder Business School und ein Netzwerk aus über 15 Hochschulen im DACH-Raum." },
      { icon: "chats-circle", strong: "Community mit der Stadt Wien", span: "Central Europe Tech Hackathon als Flaggschiffformat." },
      { icon: "briefcase", strong: "Über 50 Lehrende aus der Praxis", span: "Banking, Versicherung, Industrie, Aviation, öffentlicher Sektor." },
    ],
    keywords: ["Executive Education", "Embedded Engineering", "Technische Bewertung", "KI-Kompetenzprogramme", "Forward Deployed Engineers", "Governance Frameworks", "Data Literacy", "Use-Case-Aktivierung"],
  },
  zahlen: {
    eyebrow: "Akademische Exzellenz × Branchenpraxis × Community",
    title: "Was hinter CETL steht",
    stats: [
      { kpi: "20+", text: "Jahre branchenübergreifende Industrieerfahrung" },
      { kpi: "50+", text: "Trainerinnen, Trainer und Lehrende im Pool" },
      { kpi: "12+", text: "umgesetzte akademische Projekte" },
      { kpi: "18+", text: "Partnerorganisationen aus Hochschule, Industrie und Community" },
    ],
    cards: [
      { chip: "ELaaS", title: "Executional Learning as a Service", text: "Das eigene Lieferformat: akademische Module, Industriepraxis und Community-Umsetzung in einer Architektur, modular kombinierbar." },
      { chip: "Eigene Community", title: "Central Europe Tech Hackathon", text: "Flaggschiffformat gemeinsam mit der Stadt Wien und zahlreichen Partnern aus Hochschule und Industrie." },
    ],
  },
  methodik: {
    eyebrow: "Methodik",
    title: "Wie gehen wir methodisch vor?",
    lead: "Die Methodik kombiniert hochkarätige akademische Module samt Zertifizierung mit Industrie und Community. Kompetenzen werden direkt in der Praxis aktiviert, über maßgeschneiderte Lernformate und rollenbasierte Pfade. Über Forward Deployed Engineering und Community-Formate schließt CETL die Lücke zwischen Theorie und Anwendung.",
    modulesTitle: "Drei Module, die aufeinander aufbauen",
    modules: [
      { lvl: "Foundation", title: "Grundlagen und Literacy", desc: "KI- und Datenkompetenz im Business-Kontext, rollen- und kontextspezifisch aufgebaut." },
      { lvl: "Specialization", title: "Rollenbasierte Vertiefung", desc: "Lernpfade nach Rolle, Fachbereich und Branche, mit Executive- und Expertenformaten." },
      { lvl: "Executional", title: "Anwendung und Umsetzung", desc: "Use Cases, Prototypen und Roadmaps, begleitet durch Embedded Engineering." },
    ],
  },
  prozess: {
    eyebrow: "Lernen, anwenden und umsetzen",
    title: "Vier Schritte, an deren Ende ein Anwendungsfall steht",
    lead: "Wissen wird nicht isoliert vermittelt, sondern unmittelbar mit realen Aufgaben aus Ihrem Unternehmen verbunden.",
    steps: [
      { icon: "magnifying-glass", num: "01", title: "Verstehen", claim: "Wie Daten, KI und Automatisierung funktionieren", checks: ["Funktionsweise statt Schlagworte", "Potenziale realistisch einordnen", "Grenzen und Risiken benennen"], foot: "Grundlage für jede weitere Entscheidung." },
      { icon: "gear", num: "02", title: "Anwenden", claim: "Erprobung an den eigenen Werkzeugen", checks: ["Eigene Tools und Prozesse integriert", "Unternehmensstandards berücksichtigt", "Typische Aufgaben aus dem Arbeitsalltag"], foot: "KI wird im eigenen Kontext erprobt, nicht am Beispiel." },
      { icon: "path", num: "03", title: "Übertragen", claim: "Muster aus anderen Branchen nutzbar machen", checks: ["Praxisbeispiele aus anderen Bereichen", "Perspektivwechsel über Branchen hinweg", "Übertragung auf die eigene Organisation"], foot: "Was anderswo funktioniert, wird prüfbar." },
      { icon: "clipboard-text", num: "04", title: "Umsetzen", claim: "Jede Lernreise endet in einem Ergebnis", checks: ["Strukturierte Use Cases", "Prototypen und Business Cases", "Umsetzungsroadmaps"], foot: "Am Ende steht ein Anwendungsfall, kein Zertifikat." },
    ],
  },
  portfolio: {
    eyebrow: "CETL Portfolio",
    title: "Welche Bausteine setzt die Methodik in der Praxis um?",
    lead: "Vier Leistungsbereiche, die die drei Module und den Vier-Schritte-Prozess in konkrete Programme übersetzen.",
    learningTitle: "Executional Learning",
    learning: [
      { icon: "certificate", label: "Foundation", title: "KI- und Datengrundlage mit praktischer Befähigung", desc: "Strukturierter Einstieg: Kompetenzaufbau trifft Business-Kontext.", items: ["Grundlegendes KI- und Datenlernen", "Rollen- und kontextspezifisch", "Strategische Use-Case-Ausrichtung", "Akademische Delivery"], foot: "Startpunkt Ihrer KI-Souveränität" },
      { icon: "path", flag: "Meistgewählt", label: "Customized", title: "Foundation plus rollenbasierte Vertiefung", desc: "Lernen wird zu funktionsspezifischer Kompetenzentwicklung.", items: ["Alles aus Foundation", "Rollenspezifische Spezialisierung", "Executive- und Expertenformate", "Projektbefähigung und Mentoring"], foot: "Spezialisierungspfad auf Basis-Layer" },
      { icon: "gear", flag: "Flagship", label: "Embedded Engineering", title: "Eingebettete Aktivierung für messbaren Fortschritt", desc: "Vom Lernen zur Umsetzung mit Unterstützung vor Ort.", items: ["Alles aus Paket 1 und 2", "Eingebettetes Engineering", "Prototyping und Aktivierung", "Interner Wissenstransfer"], foot: "Wirkung direkt im Tagesgeschäft" },
      { icon: "chats-circle", label: "Community Package", title: "Co-Creation für KI, Daten und Innovation", desc: "Aktiviert das Ökosystem für gemeinsame Ideenentwicklung.", items: ["Teilnahme am Flaggschiff-Hackathon", "Community-Workshops", "Netzwerk aus 15+ Hochschulen im DACH-Raum", "Challenge-Framing"], foot: "Kollektive Innovationskraft" },
    ],
    assessmentTitle: "Executional Assessments und Enablement",
    assessment: [
      { icon: "clipboard-text", label: "Assessment Foundation", title: "Von realer Umsetzung zur skalierbaren Assessment-Praxis", desc: "Baut auf Executional-Learning- und Advisory-Formaten auf.", items: ["Leistungssignale in der Praxis", "Advisory- und Challenge-Formate", "Strukturiertes Kompetenzurteil"], foot: "Ihre zweite strategische Säule" },
      { icon: "magnifying-glass", flag: "Kernprodukt", label: "Capability Audit", title: "Unabhängige, entscheidungsreife Kompetenzeinsicht", desc: "Bewertung anhand realer Business Cases.", items: ["Reale Business Cases", "Transparente Kriterien", "Entscheidungen zu Advance und Develop", "Transformation und Nachfolge"], foot: "Entscheidungsreif für den Vorstand" },
      { icon: "chart-line", label: "Phased Audit Architecture", title: "Von der Baseline zur Kompetenz-Roadmap", desc: "Strukturierter, mehrstufiger Bewertungsprozess.", items: ["Baseline und Stakeholder-Kalibrierung", "Eingebettetes Assessment", "Evidenzbasiertes Mapping", "Multi-Assessor-Perspektive"], foot: "Ihr Fahrplan zur Kompetenz-Roadmap" },
    ],
  },
  oekosystem: {
    eyebrow: "Das CETL Ökosystem",
    title: "Drei Welten, ein koordiniertes System",
    lead: "Großflächige Daten- und KI-Initiativen scheitern selten an fehlender Ambition. Sie scheitern daran, dass Strategie, Kompetenz, Datenreife, Governance und technische Umsetzung getrennt behandelt werden. Das Ökosystem verbindet akademische Exzellenz, Industriepraxis und Community zu einem System aus Wissen, Anwendung und Umsetzung.",
    cards: [
      { icon: "graduation-cap", title: "Hochschulen und Forschung", desc: "Partnerschaft mit der TU Wien, Netzwerk aus über 15 Hochschulen im DACH-Raum, Zertifizierung akademischer Module." },
      { icon: "chats-circle", title: "Ökosystem und Formate", desc: "Central Europe Tech Hackathon mit der Stadt Wien, Co-Creation-Workshops, Challenge-Framing mit Startups und Vereinen." },
      { icon: "buildings", title: "Praxis und Anwendung", desc: "Use Cases aus Banking, Versicherung, Industrie, Aviation und öffentlichem Sektor, eingebracht von aktiven Praktikerinnen und Praktikern." },
    ],
    partnerLabels: { academic: "Akademische Partner", community: "Community Partner", industry: "Industrie Partner" },
  },
  markt: {
    eyebrow: "Der Markt im Überblick",
    title: "Warum entsteht dieser Bedarf gerade jetzt?",
    lead: "Erhebungen von Eurostat, World Economic Forum und Weltbank zeigen dasselbe Muster: Der begrenzende Faktor für KI-Wertschöpfung ist selten die Technologie, sondern die fehlende Kompetenz.",
    figures: [
      { num: "80 %", text: "der Unternehmen in der EU setzen bislang keine KI ein. Der Markt steht nicht vor der Optimierung, sondern vor dem Einstieg.", src: "Eurostat, Statistisches Amt der Europäischen Union" },
      { num: "63 %", text: "nennen fehlende Kompetenzen als größte Barriere für die Transformation ihres Unternehmens, noch vor Budget und Technologie.", src: "World Economic Forum, Future of Jobs Report 2025" },
      { num: "43 %", text: "sehen die fehlende Vision der Führungsebene als Hürde. Kompetenz fehlt nicht nur im Team, sondern auch an der Spitze.", src: "World Economic Forum, Future of Jobs Report 2025" },
      { num: "9×", text: "so viele Stellenausschreibungen verlangten 2024 generative KI-Kenntnisse wie 2021. Die Nachfrage wächst schneller als die Qualifikation.", src: "Weltbank, Digital Progress and Trends Report 2025" },
    ],
  },
  zitat: {
    eyebrow: "Haltung",
    quote: "Intelligenz wird zur Commodity.",
    body: "Für die post-KI-transformierte Ära brauchen Organisationen Fachleute und Entscheidungsträgerinnen mit hoher Literacy in KI, Daten und Technologie, direkt an der Schnittstelle zu ihrem Fachgebiet.",
  },
  praxis: {
    eyebrow: "In der Praxis",
    title: "Beispiele maßgeschneiderter Programme",
    lead: "Drei Ausgangslagen, drei zugeschnittene Programme.",
    cards: [
      {
        label: "Infrastruktur und Industrie",
        title: "Executional Learning und Community Program",
        desc: "Über 70 Fachleute aus 12 Hochschulen erarbeiteten mehr als 12 Lösungsimpulse für Deep-Tech-KI-Projekte, eingebettet in ein mehrstufiges Befähigungsprogramm.",
        items: ["AI Hackathon mit 70+ Fachleuten", "Foundation: 6 Tage", "Executive Enablement Track: 4 Tage", "Unternehmensweite Basisschulung: 8 Stunden digital", "Executional Learning: 80 Stunden je Projekt", "AI Roadmap Mentoring"],
        foot: "12+ Lösungsimpulse Deep-Tech-KI",
      },
      {
        label: "Bank und Finanz",
        title: "Umgesetztes Executional Learning",
        desc: "Ein KI-Kompetenzprogramm für eine Regionalbank: ein integriertes Enabling-System mit rollenspezifischen Lernpfaden und begleiteten Projekten, kein Schulungskatalog.",
        items: ["Foundation Programm: 15 Tage", "Role Tracks für Anwendende und Champions: zweimal 8 Tage", "Gesamtumfang: 31 Tage", "Executional Learning: 80 Stunden", "Delivery Model: ELaaS"],
        foot: "Rollenspezifisch statt Katalog",
      },
      {
        label: "Executive Academy",
        title: "Bildungsdesign für Executive-Programme",
        desc: "Individuelles Bildungsdesign für ein Executive-Programm einer Universität, von der Konzeption bis zur Umsetzung mit eigenen Daten und Use Cases.",
        items: ["Bildungsdesign: 6 Tage", "Bring your own Data Project: 16 Stunden", "Use Case Discovery Track: 8 Stunden", "Storytelling with Data: 16 Stunden"],
        foot: "Konzeption bis Umsetzung",
      },
    ],
    cta: "Ähnliches Programm besprechen",
  },
  insights: {
    eyebrow: "Thought Leadership",
    title: "Aus der Forschung in die Praxis",
    lead: "Analysen und Frameworks für Entscheider, die über den nächsten Piloten hinausdenken.",
    cta: "Alle Publikationen",
  },
  stimmen: {
    eyebrow: "Stimmen aus der Praxis",
    title: "Was Entscheider berichten",
    lead: "Aus Vertraulichkeitsgründen ohne Klarnamen. Rollen und Sektoren sind authentisch.",
  },
  faq: {
    eyebrow: "Häufige Fragen",
    title: "Fragen, die Entscheider zuerst stellen",
    items: [
      { q: "Was unterscheidet CETL von einer klassischen Unternehmensberatung?", a: "Klassische Consulting-Modelle liefern Empfehlungen und Projektressourcen, beides ist nach Vertragsende nicht mehr verfügbar. CETL liefert Kompetenzstrukturen: validierte interne Fachleute, dokumentierte Frameworks und Governance-Architekturen, die unabhängig vom Engagement weiterarbeiten." },
      { q: "Was bedeutet Herstellerneutralität konkret?", a: "CETL hält keine Reseller-Akkreditierungen, Plattformpartnerschaften oder lizenzumsatzabhängigen Strukturen gegenüber KI- oder Cloud-Anbietern. Technische Empfehlungen basieren ausschließlich auf der Passung zur Architektur, den Compliance-Anforderungen und den Souveränitätszielen der Organisation." },
      { q: "Für welche Organisationstypen ist das Portfolio ausgelegt?", a: "Für Organisationen mit komplexer Enterprise-Architektur und regulatorischen Anforderungen, primär Finanzbranche, Industrie und öffentlicher Sektor. Der Fokus liegt auf Organisationen, die KI nicht als isoliertes Innovationsprojekt, sondern als strategische Infrastruktur behandeln." },
      { q: "Wie strukturiert sich ein Engagement?", a: "Nach einem Rahmengespräch entsteht ein definiertes Leistungsbild mit Meilensteinen, messbaren Ergebnissen und transparentem Vergütungsmodell, wahlweise Tagessatz, Festpreis oder Rahmenvertrag. Der Prozess ist auf die Beschaffungsanforderungen regulierter Organisationen ausgelegt." },
      { q: "Wie lange dauert ein typisches Engagement?", a: "Von wenigen Stunden bis zu mehreren Monaten. Punktuelle Formate wie Briefings und Workshops dauern Stunden bis Tage, das rollenbasierte KI-Kompetenzprogramm läuft modular über 3 bis 12 Monate. Die Dauer jedes Formats ist bei den Programmkarten ausgewiesen." },
    ],
  },
  kontakt: {
    eyebrow: "Strategisches Gespräch beginnen",
    title: "Strategischen Austausch initiieren",
    lead: "Ob Enterprise-Kompetenzsystem, Use-Case-Aktivierung oder technische Bewertung: das erste Gespräch klärt den organisatorischen Kontext und die passende Aktivierungsstufe.",
    addressName: "CETL Institute GmbH",
    addressStreet: "Wipplinger Straße 4/2. OG",
    addressCity: "1010 Wien, Österreich",
    fields: {
      name: "Vollständiger Name *", email: "E-Mail *", topic: "Themenbereich",
      topicPlaceholder: "Bereich auswählen",
      topics: ["Executional Learning", "Executional Assessments", "Executive Education", "Forward Deployed Engineering", "CETL Hackathon Teilnahme", "CETL Partner werden", "Sonstiges"],
      context: "Organisatorischer Kontext", submit: "Anfrage übermitteln",
      sending: "Wird gesendet…",
      success: "Danke! Ihre Anfrage ist angekommen, wir melden uns zeitnah.",
      error: "Da ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie direkt an alinkalam@cetl.institute.",
    },
  },
  team: {
    eyebrow: "Das CETL Team",
    title: "Die Köpfe hinter dem Institut",
    lead: "Akademische Exzellenz, Industrieerfahrung und Community-Aufbau in einem Team.",
  },
  footer: {
    tagline: "Technologische Souveränität ist kein Zustand. Sie ist eine Kompetenz.",
    navLabel: "Navigation",
    contactLabel: "Kontakt",
    legal: "© 2026 CETL Institute GmbH · FN 688297 b, Handelsgericht Wien · Geschäftsführer Alin Kalam",
    insuranceNote: "Sämtliche Leistungen richten sich ausschließlich an Organisationen außerhalb der Versicherungsbranche.",
    imprint: "Impressum",
  },
};

export const REDESIGN_EN: RedesignContent = {
  nav: {
    methodik: "Method", portfolio: "Portfolio", oekosystem: "Ecosystem", markt: "Market",
    praxis: "Case studies", insights: "Insights", faq: "Questions",
    cta: "Arrange a conversation", langLabel: "Sprache / Language",
    menuOpen: "Open menu", menuClose: "Close menu", home: "CETL Institute, back to the homepage",
  },
  hero: {
    eyebrow: "Central European Tech Leadership Institute",
    hl1: "Executional Learning",
    hl2: "as a Service",
    lead: "From capability building to execution and scalable impact. Executional Learning, CETL's own purpose-built framework, makes customization the principle: learning programmes, in AI and beyond, precisely tailored to the roles, processes and goals of your organisation.",
    ctaPrimary: "See programme examples",
    ctaSecondary: "Arrange a conversation",
    badgesLabel: "Selected partners",
  },
  beweis: {
    items: [
      { icon: "graduation-cap", strong: "Academic partner: TU Wien", span: "Alongside BOKU, MedUni Vienna, BFI, Lauder Business School and a network of more than 15 universities across the DACH region." },
      { icon: "chats-circle", strong: "Community with the City of Vienna", span: "Central Europe Tech Hackathon as our flagship format." },
      { icon: "briefcase", strong: "More than 50 practitioners teaching", span: "Banking, insurance, industry, aviation, public sector." },
    ],
    keywords: ["Executive Education", "Embedded Engineering", "Technical assessment", "AI capability programmes", "Forward Deployed Engineers", "Governance frameworks", "Data literacy", "Use case activation"],
  },
  zahlen: {
    eyebrow: "Academic rigour × industry practice × community",
    title: "What CETL is built on",
    stats: [
      { kpi: "20+", text: "years of cross-sector industry experience" },
      { kpi: "50+", text: "trainers and lecturers in the pool" },
      { kpi: "12+", text: "academic projects delivered" },
      { kpi: "18+", text: "partner organisations from academia, industry and community" },
    ],
    cards: [
      { chip: "ELaaS", title: "Executional Learning as a Service", text: "Our own delivery format: academic modules, industry practice and community execution in one architecture, combined as needed." },
      { chip: "Our own community", title: "Central Europe Tech Hackathon", text: "Flagship format run with the City of Vienna and numerous partners from academia and industry." },
    ],
  },
  methodik: {
    eyebrow: "Method",
    title: "How do we work?",
    lead: "The method combines high-calibre academic modules and certification with industry and community. Capabilities are activated directly in practice, through tailored learning formats and role-based paths. Forward Deployed Engineering and community formats close the gap between theory and application.",
    modulesTitle: "Three modules that build on one another",
    modules: [
      { lvl: "Foundation", title: "Fundamentals and literacy", desc: "AI and data literacy in a business context, built for specific roles and settings." },
      { lvl: "Specialization", title: "Role-based depth", desc: "Learning paths by role, function and sector, with executive and expert formats." },
      { lvl: "Executional", title: "Application and execution", desc: "Use cases, prototypes and roadmaps, supported by embedded engineering." },
    ],
  },
  prozess: {
    eyebrow: "Learn, apply, execute",
    title: "Four steps that end in a working use case",
    lead: "Knowledge is not taught in isolation. It is tied directly to real tasks from your organisation.",
    steps: [
      { icon: "magnifying-glass", num: "01", title: "Understand", claim: "How data, AI and automation actually work", checks: ["Mechanics, not buzzwords", "A realistic read on the potential", "Limits and risks named openly"], foot: "The basis for every decision that follows." },
      { icon: "gear", num: "02", title: "Apply", claim: "Tested on your own tools", checks: ["Your tools and processes included", "Your internal standards respected", "Tasks from everyday work"], foot: "AI is tried out in your context, not on a sample case." },
      { icon: "path", num: "03", title: "Transfer", claim: "Putting patterns from other sectors to use", checks: ["Real examples from other fields", "A change of perspective across sectors", "Transfer into your own organisation"], foot: "What works elsewhere becomes testable here." },
      { icon: "clipboard-text", num: "04", title: "Execute", claim: "Every learning journey ends in a result", checks: ["Structured use cases", "Prototypes and business cases", "Implementation roadmaps"], foot: "What remains is a use case, not a certificate." },
    ],
  },
  portfolio: {
    eyebrow: "CETL Portfolio",
    title: "Which building blocks put the method into practice?",
    lead: "Four service areas that translate the three modules and the four-step process into concrete programmes.",
    learningTitle: "Executional Learning",
    learning: [
      { icon: "certificate", label: "Foundation", title: "AI and data fundamentals with hands-on enablement", desc: "A structured start: capability building meets business context.", items: ["Core AI and data learning", "Specific to role and setting", "Use cases aligned to strategy", "Academic delivery"], foot: "The starting point for your AI sovereignty" },
      { icon: "path", flag: "Most popular", label: "Customized", title: "Foundation plus role-based depth", desc: "Learning becomes function-specific capability development.", items: ["Everything in Foundation", "Role-specific specialisation", "Executive and expert formats", "Project enablement and mentoring"], foot: "A specialisation path on top of the base layer" },
      { icon: "gear", flag: "Flagship", label: "Embedded Engineering", title: "Embedded activation for measurable progress", desc: "From learning to delivery, with support on site.", items: ["Everything in packages 1 and 2", "Embedded engineering", "Prototyping and activation", "Internal knowledge transfer"], foot: "Impact inside day-to-day operations" },
      { icon: "chats-circle", label: "Community Package", title: "Co-creation for AI, data and innovation", desc: "Activates the ecosystem for developing ideas together.", items: ["Participation in the flagship hackathon", "Community workshops", "A network of 15+ universities across DACH", "Challenge framing"], foot: "Collective innovation capacity" },
    ],
    assessmentTitle: "Executional Assessments and enablement",
    assessment: [
      { icon: "clipboard-text", label: "Assessment Foundation", title: "From real delivery to a scalable assessment practice", desc: "Builds on Executional Learning and advisory formats.", items: ["Performance signals from real work", "Advisory and challenge formats", "A structured capability judgement"], foot: "Your second strategic pillar" },
      { icon: "magnifying-glass", flag: "Core product", label: "Capability Audit", title: "Independent capability insight, ready for a decision", desc: "Assessment against real business cases.", items: ["Real business cases", "Transparent criteria", "Advance and develop decisions", "Transformation and succession"], foot: "Ready for the board to decide on" },
      { icon: "chart-line", label: "Phased Audit Architecture", title: "From baseline to capability roadmap", desc: "A structured, multi-stage assessment process.", items: ["Baseline and stakeholder calibration", "Embedded assessment", "Evidence-based mapping", "Multi-assessor perspective"], foot: "Your route to a capability roadmap" },
    ],
  },
  oekosystem: {
    eyebrow: "The CETL ecosystem",
    title: "Three worlds, one coordinated system",
    lead: "Large-scale data and AI initiatives rarely fail for lack of ambition. They fail because strategy, capability, data maturity, governance and technical delivery are treated separately. The ecosystem joins academic rigour, industry practice and community into one system of knowledge, application and delivery.",
    cards: [
      { icon: "graduation-cap", title: "Universities and research", desc: "Partnership with TU Wien, a network of more than 15 universities across DACH, certification of academic modules." },
      { icon: "chats-circle", title: "Ecosystem and formats", desc: "Central Europe Tech Hackathon with the City of Vienna, co-creation workshops, challenge framing with startups and associations." },
      { icon: "buildings", title: "Practice and application", desc: "Use cases from banking, insurance, industry, aviation and the public sector, brought in by active practitioners." },
    ],
    partnerLabels: { academic: "Academic partners", community: "Community partners", industry: "Industry partners" },
  },
  markt: {
    eyebrow: "The market at a glance",
    title: "Why is this need emerging now?",
    lead: "Surveys by Eurostat, the World Economic Forum and the World Bank all show the same pattern: the limiting factor for value from AI is rarely the technology, but the missing capability.",
    figures: [
      { num: "80 %", text: "of companies in the EU are not yet using AI. This market is not facing optimisation, it is facing the first step.", src: "Eurostat, statistical office of the European Union" },
      { num: "63 %", text: "name missing skills as the biggest barrier to transforming their organisation — ahead of budget and technology.", src: "World Economic Forum, Future of Jobs Report 2025" },
      { num: "43 %", text: "point to a lack of vision at leadership level. Capability is missing not only in the team, but at the top.", src: "World Economic Forum, Future of Jobs Report 2025" },
      { num: "9×", text: "as many job postings required generative AI skills in 2024 as in 2021. Demand is growing faster than qualification.", src: "World Bank, Digital Progress and Trends Report 2025" },
    ],
  },
  zitat: {
    eyebrow: "Our position",
    quote: "Intelligence has become a commodity.",
    body: "For the era after the AI transformation, organisations need specialists and decision-makers with real literacy in AI, data and technology — right at the interface with their own field.",
  },
  praxis: {
    eyebrow: "In practice",
    title: "Examples of tailored programmes",
    lead: "Three starting points, three tailored programmes.",
    cards: [
      {
        label: "Infrastructure and industry",
        title: "Executional Learning and community programme",
        desc: "More than 70 specialists from 12 universities developed over 12 solution impulses for deep-tech AI projects, embedded in a multi-stage enablement programme.",
        items: ["AI hackathon with 70+ specialists", "Foundation: 6 days", "Executive enablement track: 4 days", "Company-wide basic training: 8 hours, online", "Executional Learning: 80 hours per project", "AI roadmap mentoring"],
        foot: "12+ solution impulses in deep-tech AI",
      },
      {
        label: "Banking and finance",
        title: "Executional Learning, delivered",
        desc: "An AI capability programme for a regional bank: an integrated enabling system with role-specific learning paths and supported projects — not a training catalogue.",
        items: ["Foundation programme: 15 days", "Role tracks for users and champions: 8 days each", "Total scope: 31 days", "Executional Learning: 80 hours", "Delivery model: ELaaS"],
        foot: "Role-specific instead of a catalogue",
      },
      {
        label: "Executive Academy",
        title: "Learning design for executive programmes",
        desc: "Bespoke learning design for a university executive programme, from concept through delivery with the participants' own data and use cases.",
        items: ["Learning design: 6 days", "Bring your own data project: 16 hours", "Use case discovery track: 8 hours", "Storytelling with data: 16 hours"],
        foot: "From concept to delivery",
      },
    ],
    cta: "Discuss a similar programme",
  },
  insights: {
    eyebrow: "Thought leadership",
    title: "From research into practice",
    lead: "Analyses and frameworks for decision-makers thinking beyond the next pilot.",
    cta: "All publications",
  },
  stimmen: {
    eyebrow: "Voices from practice",
    title: "What decision-makers report",
    lead: "Names withheld for confidentiality. Roles and sectors are genuine.",
  },
  faq: {
    eyebrow: "Frequently asked",
    title: "The questions decision-makers ask first",
    items: [
      { q: "What sets CETL apart from a classic consultancy?", a: "Classic consulting models deliver recommendations and project resources; neither remains once the contract ends. CETL delivers capability structures: validated internal specialists, documented frameworks and governance architectures that keep working independently of the engagement." },
      { q: "What does vendor neutrality mean in practice?", a: "CETL holds no reseller accreditations, platform partnerships or licence-revenue arrangements with AI or cloud vendors. Technical recommendations rest solely on fit with the architecture, the compliance requirements and the sovereignty goals of the organisation." },
      { q: "Which kinds of organisation is the portfolio built for?", a: "Organisations with complex enterprise architectures and regulatory requirements — primarily financial services, industry and the public sector. The focus is on organisations that treat AI as strategic infrastructure rather than an isolated innovation project." },
      { q: "How is an engagement structured?", a: "After an initial conversation we define a scope with milestones, measurable outcomes and a transparent commercial model — day rate, fixed price or framework agreement. The process is built for the procurement requirements of regulated organisations." },
      { q: "How long does a typical engagement run?", a: "From a few hours to several months. Single formats such as briefings and workshops run hours to days; the role-based AI capability programme runs modularly over 3 to 12 months. The duration of each format is stated on the programme cards." },
    ],
  },
  kontakt: {
    eyebrow: "Start a strategic conversation",
    title: "Open a strategic conversation",
    lead: "Whether it is an enterprise capability system, use case activation or a technical assessment — the first conversation establishes the organisational context and the right level of activation.",
    addressName: "CETL Institute GmbH",
    addressStreet: "Wipplinger Straße 4/2. OG",
    addressCity: "1010 Vienna, Austria",
    fields: {
      name: "Full name *", email: "Email *", topic: "Topic",
      topicPlaceholder: "Select a topic",
      topics: ["Executional Learning", "Executional Assessments", "Executive Education", "Forward Deployed Engineering", "CETL hackathon participation", "Becoming a CETL partner", "Something else"],
      context: "Organisational context", submit: "Send enquiry",
      sending: "Sending…",
      success: "Thank you! Your enquiry has reached us — we'll be in touch shortly.",
      error: "Something went wrong. Please try again or write directly to alinkalam@cetl.institute.",
    },
  },
  team: {
    eyebrow: "The CETL team",
    title: "The people behind the institute",
    lead: "Academic rigour, industry experience and community building in one team.",
  },
  footer: {
    tagline: "Technological sovereignty is not a state. It is a capability.",
    navLabel: "Navigation",
    contactLabel: "Contact",
    legal: "© 2026 CETL Institute GmbH · FN 688297 b, Vienna Commercial Court · Managing Director Alin Kalam",
    insuranceNote: "All services are directed exclusively at organisations outside the insurance sector.",
    imprint: "Legal Notice",
  },
};
