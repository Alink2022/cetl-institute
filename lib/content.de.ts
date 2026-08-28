import type { ContentBundle } from "./content-types";
import { ARTICLE_META } from "./insights-index";

export const de: ContentBundle = {
  SITE: {
    name: "CETL Institute",
    fullName: "Central European Tech Leadership Institute",
    url: "https://cetl-institute.vercel.app",
    email: "alinkalam@cetl.institute",
    // Formular-Anfragen gehen immer an den Vorstand (Vorgabe Stefan, 2026-07-12).
    formEmail: "alinkalam@cetl.institute",
    location: "Wien, Österreich",
    region: "Zentraleuropa",
    academic: "TU Wien, Akademischer Direktor",
    tagline: "Technologische Souveränität ist kein Zustand. Sie ist eine Kompetenz.",
    complianceNote:
      "Sämtliche CETL-Aktivitäten richten sich ausschließlich an Organisationen außerhalb der Versicherungsbranche. Versicherungs-Compliance, regulatorische Versicherungsthemen und versicherungsspezifische Mandate sind ausdrücklich ausgeschlossen.",
  },

  NAV_LINKS: [
    { label: "Über uns", href: "#about" },
    { label: "Produkte", href: "#products" },
    { label: "Programme", href: "#case-study" },
    { label: "Insights", href: "/insights" },
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
        { name: "ÖGIG", sub: "Industriepartner", logo: "/logos/academy/oegig.png" },
      ],
    },
  ],

  PRODUCT_GROUPS: [
    {
      label: "Unsere Produkte: Executional Learning",
      cards: [
        {
          number: "1",
          titleLine1: "EXECUTIONAL LEARNING",
          titleLine2: "FOUNDATION",
          tagline: "KI- & Daten-Grundlage mit praktischer Befähigung",
          description: "Strukturierter Einstieg: Kompetenzaufbau trifft Business-Kontext.",
          includes: [
            { icon: "GraduationCap", text: "Grundlegendes KI- & Daten-Lernen" },
            { icon: "Users", text: "Rollen- & kontextspezifisch" },
            { icon: "Target", text: "Strategische Use-Case-Ausrichtung" },
            { icon: "BookOpen", text: "Akademische & Experten-Delivery" },
          ],
          footer: [{ icon: "ShieldCheck", text: "Startpunkt Ihrer KI-Souveränität" }],
        },
        {
          number: "2",
          ribbon: "MOST POPULAR",
          featured: true,
          titleLine1: "EXECUTIONAL LEARNING",
          titleLine2: "CUSTOMIZED",
          tagline: "Foundation plus rollenbasierte Vertiefung",
          description: "Lernen wird zu funktionsspezifischer Kompetenzentwicklung.",
          includes: [
            { icon: "CheckCircle2", text: "Alles aus Foundation" },
            { icon: "User", text: "Rollenspezifische Spezialisierung" },
            { icon: "Star", text: "Executive- & Experten-Formate" },
            { icon: "BarChart2", text: "Projektbefähigung & Mentoring" },
          ],
          footer: [
            { icon: "Layers", text: "Basis-Layer" },
            { icon: "Share2", text: "Spezialisierungspfad" },
          ],
        },
        {
          number: "3",
          ribbon: "FLAGSHIP",
          titleLine1: "FLAGSHIP",
          titleLine2: "EMBEDDED ENGINEERING",
          tagline: "Eingebettete Aktivierung für messbaren Fortschritt",
          description: "Vom Lernen zur praktischen Umsetzung mit Support vor Ort.",
          includes: [
            { icon: "Layers", text: "Alles aus Paket 1 + 2" },
            { icon: "Settings2", text: "Eingebettetes Engineering" },
            { icon: "Share2", text: "Prototyping & Aktivierung" },
            { icon: "Users", text: "Wissenstransfer intern" },
          ],
          footer: [{ icon: "Target", text: "Wirkung direkt im Tagesgeschäft" }],
        },
        {
          number: "4",
          ribbon: "COMMUNITY",
          titleLine1: "EXECUTIONAL",
          titleLine2: "COMMUNITY PACKAGE",
          tagline: "Community-Co-Creation für KI, Daten & Innovation",
          description: "Aktiviert das Ökosystem für gemeinsame Ideenentwicklung.",
          includes: [
            { icon: "Handshake", text: "Flaggschiff-Hackathon-Teilnahme" },
            { icon: "UsersRound", text: "Community-Workshops" },
            { icon: "Lightbulb", text: "15+ Uni-Netzwerk DACH" },
            { icon: "Rocket", text: "Challenge-Framing & Momentum" },
          ],
          footer: [{ icon: "UsersRound", text: "Kollektive Innovationskraft entfesselt" }],
        },
      ],
    },
    {
      label: "Unsere Produkte: Executional Assessments & Enablement",
      cards: [
        {
          number: "1",
          titleLine1: "EXECUTIONAL",
          titleLine2: "ASSESSMENT FOUNDATION",
          tagline: "Von realer Umsetzung zur skalierbaren Assessment-Praxis",
          description: "Baut auf Executional-Learning- & Advisory-Formaten auf.",
          includes: [
            { icon: "Target", text: "Leistungssignale in der Praxis" },
            { icon: "Users", text: "Advisory- & Challenge-Formate" },
            { icon: "ClipboardCheck", text: "Strukturiertes Kompetenzurteil" },
            { icon: "ShieldCheck", text: "Zweite strategische Säule" },
          ],
          footer: [{ icon: "Landmark", text: "Ihre zweite strategische Säule" }],
        },
        {
          number: "2",
          ribbon: "CORE PRODUCT",
          featured: true,
          titleLine1: "CAPABILITY AUDIT &",
          titleLine2: "SKILLS DUE DILIGENCE",
          tagline: "Unabhängige, entscheidungsreife Kompetenzeinsicht",
          description: "Bewertung anhand realer Business Cases.",
          includes: [
            { icon: "Briefcase", text: "Reale Business Cases" },
            { icon: "FileText", text: "Transparente Kriterien" },
            { icon: "Map", text: "Advance-/Develop-Entscheidungen" },
            { icon: "Users", text: "Transformation & Nachfolge" },
          ],
          footer: [{ icon: "BarChart2", text: "Entscheidungsreif für den Vorstand" }],
        },
        {
          number: "3",
          ribbon: "DELIVERY MODEL",
          titleLine1: "PHASED AUDIT",
          titleLine2: "ARCHITECTURE",
          tagline: "Von der Baseline zur Kompetenz-Roadmap",
          description: "Strukturierter, mehrstufiger Bewertungsprozess.",
          includes: [
            { icon: "Calendar", text: "Baseline & Stakeholder-Kalibrierung" },
            { icon: "Search", text: "Eingebettetes Assessment" },
            { icon: "Map", text: "Evidenzbasiertes Mapping" },
            { icon: "Users", text: "Multi-Assessor-Perspektive" },
          ],
          footer: [{ icon: "Clock", text: "Ihr Fahrplan zur Kompetenz-Roadmap" }],
        },
        {
          number: "4",
          ribbon: "DIFFERENTIATOR",
          titleLine1: "THE CETL",
          titleLine2: "EDGE",
          tagline: "Warum sich dieses Modell am Markt abhebt",
          description: "Unabhängige Perspektive, weniger anfällig für interne Politik.",
          includes: [
            { icon: "ShieldCheck", text: "Unabhängige Drittperspektive" },
            { icon: "Scale", text: "Transparent & nachvollziehbar" },
            { icon: "TrendingUp", text: "Kompetenz in Aktion beobachtet" },
            { icon: "Euro", text: "Audit-Insight + Momentum" },
          ],
          footer: [{ icon: "Euro", text: "Vom Audit direkt zur Befähigung" }],
        },
      ],
    },
  ],

  EXECUTIONAL_SERVICES: [
    {
      number: "1",
      title: "Individuelles Executional Learning",
      subtitle: "Lernreisen, die Kompetenzen direkt in der Praxis aktivieren.",
      icon: "GraduationCap",
      items: ["Maßgeschneiderte Lernformate", "Rollenbasierte Aktivierung", "Von Wissen zu Umsetzung"],
    },
    {
      number: "2",
      title: "Individuelles Bildungsdesign & Delivery",
      subtitle: "Skalierbare Lernarchitekturen, abgestimmt auf Kontext und Zielgruppe.",
      icon: "BookOpen",
      items: ["Modularer Programmaufbau", "Flexible Delivery-Formate", "Praxisnahe Business-Relevanz"],
    },
    {
      number: "3",
      title: "Embedded Engineering & Capability Activation",
      subtitle: "Praxisnahe Befähigung nah an realen Business-Herausforderungen.",
      icon: "Settings2",
      items: ["Use-Case-Implementierung", "Prototyping & Validierung", "Technische Befähigung"],
    },
    {
      number: "4",
      title: "Community, Austausch & Co-Creation",
      subtitle: "Kollaborative Formate, die Ökosystem-Energie in Wirkung verwandeln.",
      icon: "Lightbulb",
      items: ["Experten-Austausch", "Co-Creation-Formate", "Von der Idee zur Lösung"],
    },
  ],

  ELAAS_METHODOLOGY: {
    eyebrow: "Unser Core USP",
    headline: "Methodik",
    intro: [
      "Unsere Executional-Learning-Methodik kombiniert das Beste aus hochkarätigen akademischen Modulen mit Zertifizierung, Industrie und Community — und aktiviert Kompetenzen direkt in der Praxis, mit maßgeschneiderten Lernformaten und rollenbasierter Aktivierung für die Transformation von Unternehmen.",
      "Die Methodik skaliert diese Lernarchitekturen flexibel auf Kontext und Zielgruppe, während beispielsweise Embedded Engineering die Befähigung nah an reale Business-Herausforderungen bringt. Über unsere Community verwandeln wir Ökosystem-Energie in gemeinsame Wirkung — von der Idee zur Lösung, die standardisierte Lernformate, Lehrgänge und Seminare (manchmal mit kurzen Capstones) allein nicht liefern können.",
      "Über Forward Deployed Engineering (FDE) und Community-Ansätze schließen wir die Marktlücke zwischen Theorie und Praxis.",
    ],
    image: "/elaas/elaas-methodology-ecosystem.png",
    imageAlt: "ELaaS Methodik & Ökosystem: Foundation-, Specialization- und Executional-Modul im 6-Schritte-Zyklus rund um akademische Welt, Industrie und Community",
    capabilitiesHeading: "Unser Zugang zum Executional Learning",
  },

  PROGRAM_FLOW_STEPS: [
    { n: "1", icon: "Search", title: "Assessment", description: "Ausgangslage und Reifegrad erfassen." },
    { n: "2", icon: "Settings2", title: "Customization", description: "Programm auf Kontext zuschneiden." },
    { n: "3", icon: "Rocket", title: "Program Delivery", description: "Strukturierte Durchführung." },
    { n: "4", icon: "Cog", title: "Anwenden", description: "Wissen auf reale Aufgaben übertragen." },
    { n: "5", icon: "Users", title: "Executional Begleitung", description: "Begleitung bei der Umsetzung." },
    { n: "6", icon: "Globe", title: "Externe Impulse", description: "Perspektiven aus anderen Branchen." },
    { n: "7", icon: "TrendingUp", title: "Advanced Tracks", description: "Vertiefende Spezialisierung." },
    { n: "8", icon: "UsersRound", title: "Community Befähigung", description: "Vernetzung im Ökosystem." },
  ],

  MARKET_STATS: [
    { id: "no-ai", kind: "ring", value: "80%", label: "der EU-Unternehmen nutzen bislang keine KI", source: "Eurostat — Statistical Office of the European Union" },
    { id: "no-training", kind: "ring", value: "76%", label: "der GenAI-nutzenden KMU berichten von keiner Mitarbeiterbeteiligung an KI-Schulungen", source: "OECD — Organisation for Economic Co-operation and Development" },
    { id: "skills-lack", kind: "ring", value: "50%", label: "der KMU ohne GenAI-Nutzung: Mitarbeitenden fehlen die nötigen Kompetenzen", source: "OECD — Organisation for Economic Co-operation and Development" },
    { id: "biggest-barrier", kind: "ring", value: "63%", label: "nennen Kompetenzlücken als größte Barriere für die Unternehmenstransformation", source: "World Economic Forum — Future of Jobs Report 2025" },
    { id: "vision-lack", kind: "ring", value: "43%", label: "nennen fehlende Vision der Führungsebene als Hürde für die KI-Einführung", source: "World Economic Forum — Future of Jobs Report 2025" },
    { id: "workforce-training", kind: "ring", value: "59%", label: "der globalen Arbeitskräfte werden bis 2030 Schulungsbedarf haben", source: "World Economic Forum — Future of Jobs Report 2025" },
    { id: "staff-obstacle", kind: "ring", value: "79%", label: "der EU-Firmen nennen fehlende qualifizierte Mitarbeitende als Investitionshindernis", source: "European Investment Bank — EIB Investment Survey 2025" },
    { id: "genai-growth", kind: "trend", value: "9×", label: "Wachstum bei Stellenausschreibungen mit GenAI-Anforderungen, 2021–2024", source: "World Bank — Digital Progress and Trends Report 2025" },
  ],

  TEAM_MEMBERS: [
    { name: "Alin Kalam", role: "Managing Director & Academic Coordinator", initials: "AK", photo: "/team-alin.png", photoPosition: "50% 12%" },
    { name: "Karl Ivo Sokolov", role: "Co-Founder & Industry Expert", initials: "KS", photo: "/team-ivo.jpeg" },
    { name: "Stefan Bauer", role: "Community & Academic Expert", initials: "SB", photo: "/team-stefan.jpeg" },
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
    { label: "E-Mail", value: "alinkalam@cetl.institute", href: "mailto:alinkalam@cetl.institute" },
    { label: "Standort", value: "Wien, Österreich (Zentraleuropa)", href: null },
    { label: "Akademische Partnerschaft", value: "TU Wien, Akademischer Direktor", href: null },
  ],

  CONTACT_INTEREST_OPTIONS: [
    "Executional Learning",
    "Executional Assessments",
    "Executive Education",
    "Forward Deployed Engineering",
    "CETL Hackathon Teilnahme",
    "CETL Partner werden",
    "Sonstiges",
  ],

  UI: {
    nav: { ctaContact: "Gespräch vereinbaren", toggleMenu: "Menü umschalten" },
    hero: {
      eyebrow: "Central European Tech Leadership Institute",
      headlineLine1: "Executional Learning",
      headlineAccent: "as a Service",
      subheadline: "Vom Kompetenzaufbau zur Umsetzung und skalierbaren Wirkung.",
      body: "CETL Institute bildet die einzigartige Brücke zwischen akademischer Exzellenz, Industrie- bzw. Branchenpraxis und Community.",
      bodyParagraphs: [
        "CETL Institute bildet die einzigartige Brücke zwischen akademischer Exzellenz, Industrie- bzw. Branchenpraxis und Community!",
        "Durch unser eigens entwickeltes ELaaS (Executional Learning as a Service) begleiten wir Unternehmen und ihre Talente branchenübergreifend entlang echter Umsetzung — maßgeschneidert auf Rollen, Prozesse sowie strategische und operative Ziele.",
        "Statt entlang klassischer Kursblöcke (Standard-Trainings, Weiterbildungsprogramme oder durch Consulting-Anbieter initiierte Schulungen) helfen wir Unternehmen mit ELaaS maßgeschneidert durch die aktuelle Transformationswelle: rasant zunehmender KI-Transformationsdruck, fortschreitende Automatisierung ganzer Industriezweige und der unaufhaltsame Ruf nach Prozess- und Effizienzsteigerung.",
      ],
      supportingLine: "Akademische Exzellenz × Branchenpraxis × Community-Umsetzung",
      microProof: ["Maßgeschneidert auf Organisationsprioritäten", "Rollenbasierte Kompetenzreisen", "Echte Use Cases und Umsetzungspfade", "Wissenstransfer, der bleibt"],
      badgeLocation: "CETL · Wien",
      headlineGradient: "Das KI-Kompetenzprogramm",
      headlineLine3: "für Unternehmen.",
      paragraph:
        "Wir machen Ihre Organisation KI-fähig — von der Führungsebene bis in jede Rolle. Wissenschaftlich fundiert. Praktisch umgesetzt.",
      ctaPrimary: "Programmbeispiele ansehen",
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
    methodology: {
      label: "So laufen unsere Programme ab",
      title: "Lernen, anwenden und umsetzen",
      subtitle:
        "Unser Ansatz folgt dem Prinzip des Executional Learning: Wissen wird nicht isoliert vermittelt, sondern unmittelbar mit realen Aufgaben und Herausforderungen Ihres Unternehmens verbunden.",
      cta: "Methodik im Detail ansehen",
      closingLine: "Jede Lernreise muss zu einer stärkeren internen Kompetenz und einem konkreten nächsten Schritt führen.",
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
    team: {
      eyebrow: "Das CETL Team",
      headline: "Die Köpfe hinter CETL Institute",
      intro: "Akademische Exzellenz, Industrieerfahrung und Community-Aufbau — vereint in einem Team, das Executional Learning tatsächlich lebt.",
    },
    footer: {
      tagline: "Central European Tech Leadership Institute. Technologische Souveränität ist kein Zustand. Sie ist eine Kompetenz.",
      navLabel: "Navigation",
      contactLabel: "Kontakt",
      location: "Wien, Österreich",
      region: "Zentraleuropa",
      copyright: "Alle Rechte vorbehalten.",
      complianceLine: "Sämtliche Leistungen richten sich ausschließlich an Organisationen außerhalb der Versicherungsbranche.",
      imprintLabel: "Impressum",
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
    productPortfolio: {
      eyebrow: "CETL Portfolio",
      headline: "Maßschneiderung für die Talente in Ihrem Unternehmen.",
      intro: "CETL befähigt Unternehmen durch die einzigartige, individuelle Kopplung Ihrer Unternehmensstrategie (Standards, Tools, operative Ziele & Herausforderungen) mit den Lernergebnissen und -zielen Ihres wertvollsten Guts: Ihrer Mitarbeiter:innen. CETL Portfolio ist strategisch & operativ auf die spezifischen Reifegradlücken von Organisationen mit komplexer Enterprise-Architektur und regulatorischen Anforderungen ausgelegt — wir verbinden strukturiertes Executional Learning mit unabhängiger Fähigkeitsbewertung und praxisnaher Befähigung, modular kombinierbar von der Grundlage bis zur eingebetteten Umsetzung, mit branchenübergreifenden Use Cases, Industry-Workshops, Data-&-AI-Literacy-Blöcken und Tech-Modulen.",
    },
    programFlow: {
      headline: "So laufen unsere Programme ab",
      goal: "Data & AI Literate Organisation",
    },
    marketStats: {
      eyebrow: "Der Markt im Überblick",
      headline: "CETL schließt die Kompetenzlücke, die am Markt sichtbar ist.",
      intro: "Unabhängige Studien von Eurostat, OECD, World Economic Forum, Europäischer Investitionsbank und Weltbank zeichnen ein klares Bild: Der begrenzende Faktor für KI-Wertschöpfung ist selten die Technologie, sondern fehlende Kompetenz.",
    },
    skillsQuadrant: {
      eyebrow: "Skills der Zukunft",
      headline: "Wir bilden genau die Kompetenzen aus, die 2030 zählen.",
      intro: "Der B2B-Skillbedarf verschiebt sich rasant. CETL-Programme sind gezielt auf jene Kompetenzen ausgerichtet, die Unternehmen schon heute als Kern für 2030 einstufen — nicht auf Skills von gestern.",
      source: "Quelle: World Economic Forum",
      axisX: "Anteil Arbeitgeber, die den Skill 2025 als Kernkompetenz einstufen (%)",
      axisY: "Anteil Arbeitgeber, die steigende Nutzung bis 2030 erwarten (%)",
      quadrantEmerging: "Aufkommende Skills",
      quadrantCore: "Kernkompetenzen 2030",
      quadrantOutOfFocus: "Nachrangige Skills",
      quadrantSteady: "Stabile Skills",
      focusLabel: "CETL-Fokus: Aufkommende & Kernkompetenzen 2030",
    },
    techQuote: {
      quote: "Technologie wird zur Commodity.",
      body: "Für die zukünftige, post-KI-transformierte Ära brauchen wir Fachexpert:innen und Entscheidungsträger:innen mit höchster Literacy in KI, Daten und Technologie an der Schnittstelle zu ihrem Fachgebiet.",
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
      eyebrow: "Das CETL-Ökosystem",
      headline: "CETL Ökosystem",
      intro: "Großflächige Daten- und KI-Initiativen scheitern selten an mangelnder Ambition. Sie scheitern daran, dass Strategie, Kompetenz, Datenreife, Governance und technische Umsetzung als getrennte Aktivitäten behandelt werden. Unser einzigartiges CETL-Ökosystem verbindet akademische Exzellenz, Industriepraxis und Community zu einem koordinierten System aus Wissen, Anwendung und Umsetzung, das direkt als Fundament für das einzigartige Executional Learning dient, das wir liefern.",
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
      eyebrow: "In der Praxis",
      headline: "Beispiele maßgeschneiderter Programme.",
      subtitle: "Zwei Organisationen, zwei Ausgangslagen — ein individuell zugeschnittenes Executional-Learning-Programm.",
      cta: "Ähnliches Programm für Ihr Unternehmen besprechen",
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
    { value: "20+", label: "Jahre Industrieerfahrung", sub: "Cross-business Industrieerfahrung" },
    { value: "ELaaS", label: "Executional Learning as a Service", sub: "Verbindung namhafter akademischer Partnerschaften, Industriezweige & Community für die umsetzungsorientierte Weiterbildung" },
    { value: "Eigene Community", label: "Flagship Community Format", sub: "\"Central Europe Tech Hackathon\" mit der Stadt Wien und zahlreichen Partnern" },
    { value: "50+", label: "Trainer & Lektor:innen", sub: "Industrieübergreifender Trainer- & Lektorenpool" },
    { value: "12+", label: "Akademische Projekte", sub: "Umgesetzte akademische Projekte" },
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

  CASE_STUDIES: [
    {
      icon: "Factory",
      sector: "Infrastruktur & Industrie",
      headline: "Executional Learning & Community Program",
      desc: "Ein groß angelegtes Format mit über 70 Expert:innen aus 12 Universitäten und Fachhochschulen erarbeitete mehr als 12 Lösungsimpulse für Deep-Tech-KI-Projekte — eingebettet in ein mehrstufiges Befähigungsprogramm.",
      metrics: [
        { label: "AI Hackathon", value: "70+ Expert:innen, 12 Hochschulen" },
        { label: "Lösungsimpulse Deep-Tech-KI", value: "12+", highlight: true },
        { label: "Foundation", value: "6 Tage" },
        { label: "Executive Enablement Track", value: "4 Tage" },
        { label: "Unternehmensweite KI-Basis-Schulung", value: "8 Std. (digital)" },
        { label: "Executional Learning", value: "80 Std. (10 Tage) je Projekt" },
        { label: "Out-of-the-Box Sessions", value: "20+ Std., Cross-Industrie-Expert:innen" },
        { label: "AI Roadmap Mentoring", value: "Strategy Guidance" },
      ],
    },
    {
      icon: "Landmark",
      sector: "Bank & Finanz",
      headline: "Umgesetztes Executional Learning",
      desc: "Ein maßgeschneidertes KI-Kompetenzprogramm für eine Regionalbank: ein integriertes Enabling-System mit rollenspezifischen Lernpfaden und begleiteten Projekten — kein Schulungskatalog.",
      metrics: [
        { label: "Foundation Programm", value: "15 Tage" },
        { label: "Role-Tracks (KI-Anwender:innen, KI-Champions)", value: "2 × 8 Tage" },
        { label: "Gesamtprogramm-Umfang", value: "31 Tage", highlight: true },
        { label: "Executional Learning", value: "80 Std. (10 Tage)" },
        { label: "Delivery Model", value: "ELaaS" },
      ],
    },
    {
      icon: "GraduationCap",
      sector: "Executive Academy (Hochschule)",
      headline: "Maßgeschneidertes Bildungsdesign für Executive-Programme",
      desc: "Individuelles Bildungsdesign für ein Executive-Programm einer Universität — von der Konzeption bis zur praxisnahen Umsetzung mit eigenen Daten und Use Cases.",
      metrics: [
        { label: "Bildungsdesign für Executive-Programme", value: "6 Tage" },
        { label: "Bring your own Data Project", value: "16 Std." },
        { label: "Use Case Discovery Track", value: "8 Std." },
        { label: "Storytelling with Data", value: "16 Std." },
      ],
    },
  ],

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
