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
    { name: "TU Wien", sub: "Akademischer Partner", logo: "/logos/tuwien.svg", logoWidth: 84, logoHeight: 84 },
    { name: "Stadt Wien", sub: "Öffentlicher Partner", logo: "/logos/wien.svg", logoWidth: 190, logoHeight: 87 },
    { name: "Europäische Union", sub: "Institutioneller Partner", logo: "/logos/eu.svg", logoWidth: 160, logoHeight: 53 },
    { name: "ÖBB", sub: "Industriepartner", logo: "/logos/oebb.svg", logoWidth: 130, logoHeight: 52 },
    { name: "Siemens", sub: "Industriepartner", logo: "/logos/siemens.svg", logoWidth: 190, logoHeight: 45 },
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
      badgeLocation: "CETL · Wien",
      headlineLine1: "",
      headlineGradient: "Strategiepapiere gibt es genug.",
      headlineLine3: "Der Enterprise-Betrieb wartet.",
      paragraph:
        "Das CETL Institute verbindet wissenschaftliche Rigorosität mit industrieller Umsetzungserfahrung, von der Führungsebene bis zum rollenbasierten KI-Kompetenzprogramm für die gesamte Organisation. Verstehen. Anwenden. Umsetzen.",
      ctaPrimary: "Executive Framework anfordern",
      ctaSecondary: "Strategischen Austausch initiieren",
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
      quoteBefore: "Nicht das fehlende Bewusstsein.",
      quoteHighlight1: "Die fehlende",
      quoteMiddle: "",
      quoteHighlight2: "Operationalisierung.",
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
      rolesLabel: "Rollenbasierte Learning Journeys",
      roles: ["KI-Anwender:innen", "KI-Champions", "Interne KI-Entwickler:innen", "KI-Leadership"],
    },
    partners: {
      trusted: "Vertrauen führender Institutionen & Organisationen",
      blurbBefore: "Veranstalter des",
      blurbHackathon: "Europe Tech Hackathon",
      blurbAfter:
        "öffentliche Institutionen, globale Unternehmen und akademische Führungskräfte gemeinsam für technologiegetriebene Transformation in Zentraleuropa.",
    },
    trustBar: { label: "In Partnerschaft mit führenden Institutionen" },
    leadership: {
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
      messageLabel: "Kontext",
      messagePlaceholder: "Beschreiben Sie die aktuelle Architektur-Situation, regulatorische Anforderungen oder den strategischen Kontext Ihrer Anfrage...",
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
    community: {
      label: "Community",
      title: "Europe Tech Hackathon & die Executional Community.",
      subtitle: "Communities gewinnen, wenn sie Insight und Networking in messbare Delivery-Outcomes umwandeln. Initiiert durch das CETL Institute, ist der Europe Tech Hackathon unsere Flagship-Community-Plattform.",
      advisorCta: "Mit einem Experten sprechen",
    },
    intersection: {
      label: "Ecosystem & Partner",
      title: "Einzigartig positioniert an der Schnittstelle.",
      subtitle: "CETL steht präzise im Zentrum von Academia, Community und Industrie: der Schnittpunkt aus Enterprise-Nachfrage, Flagship-Community-Sichtbarkeit und akademischer Partnerschaftstiefe.",
    },
    caseStudy: {
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

  KI_PROGRAM: {
    hero: {
      badge: "Unternehmensprogramm",
      title: "KI-Kompetenzprogramm für Unternehmen",
      tagline: "KI verstehen. Sicher anwenden. Wirksam umsetzen.",
      p1: "Künstliche Intelligenz verändert Arbeitsprozesse, Entscheidungen und Geschäftsmodelle. Der entscheidende Erfolgsfaktor ist jedoch nicht allein die Technologie, sondern die Fähigkeit einer Organisation, sie sinnvoll, verantwortungsvoll und produktiv einzusetzen.",
      p2: "Unser KI-Kompetenzprogramm verbindet fundierten Wissensaufbau mit praktischer Anwendung. Mitarbeitende, Fachverantwortliche, technische Expert:innen und Führungskräfte entwickeln genau jene Kompetenzen, die sie für ihre jeweilige Rolle benötigen, von Beginn an mit konkreten Anwendungsfällen aus ihrem Unternehmen.",
      tags: ["Praxisnah", "Rollenbasiert", "Unternehmensspezifisch", "Umsetzungsorientiert"],
      cta: "Unverbindliches Erstgespräch vereinbaren",
    },
    intro: {
      label: "Ausgangslage",
      title: "Von einzelnen Schulungen zum integrierten Befähigungsprogramm",
      p1: "Viele Unternehmen verfügen bereits über erste KI-Tools, interne Lernangebote oder Pilotprojekte. Häufig fehlt jedoch ein gemeinsamer Rahmen, der Wissen, Anwendung, Governance und konkrete Umsetzung miteinander verbindet.",
      p2: "Das KI-Kompetenzprogramm führt bestehende Initiativen zu einem durchgängigen Befähigungssystem zusammen. Es integriert digitale Selbstlernangebote, Live-Trainings, rollenspezifische Vertiefungen und begleitete Praxisprojekte. So entsteht nicht nur Wissen über künstliche Intelligenz, sondern konkrete Arbeitsabläufe, priorisierte Use Cases, Business Cases, technische Lösungskonzepte und organisationale Kompetenzen.",
      outcomesLabel: "Das Programm schafft",
      outcomes: [
        "ein gemeinsames Verständnis von Daten, KI und Automatisierung",
        "einen sicheren und verantwortungsvollen Umgang mit KI",
        "produktive Anwendungen für den Arbeitsalltag",
        "konkrete Use Cases mit nachvollziehbarem Nutzen",
        "interne Multiplikator:innen und KI-Expert:innen",
        "eine tragfähige Grundlage für die Skalierung von KI",
      ],
    },
    keyVisual: {
      alt: "Schachdame im warmen Licht, Sinnbild für strategische Weitsicht und Entscheidungskompetenz",
      caption: "Strategische Weitsicht entsteht nicht durch Zuschauen, sondern durch Zug um Zug lernen, wie das Spiel funktioniert.",
    },
    cycle: {
      label: "Methodik",
      title: "Lernen, anwenden und umsetzen",
      subtitle: "Unser Ansatz folgt dem Prinzip des Executional Learning. Wissen wird nicht isoliert vermittelt, sondern unmittelbar mit realen Aufgaben und Herausforderungen des Unternehmens verbunden.",
      steps: ["Verstehen", "Anwenden", "Übertragen", "Umsetzen"],
      details: [
        {
          n: "1",
          title: "Verstehen",
          text: "Die Teilnehmenden lernen, wie Daten, künstliche Intelligenz und moderne Automatisierung funktionieren. Sie können Potenziale, Grenzen und Risiken realistisch einordnen.",
        },
        {
          n: "2",
          title: "Anwenden",
          text: "Unternehmenseigene Werkzeuge, Prozesse und Standards werden direkt in das Programm integriert. Die Teilnehmenden erproben KI anhand typischer Aufgaben aus ihrem Arbeitsalltag.",
        },
        {
          n: "3",
          title: "Übertragen",
          text: "Praxisbeispiele aus unterschiedlichen Unternehmensbereichen und Branchen eröffnen neue Perspektiven. Erfolgreiche Muster werden auf die eigene Organisation übertragen.",
        },
        {
          n: "4",
          title: "Umsetzen",
          text: "Jede Lernreise ist mit einem konkreten Anwendungsfall verbunden. Aus ersten Ideen entstehen strukturierte Use Cases, Prototypen, Business Cases oder Umsetzungsroadmaps.",
        },
      ],
    },
    foundation: {
      label: "Das Foundation Program",
      title: "Das gemeinsame Fundament für Daten- und KI-Kompetenz",
      subtitle: "Das Foundation Program schafft eine gemeinsame Sprache innerhalb des Unternehmens. Es vermittelt die zentralen Grundlagen und bereitet die Teilnehmenden auf rollenspezifische Vertiefungen vor. Bestehende Lernplattformen, interne Richtlinien und bereits eingesetzte KI-Werkzeuge können als Vorbereitung, Vertiefung und Follow-up eingebunden werden.",
      modules: [
        {
          n: "01",
          title: "Daten verstehen und nutzen",
          text: "Grundlegendes Verständnis für Datenstrukturen, Datenqualität und datenbasierte Entscheidungen.",
          items: [
            "Datentypen, Datenquellen und Datenarchitekturen",
            "Datenqualität, Governance und Verantwortlichkeiten",
            "Data Value Chain und analytisches Denken",
            "Visualisierung und Storytelling mit Daten",
            "Identifikation relevanter Daten für eigene Anwendungsfälle",
          ],
        },
        {
          n: "02",
          title: "Wie künstliche Intelligenz funktioniert",
          text: "Technologische Grundlagen, verständlich und ohne unnötige technische Komplexität.",
          items: [
            "Grundlagen von Machine Learning und generativer KI",
            "Funktionsweise von Large Language Models",
            "Chancen, Grenzen und typische Fehlerquellen",
            "Halluzinationen, Bias und Verlässlichkeit",
            "Einordnung unterschiedlicher KI-Technologien",
          ],
        },
        {
          n: "03",
          title: "KI im Arbeitsalltag",
          text: "KI-Werkzeuge sicher und produktiv einsetzen.",
          items: [
            "Recherchieren, strukturieren und zusammenfassen",
            "Texte, Präsentationen und Analysen erstellen",
            "Effektives Prompting und Qualitätskontrolle",
            "KI-gestützte Arbeitsabläufe entwickeln",
            "Einsatz unternehmenseigener KI- und Copilot-Lösungen",
          ],
        },
        {
          n: "04",
          title: "Machine Learning und Data Science",
          text: "Praxisnahes Verständnis für analytische und prognostische KI-Anwendungen.",
          items: [
            "Grundlegende Machine-Learning-Methoden",
            "Predictive Analytics und generative KI",
            "Data-Science-Workflows und Modelllogik",
            "Machbarkeits- und Datenchecks",
            "Anwendungsfälle für Prognosen, Klassifikation und Anomalieerkennung",
          ],
        },
        {
          n: "05",
          title: "Prozesse, Governance und Verantwortung",
          text: "KI muss nicht nur funktionieren, sondern auch sicher und verantwortungsvoll eingesetzt werden.",
          items: [
            "Prozessanalyse, Digitalisierung und Automatisierung",
            "Datenschutz und Informationssicherheit",
            "EU AI Act und regulatorische Anforderungen",
            "Responsible AI und vertrauenswürdige KI",
            "Rollen, Verantwortlichkeiten und Freigabeprozesse",
          ],
        },
        {
          n: "06",
          title: "Vom Use Case zum Business Case",
          text: "Aus einer Idee wird ein bewertbarer und umsetzbarer Anwendungsfall.",
          items: [
            "KI-Potenziale systematisch identifizieren",
            "Use Cases strukturieren und priorisieren",
            "Nutzen, Aufwand und Risiken bewerten",
            "KPIs und Erfolgskriterien definieren",
            "Business Cases und Entscheidungsvorlagen entwickeln",
            "Ergebnisse überzeugend präsentieren",
          ],
        },
      ],
    },
    journeys: {
      label: "Rollenbasierte Learning Journeys",
      title: "Die richtigen Kompetenzen für jede Rolle",
      subtitle: "Nicht alle Mitarbeitenden benötigen dieselben Kompetenzen. Deshalb wird das Programm entlang klar definierter Rollen aufgebaut.",
      focusLabel: "Schwerpunkte",
      projectLabel: "Praxisprojekt",
      roles: [
        {
          role: "KI-Anwender:innen",
          subtitle: "KI im Arbeitsalltag sicher und produktiv einsetzen",
          audience: "Mitarbeitende aus Fachbereichen, Administration, Vertrieb, Finance, HR, Operations und Support.",
          focus: [
            "KI-Produktivität im Arbeitsalltag",
            "Prompting und Qualitätskontrolle",
            "KI-gestützte Fachbereichsworkflows",
            "Datenschutz und verantwortungsvolle Nutzung",
            "persönliche Automatisierungen",
            "gemeinsame Standards und Best Practices",
          ],
          project: "Entwicklung eines eigenen KI-gestützten Workflows mit direktem Nutzen für den persönlichen Arbeitsbereich.",
        },
        {
          role: "KI-Champions und KI-Enthusiast:innen",
          subtitle: "Potenziale erkennen und Umsetzung im Fachbereich vorantreiben",
          audience: "Multiplikator:innen, Innovationstreiber:innen und erste Ansprechpartner:innen für KI innerhalb eines Unternehmensbereichs.",
          focus: [
            "Use-Case-Design und Priorisierung",
            "Prozessanalyse und KI-Readiness",
            "Automatisierung und Prozessneugestaltung",
            "Entwicklung einfacher Agenten und Assistenten",
            "Change, Adoption und Stakeholder-Management",
            "Business Cases und Pilotplanung",
          ],
          project: "Aufbau eines priorisierten KI-Use-Case-Portfolios für einen Unternehmensbereich einschließlich Pilotvorschlag und Umsetzungspfad.",
        },
        {
          role: "Interne KI-Entwickler:innen",
          subtitle: "Technische Lösungen entwickeln und in den Betrieb überführen",
          audience: "Data Scientists, Data Engineers, Softwareentwickler:innen, IT-Architekt:innen und technische Spezialist:innen.",
          focus: [
            "Datenarchitekturen und Engineering",
            "Datenmodellierung und Datenpipelines",
            "Machine Learning und Advanced Analytics",
            "Large Language Models und Retrieval-Augmented Generation",
            "Vektordatenbanken und Embeddings",
            "MLOps, LLMOps und Monitoring",
            "Übergabe von Prototypen in den Betrieb",
          ],
          project: "Erarbeitung eines technischen Solution Blueprints für einen priorisierten KI-Anwendungsfall.",
        },
        {
          role: "KI-Leadership",
          subtitle: "KI strategisch steuern und Unternehmenswert realisieren",
          audience: "Geschäftsführung, Bereichsleitungen, Führungskräfte und Sponsor:innen von KI-Initiativen.",
          focus: [
            "KI-Strategie und Zielbild",
            "Markt- und Technologiedynamik",
            "Governance, Risiko und Responsible AI",
            "Business Cases, ROI und Wertrealisierung",
            "Investitions- und Portfoliosteuerung",
            "Operating Model und Verantwortlichkeiten",
            "Change und Transformationsroadmap",
          ],
          project: "Entwicklung eines priorisierten KI-Portfolios einschließlich Investitionsentscheidungen, Governance und Transformationsroadmap.",
        },
      ],
    },
    useCases: {
      label: "Reale Use Cases als roter Faden",
      title: "Vom Use Case zur Umsetzung",
      subtitle: "Jede Teilnehmerin und jeder Teilnehmer arbeitet während des Programms an einem eigenen Anwendungsfall aus dem Unternehmen. Die Teilnehmenden erhalten dabei methodische Unterstützung durch Trainer:innen und Fachexpert:innen.",
      steps: [
        "Problem identifizieren",
        "Daten & Prozesse analysieren",
        "Nutzenhypothese formulieren",
        "Machbarkeit prüfen",
        "Risiken bewerten",
        "Business Case ausarbeiten",
        "Ergebnisse präsentieren",
      ],
      crossIndustryLabel: "Cross-Industry Learning",
      crossIndustryText: "Ergänzend zu den unternehmenseigenen Aufgaben werden ausgewählte Anwendungsfälle aus anderen Branchen bearbeitet. Dadurch erkennen die Teilnehmenden übertragbare Muster, neue Lösungsansätze und mögliche Synergien.",
    },
    customization: {
      label: "Individuell auf Ihr Unternehmen abgestimmt",
      title: "Mögliche Anpassungsbereiche",
      subtitle: "Das Programm wird auf die strategischen Ziele, den technologischen Reifegrad und die bestehenden Systeme des Unternehmens zugeschnitten.",
      groups: [
        {
          title: "Tools und Plattformen",
          items: [
            "unternehmenseigene KI-Assistenten",
            "Microsoft 365 Copilot",
            "Copilot Studio und Power Platform",
            "Azure, Databricks oder vergleichbare Datenplattformen",
            "interne Wissensdatenbanken und Lernplattformen",
          ],
        },
        {
          title: "Fachbereiche und Anwendungsfelder",
          items: [
            "Vertrieb und Kundenservice",
            "Finance und Controlling",
            "Human Resources",
            "Marketing und Kommunikation",
            "Produktion und Logistik",
            "Einkauf und Supply Chain",
            "Recht, Compliance und Risikomanagement",
            "IT, Datenmanagement und Innovation",
          ],
        },
        {
          title: "Strategische Zukunftsthemen",
          items: [
            "KI-Agenten und agentische Systeme",
            "Prozessautomatisierung",
            "Data und AI Security",
            "Responsible AI",
            "Advanced Analytics",
            "digitale Geschäftsmodelle",
            "zukünftige Technologieentwicklungen",
          ],
        },
      ],
    },
    process: {
      label: "Vom Impuls zur Wirkung",
      title: "So entsteht Ihr KI-Kompetenzprogramm",
      subtitle: "Von der Analyse bis zur Skalierung.",
      steps: ["Analyse & Zielbild", "Curriculum & Lernpfade", "Pilotierung", "Umsetzung & Begleitung", "Skalierung"],
    },
    benefits: {
      label: "Der Nutzen",
      title: "Was Ihr Unternehmen gewinnt",
      items: [
        {
          title: "Gemeinsame Orientierung",
          text: "Mitarbeitende und Führungskräfte entwickeln ein einheitliches Verständnis von Daten, KI, Chancen und Verantwortlichkeiten.",
        },
        {
          title: "Produktive KI-Nutzung",
          text: "KI-Werkzeuge werden nicht nur vorgestellt, sondern in konkrete Arbeitsabläufe integriert.",
        },
        {
          title: "Priorisierte Use Cases",
          text: "Ideen werden anhand von Nutzen, Machbarkeit, Risiko und Skalierbarkeit systematisch bewertet.",
        },
        {
          title: "Interne Kompetenzen",
          text: "Das Unternehmen baut Multiplikator:innen, KI-Champions, technische Expert:innen und entscheidungsfähige Führungsteams auf.",
        },
        {
          title: "Verantwortungsvolle Umsetzung",
          text: "Governance, Datenschutz, Sicherheit und regulatorische Anforderungen werden von Beginn an berücksichtigt.",
        },
        {
          title: "Messbarer Transfer",
          text: "Das Programm erzeugt konkrete Ergebnisse wie Workflows, Use-Case-Portfolios, Business Cases, Prototypen und Roadmaps.",
        },
      ],
    },
    formats: {
      label: "Flexible Programmgestaltung",
      title: "Umfang, Dauer und Format nach Bedarf",
      subtitle: "Das KI-Kompetenzprogramm ist modular aufgebaut. Umfang, Dauer und Kombination der Lernpfade richten sich nach dem Reifegrad und den Zielen des Unternehmens. Die Durchführung ist in Präsenz, online oder in einem hybriden Format möglich.",
      badges: [
        "kompaktes Foundation Program",
        "mehrstufige Learning Journey",
        "rollenspezifische Intensivprogramme",
        "Executive Workshops",
        "Train-the-Trainer-Programme",
        "Use-Case-Sprints",
        "technische Bootcamps",
        "begleitete Pilotprojekte",
        "unternehmensweite KI-Akademie",
      ],
      facultyLabel: "Faculty und Expert:innen",
      facultyText: "Für jedes Programm wird ein passender Pool aus Trainer:innen, Wissenschaftler:innen, Technologieexpert:innen und Praktiker:innen zusammengestellt. Die Auswahl orientiert sich an den jeweiligen Modulen, Zielgruppen, Technologien und Anwendungsfällen. Die Teilnehmenden erhalten so nicht nur theoretisches Wissen, sondern unterschiedliche Perspektiven aus Forschung, Wirtschaft und konkreter Umsetzungspraxis.",
    },
    faq: {
      label: "Häufige Fragen",
      title: "Was Unternehmen wissen möchten",
      items: [
        {
          q: "Für welche Unternehmen eignet sich das Programm?",
          a: "Das Programm eignet sich für Unternehmen und Organisationen, die KI strukturiert einführen, bestehende Initiativen skalieren oder ihre Mitarbeitenden gezielt für den Einsatz von KI befähigen möchten.",
        },
        {
          q: "Müssen bereits KI-Werkzeuge vorhanden sein?",
          a: "Nein. Das Programm kann sowohl die Einführung neuer Werkzeuge begleiten als auch bestehende Systeme und Lernangebote integrieren.",
        },
        {
          q: "Benötigen die Teilnehmenden technische Vorkenntnisse?",
          a: "Für das Foundation Program und den Lernpfad für KI-Anwender:innen sind keine technischen Vorkenntnisse erforderlich. Technische Inhalte werden in einem eigenen Lernpfad vertieft.",
        },
        {
          q: "Können unternehmenseigene Anwendungsfälle eingebracht werden?",
          a: "Ja. Reale Aufgaben und Use Cases aus dem Unternehmen bilden einen zentralen Bestandteil des Programms.",
        },
        {
          q: "Wird das Programm an interne Richtlinien angepasst?",
          a: "Ja. Governance, Datenschutz, Sicherheitsanforderungen, bestehende Freigabeprozesse und interne Standards werden in das Curriculum integriert.",
        },
        {
          q: "Wie wird der Lernerfolg sichtbar?",
          a: "Der Erfolg wird nicht nur über Teilnahme und Wissenschecks beurteilt. Je nach Programm entstehen konkrete Arbeitsergebnisse wie KI-Workflows, Use-Case-Portfolios, Business Cases, Prototypen und Umsetzungsroadmaps.",
        },
      ],
    },
    closing: {
      title: "KI-Kompetenz, die im Unternehmen wirksam wird",
      text: "Ein erfolgreiches KI-Programm endet nicht mit dem letzten Trainingstag. Es schafft die Voraussetzungen dafür, dass Menschen KI sicher einsetzen, Potenziale eigenständig erkennen und gemeinsam in die Umsetzung bringen. Wir verbinden Lernen, Anwendung und Umsetzung zu einem integrierten Befähigungssystem für Ihr Unternehmen.",
      cta: "KI-Kompetenzprogramm besprechen",
    },
  },
};
