import type { ContentBundle } from "./content-types";

export const de: ContentBundle = {
  SITE: {
    name: "CETL Institute",
    fullName: "Central European Tech Leadership Institute",
    url: "https://cetl-institute.vercel.app",
    email: "office@cetl-institute.eu",
    location: "Wien, Österreich",
    region: "Zentraleuropa",
    academic: "TU Wien, Akademischer Direktor",
    tagline: "Wir verbinden akademische Exzellenz mit industrieller Umsetzung.",
    complianceNote:
      "Sämtliche CETL-Aktivitäten richten sich ausschließlich an Kunden außerhalb der Versicherungsbranche — Versicherungs-Compliance, regulatorische Versicherungsthemen und versicherungsspezifische Mandate sind ausdrücklich ausgeschlossen.",
  },

  NAV_LINKS: [
    { label: "Über uns", href: "#about" },
    { label: "Studien", href: "#research" },
    { label: "Leistungen", href: "#services" },
    { label: "ELaaS", href: "#elaas" },
    { label: "Programme", href: "#programs" },
    { label: "Geschäftsführung", href: "#leadership" },
    { label: "Partner", href: "#partners" },
  ],

  MANAGING_DIRECTOR: {
    name: "Alin Kalam",
    initials: "AK",
    title: "Geschäftsführer",
    headline: "Head of AI Coordination & Market Intelligence, UNIQA Insurance Group",
    location: "Wien, Österreich",
    linkedin: "https://www.linkedin.com/in/alinkalam/",
    bio: "20+ Jahre Erfahrung an der Schnittstelle von AI-Strategie, Daten und operativer Umsetzung — von AI-Governance und Market Intelligence bei UNIQA International über BI-Führung bei der Lufthansa Group bis zu Big Data bei der BAWAG P.S.K. Ausbildung in Engineering, Wirtschaft und Astrophysik an der TU Wien, der CEU und der Universität Wien.",
    credentials: [
      { label: "UNIQA Insurance Group", sub: "Head of AI Coordination & Market Intelligence" },
      { label: "Lufthansa Group", sub: "Strategic BI & Analytics Lead" },
      { label: "BAWAG P.S.K.", sub: "Big Data Officer" },
      { label: "TU Wien", sub: "MSc, Engineering Management" },
    ],
    focus: ["AI-Strategie & Governance", "Decision Intelligence", "Market Intelligence", "Datenstrategie"],
  },

  PILLARS: [
    {
      number: "01",
      icon: "Brain",
      title: "Executive Education",
      subtitle: "Vorstand & Aufsichtsrat",
      description:
        "Praxisnahe Schulungsformate, Trendbriefings auf Vorstands- und Aufsichtsratsebene sowie branchenspezifische Workshops, die Entscheidungsträger:innen technologisch sprachfähig machen und eine marktorientierte Priorisierung von Use Cases ermöglichen.",
      items: [
        "AI-Literacy-Sessions für die Geschäftsleitung",
        "Trendbriefings für Vorstand und Aufsichtsrat",
        "Branchenspezifische AI-Reifegradanalysen",
        "Identifikation und Priorisierung von Use Cases",
      ],
    },
    {
      number: "02",
      icon: "TrendingUp",
      title: "Strategische Beratung",
      subtitle: "Von der Strategie zur Umsetzung",
      description:
        "Maßgeschneiderte Bootcamps, Führungsformate und praxisnahe Ideation-Workshops, die die Lücke zwischen akademischer Theorie und angewandter Innovation schließen — mit messbaren Umsetzungsergebnissen.",
      items: [
        "Maßgeschneiderte Executive-Bootcamps",
        "Forward Deployed Engineer – Einsatzrollen",
        "Programme zur Führungskräfteentwicklung",
        "Praxisnahe Ideation-Workshops",
      ],
    },
    {
      number: "03",
      icon: "Award",
      title: "Technische Bewertung",
      subtitle: "Unabhängig und belastbar",
      description:
        "Unabhängige Architektur- und Machbarkeitsprüfungen für Großprojekte, Datenmodellierung und Altsystem-Ablösestrategien. Herstellerneutral, compliance-bewusst und ohne Bezug zum Versicherungssektor.",
      items: [
        "Architektur- und Machbarkeitsprüfungen",
        "Datenmodellierung und -strategie",
        "Ablösung von Altsystemen (Legacy-Decommissioning)",
        "Herstellerneutrale Technologiebewertung",
      ],
    },
  ],

  ELAAS_FEATURES: [
    {
      title: "Souveräner Kompetenztransfer",
      desc: "Wir verankern unabhängige technische Kompetenz direkt in Ihrer Führungs- und Fachebene — Ihr Unternehmen behält die volle, herstellerneutrale Kontrolle.",
    },
    {
      title: "Ergebnisorientiertes Ökosystem",
      desc: "Keine Schulung um der Schulung willen. Jedes Programm ist auf messbare Umsetzungsergebnisse und klare ROI-Kennzahlen ausgerichtet.",
    },
    {
      title: "Forward Deployed Engineers",
      desc: "Eingebettete Praxisberater:innen, die direkt mit Ihren Teams arbeiten und die Lücke zwischen Strategie und operativer Umsetzung schließen.",
    },
    {
      title: "Community- und Programm-Synergie",
      desc: "Entwickelt durch die strategische Zusammenarbeit von CETL Institute und Community-Partnern — Wissen und Netzwerk werden zu messbaren Umsetzungsergebnissen.",
    },
  ],

  PROGRAMS: [
    {
      tag: "Executive Education",
      title: "AI-Literacy für die Geschäftsleitung",
      format: "Halbtags / Ganztags",
      level: "Vorstand & Geschäftsführung",
      description:
        "Intensive Formate, die Vorstand und Geschäftsführung ein belastbares Verständnis von AI-Fähigkeiten, Grenzen und strategischen Implikationen vermitteln — ohne technisches Vorwissen vorauszusetzen.",
    },
    {
      tag: "Strategische Beratung",
      title: "AI-Strategie-Bootcamp",
      format: "2–3-tägig, intensiv",
      level: "Führungsteams",
      description:
        "Praxis-Bootcamp, das AI-Strategie in umsetzbare Roadmaps übersetzt. Teams verlassen das Programm mit priorisierten Use Cases, klaren Verantwortlichkeiten und einem Governance-Rahmen.",
    },
    {
      tag: "ELaaS",
      title: "Forward Deployed Engineer Programm",
      format: "3–6 Monate Einsatz",
      level: "Fach- und IT-Bereich",
      description:
        "CETL-Engineers arbeiten direkt in Ihren Teams mit und übertragen souveräne AI- und Daten-Kompetenz — für Umsetzung ab dem ersten Tag.",
    },
    {
      tag: "Technische Bewertung",
      title: "AI-Architektur-Review",
      format: "4–6 Wochen",
      level: "IT-Leitung",
      description:
        "Unabhängige, herstellerneutrale Bewertung Ihrer bestehenden AI- und Datenarchitektur. Liefert Machbarkeitsbericht, Risikoregister und Ablöse-Roadmap für Altsysteme.",
    },
    {
      tag: "Executive Education",
      title: "Branchenspezifisches AI-Trendbriefing",
      format: "2–3 Stunden",
      level: "Fachexpert:innen / Branche",
      description:
        "Kuratierte Briefings zu AI-Entwicklungen Ihrer Branche: regulatorisches Umfeld, Wettbewerbsvergleich und neue Anwendungsfälle.",
    },
    {
      tag: "ELaaS",
      title: "Ideation & Innovation Workshop",
      format: "1 Tag",
      level: "Bereichsübergreifende Teams",
      description:
        "Moderierte Ideation-Workshops, die hochwertige AI-Use-Cases im Unternehmen sichtbar machen, nach ROI und Machbarkeit priorisieren und in ein umsetzbares Innovations-Backlog überführen.",
    },
  ],

  TAG_COLORS: {
    "Executive Education": "gold",
    "Strategische Beratung": "blue",
    ELaaS: "gold",
    "Technische Bewertung": "muted",
  },

  PARTNERS: [
    { name: "TU Wien", sub: "Akademischer Partner" },
    { name: "Stadt Wien", sub: "Öffentlicher Partner" },
    { name: "Europäische Union", sub: "Institutioneller Partner" },
    { name: "ÖBB", sub: "Industriepartner" },
    { name: "Siemens", sub: "Industriepartner" },
  ],

  PROBLEM_ITEMS: [
    {
      title: "Berater ohne nachhaltigen Kompetenzaufbau",
      desc: "Externe Ressourcen hinterlassen keine dauerhafte interne Kompetenz.",
    },
    {
      title: "Pilotprojekte ohne ROI-Klarheit",
      desc: "Proofs of Concept, die nie den Sprung in den Produktivbetrieb schaffen.",
    },
    {
      title: "Management ohne Umsetzungsfähigkeit für AI-Strategie",
      desc: "Führungsteams, die Buzzwords beherrschen, aber keine Ergebnisse liefern.",
    },
    {
      title: "Daten & Governance als Nebensache behandelt",
      desc: "Modelle auf unregulierten Daten überstehen selten den Produktivbetrieb.",
    },
  ],

  RESEARCH_STATS: [
    {
      id: "transformations-fail",
      kind: "ring",
      value: "70%",
      label: "der groß angelegten Transformationsprojekte verfehlen ihre gesteckten Ziele",
      detail: "Die meisten Misserfolge liegen an Umsetzung und Adoption — nicht an der Technologiewahl.",
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
      detail: "Die Lücke trennt Unternehmen mit nachhaltigem Kompetenzaufbau von jenen, die dauerhaft pilotieren.",
      source: "BCG × MIT Sloan Management Review, „Expanding AI's Impact With Organizational Learning”",
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
    detail: "Firmeneigener Benchmark aus CETL-Kundenassessments — illustrativ, keine wissenschaftliche Studie.",
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
      q: "Was unterscheidet CETL von einer klassischen Beratung?",
      a: "Klassische Beratungen liefern Empfehlungen und gehen wieder. CETL verankert Kompetenz im Unternehmen: Forward Deployed Engineers, strukturierter Wissenstransfer und Governance-Frameworks bleiben nach Projektende in Ihrer Organisation.",
    },
    {
      q: "Was bedeutet „herstellerneutral” konkret?",
      a: "CETL hält keine Reseller-Vereinbarungen, Partner-Incentives oder Lizenzerlöse mit einem bestimmten AI-Anbieter oder Cloud-Provider. Empfehlungen richten sich ausschließlich nach Eignung für Ihre Architektur und Ziele.",
    },
    {
      q: "Wie ist der Umgang mit Datenschutz und regulatorischen Anforderungen geregelt?",
      a: "Alle Engagements erfolgen DSGVO-konform. CETL-Aktivitäten schließen ausdrücklich den Versicherungssektor aus — für Banken, Industrie und öffentliche Auftraggeber in Zentraleuropa stehen wir uneingeschränkt zur Verfügung.",
    },
    {
      q: "Wie läuft Angebotslegung und Vertragsgestaltung ab?",
      a: "Nach einem unverbindlichen Erstgespräch erhalten Sie ein Leistungsangebot mit klar definiertem Scope, Meilensteinen und Preismodell (Tages-/Projektsatz oder Rahmenvertrag) — abgestimmt auf Ihre internen Beschaffungsprozesse.",
    },
    {
      q: "Wie lange dauert ein typisches Engagement?",
      a: "Die Formate reichen von einem 2–3-stündigen Trendbriefing bis zu einem 3–6-monatigen Forward-Deployed-Engineer-Programm. Strategische Bootcamps dauern meist 2–3 Tage, technische Assessments 4–6 Wochen.",
    },
  ],

  CONTACT_ITEMS: [
    { label: "E-Mail", value: "office@cetl-institute.eu", href: "mailto:office@cetl-institute.eu" },
    { label: "Standort", value: "Wien, Österreich (Zentraleuropa)", href: null },
    { label: "Akademische Partnerschaft", value: "TU Wien, Akademischer Direktor", href: null },
  ],

  CONTACT_INTEREST_OPTIONS: [
    "Executive Education / AI-Literacy",
    "ELaaS: Executional Learning",
    "Strategische Beratung",
    "Technische Bewertung",
    "Forward Deployed Engineer",
    "Europe Tech Hackathon",
    "Allgemeine Anfrage",
  ],

  UI: {
    nav: { ctaContact: "Kontakt aufnehmen", toggleMenu: "Menü umschalten" },
    hero: {
      badgeLocation: "CETL · Wien",
      headlineLine1: "Die Brücke schlagen:",
      headlineGradient: "Akademische Exzellenz",
      headlineLine3: "trifft industrielle Umsetzung",
      paragraph:
        "Wir übersetzen komplexe AI- und Datenstrategien in umsetzbare Roadmaps — damit Vorstand und Geschäftsführung die digitale Transformation aktiv steuern, statt sie nur zu beobachten.",
      ctaPrimary: "ELaaS entdecken",
      ctaSecondary: "Termin vereinbaren",
      stats: [
        { value: "3", label: "Kernsäulen" },
        { value: "Vorstandsebene", label: "Zielgruppe" },
        { value: "Banken & Industrie", label: "Branchenfokus" },
      ],
      ticker: [
        "Executive Education",
        "ELaaS",
        "Strategische Beratung",
        "Technische Bewertung",
        "Forward Deployed Engineers",
        "Akademische Partnerschaft TU Wien",
      ],
      badgeVienna: "Wien · Österreich",
      badgeTUWien: "TU Wien Partner",
      badgeFDE: "Forward Deployed Engineers",
      photoCaption: "Geschäftsführer",
    },
    problem: {
      quoteBefore: "Moderne Unternehmen leiden nicht an mangelndem",
      quoteHighlight1: "AI-Bewusstsein",
      quoteMiddle: ". Sie leiden an der Unfähigkeit, es",
      quoteHighlight2: "operativ umzusetzen",
      intro:
        "Klassische Schulungs- und Beratungsmodelle erzeugen eine kritische Umsetzungslücke, die Unternehmen daran hindert, den Wert ihrer AI-Investitionen zu realisieren.",
      answer: "CETLs Antwort: Executional Learning as a Service →",
    },
    pillars: {
      label: "Unser Leistungsversprechen",
      title: "Drei Säulen der Transformation",
      subtitle:
        "Ein durchgängiges Rahmenwerk, das Unternehmen von AI-Bewusstsein zu AI-Umsetzung führt — mit souveräner Kompetenz direkt in Führung und Fachbereich.",
    },
    elaas: {
      label: "ELaaS",
      title: "Executional Learning as a Service",
      subtitle:
        "Der führende AI- & Data-Capability-Accelerator — entwickelt, um die Umsetzungslücke zwischen AI-Hype und operativer Realität zu schließen.",
      paragraph:
        "Der Markt bewegt sich von AI-Hype zu AI-Umsetzung. Unternehmen brauchen Kompetenztransfer und Umsetzungsverantwortung — keine weiteren Folien. ELaaS macht aus Führungskräften, die technologische Disruption passiv beobachten, aktive Architekten von AI-getriebenem Unternehmenswert.",
      badges: ["Datenstrategie", "AI-Betriebsmodelle", "Wertschöpfung", "Use-Case-Priorisierung"],
      partnershipLabel: "Strategische Partnerschaft — EMEA",
      partnershipBefore: "Veranstalter des",
      partnershipHackathon: "Europe Tech Hackathon",
      partnershipAfter: "in Partnerschaft mit der Stadt Wien, der Europäischen Union, der ÖBB und Siemens.",
    },
    programs: {
      label: "Programme",
      title: "Formate für echte Umsetzung",
      subtitle:
        "Jedes Programm schließt die Lücke zwischen Wissen und Handeln — vom Vorstandsbriefing bis zum eingebetteten Engineering-Einsatz.",
      cta: "Individuelles Programm besprechen",
    },
    partners: {
      trusted: "Vertrauen führender Institutionen & Organisationen",
      blurbBefore: "Veranstalter des",
      blurbHackathon: "Europe Tech Hackathon",
      blurbAfter:
        "— öffentliche Institutionen, globale Unternehmen und akademische Führungskräfte gemeinsam für technologiegetriebene Transformation in Zentraleuropa.",
    },
    leadership: {
      label: "Geschäftsführung",
      title: "Geschäftsführer",
      subtitle:
        "Der akademische und operative Kopf hinter dem Executional-Learning-as-a-Service-Modell von CETL Institute.",
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
    },
    faq: { label: "Häufige Fragen", title: "Fragen, die Entscheider zuerst stellen" },
    contact: {
      label: "Kontakt",
      title: "Nehmen Sie Kontakt auf",
      subtitle:
        "Ob ELaaS, strategische Beratung oder ein AI-Literacy-Briefing für Ihre Führungsebene: Wir freuen uns auf Ihre Anfrage.",
      targetAudienceLabel: "Zielgruppe",
      targetAudienceText: "Vorstand, Aufsichtsrat und Führungsteams in Banken, Industrie und öffentlichen Institutionen in ganz Zentraleuropa — außerhalb der Versicherungsbranche.",
      complianceLabel: "Compliance-Hinweis",
      nameLabel: "Vollständiger Name *",
      namePlaceholder: "Dr. Maria Muster",
      companyLabel: "Unternehmen *",
      companyPlaceholder: "Musterbank AG",
      emailLabel: "E-Mail *",
      emailPlaceholder: "maria.muster@unternehmen.at",
      interestLabel: "Interessensbereich",
      interestPlaceholder: "Programmbereich auswählen",
      messageLabel: "Nachricht",
      messagePlaceholder: "Erzählen Sie uns von den aktuellen Herausforderungen und Zielen Ihres Unternehmens...",
      submit: "Nachricht senden",
      successTitle: "Nachricht gesendet",
      successText: "Ihr E-Mail-Programm sollte sich geöffnet haben. Wir antworten innerhalb von 48 Stunden.",
      mailSubjectPrefix: "CETL Anfrage",
      mailGeneral: "Allgemein",
      mailFieldName: "Name",
      mailFieldCompany: "Unternehmen",
      mailFieldEmail: "E-Mail",
      mailFieldInterest: "Interesse",
    },
    footer: {
      tagline: "Central European Tech Leadership Institute. Wir verbinden akademische Exzellenz mit industrieller Umsetzung.",
      navLabel: "Navigation",
      contactLabel: "Kontakt",
      location: "Wien, Österreich",
      region: "Zentraleuropa",
      copyright: "Alle Rechte vorbehalten.",
      complianceLine: "Sämtliche Beratungsleistungen richten sich ausschließlich an Kunden außerhalb der Versicherungsbranche.",
    },
    wordMarquee: ["UMSETZUNG", "SOUVERÄNITÄT", "KOMPETENZ", "TRANSFORMATION", "VERANTWORTUNG"],
  },
};
