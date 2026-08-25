import type { ContentBundle } from "./content-types";
import { ARTICLE_META } from "./insights-index";

export const de: ContentBundle = {
  SITE: {
    name: "CETL Institute",
    fullName: "Central European Tech Leadership Institute",
    url: "https://cetl-institute.vercel.app",
    email: "office@cetl-institute.eu",
    // Formular-Anfragen gehen immer an den Vorstand (Vorgabe Stefan, 2026-07-12).
    formEmail: "vorstand@eqaf.eu",
    location: "Wien, Österreich",
    region: "Zentraleuropa",
    academic: "TU Wien, Akademischer Direktor",
    tagline: "Technologische Souveränität ist kein Zustand. Sie ist eine Kompetenz.",
    complianceNote:
      "Sämtliche CETL-Aktivitäten richten sich ausschließlich an Organisationen außerhalb der Versicherungsbranche. Versicherungs-Compliance, regulatorische Versicherungsthemen und versicherungsspezifische Mandate sind ausdrücklich ausgeschlossen.",
  },

  NAV_LINKS: [
    { label: "Über uns", href: "#about" },
    { label: "Studien", href: "#research" },
    { label: "Leistungen", href: "#services" },
    { label: "ELaaS", href: "#elaas" },
    { label: "Programme", href: "#programs" },
    { label: "Geschäftsführung", href: "#leadership" },
    { label: "Insights", href: "/insights" },
    { label: "Partner", href: "#partners" },
  ],

  MANAGING_DIRECTOR: {
    name: "Alin Kalam",
    initials: "AK",
    title: "Geschäftsführer",
    headline: "Head of AI Coordination & Market Intelligence, UNIQA Insurance Group",
    location: "Wien, Österreich",
    linkedin: "https://www.linkedin.com/in/alinkalam/",
    bio: "20+ Jahre Erfahrung an der Schnittstelle von AI-Strategie, Daten und operativer Umsetzung: AI-Governance und Market Intelligence bei UNIQA International, BI-Führung bei der Lufthansa Group und Big Data bei der BAWAG P.S.K. Ausbildung in Engineering, Wirtschaft und Astrophysik an der TU Wien, der CEU und der Universität Wien.",
    credentials: [
      { label: "UNIQA Insurance Group", sub: "Head of AI Coordination & Market Intelligence", logo: "/logos/uniqa.svg" },
      { label: "Lufthansa Group", sub: "Strategic BI & Analytics Lead", logo: "/logos/lufthansa.svg" },
      { label: "BAWAG P.S.K.", sub: "Big Data Officer", logo: "/logos/bawag.svg" },
      { label: "TU Wien", sub: "MSc, Engineering Management", logo: "/logos/tuwien.svg" },
    ],
    focus: ["AI-Strategie & Governance", "Decision Intelligence", "Market Intelligence", "Datenstrategie"],
  },

  PILLARS: [
    {
      number: "01",
      icon: "Brain",
      title: "Executive Education",
      subtitle: "Technologische Sprachfähigkeit",
      description:
        "Keine Schulung. Keine Bewusstseins-Kampagne. Führungsteams entwickeln die technologische Urteilskompetenz, um Vendor-Narrative zu dekodieren, Architekturrisiken eigenständig zu bewerten und Use-Case-Portfolios nach strategischer Priorität, nicht nach Demonstrationsfähigkeit, zu gewichten.",
      items: [
        "Technologie-Risikobewertung für strategische Entscheider",
        "Strukturierte Use-Case-Priorisierung nach Datenreife und ROI",
        "AI Governance Frameworks für regulierte Branchen",
      ],
    },
    {
      number: "02",
      icon: "TrendingUp",
      title: "Embedded Engineering",
      subtitle: "Kompetenz, die bleibt",
      description:
        "Forward Deployed Engineers sind keine externen Berater. Sie sind temporär eingebettete Fachexperten, die methodisch neben den eigenen technischen Teams arbeiten. Das Ziel ist nicht die Projektlieferung, sondern der strukturierte Transfer von Enterprise-AI- und Daten-Kompetenz direkt in die eigene Organisation. Validierte Kompetenz verbleibt dabei in der Organisation, herstellerneutral und strukturell unabhängig von externen Anbietern.",
      items: [
        "Forward Deployed Engineers (3–6 Monate, projektintegriert)",
        "Interne KI-Fähigkeit als messbare Delivery-Metrik",
        "Governance-Framework-Entwicklung mit internen Teams",
      ],
    },
    {
      number: "03",
      icon: "Award",
      title: "Technische Bewertung",
      subtitle: "Herstellerneutral. Unbestechlich.",
      description:
        "CETL hält keine Reseller-Vereinbarungen, keine Plattform-Partnerschaften. Architektur-Reviews, Feasibility-Assessments und Legacy-Decommissioning-Strategien werden ausschließlich auf Basis technischer Validität, Compliance-Anforderungen und langfristiger Architektursouveränität entwickelt.",
      items: [
        "Vendor-neutrale Architektur- und Feasibility-Reviews",
        "Daten- und Governance-Reifegrad-Assessment",
        "Legacy-Decommissioning-Roadmaps mit Risikoprofil",
      ],
    },
  ],

  METHODOLOGY_STEPS: [
    {
      n: "1",
      icon: "Lightbulb",
      title: "Verstehen",
      description:
        "Teilnehmende lernen, wie Daten, KI und moderne Automatisierung funktionieren. So können sie Potenziale, Grenzen und Risiken realistisch einordnen.",
    },
    {
      n: "2",
      icon: "Cog",
      title: "Anwenden",
      description:
        "Unternehmenseigene Werkzeuge, Prozesse und Standards werden direkt integriert. KI wird anhand typischer Aufgaben aus dem Arbeitsalltag erprobt.",
    },
    {
      n: "3",
      icon: "Users",
      title: "Übertragen",
      description:
        "Praxisbeispiele aus anderen Unternehmensbereichen und Branchen eröffnen neue Perspektiven. Erfolgreiche Muster werden auf die eigene Organisation übertragen.",
    },
    {
      n: "4",
      icon: "Flag",
      title: "Umsetzen",
      description:
        "Jede Lernreise endet in einem konkreten Anwendungsfall: strukturierte Use Cases, Prototypen, Business Cases oder Umsetzungsroadmaps.",
    },
  ],

  PROGRAMS: [
    {
      tag: "Executive Education",
      title: "Technologische Urteilskompetenz",
      format: "Halbtags / Ganztags",
      level: "Strategische Führungsebene",
      description:
        "Intensive Formate, die die Fähigkeit entwickeln, Vendor-Narrative zu dekodieren, Architekturrisiken eigenständig zu bewerten und Use-Case-Portfolios nach strategischer Priorität zu gewichten, ohne technisches Vorwissen vorauszusetzen.",
    },
    {
      tag: "Strategische Beratung",
      title: "AI-Strategie-Bootcamp",
      format: "2–3-tägig, intensiv",
      level: "Führungsteams",
      description:
        "Praxis-Bootcamp, das AI-Strategie in operationale Roadmaps überführt. Teams verlassen das Programm mit priorisierten Use Cases, klar definierten Governance-Strukturen und einer Umsetzungsverantwortung, die intern verbleibt.",
    },
    {
      tag: "ELaaS",
      title: "Forward Deployed Engineer Programm",
      format: "3–6 Monate Einsatz",
      level: "Fach- und Architekturteams",
      description:
        "CETL-Engineers arbeiten direkt in Ihren Teams, projektintegriert, nicht parallel. Ergebnis: validierte interne Experten, dokumentierte Governance-Strukturen und eine Use-Case-Pipeline, die eigenständig weiterentwickelt werden kann.",
    },
    {
      tag: "Technische Bewertung",
      title: "Architektur-Review & Feasibility",
      format: "4–6 Wochen",
      level: "Architektur & Technologieführung",
      description:
        "Herstellerneutrale Auditierung der bestehenden AI- und Datenarchitektur. Liefert: Machbarkeitsbericht, Risikoregister, Vendor-Lock-in-Analyse und methodische Legacy-Decommissioning-Roadmap.",
    },
    {
      tag: "Executive Education",
      title: "Technologie-Trendbriefing",
      format: "2–3 Stunden",
      level: "Strategische Entscheider",
      description:
        "Kuratierte Briefings zu AI-Entwicklungen der jeweiligen Branche: regulatorisches Umfeld, Wettbewerbsarchitekturen und aufkommende Use Cases, ohne Vendor-Agenda.",
    },
    {
      tag: "ELaaS",
      title: "Use-Case-Priorisierungs-Workshop",
      format: "1 Tag",
      level: "Bereichsübergreifende Teams",
      description:
        "Strukturierte Methodik zur Identifikation und Priorisierung von KI-Use-Cases nach Datenreife, Governance-Voraussetzungen und ROI-Potenzial. Ergebnis: ein umsetzbares Innovations-Backlog mit klarer Verantwortungsstruktur.",
    },
    {
      tag: "Unternehmensprogramm",
      title: "KI-Kompetenzprogramm für Unternehmen",
      format: "Modular · 3–12 Monate",
      level: "Alle Rollen: Mitarbeitende bis Führung",
      description:
        "Rollenbasiertes Befähigungsprogramm, das Wissensaufbau, praktische Anwendung und reale Use Cases verbindet. Vom Foundation Program bis zur KI-Leadership-Journey: jede Lernreise endet in einem konkreten, unternehmenseigenen Ergebnis.",
      href: "/programme/ki-kompetenzprogramm",
    },
  ],

  TAG_COLORS: {
    "Executive Education": "gold",
    "Strategische Beratung": "blue",
    ELaaS: "gold",
    "Technische Bewertung": "muted",
    Unternehmensprogramm: "blue",
  },

  PARTNERS: [
    { name: "TU Wien", sub: "Akademischer Partner", logo: "/logos/tuwien.svg", logoWidth: 230, logoHeight: 67 },
    { name: "Stadt Wien", sub: "Öffentlicher Partner", logo: "/logos/wien.svg", logoWidth: 200, logoHeight: 91 },
    { name: "Europäische Union", sub: "Institutioneller Partner", logo: "/logos/eu.svg", logoWidth: 220, logoHeight: 72 },
    { name: "ÖBB", sub: "Industriepartner", logo: "/logos/oebb.svg", logoWidth: 130, logoHeight: 81 },
    { name: "Siemens", sub: "Industriepartner", logo: "/logos/siemens.svg", logoWidth: 240, logoHeight: 57 },
  ],

  PARTNER_GROUPS: [
    {
      label: "Akademische Partner",
      partners: [
        { name: "TU Wien", sub: "Akademischer Partner", logo: "/logos/academy/tuwien.webp" },
        { name: "BOKU Wien", sub: "Akademischer Partner", logo: "/logos/academy/boku.png" },
        { name: "MedUni Wien", sub: "Akademischer Partner", logo: "/logos/academy/meduni.webp" },
        { name: "BFI Wien", sub: "Akademischer Partner", logo: "/logos/academy/bfi.png" },
        { name: "Lauder Business School", sub: "Akademischer Partner", logo: "/logos/academy/lauder.png" },
        { name: "The Institute of Management Accountants", sub: "Akademischer Partner", logo: "/logos/academy/ima.jpg" },
        { name: "ÖGIG", sub: "Akademischer Partner", logo: "/logos/academy/oegig.png" },
      ],
    },
    {
      label: "Community Partner",
      partners: [
        { name: "Stadt Wien", sub: "Community Partner", logo: "/logos/community/stadtwien.svg" },
        { name: "Vienna Business Agency", sub: "Community Partner", logo: "/logos/community/waa.png" },
        { name: "Europe Direct", sub: "Community Partner", logo: "/logos/community/edic.png" },
        { name: "EIT", sub: "Community Partner", logo: "/logos/community/eit.jpg" },
        { name: "Tech Execution Community", sub: "Community Partner", logo: "/logos/community/tec.png" },
        { name: "Sustainista", sub: "Community Partner", logo: "/logos/community/sustainista.png" },
      ],
    },
    {
      label: "Industrie Partner",
      partners: [
        { name: "Siemens", sub: "Industriepartner", logo: "/logos/industry/siemens.webp" },
        { name: "ÖBB", sub: "Industriepartner", logo: "/logos/industry/oebb.webp" },
        { name: "Raiffeisen", sub: "Industriepartner", logo: "/logos/industry/raiffeisen.svg" },
        { name: "Wien Energie", sub: "Industriepartner", logo: "/logos/industry/wienenergie.svg" },
        { name: "Caritas St. Barbara", sub: "Industriepartner", logo: "/logos/industry/caritasstbarbara.png" },
      ],
    },
  ],

  PROBLEM_ITEMS: [
    {
      title: "PoC-Friedhöfe statt Enterprise-Betrieb",
      desc: "Der Use Case funktioniert im Sandbox-Environment. Produktionsdaten ungeklärt, Governance nicht definiert, Verantwortung nicht zugewiesen. Drei Quartale, null skalierbare Wertschöpfung.",
    },
    {
      title: "Kompetenz-Verlust durch klassische Consulting-Modelle",
      desc: "Externe Expertise substituiert die eigene Organisation temporär. Was bleibt: eine technische Abhängigkeit, die beim nächsten Zyklus erneut eingekauft werden muss.",
    },
    {
      title: "Technologische Souveränität unter Plattform-Druck",
      desc: "Architekturentscheidungen unter Zeitdruck schaffen Lock-in-Strukturen, die sich über Jahre in Lizenz-, Migrations- und Opportunitätskosten materialisieren.",
    },
    {
      title: "Governance und Datenreife als nachgelagerte Themen",
      desc: "Modelle, die auf ungeklärten Daten- und Governance-Strukturen aufbauen, überstehen den Weg in den regulären Enterprise-Betrieb selten.",
    },
  ],

  RESEARCH_STATS: [
    {
      id: "transformations-fail",
      kind: "ring",
      value: "70%",
      label: "der groß angelegten Transformationsprojekte verfehlen ihre gesteckten Ziele",
      detail: "Die meisten Misserfolge liegen an Umsetzung und Adoption, nicht an der Technologiewahl.",
      source: "McKinsey & Company, Transformationsforschung",
    },
    {
      id: "ai-projects-fail",
      kind: "gauge",
      value: "85%",
      label: "der AI-Projekte liefern nicht den erwarteten geschäftlichen Mehrwert",
      detail: "Mangelnde Datenqualität, unklare Verantwortlichkeiten und schwache Governance sind die Hauptursachen.",
      source: "Gartner, AI-Research",
    },
    {
      id: "ai-financial-benefit",
      kind: "bars",
      value: "10%",
      label: "der Unternehmen berichten von signifikantem finanziellem Nutzen durch AI im Regelbetrieb",
      detail: "Die Lücke trennt Organisationen mit nachhaltigem Kompetenzaufbau von jenen, die dauerhaft pilotieren.",
      source: "BCG × MIT Sloan Management Review, 'Expanding AI's Impact With Organizational Learning'",
    },
    {
      id: "ai-investment-growth",
      kind: "trend",
      value: "~13×",
      label: "Wachstum der weltweiten privaten AI-Investitionen im letzten Jahrzehnt",
      detail: "Kapital fließt schneller, als die meisten Organisationen es operativ aufnehmen können.",
      source: "Stanford HAI, AI Index Report",
    },
  ],

  EXECUTION_GAP: {
    label: "CETL Execution Readiness Index",
    detail: "Firmeneigener Benchmark aus CETL-Kundenassessments (illustrativ, keine wissenschaftliche Studie).",
    rows: [
      { label: "AI-Bewusstsein der Führungsebene", value: 82 },
      { label: "Dokumentierte AI-Strategie", value: 54 },
      { label: "Governance- & Datenreife", value: 37 },
      { label: "Operative Umsetzungsfähigkeit", value: 24 },
    ],
  },

  QUOTES: [
    {
      quote: "AI is the new electricity.",
      translation: "AI ist die neue Elektrizität.",
      author: "Andrew Ng",
      role: "Mitgründer Google Brain; Gründer DeepLearning.AI",
    },
    {
      quote:
        "We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten.",
      translation:
        "Wir überschätzen die Veränderung der nächsten zwei Jahre stets und unterschätzen die Veränderung der nächsten zehn Jahre.",
      author: "Bill Gates",
      role: "Mitgründer, Microsoft",
    },
    {
      quote: "Culture eats strategy for breakfast.",
      translation: "Kultur frisst Strategie zum Frühstück.",
      author: "Peter Drucker",
      role: "Managementtheoretiker",
    },
  ],

  FAQ_ITEMS: [
    {
      q: "Was unterscheidet CETL von einer klassischen Unternehmensberatung?",
      a: "Klassische Consulting-Modelle liefern Empfehlungen und Projektressourcen. Beide sind nach Vertragsende nicht mehr verfügbar. CETL liefert Kompetenz-Strukturen: validierte interne Experten, dokumentierte Frameworks und Governance-Architekturen, die unabhängig vom CETL-Engagement operieren.",
    },
    {
      q: "Was bedeutet Herstellerneutralität konkret?",
      a: "CETL hält keine Reseller-Akkreditierungen, Plattform-Partnerschaften oder lizenzumsatzabhängige Strukturen gegenüber AI- oder Cloud-Anbietern. Alle technischen Empfehlungen basieren ausschließlich auf der Passung zur jeweiligen Architektur, den Compliance-Anforderungen und den mittelfristigen Souveränitätszielen der Organisation.",
    },
    {
      q: "Für welche Organisationstypen ist das Portfolio ausgelegt?",
      a: "Für Organisationen mit Enterprise-Architektur-Komplexität und regulatorischen Anforderungen, primär in der Finanzbranche, der Industrie und dem öffentlichen Sektor. Der Fokus liegt auf Organisationen, die KI-Initiativen nicht als isolierte Innovationsprojekte, sondern als strategische Infrastruktur behandeln.",
    },
    {
      q: "Wie strukturiert sich ein Engagement?",
      a: "Nach einem initialen Rahmen-Gespräch wird ein klar definiertes Leistungsbild entwickelt: mit Meilensteinen, messbaren Outcomes und einem transparenten Vergütungsmodell (Tagessatz, Festpreis oder Rahmenvertrag). Der Prozess ist auf interne Procurement-Anforderungen regulierter Organisationen ausgelegt.",
    },
    {
      q: "Wie lange dauert ein typisches Engagement?",
      a: "Von wenigen Stunden bis zu mehreren Monaten. Punktuelle Formate (Briefings, Workshops) dauern Stunden bis Tage; das rollenbasierte KI-Kompetenzprogramm läuft modular über 3–12 Monate. Die genaue Dauer jedes Formats ist direkt bei den Programmkarten oben ausgewiesen.",
    },
  ],

  CONTACT_ITEMS: [
    { label: "E-Mail", value: "office@cetl-institute.eu", href: "mailto:office@cetl-institute.eu" },
    { label: "Standort", value: "Wien, Österreich (Zentraleuropa)", href: null },
    { label: "Akademische Partnerschaft", value: "TU Wien, Akademischer Direktor", href: null },
  ],

  CONTACT_INTEREST_OPTIONS: [
    "Executive Education / Technologische Urteilskompetenz",
    "Embedded Engineering / Forward Deployed Engineers",
    "KI-Kompetenzprogramm für Unternehmen",
    "Strategische Beratung",
    "Architektur-Review & Technische Bewertung",
    "Use-Case-Priorisierungs-Workshop",
    "Europe Tech Hackathon",
    "Allgemeine Anfrage",
  ],

  UI: {
    nav: { ctaContact: "Kontakt aufnehmen", toggleMenu: "Menü umschalten" },
    hero: {
      eyebrow: "Central European Tech Leadership Institute",
      headlineLine1: "Executional Learning",
      headlineAccent: "as a Service",
      subheadline: "Vom Kompetenzaufbau zur Umsetzung und skalierbaren Wirkung.",
      body: "CETL Institute bildet die einzigartige Brücke zwischen akademischer Exzellenz, Industrie- bzw. Branchenpraxis und Community. Klassische Trainings, Weiterbildungsprogramme oder durch Consulting-Anbieter initiierte Schulungen transformieren Unternehmen nicht ganzheitlich, strategisch und zielgerichtet. Statt entlang standardisierter Kursblöcke begleiten wir Unternehmen und ihre Talente branchenübergreifend mit dem eigens entwickelten \"Executional Learning as a Service\" entlang echter Umsetzung — maßgeschneidert auf Rollen, Prozesse sowie strategische und operative Ziele. So verwandeln wir Lernen in abgeschlossene Ergebnisse, etwa im KI- und Datenumfeld, und Ergebnisse in nachhaltige Fähigkeit — und rüsten Unternehmen damit für die nächste Transformationswelle: rasant zunehmenden KI-Transformationsdruck, fortschreitende Automatisierung ganzer Industriezweige und den unaufhaltsamen Ruf nach Prozess- und Effizienzsteigerung.",
      supportingLine: "Akademische Exzellenz × Branchenpraxis × Community-Umsetzung",
      microProof: ["Maßgeschneidert auf Organisationsprioritäten", "Rollenbasierte Kompetenzreisen", "Echte Use Cases und Umsetzungspfade", "Wissenstransfer, der bleibt"],
      badgeLocation: "CETL · Wien",
      headlineGradient: "Das KI-Kompetenzprogramm",
      headlineLine3: "für Unternehmen.",
      paragraph:
        "Wir machen Ihre Organisation KI-fähig — von der Führungsebene bis in jede Rolle. Wissenschaftlich fundiert. Praktisch umgesetzt.",
      ctaPrimary: "Programm kennenlernen",
      ctaSecondary: "Gespräch vereinbaren",
      stats: [
        { value: "3", label: "Instrumente" },
        { value: "Enterprise", label: "Architektur-Fokus" },
        { value: "Banken & Industrie", label: "Branchenfokus" },
      ],
      ticker: [
        "Executive Education",
        "Embedded Engineering",
        "Technische Bewertung",
        "KI-Kompetenzprogramm für Unternehmen",
        "Forward Deployed Engineers",
        "Governance Frameworks",
        "Akademische Partnerschaft TU Wien",
      ],
      badgeVienna: "Wien · Österreich",
      badgeTUWien: "TU Wien Partner",
      badgeFDE: "Forward Deployed Engineers",
      photoCaption: "Geschäftsführer",
    },
    problem: {
      eyebrow: "Die organisatorische Umsetzungslücke",
      headline: "Die Lücke ist nicht das Bewusstsein.\nEs ist die Operationalisierung.",
      closingStatement: "Die Antwort ist kein weiteres isoliertes Schulungsprogramm oder Pilotprojekt. Die Antwort ist ein koordiniertes Kompetenz- und Umsetzungssystem.",
      cta: "Executional Learning erkunden",
      quoteBefore: "Nicht das fehlende Bewusstsein.",
      quoteHighlight1: "Die fehlende",
      quoteMiddle: "",
      quoteHighlight2: "Operationalisierung",
      intro:
        "Großflächige KI- und Dateninitiativen scheitern nicht an mangelnder Ambition. Sie scheitern an der strukturellen Inkompatibilität zwischen Strategieebene und technischer Realität: zwischen dem, was eine Roadmap verspricht, und dem, was Enterprise-Architektur, Datenreife und Governance tatsächlich tragen.",
      answer: "Das strukturelle Gegenmittel: methodischer Kompetenzaufbau statt Consulting-Abhängigkeit →",
    },
    pillars: {
      label: "Das Leistungsportfolio",
      title: "Drei Instrumente. Ein Ziel: Operative KI-Souveränität.",
      subtitle:
        "Kein Einheitsformat. Kein generisches Curriculum. Das Portfolio ist auf die spezifischen Reifegradlücken von Organisationen mit komplexer Enterprise-Architektur und regulatorischen Anforderungen ausgelegt.",
    },
    methodology: {
      label: "So laufen unsere Programme ab",
      title: "Lernen, anwenden und umsetzen",
      subtitle:
        "Unser Ansatz folgt dem Prinzip des Executional Learning: Wissen wird nicht isoliert vermittelt, sondern unmittelbar mit realen Aufgaben und Herausforderungen Ihres Unternehmens verbunden.",
      cta: "Methodik im Detail ansehen",
      closingLine: "Jede Lernreise muss zu einer stärkeren internen Kompetenz und einem konkreten nächsten Schritt führen.",
    },
    programs: {
      label: "Flaggschiff-Programm",
      title: "Ein Programm. Jede Rolle. Volle operative Wirkung.",
      subtitle:
        "Vom Foundation Program bis zur KI-Leadership-Journey: unser durchgängiges Format bringt Wissensaufbau, praktische Anwendung und reale Use Cases in einem System zusammen, für jede Rolle im Unternehmen.",
      cta: "Framework-Gespräch initiieren",
      filterAll: "Alle Formate",
      filterLabel: "Format filtern",
      ctaAdvisor: "Mit einem Experten sprechen",
      detailCta: "Programm im Detail entdecken",
    },
    partners: {
      trusted: "Vertrauen führender Institutionen & Organisationen",
      blurbBefore: "Veranstalter des",
      blurbHackathon: "Europe Tech Hackathon",
      blurbAfter:
        "öffentliche Institutionen, globale Unternehmen und akademische Führungskräfte gemeinsam für technologiegetriebene Transformation in Zentraleuropa.",
    },
    leadership: {
      eyebrow: "Geschäftsführung",
      label: "Geschäftsführung",
      title: "Geschäftsführer",
      subtitle:
        "Der akademische und operative Kopf hinter dem Executional-Learning-Prinzip des CETL Institute.",
      linkedin: "LinkedIn-Profil",
      focus: "Schwerpunkte",
      photoTag: "AI Keynote Speaker",
      photoAlt: "Alin Kalam bei einem Vortrag zu AI und menschenzentrierter Innovation",
    },
    research: {
      label: "Studien & Evidenz",
      title: "Die Umsetzungslücke ist kein Einzelfall",
      subtitle:
        "Unabhängige Studien von McKinsey, Gartner, BCG, MIT Sloan Management Review und Stanford HAI kommen zum gleichen Schluss: Der begrenzende Faktor für AI-Wertschöpfung ist selten die Technologie.",
      cta: "Vollständige Studienübersicht anfordern",
    },
    faq: { label: "Häufige Fragen", title: "Fragen, die Entscheider zuerst stellen" },
    contact: {
      eyebrow: "Strategisches Gespräch beginnen",
      label: "Kontakt",
      title: "Strategischen Austausch initiieren",
      subtitle:
        "Ob Architektur-Review, Embedded-Engineering-Engagement oder Executive-Briefing für die Führungsebene: Das erste Gespräch ist unverbindlich und dient der Klärung des Rahmens.",
      targetAudienceLabel: "Zielgruppe",
      targetAudienceText: "Organisationen mit Enterprise-Architektur-Komplexität in Finanzbranche, Industrie und öffentlichem Sektor (außerhalb der Versicherungsbranche) in ganz Zentraleuropa.",
      complianceLabel: "Compliance-Hinweis",
      nameLabel: "Vollständiger Name *",
      namePlaceholder: "Dr. Maria Muster",
      companyLabel: "Unternehmen *",
      companyPlaceholder: "Musterbank AG",
      emailLabel: "E-Mail *",
      emailPlaceholder: "maria.muster@unternehmen.at",
      interestLabel: "Themenbereich",
      interestPlaceholder: "Bereich auswählen",
      roleLabel: "Ihre Rolle",
      rolePlaceholder: "z. B. Chief Data Officer",
      contextLabel: "Organisatorischer Kontext",
      contextPlaceholder: "Beschreiben Sie die aktuelle Architektur-Situation, regulatorische Anforderungen oder den strategischen Kontext Ihrer Anfrage...",
      body: "Ob Enterprise-Kompetenzsystem, Use-Case-Aktivierung oder technische Bewertung: das erste Gespräch dient der Klärung des organisatorischen Kontexts und der richtigen Aktivierungsstufe.",
      privacyNote: "Ihre Kontaktdaten werden ausschließlich zur Beantwortung dieser Anfrage verwendet.",
      submit: "Anfrage übermitteln",
      successTitle: "E-Mail-Programm geöffnet",
      successText: "Bitte prüfen Sie Ihr E-Mail-Programm und senden Sie die vorbereitete Nachricht ab. Falls sich nichts geöffnet hat, kontaktieren Sie uns bitte direkt über die nebenstehenden Kontaktdaten.",
      mailSubjectPrefix: "CETL Anfrage",
      mailGeneral: "Allgemein",
      mailFieldName: "Name",
      mailFieldCompany: "Unternehmen",
      mailFieldEmail: "E-Mail",
      mailFieldInterest: "Themenbereich",
    },
    footer: {
      tagline: "Central European Tech Leadership Institute. Technologische Souveränität ist kein Zustand. Sie ist eine Kompetenz.",
      navLabel: "Navigation",
      contactLabel: "Kontakt",
      location: "Wien, Österreich",
      region: "Zentraleuropa",
      copyright: "Alle Rechte vorbehalten.",
      complianceLine: "Sämtliche Leistungen richten sich ausschließlich an Organisationen außerhalb der Versicherungsbranche.",
    },
    testimonials: {
      label: "Stimmen aus der Praxis",
      title: "Was Entscheider sagen, die den Unterschied erlebt haben.",
      subtitle: "Aus Vertraulichkeitsgründen ohne Klarnamen. Rollen und Sektoren sind authentisch.",
      anonymousNote: "Anonymisiert auf Wunsch der Organisation",
    },
    insights: {
      label: "Thought Leadership",
      title: "Aus der Forschung in die Praxis.",
      subtitle: "Analysen und Frameworks für Entscheider, die über den nächsten Piloten hinausdenken.",
      cta: "Alle Publikationen",
      readCta: "Analyse lesen",
      pageTitle: "Insights & Publikationen",
      pageSubtitle:
        "Research Briefs, Whitepaper und Frameworks für Entscheider in Banken, Industrie und öffentlichem Sektor, aus der Forschung in die Praxis.",
      back: "Alle Insights",
      published: "Publiziert",
      byline: "Alin Kalam, Geschäftsführer, CETL Institute",
      ctaTitle: "Den strategischen Austausch beginnen.",
      ctaText:
        "Ob Architektur-Review, Embedded-Engineering-Engagement oder Executive-Briefing für die Führungsebene: Das erste Gespräch ist unverbindlich und dient der Klärung des Rahmens.",
      ctaButton: "Kontakt aufnehmen",
      moreLabel: "Weitere Analysen",
      authorLabel: "Über den Autor",
      share: "Artikel teilen",
      shareCopied: "Link kopiert",
      prevLabel: "Vorherige Analyse",
      nextLabel: "Nächste Analyse",
    },
    instStats: { label: "CETL in Zahlen" },
    elaas: {
      eyebrow: "Das CETL-Betriebsmodell",
      headline: "Standardisierter Kern. Maßgeschneiderte Aktivierung. Umsetzung nah an der Arbeit.",
      body: "Executional Learning as a Service kombiniert strukturierte Data-&-AI-Grundlagen mit organisationsspezifischer Aktivierung, rollenbasierten Lernreisen, begleiteten Use Cases, eingebetteter Befähigung und Ecosystem-Zugang.",
      callout: "Executional-Learning-Tage sind ein flexibler Support-Pool — keine zusätzlichen Kurseinheiten. Sie können umfassen:",
      calloutItems: ["Mentoring und Einzelbefähigung", "Use-Case-Bewertung und Ideation", "Priorisierung und strategische Passung", "Unternehmensübergreifende Abstimmung", "Expertenformate und Online-Befähigung", "Community-Impulse", "Projektunterstützung"],
      cta: "Das vollständige ELaaS-Modell erkunden",
    },
    portfolio: {
      eyebrow: "CETL Institute | Produktportfolio",
      headline: "Vier integrierte Fähigkeiten.\nEin Weg vom Lernen zur Wirkung.",
      intro: "CETL kombiniert Bildung, organisatorische Aktivierung, eingebettete technische Befähigung und Community-gestützte Co-Creation in einem koordinierten Portfolio.",
    },
    packages: {
      eyebrow: "CETL Institute | Paketportfolio",
      headline: "Die richtige Aktivierungsstufe wählen.",
      intro: "CETL bietet strukturierte Engagement-Stufen von maßgeschneidertem Data-&-AI-Kompetenzaufbau bis zu eingebetteter Umsetzung und Community-Co-Creation.",
      callout: "Executional-Learning-Tage sind ein Support-Pool, keine zusätzlichen Kurstage.",
    },
    outcomes: {
      label: "Warum das wichtig ist",
      items: [
        { title: "Kompetenzaufbau", copy: "Nachhaltige interne KI- und Datenkompetenz aufbauen." },
        { title: "Umsetzungsbereitschaft", copy: "Von Use-Case-Ideen zu priorisierten Maßnahmen." },
        { title: "Skalierbare Wirkung", copy: "Wiederverwendbaren, unternehmensweiten Schwung erzeugen." },
      ],
    },
    differentiators: {
      headline: "Warum Organisationen CETL wählen",
      items: [
        { title: "Umsetzungsorientiert", copy: "Vom Lernen zur messbaren Wirkung." },
        { title: "Akademische Exzellenz", copy: "Führende Universitäten, professionelle Institutionen und angewandte Strenge." },
        { title: "Rollen- und branchenspezifisch", copy: "Maßgeschneidert auf Kontext, Reife und Verantwortung." },
        { title: "Kompetenz, die bleibt", copy: "Internes Wissen, keine Abhängigkeit." },
        { title: "Community & Ecosystem", copy: "Zugang zu breiten Data-, KI- und Technologienetzwerken." },
      ],
    },
    ecosystem: {
      eyebrow: "CETL Institute | Bildungs-Ökosystem",
      headline: "Ein Executional-Learning-Ökosystem, das traditionelle Ansätze transformiert.",
      bottomBand: ["Community-getriebenes Lernen", "Umsetzungsorientierter Kompetenzaufbau", "Akademische Strenge trifft reale Umsetzung"],
    },
    enterprise: {
      eyebrow: "Flaggschiff-Unternehmensprogramm",
      headline: "Ein Programm. Jede Rolle. Volle operative Wirkung.",
      body: "Das Enterprise-Data-&-AI-Kompetenzsystem verbindet eine gemeinsame Grundlage mit differenzierten rollenbasierten Lernreisen, begleiteten Projekten und echten Use Cases.",
      facts: ["Modulare Struktur", "Typische Dauer: 3–12 Monate", "Von Mitarbeitenden bis zur Führungsebene", "Gemeinsame Grundlage + Rollenspezialisierung", "Begleitete Projekte und Mentoring", "Echte organisatorische Outputs"],
      outputs: ["Strukturiertes Use-Case-Portfolio", "Business Case", "Prototyp", "Governance-Empfehlung", "Betriebsmodell-Beitrag", "Umsetzungsroadmap"],
      ctaPrimary: "Enterprise-Programm gestalten",
      ctaSecondary: "Rollen-Framework anfordern",
    },
    embedded: {
      eyebrow: "Von Befähigung zur Umsetzung",
      headline: "Neben Ihren Teams arbeiten. Kompetenz aufbauen, während geliefert wird.",
      body: "Embedded Engineering erweitert das CETL-Modell vom Kompetenzaufbau zur praktischen technischen Aktivierung. CETL-Experten arbeiten vorübergehend neben internen Teams, um ausgewählte Use Cases zu aktivieren, Prototypen zu validieren, Workflows zu befähigen und technische Methoden zu transferieren.",
      modules: ["Use-Case-Aktivierung", "Prototyping & Validierung", "Workflows & Automatisierung", "No-Code / Low-Code Befähigung", "Technische Befähigung", "Wissenstransfer", "Data-&-AI-Lösungspfade", "Umsetzungsbereitschaft", "Governance-Integration", "Interne Aktivierung"],
      fde: "CETL wendet ein Forward-Deployed-Engineer-inspiriertes Modell an, bei dem Experten nah an Business- und Technologieteams, im echten organisatorischen Kontext, für einen definierten Zeitraum arbeiten.",
      outcome: "Kompetenz wird durch gemeinsame Umsetzung transferiert.",
      cta: "Embedded-Engagement besprechen",
      assessmentEyebrow: "Unabhängige technische Bewertung",
      assessmentHeadline: "Technische Strenge vor wichtigen Umsetzungsentscheidungen.",
      assessmentBody: "Technische Bewertung ist eine transversale CETL-Kompetenz zur Unterstützung von Umsetzungsbereitschaft, Architekturqualität und informierten Technologieentscheidungen.",
      assessmentItems: ["Herstellerneutrale Architektur-Reviews", "Machbarkeitsbeurteilungen", "Daten- und Governance-Reifegrad-Assessments", "KI- und Daten-Betriebsmodell-Reviews", "Legacy-Decommissioning-Roadmaps", "Risiko- und Abhängigkeitsanalysen", "Umsetzungsbereitschafts-Reviews", "Technologieeignungsbewertungen"],
    },
    network: {
      eyebrow: "Der CETL-Netzwerkvorteil",
      headline: "Drei Netzwerkebenen stärken Zugang, Glaubwürdigkeit und Umsetzung.",
    },
    about: {
      eyebrow: "Über das CETL Institute",
      headline: "Die Lücke überbrücken:\nakademische Exzellenz trifft industrielle Umsetzung.",
      body: "Das CETL Institute arbeitet an der hochwertigen Schnittstelle von akademischer Exzellenz und industrieller Umsetzung.",
      mission: "Nachhaltige organisatorische Kompetenz an der Schnittstelle von Technologie, Leadership und Umsetzung aufbauen.",
      vision: "Ein zentraleuropäisches Ökosystem, in dem Organisationen die interne Kompetenz entwickeln, um Technologie unabhängig, verantwortungsvoll und effektiv zu gestalten.",
      differentiator: "CETL fokussiert auf Kompetenztransfer statt Ressourcenaugmentierung. Das Ziel ist nicht, die Organisation zu substituieren, sondern ihre eigene Entscheidungs-, Priorisierungs- und Umsetzungsfähigkeit zu stärken.",
      values: [
        { title: "Akademische Strenge", copy: "Wissenschaftliche Koordination, Curriculumsqualität und Universitätszusammenarbeit." },
        { title: "Branchenrelevanz", copy: "Geschäftskontexte, echte Prozesse, Use Cases und technische Realitäten." },
        { title: "Umsetzungsorientierung", copy: "Begleitete Anwendung, eingebettete Befähigung und konkrete Umsetzungspfade." },
      ],
    },
    evidence: {
      eyebrow: "Studien & Evidenz",
      headline: "Die Umsetzungslücke ist messbar.",
      body: "Forschung zeigt konsistent, dass Technologie allein selten der begrenzende Faktor ist. Organisatorische Kompetenz, Datenreife, Governance, Adoption und Umsetzungsstrukturen bestimmen, ob Investitionen nachhaltigen Wert schaffen.",
      eriTitle: "CETL Execution Readiness Index",
      eriDesc: "Ein strukturierter CETL-Rahmen zur Bewertung von Kompetenz, dokumentierter Strategie, Governance- und Datenreife sowie operativer Umsetzungsbereitschaft.",
      eriNote: "Illustrativer CETL-Benchmark. Keine wissenschaftliche Studie.",
      cta: "Forschung & Frameworks erkunden",
    },
    partner: {
      eyebrow: "Strategisches Delivery-Ökosystem",
      headline: "Enterprise-Technologieerfahrung verbunden mit Kompetenzaufbau.",
      body: "Durch sein strategisches Ökosystem verbindet CETL Kompetenzentwicklung mit breiterer Enterprise-Technologie- und Transformationserfahrung.",
      cta: "Partner-Ökosystem erkunden",
    },
    community: {
      eyebrow: "Community-gestützte Umsetzung",
      headline: "Austausch und Netzwerk in Co-Creation und Umsetzungsmöglichkeiten verwandeln.",
      body: "CETLs Community-Modell verbindet Organisationen mit akademischen Experten, Branchenpraktikern, Technologiespezialisten und Entwickler-Ökosystemen. Der Europe Tech Hackathon ist CETLs Flagship-Community-Plattform.",
      formats: ["Europe Tech Hackathon", "Executive Roundtables", "Data & AI Exchange", "Meet-ups", "Tech Workshops", "Expertenimpulse", "Ideation Labs", "Akademische Zusammenarbeit"],
      orgValue: ["Eine echte Herausforderung einbringen", "Interdisziplinäre Expertise nutzen", "Annahmen validieren", "Proof-of-Concept-Pfade entwickeln", "Frühen Umsetzungsschwung erzeugen"],
      featuredStatement: "Insight und Networking in messbare Delivery-Outcomes verwandeln.",
      ctaPrimary: "Herausforderung einbringen",
      ctaSecondary: "Europe Tech Hackathon erkunden",
      label: "Community",
      title: "Europe Tech Hackathon & die Executional Community.",
      subtitle: "Communities gewinnen, wenn sie Insight und Networking in messbare Delivery-Outcomes umwandeln.",
      advisorCta: "Mit einem Experten sprechen",
      pills: ["Europe Tech Hackathon", "Executive Roundtables", "Data & AI Exchange", "Meet-ups", "Tech Workshops", "Expertenimpulse", "Innovation Labs", "Akademische Kollaboration"],
      features: [
        { title: "Challenge-basierte Co-Creation", desc: "Eine echte Herausforderung in die CETL-Community einbringen." },
        { title: "Europe Tech Hackathon", desc: "CETLs Flagship-Community-Plattform." },
        { title: "Executive Knowledge Exchange", desc: "Branchenübergreifende Roundtables und Expertenformate." },
      ],
      quote: "Insight und Networking in messbare Delivery-Outcomes verwandeln.",
      quoteAttribution: "CETL Community-Modell",
    },
    intersection: {
      label: "Ecosystem & Partner",
      title: "Einzigartig positioniert an der Schnittstelle.",
      subtitle: "CETL steht präzise im Zentrum von Academia, Community und Industrie: der Schnittpunkt aus Enterprise-Nachfrage, Flagship-Community-Sichtbarkeit und akademischer Partnerschaftstiefe.",
    },
    caseStudy: {
      eyebrow: "Executional Learning in der Praxis",
      headline: "Nachweis, dass Kompetenzaufbau direkt mit der organisatorischen Umsetzung verbunden werden kann.",
      body: "Ein maßgeschneidertes Enterprise-Data-&-AI-Kompetenzsystem kombiniert eine gemeinsame Grundlage, differenzierte Rollenpfade und begleitete Projekte.",
      label: "In der Praxis",
      title: "Nachweis, dass das Modell funktioniert.",
      subtitle: "Executional Learning in der Umsetzung, mit messbarem Transfer.",
      cta: "Ähnliches Ergebnis für Ihr Unternehmen besprechen",
    },
    faculty: {
      label: "People",
      positionOpen: "Position Open",
      featuredTitle: "+ Featured experts",
      featuredDesc: "Aus dem zentraleuropäischen KI-, Forschungs- und Community-Umfeld, kuratiert je Modul und Use Case.",
    },
    forOrgs: {
      label: "Für Organisationen",
      title: "Transformieren Sie technologische Ambition in operative Realität.",
      subtitle:
        "CETL arbeitet direkt mit Organisationen, nicht mit Einzelpersonen. Jedes Engagement ist auf die spezifische Architektur-Situation, regulatorische Umgebung und strategische Zielsetzung der Organisation zugeschnitten.",
      ctaPrimary: "Custom Engagement anfragen",
      ctaSecondary: "Bedarfsanalyse starten",
      items: [
        {
          title: "Maßgeschneiderte Programme",
          desc: "Kein Standardcurriculum. Jedes Programm wird auf die Datenreife, Governance-Struktur und Use-Case-Portfolio der Organisation abgestimmt.",
        },
        {
          title: "Integrierte Umsetzung",
          desc: "CETL-Experten arbeiten innerhalb Ihrer laufenden Initiativen, nicht parallel dazu. Kein Lab, keine Präsentation, kein Bericht ohne Umsetzungsverantwortung.",
        },
        {
          title: "Messbare Outcomes",
          desc: "Jedes Engagement definiert vorab Akzeptanzkriterien: validierte interne Experten, dokumentierte Governance, priorisierte Use-Case-Pipeline.",
        },
        {
          title: "Herstellerneutrale Bewertung",
          desc: "Keine Plattform-Deals, keine Reseller-Margen. Architektur-Empfehlungen folgen ausschließlich technischer Validität und Compliance-Anforderungen.",
        },
      ],
    },
  },

  PORTFOLIO_PRODUCTS: [],
  PACKAGES: [],
  ECOSYSTEM_NODES: [],
  NETWORK_LAYERS: [],
  ROLE_CARDS: [],
  EVIDENCE_STATS: [],

  TESTIMONIALS: [
    {
      quote: "KI-Initiativen scheitern nicht an der Technologie. Sie scheitern an der Organisation. CETL hat uns geholfen, genau das zu verstehen, bevor wir die nächste Runde Budget freigegeben haben.",
      role: "Head of Digital Transformation",
      sector: "Österreichische Großbank",
      orgSize: "2.500+ Mitarbeiter",
    },
    {
      quote: "Wir hatten eine AI-Strategie. Was wir nicht hatten, war die interne Fähigkeit, sie umzusetzen. Das Embedded-Engineering-Programm hat das in vier Monaten geändert: strukturell, nicht oberflächlich.",
      role: "Chief Data Officer",
      sector: "Österreichische Industrie",
      orgSize: "800+ Mitarbeiter",
    },
    {
      quote: "Der Architecture Review hat drei Vendor-Lock-in-Strukturen aufgedeckt, die wir selbst nicht gesehen hatten. Herstellerneutral, methodisch, unbestechlich. Genau das, was man braucht, bevor man eine Plattform-Entscheidung trifft.",
      role: "Bereichsleitung IT-Strategie",
      sector: "Öffentlicher Sektor",
      orgSize: "Bundesbehörde",
    },
  ],

  // Karten-Metadaten kommen client-sicher aus insights-index (keine Volltexte im Bundle).
  INSIGHTS: ARTICLE_META.de,

  INST_STATS: [
    { value: "20+", label: "Jahre Industrieerfahrung", sub: "Führungsteams in Banken, Industrie & Public Sector" },
    { value: "3", label: "Kompetenz-Instrumente", sub: "Executive Education · Embedded Engineering · Technical Assessment" },
    { value: "TU Wien", label: "Akademische Partnerschaft", sub: "Wissenschaftliche Rigorosität. Industrielle Umsetzungserfahrung." },
    { value: "EU", label: "Institutioneller Rahmen", sub: "Europe Tech Hackathon · Stadt Wien · ÖBB · Siemens" },
  ],

  COMMUNITY: {
    pills: ["Europe Tech Hackathon", "Stadt Wien", "Vienna Business Agency", "ÖBB", "Siemens", "Meet-ups", "Tech Workshops", "Know-how Exchange"],
    features: [
      {
        title: "Flagship-Sichtbarkeit",
        desc: "Der Europäische (AI & Data) Tech Hackathon (organisiert mit der Stadt Wien, der Vienna Business Agency, ÖBB und weiteren Partnern) schafft europaweite Sichtbarkeit, Engagement und Marktrelevanz.",
      },
      {
        title: "Ganzjährige Formate",
        desc: "Roundtables, Data & AI Executive Club, Safari, Dinner und Editions halten die Community aktiv und relevant und wandeln Networking in strukturierte Partnerschafts- und Delivery-Chancen um.",
      },
      {
        title: "Execution Vehicle",
        desc: "Die Tech Execution Community speist direkt in CETLs Agenda: geführte Delivery, Operating-Model-Thinking und Implementierungsbereitschaft, ein exekutives Ökosystem jenseits klassischer Beratung.",
      },
    ],
    quote: "Insight + Networking, in messbare Delivery-Outcomes umgewandelt.",
    quoteAttribution: "TEC Community × CETL Institute",
  },

  FACULTY_POSITIONS: [
    { initials: "MD", role: "Managing Director", desc: "Gesamtsteuerung, Strategie und Partnerschaften der CETL Institute GmbH." },
    { initials: "AD", role: "Academic Director", desc: "Akademische Tiefe, Curriculum-Architektur und Universitätskooperationen." },
    { initials: "FD", role: "Faculty Director", desc: "Kuration des Dozenten-, Trainer- und Keynote-Pools über alle Programme." },
    { initials: "ID", role: "Industry Director", desc: "Enterprise-Nachfrage, Corporate Access und branchenübergreifender Transfer." },
    { initials: "CD", role: "Community Director", desc: "Europe Tech Hackathon, Executive-Formate und Community-Aktivierung." },
  ],

  CASE_STUDY: {
    clientTag: "CLIENT CASE",
    client: "RLB OÖ × CETL Institute",
    title: "Nachweis, dass das Modell funktioniert.",
    desc: "Customized Executional Learning-Programme liefern bereits für Enterprise-Kunden, exemplarisch das KI-Kompetenz-Programm gemeinsam mit der Raiffeisenlandesbank Oberösterreich: ein integriertes Enabling-System, kein Schulungskatalog.",
    metrics: [
      { label: "Foundation Programm", value: "15 Tage" },
      { label: "Role-Tracks (KI-Anwender:innen, KI-Champions)", value: "2 × 8 Tage" },
      { label: "Gesamtprogramm-Umfang", value: "31 Tage", highlight: true },
      { label: "Guided Projects", value: "Eigener Use Case" },
      { label: "Delivery Model", value: "ELaaS" },
    ],
    principles: [
      { num: "I", title: "Rollenspezifisches Enabling", desc: "Learning Journeys für KI-Leadership, KI-Anwender:innen, KI-Champions und interne KI-Entwickler:innen, abgestimmt auf Verantwortung und Reifegrad." },
      { num: "II", title: "Guided Projects mit Output", desc: "Jeder Lernpfad endet in konkreten Use Cases, Business Cases oder Implementierungsbeiträgen, vom Canvas bis zum finalen Pitch." },
      { num: "III", title: "Direkter Beitrag zur Strategie", desc: "Die Ergebnisse fließen direkt in die Use-Case-Pipeline, Priorisierungslogik und Transformationsinitiative des Kunden: messbarer Transfer." },
    ],
  },

  INTERSECTION_CATEGORIES: [
    {
      label: "Academia",
      partners: [
        { name: "TU Wien", desc: "Technische Universität Wien: akademische Tiefe & Data Literacy" },
        { name: "Lauder Business School", desc: "Applied Management & Leadership Education" },
      ],
    },
    {
      label: "Community",
      partners: [
        { name: "Europe Tech Hackathon", desc: "Flagship European AI & Data Community Event" },
        { name: "TEC (Tech Execution Community)", desc: "Executive-Netzwerk & erprobte Formate" },
      ],
    },
    {
      label: "Industry & Public",
      partners: [
        { name: "Stadt Wien", desc: "Public-Sector Innovation Partner" },
        { name: "Vienna Business Agency", desc: "Ecosystem & Startup-Enablement" },
      ],
    },
  ],
};
