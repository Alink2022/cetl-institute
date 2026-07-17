import type { ContentBundle } from "./content-types";
import { ARTICLES } from "./insights-articles";

export const en: ContentBundle = {
  SITE: {
    name: "CETL Institute",
    fullName: "Central European Tech Leadership Institute",
    url: "https://cetl-institute.vercel.app",
    email: "office@cetl-institute.eu",
    // Form requests always go to the board (requirement Stefan, 2026-07-12).
    formEmail: "vorstand@eqaf.eu",
    location: "Vienna, Austria",
    region: "Central Europe",
    academic: "TU Wien, Academic Director",
    tagline: "Technological sovereignty is not a state. It is a competency.",
    complianceNote:
      "All CETL activities are strictly limited to organizations outside the insurance sector — insurance compliance, regulatory insurance topics, and insurance-specific mandates are explicitly excluded.",
  },

  NAV_LINKS: [
    { label: "About", href: "#about" },
    { label: "Research", href: "#research" },
    { label: "Services", href: "#services" },
    { label: "ELaaS", href: "#elaas" },
    { label: "Programs", href: "#programs" },
    { label: "Leadership", href: "#leadership" },
    { label: "Insights", href: "/insights" },
    { label: "Partners", href: "#partners" },
  ],

  MANAGING_DIRECTOR: {
    name: "Alin Kalam",
    initials: "AK",
    title: "Managing Director",
    headline: "Head of AI Coordination & Market Intelligence, UNIQA Insurance Group",
    location: "Vienna, Austria",
    linkedin: "https://www.linkedin.com/in/alinkalam/",
    bio: "20+ years at the intersection of AI strategy, data, and enterprise execution — from AI governance and market intelligence at UNIQA International to BI leadership at Lufthansa Group and Big Data at BAWAG P.S.K. Trained in engineering, business, and astrophysics at TU Wien, CEU, and the University of Vienna.",
    credentials: [
      { label: "UNIQA Insurance Group", sub: "Head of AI Coordination & Market Intelligence" },
      { label: "Lufthansa Group", sub: "Strategic BI & Analytics Lead" },
      { label: "BAWAG P.S.K.", sub: "Big Data Officer" },
      { label: "TU Wien", sub: "MSc, Engineering Management" },
    ],
    focus: ["AI Strategy & Governance", "Decision Intelligence", "Market Intelligence", "Data Strategy"],
  },

  PILLARS: [
    {
      number: "01",
      icon: "Brain",
      title: "Executive Education",
      subtitle: "Technological Judgment",
      description:
        "Not training. Not awareness campaigns. Leadership teams develop the technological judgment to decode vendor narratives, independently assess architecture risks, and weight use-case portfolios by strategic priority — not demonstrability.",
      items: [
        "Technology risk assessment for strategic decision-makers",
        "Structured use-case prioritization by data maturity and ROI",
        "AI governance frameworks for regulated industries",
      ],
    },
    {
      number: "02",
      icon: "TrendingUp",
      title: "Embedded Engineering",
      subtitle: "Capability That Stays",
      description:
        "Forward Deployed Engineers are not external consultants — they are temporarily embedded specialists who work methodically alongside your technical teams. The objective is not project delivery but structured transfer of enterprise AI and data competency directly into your organization. Validated competency remains in the organization throughout — vendor-neutral and structurally independent of external providers.",
      items: [
        "Forward Deployed Engineers (3–6 months, project-integrated)",
        "Internal AI capability as measurable delivery metric",
        "Governance framework development with internal teams",
      ],
    },
    {
      number: "03",
      icon: "Award",
      title: "Technical Assessment",
      subtitle: "Vendor-Neutral. Uncompromised.",
      description:
        "CETL holds no reseller agreements, no platform partnerships. Architecture reviews, feasibility assessments, and legacy decommissioning strategies are developed exclusively on the basis of technical validity, compliance requirements, and long-term architectural sovereignty.",
      items: [
        "Vendor-neutral architecture and feasibility reviews",
        "Data and governance maturity assessment",
        "Legacy decommissioning roadmaps with risk profiles",
      ],
    },
  ],

  METHODOLOGY_STEPS: [
    {
      n: "1",
      icon: "Lightbulb",
      title: "Understand",
      description:
        "Participants learn how data, AI, and modern automation actually work — and can realistically assess potential, limits, and risks.",
    },
    {
      n: "2",
      icon: "Cog",
      title: "Apply",
      description:
        "Your organization's own tools, processes, and standards are integrated directly. AI is tested against typical day-to-day tasks.",
    },
    {
      n: "3",
      icon: "Users",
      title: "Transfer",
      description:
        "Practical examples from other business units and industries open new perspectives — successful patterns are transferred to your own organization.",
    },
    {
      n: "4",
      icon: "Flag",
      title: "Execute",
      description:
        "Every learning journey ends in a concrete application: structured use cases, prototypes, business cases, or implementation roadmaps.",
    },
  ],

  PROGRAMS: [
    {
      tag: "Executive Education",
      title: "Technological Judgment",
      format: "Half-day / Full-day",
      level: "Strategic Leadership",
      description:
        "Intensive formats that develop the capacity to decode vendor narratives, independently assess architecture risks, and weight use-case portfolios by strategic priority — without requiring technical background.",
    },
    {
      tag: "Strategic Consulting",
      title: "AI Strategy Bootcamp",
      format: "2–3 days, intensive",
      level: "Leadership Teams",
      description:
        "Practice bootcamp that converts AI strategy into operational roadmaps. Teams leave with prioritized use cases, clearly defined governance structures, and implementation accountability that stays internal.",
    },
    {
      tag: "ELaaS",
      title: "Forward Deployed Engineer Program",
      format: "3–6 month engagement",
      level: "Technical & Architecture Teams",
      description:
        "CETL engineers work directly in your teams — project-integrated, not parallel. Result: validated internal experts, documented governance structures, and a use-case pipeline that can be independently extended.",
    },
    {
      tag: "Technical Assessment",
      title: "Architecture Review & Feasibility",
      format: "4–6 weeks",
      level: "Architecture & Technology Leadership",
      description:
        "Vendor-neutral audit of existing AI and data architecture. Delivers: feasibility report, risk register, vendor lock-in analysis, and methodological legacy decommissioning roadmap.",
    },
    {
      tag: "Executive Education",
      title: "Technology Trend Briefing",
      format: "2–3 hours",
      level: "Strategic Decision-Makers",
      description:
        "Curated briefings on AI developments in your sector: regulatory environment, competitive architectures, and emerging use cases — without vendor agenda.",
    },
    {
      tag: "ELaaS",
      title: "Use-Case Prioritization Workshop",
      format: "1 day",
      level: "Cross-Functional Teams",
      description:
        "Structured methodology for identifying and prioritizing AI use cases by data maturity, governance prerequisites, and ROI potential — result: an actionable innovation backlog with clear ownership.",
    },
    {
      tag: "Enterprise Program",
      title: "AI Competency Program for Enterprises",
      format: "Modular · 3–12 months",
      level: "All roles — staff to leadership",
      description:
        "Role-based enablement program combining knowledge-building, hands-on application, and real use cases. From the Foundation Program to the AI Leadership journey — every learning path ends in a concrete, company-specific result.",
    },
  ],

  TAG_COLORS: {
    "Executive Education": "gold",
    "Strategic Consulting": "blue",
    ELaaS: "gold",
    "Technical Assessment": "muted",
    "Enterprise Program": "blue",
  },

  PARTNERS: [
    { name: "TU Wien", sub: "Academic Partner", logo: "/logos/tuwien.svg", logoWidth: 84, logoHeight: 84 },
    { name: "City of Vienna", sub: "Public Partner", logo: "/logos/wien.svg", logoWidth: 190, logoHeight: 87 },
    { name: "European Union", sub: "Institutional Partner", logo: "/logos/eu.svg", logoWidth: 160, logoHeight: 53 },
    { name: "ÖBB", sub: "Industry Partner", logo: "/logos/oebb.svg", logoWidth: 130, logoHeight: 52 },
    { name: "Siemens", sub: "Industry Partner", logo: "/logos/siemens.svg", logoWidth: 190, logoHeight: 45 },
  ],

  PROBLEM_ITEMS: [
    {
      title: "PoC Graveyards Instead of Enterprise Operations",
      desc: "The use case works in sandbox. Production data unresolved, governance undefined, ownership unassigned. Three quarters — zero scalable value creation.",
    },
    {
      title: "Capability Loss Through Classical Consulting Models",
      desc: "External expertise temporarily substitutes your organization. What remains: a technical dependency that must be re-purchased in the next cycle.",
    },
    {
      title: "Technological Sovereignty Under Platform Pressure",
      desc: "Architecture decisions under time pressure create lock-in structures that materialize over years in license, migration, and opportunity costs.",
    },
    {
      title: "Governance and Data Maturity as Afterthoughts",
      desc: "Models built on unresolved data and governance structures rarely survive the path into regular enterprise operations.",
    },
  ],

  RESEARCH_STATS: [
    {
      id: "transformations-fail",
      kind: "ring",
      value: "70%",
      label: "of large-scale transformation projects miss their stated objectives",
      detail: "Most failures stem from execution and adoption — not technology selection.",
      source: "McKinsey & Company, Transformation Research",
    },
    {
      id: "ai-projects-fail",
      kind: "gauge",
      value: "85%",
      label: "of AI projects fail to deliver expected business value",
      detail: "Poor data quality, unclear ownership, and weak governance are the primary causes.",
      source: "Gartner, AI Research",
    },
    {
      id: "ai-financial-benefit",
      kind: "bars",
      value: "10%",
      label: "of companies report significant financial benefit from AI in regular operations",
      detail: "The gap separates organizations with sustainable capability-building from those permanently piloting.",
      source: "BCG × MIT Sloan Management Review, \"Expanding AI's Impact With Organizational Learning\"",
    },
    {
      id: "ai-investment-growth",
      kind: "trend",
      value: "~13×",
      label: "growth in global private AI investment over the past decade",
      detail: "Capital flows faster than most organizations can operationally absorb.",
      source: "Stanford HAI, AI Index Report",
    },
  ],

  EXECUTION_GAP: {
    label: "CETL Execution Readiness Index",
    detail: "Proprietary benchmark from CETL client assessments — illustrative, not a scientific study.",
    rows: [
      { label: "AI awareness at leadership level", value: 82 },
      { label: "Documented AI strategy", value: 54 },
      { label: "Governance & data maturity", value: 37 },
      { label: "Operational execution capability", value: 24 },
    ],
  },

  QUOTES: [
    {
      quote: "AI is the new electricity.",
      translation: "AI is the new electricity.",
      author: "Andrew Ng",
      role: "Co-founder Google Brain; Founder DeepLearning.AI",
    },
    {
      quote:
        "We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten.",
      translation:
        "We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten.",
      author: "Bill Gates",
      role: "Co-founder, Microsoft",
    },
    {
      quote: "Culture eats strategy for breakfast.",
      translation: "Culture eats strategy for breakfast.",
      author: "Peter Drucker",
      role: "Management theorist",
    },
  ],

  FAQ_ITEMS: [
    {
      q: "What distinguishes CETL from a classical management consultancy?",
      a: "Classical consulting models deliver recommendations and project resources — both unavailable after contract end. CETL delivers capability structures: validated internal experts, documented frameworks, and governance architectures that operate independently of the CETL engagement.",
    },
    {
      q: "What does vendor neutrality mean in concrete terms?",
      a: "CETL holds no reseller accreditations, platform partnerships, or license-revenue-dependent structures with AI or cloud providers. All technical recommendations are based exclusively on fit to the existing architecture, compliance requirements, and the organization's mid-term sovereignty objectives.",
    },
    {
      q: "Which organization types is the portfolio designed for?",
      a: "For organizations with enterprise architecture complexity and regulatory requirements — primarily in financial services, industry, and the public sector. The focus is on organizations treating AI initiatives as strategic infrastructure, not isolated innovation projects.",
    },
    {
      q: "How is an engagement structured?",
      a: "Following an initial scoping conversation, a clearly defined scope of work is developed — with milestones, measurable outcomes, and a transparent fee model (day rate, fixed price, or framework agreement). The process is designed for internal procurement requirements of regulated organizations.",
    },
    {
      q: "How long does a typical engagement take?",
      a: "Anywhere from a few hours to several months. Point formats (briefings, workshops) run hours to days; the role-based AI competency program runs modularly over 3–12 months. Exact duration for each format is listed directly on the program cards above.",
    },
  ],

  CONTACT_ITEMS: [
    { label: "Email", value: "office@cetl-institute.eu", href: "mailto:office@cetl-institute.eu" },
    { label: "Location", value: "Vienna, Austria (Central Europe)", href: null },
    { label: "Academic Partnership", value: "TU Wien, Academic Director", href: null },
  ],

  CONTACT_INTEREST_OPTIONS: [
    "Executive Education / Technological Judgment",
    "Embedded Engineering / Forward Deployed Engineers",
    "AI Competency Program for Enterprises",
    "Strategic Consulting",
    "Architecture Review & Technical Assessment",
    "Use-Case Prioritization Workshop",
    "Europe Tech Hackathon",
    "General Inquiry",
  ],

  UI: {
    nav: { ctaContact: "Get in Touch", toggleMenu: "Toggle menu" },
    hero: {
      badgeLocation: "CETL · Vienna",
      headlineLine1: "",
      headlineGradient: "Enough strategy papers.",
      headlineLine3: "Enterprise operations are waiting.",
      paragraph:
        "CETL Institute combines academic rigor with industrial execution experience — from the leadership level to a role-based AI competency program for the entire organization. Understand. Apply. Execute.",
      ctaPrimary: "Request Executive Framework",
      ctaSecondary: "Initiate Strategic Exchange",
      stats: [
        { value: "3", label: "Instruments" },
        { value: "Enterprise", label: "Architecture Focus" },
        { value: "Banks & Industry", label: "Sector Focus" },
      ],
      ticker: [
        "Executive Education",
        "Embedded Engineering",
        "Technical Assessment",
        "AI Competency Program for Enterprises",
        "Forward Deployed Engineers",
        "Governance Frameworks",
        "Academic Partnership TU Wien",
      ],
      badgeVienna: "Vienna · Austria",
      badgeTUWien: "TU Wien Partner",
      badgeFDE: "Forward Deployed Engineers",
      photoCaption: "Managing Director",
    },
    problem: {
      quoteBefore: "Not missing awareness.",
      quoteHighlight1: "Missing",
      quoteMiddle: "",
      quoteHighlight2: "operationalization.",
      intro:
        "Large-scale AI and data initiatives do not fail from lack of ambition. They fail from structural incompatibility between strategic intent and technical reality — between what a roadmap promises and what enterprise architecture, data maturity, and governance can actually sustain.",
      answer: "The structural antidote: methodological capability-building over consulting dependency →",
    },
    pillars: {
      label: "The Portfolio",
      title: "Three instruments. One goal: Operational AI sovereignty.",
      subtitle:
        "No one-size-fits-all format. No generic curriculum. The portfolio is designed for the specific maturity gaps of organizations with complex enterprise architecture and regulatory requirements.",
    },
    methodology: {
      label: "How our programs run",
      title: "Learn, apply, and execute",
      subtitle:
        "Our approach follows the principle of Executional Learning: knowledge is never taught in isolation — it is tied directly to your organization's real tasks and challenges.",
      cta: "See the full methodology",
    },
    programs: {
      label: "Flagship Program",
      title: "One program. Every role. Full operational impact.",
      subtitle:
        "From the Foundation Program to the AI Leadership journey: our end-to-end format brings knowledge-building, hands-on application, and real use cases together in one system — for every role in the organization.",
      cta: "Initiate framework conversation",
      filterAll: "All formats",
      filterLabel: "Filter by format",
      ctaAdvisor: "Talk with an advisor",
      detailCta: "Explore the program in detail",
    },
    partners: {
      trusted: "Trusted by leading institutions & organizations",
      blurbBefore: "Organizer of the",
      blurbHackathon: "Europe Tech Hackathon",
      blurbAfter:
        "— public institutions, global enterprises, and academic leaders jointly driving technology-led transformation in Central Europe.",
    },
    leadership: {
      label: "Leadership",
      title: "Managing Director",
      subtitle:
        "The academic and operational mind behind CETL Institute's Executional Learning principle.",
      linkedin: "LinkedIn Profile",
      focus: "Focus Areas",
      photoTag: "AI Keynote Speaker",
      photoAlt: "Alin Kalam speaking at an AI and human-centered innovation conference",
    },
    research: {
      label: "Research & Evidence",
      title: "The execution gap is not an exception",
      subtitle:
        "Independent studies from McKinsey, Gartner, BCG, MIT Sloan Management Review, and Stanford HAI reach the same conclusion: the limiting factor for AI value creation is rarely the technology.",
    },
    faq: { label: "Frequently Asked", title: "Questions decision-makers ask first" },
    contact: {
      label: "Contact",
      title: "Initiate strategic exchange",
      subtitle:
        "Whether architecture review, embedded engineering engagement, or executive briefing: the first conversation is non-binding and serves to clarify scope.",
      targetAudienceLabel: "Target audience",
      targetAudienceText: "Organizations with enterprise architecture complexity in financial services, industry, and the public sector — outside the insurance sector — across Central Europe.",
      complianceLabel: "Compliance notice",
      nameLabel: "Full Name *",
      namePlaceholder: "Dr. Maria Sample",
      companyLabel: "Company *",
      companyPlaceholder: "Sample Bank AG",
      emailLabel: "Email *",
      emailPlaceholder: "maria.sample@company.com",
      interestLabel: "Topic area",
      interestPlaceholder: "Select area",
      messageLabel: "Context",
      messagePlaceholder: "Describe your current architecture situation, regulatory requirements, or the strategic context of your inquiry...",
      submit: "Submit inquiry",
      successTitle: "Inquiry submitted",
      successText: "Your email client should have opened. Response within 48 hours.",
      mailSubjectPrefix: "CETL Inquiry",
      mailGeneral: "General",
      mailFieldName: "Name",
      mailFieldCompany: "Company",
      mailFieldEmail: "Email",
      mailFieldInterest: "Topic area",
    },
    footer: {
      tagline: "Central European Tech Leadership Institute. Technological sovereignty is not a state — it is a competency.",
      navLabel: "Navigation",
      contactLabel: "Contact",
      location: "Vienna, Austria",
      region: "Central Europe",
      copyright: "All rights reserved.",
      complianceLine: "All services are strictly limited to organizations outside the insurance sector.",
    },
    wordMarquee: ["SOVEREIGNTY", "ARCHITECTURE", "GOVERNANCE", "OPERATIONALIZATION", "COMPETENCY"],
    testimonials: {
      label: "From Practice",
      title: "What decision-makers say after experiencing the difference.",
      subtitle: "Anonymized at organizational request — roles and sectors are authentic.",
      anonymousNote: "Anonymized at the organization's request",
    },
    insights: {
      label: "Thought Leadership",
      title: "From research into practice.",
      subtitle: "Analyses and frameworks for decision-makers thinking beyond the next pilot.",
      cta: "All publications",
      readCta: "Read analysis",
      pageTitle: "Insights & Publications",
      pageSubtitle:
        "Research briefs, whitepapers and frameworks for decision-makers in banking, industry and the public sector — from research into practice.",
      back: "All insights",
      published: "Published",
      byline: "Alin Kalam — Managing Director, CETL Institute",
      ctaTitle: "Start the strategic conversation.",
      ctaText:
        "Whether architecture review, embedded engineering engagement or executive briefing for the leadership level: the first conversation is non-binding and serves to clarify scope.",
      ctaButton: "Get in touch",
      moreLabel: "More analyses",
      authorLabel: "About the author",
      share: "Share article",
      shareCopied: "Link copied",
      prevLabel: "Previous analysis",
      nextLabel: "Next analysis",
    },
    instStats: { label: "CETL in numbers" },
    community: {
      label: "Community",
      title: "Europe Tech Hackathon & the Executional Community.",
      subtitle: "Communities win when they convert insight and networking into measurable delivery outcomes. Initiated by CETL Institute, the Europe Tech Hackathon is our flagship community platform.",
      advisorCta: "Talk with an advisor",
    },
    intersection: {
      label: "Ecosystem & Partners",
      title: "Uniquely positioned at the intersection.",
      subtitle: "CETL sits precisely at the center of Academia, Community and Industry — the intersection of enterprise demand, flagship community visibility and academic partnership depth.",
    },
    caseStudy: {
      label: "In Practice",
      title: "Proof the model works.",
      subtitle: "Executional Learning in action — with measurable transfer.",
    },
    faculty: {
      label: "People",
      positionOpen: "Position Open",
      featuredTitle: "+ Featured experts",
      featuredDesc: "From the Central European AI, research and community landscape — curated per module and use case.",
    },
    forOrgs: {
      label: "For Organizations",
      title: "Transform technological ambition into operational reality.",
      subtitle:
        "CETL works directly with organizations — not individuals. Every engagement is tailored to the organization's specific architecture situation, regulatory environment, and strategic objectives.",
      ctaPrimary: "Request custom engagement",
      ctaSecondary: "Start needs assessment",
      items: [
        {
          title: "Custom-built programs",
          desc: "No standard curriculum. Every program is calibrated to the organization's data maturity, governance structure, and use-case portfolio.",
        },
        {
          title: "Integrated execution",
          desc: "CETL experts work inside your live initiatives — not alongside them. No lab, no presentation, no report without implementation accountability.",
        },
        {
          title: "Measurable outcomes",
          desc: "Every engagement pre-defines acceptance criteria: validated internal experts, documented governance, prioritized use-case pipeline.",
        },
        {
          title: "Vendor-neutral assessment",
          desc: "No platform deals, no reseller margins. Architecture recommendations follow technical validity and compliance requirements exclusively.",
        },
      ],
    },
  },

  TESTIMONIALS: [
    {
      quote: "AI initiatives don't fail because of technology. They fail because of the organization. CETL helped us understand that — before we approved the next budget round.",
      role: "Head of Digital Transformation",
      sector: "Austrian major bank",
      orgSize: "2,500+ employees",
    },
    {
      quote: "We had an AI strategy. What we didn't have was the internal capability to execute it. The Embedded Engineering program changed that in four months — structurally, not superficially.",
      role: "Chief Data Officer",
      sector: "Austrian industry",
      orgSize: "800+ employees",
    },
    {
      quote: "The Architecture Review uncovered three vendor lock-in structures we hadn't seen ourselves. Vendor-neutral, methodical, uncompromising. Exactly what you need before making a platform decision.",
      role: "Head of IT Strategy",
      sector: "Public sector",
      orgSize: "Federal authority",
    },
  ],

  // Cards are derived from the full-text articles — one source, no duplicates.
  INSIGHTS: ARTICLES.en.map(({ blocks: _blocks, date: _date, ...card }) => card),

  INST_STATS: [
    { value: "20+", label: "Years of industry experience", sub: "Leadership teams in banking, industry & public sector" },
    { value: "3", label: "Competency instruments", sub: "Executive Education · Embedded Engineering · Technical Assessment" },
    { value: "TU Wien", label: "Academic partnership", sub: "Academic rigor. Industrial execution experience." },
    { value: "EU", label: "Institutional framework", sub: "Europe Tech Hackathon · City of Vienna · ÖBB · Siemens" },
  ],

  COMMUNITY: {
    pills: ["Europe Tech Hackathon", "City of Vienna", "Vienna Business Agency", "ÖBB", "Siemens", "Meet-ups", "Tech Workshops", "Know-how Exchange"],
    features: [
      {
        title: "Flagship visibility",
        desc: "The European (AI & Data) Tech Hackathon — organized with the City of Vienna, Vienna Business Agency, ÖBB and further partners — creates Europe-wide visibility, engagement and market relevance.",
      },
      {
        title: "Year-round formats",
        desc: "Roundtables, Data & AI Executive Club, Safari, Dinner and Editions keep the community active and relevant — converting networking into structured partnership and delivery opportunities.",
      },
      {
        title: "Execution vehicle",
        desc: "The Tech Execution Community feeds directly into CETL's agenda: guided delivery, operating-model thinking and implementation readiness — an executional ecosystem beyond classical consulting.",
      },
    ],
    quote: "Insight + networking, converted into measurable delivery outcomes.",
    quoteAttribution: "TEC Community × CETL Institute",
  },

  FACULTY_POSITIONS: [
    { initials: "MD", role: "Managing Director", desc: "Overall steering, strategy and partnerships of CETL Institute GmbH." },
    { initials: "AD", role: "Academic Director", desc: "Academic rigor, curriculum architecture and university collaboration." },
    { initials: "FD", role: "Faculty Director", desc: "Curation of the lecturer, trainer and keynote pool across programs." },
    { initials: "ID", role: "Industry Director", desc: "Enterprise demand, corporate access and cross-industry transfer." },
    { initials: "CD", role: "Community Director", desc: "Europe Tech Hackathon, executive formats and community activation." },
  ],

  CASE_STUDY: {
    clientTag: "CLIENT CASE",
    client: "RLB OÖ × CETL Institute",
    title: "Proof the model works.",
    desc: "Customized Executional Learning programs already deliver for enterprise clients — e.g. the AI Competence Program co-designed with Raiffeisenlandesbank Oberösterreich: an integrated enablement system, not a training catalog.",
    metrics: [
      { label: "Foundation Program", value: "15 days" },
      { label: "Role tracks (AI Users, AI Champions)", value: "2 × 8 days" },
      { label: "Total program scope", value: "31 days", highlight: true },
      { label: "Guided projects", value: "Own use case" },
      { label: "Delivery model", value: "ELaaS" },
    ],
    principles: [
      { num: "I", title: "Role-sharp enablement", desc: "Learning journeys for AI Leadership, AI Users, AI Champions and internal AI Developers — matched to responsibility and maturity." },
      { num: "II", title: "Guided projects with output", desc: "Every learning path ends in concrete use cases, business cases or implementation contributions — from use-case canvas to final pitch." },
      { num: "III", title: "Direct contribution to strategy", desc: "Results feed straight into the client's use-case pipeline, prioritization logic and transformation initiative — measurable transfer." },
    ],
  },

  INTERSECTION_CATEGORIES: [
    {
      label: "Academia",
      partners: [
        { name: "TU Wien", desc: "Technische Universität Wien — academic depth & data literacy" },
        { name: "Lauder Business School", desc: "Applied management & leadership education" },
      ],
    },
    {
      label: "Community",
      partners: [
        { name: "Europe Tech Hackathon", desc: "Flagship European AI & Data community event" },
        { name: "TEC — Tech Execution Community", desc: "Executive network & proven formats" },
      ],
    },
    {
      label: "Industry & Public",
      partners: [
        { name: "City of Vienna", desc: "Public-sector innovation partner" },
        { name: "Vienna Business Agency", desc: "Ecosystem & startup enablement" },
      ],
    },
  ],
};
