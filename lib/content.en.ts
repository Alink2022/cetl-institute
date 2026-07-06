import type { ContentBundle } from "./content-types";

export const en: ContentBundle = {
  SITE: {
    name: "CETL Institute",
    fullName: "Central European Tech Leadership Institute",
    url: "https://cetl-institute.vercel.app",
    email: "office@cetl-institute.eu",
    location: "Vienna, Austria",
    region: "Central Europe",
    academic: "TU Wien, Academic Director",
    tagline: "Bridging academic excellence and industrial execution.",
    complianceNote:
      "All CETL activities are strictly limited to non-insurance sectors — insurance compliance, regulatory insurance topics, and insurance-specific mandates are explicitly excluded.",
  },

  NAV_LINKS: [
    { label: "About", href: "#about" },
    { label: "Research", href: "#research" },
    { label: "Services", href: "#services" },
    { label: "ELaaS", href: "#elaas" },
    { label: "Programs", href: "#programs" },
    { label: "Leadership", href: "#leadership" },
    { label: "Partners", href: "#partners" },
  ],

  MANAGING_DIRECTOR: {
    name: "Alin Kalam",
    initials: "AK",
    title: "Managing Director",
    headline: "Head of AI Coordination & Market Intelligence, UNIQA Insurance Group",
    location: "Vienna, Austria",
    linkedin: "https://www.linkedin.com/in/alinkalam/",
    bio: "20+ years bridging AI strategy, data, and enterprise execution — from leading AI governance and market intelligence at UNIQA International to BI leadership at Lufthansa Group and Big Data at BAWAG P.S.K. Trained in engineering, business, and astrophysics across TU Wien, CEU, and the University of Vienna.",
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
      subtitle: "Board & C-Suite Level",
      description:
        "Expert-level literacy sessions, board-level AI trend briefings, and industry-specific workshops that ensure decision-makers are fluent in emerging technologies and capable of market-driven use case prioritization.",
      items: [
        "C-Suite AI literacy sessions",
        "Board-level trend briefings",
        "Industry-specific AI maturity assessments",
        "Use case identification & prioritization",
      ],
    },
    {
      number: "02",
      icon: "TrendingUp",
      title: "Strategic Advisory",
      subtitle: "From Strategy to Execution",
      description:
        "Customized bootcamps, leadership formats, and hands-on ideation workshops that bridge the divide between theoretical academia and applied innovation, with measurable delivery outcomes.",
      items: [
        "Customized executive bootcamps",
        "Forward Deployed Engineer roles",
        "Leadership transformation programs",
        "Hands-on ideation workshops",
      ],
    },
    {
      number: "03",
      icon: "Award",
      title: "Technical Assessment",
      subtitle: "Independent & Rigorous",
      description:
        "Independent architecture and feasibility reviews for large-scale projects, data modeling, and legacy decommissioning strategies. Vendor-neutral, compliance-conscious, and strictly non-insurance.",
      items: [
        "Architecture & feasibility reviews",
        "Data modeling & strategy",
        "Legacy decommissioning",
        "Vendor-neutral technology assessment",
      ],
    },
  ],

  ELAAS_FEATURES: [
    {
      title: "Sovereign Capability Transfer",
      desc: "We embed independent technical capability directly into your leadership and technical talent; your organization retains full, vendor-neutral control.",
    },
    {
      title: "Outcome-Driven Ecosystem",
      desc: "Not training for the sake of training. Every program is engineered around measurable delivery outcomes with clear ROI frameworks.",
    },
    {
      title: "Forward Deployed Engineers",
      desc: "Integrated practitioner-advisors who work alongside your teams to bridge the gap between strategy and day-to-day execution.",
    },
    {
      title: "Community + Program Synergy",
      desc: "Developed through the strategic synergy of CETL Institute and community partners, with insight and networking converting into measurable delivery outcomes.",
    },
  ],

  PROGRAMS: [
    {
      tag: "Executive Education",
      title: "C-Suite AI Literacy",
      format: "Half-Day / Full-Day",
      level: "Board & C-Suite",
      description:
        "Intensive literacy sessions that give board members and C-Suite executives a working understanding of AI capabilities, limitations, and strategic implications, without requiring technical backgrounds.",
    },
    {
      tag: "Strategic Advisory",
      title: "AI Strategy Bootcamp",
      format: "2–3 Day Intensive",
      level: "Leadership Teams",
      description:
        "Hands-on bootcamp translating AI strategy into executable roadmaps. Teams leave with prioritized use cases, clear ownership, and a governance framework.",
    },
    {
      tag: "ELaaS",
      title: "Forward Deployed Engineer Program",
      format: "3–6 Month Engagement",
      level: "Technical & Business",
      description:
        "CETL engineers embed directly into your teams, working alongside technical and business talent to transfer sovereign AI and data capabilities, accelerating execution from day one.",
    },
    {
      tag: "Technical Assessment",
      title: "AI Architecture Review",
      format: "4–6 Weeks",
      level: "Technical Leadership",
      description:
        "Independent, vendor-neutral assessment of your current AI and data architecture. Delivers a feasibility report, risk register, and legacy decommissioning roadmap.",
    },
    {
      tag: "Executive Education",
      title: "Industry AI Trend Briefing",
      format: "2–3 Hours",
      level: "Expert / Industry",
      description:
        "Curated briefings on AI developments specific to your industry vertical: regulatory landscape, competitive benchmarks, and emerging use cases.",
    },
    {
      tag: "ELaaS",
      title: "Ideation & Innovation Workshop",
      format: "1 Day",
      level: "Cross-Functional Teams",
      description:
        "Facilitated ideation workshops that surface high-value AI use cases from within your organization, prioritize them by ROI and feasibility, and produce an actionable innovation backlog.",
    },
  ],

  TAG_COLORS: {
    "Executive Education": "gold",
    "Strategic Advisory": "blue",
    ELaaS: "gold",
    "Technical Assessment": "muted",
  },

  PARTNERS: [
    { name: "TU Wien", sub: "Academic Partner" },
    { name: "City of Vienna", sub: "Government Partner" },
    { name: "European Union", sub: "Institutional Partner" },
    { name: "ÖBB", sub: "Industry Partner" },
    { name: "Siemens", sub: "Industry Partner" },
  ],

  PROBLEM_ITEMS: [
    {
      title: "Consultants without capability build-up",
      desc: "External resources leave no lasting internal capability.",
    },
    {
      title: "Pilot projects devoid of ROI clarity",
      desc: "Proofs of concept that never scale to production value.",
    },
    {
      title: "Management unable to execute AI strategy",
      desc: "Leadership teams fluent in buzzwords, not outcomes.",
    },
    {
      title: "Data & governance treated as an afterthought",
      desc: "Models built on ungoverned data rarely survive contact with production.",
    },
  ],

  RESEARCH_STATS: [
    {
      id: "transformations-fail",
      kind: "ring",
      value: "70%",
      label: "of large-scale transformations fail to meet their stated goals",
      detail: "Most failures trace back to execution and adoption, not technology choice.",
      source: "McKinsey & Company, Transformation research",
    },
    {
      id: "ai-projects-fail",
      kind: "gauge",
      value: "85%",
      label: "of AI projects fail to deliver on their intended business value",
      detail: "Poor data quality, unclear ownership, and weak governance are the leading causes.",
      source: "Gartner, AI research",
    },
    {
      id: "ai-financial-benefit",
      kind: "bars",
      value: "10%",
      label: "of companies report significant financial benefit from AI at scale",
      detail: "The gap separates organizations that build lasting capability from those that pilot indefinitely.",
      source: "BCG × MIT Sloan Management Review, \"Expanding AI's Impact With Organizational Learning\"",
    },
    {
      id: "ai-investment-growth",
      kind: "trend",
      value: "~13×",
      label: "growth in global private AI investment over the past decade",
      detail: "Capital is accelerating faster than most organizations' ability to absorb and operationalize it.",
      source: "Stanford HAI, AI Index Report",
    },
  ],

  EXECUTION_GAP: {
    label: "CETL Execution Readiness Index",
    detail: "Proprietary benchmark across CETL client assessments — illustrative, not a scientific study.",
    rows: [
      { label: "Leadership AI awareness", value: 82 },
      { label: "Documented AI strategy", value: 54 },
      { label: "Governance & data readiness", value: 37 },
      { label: "Operational execution capability", value: 24 },
    ],
  },

  QUOTES: [
    {
      quote: "AI is the new electricity.",
      translation: "AI is the new electricity.",
      author: "Andrew Ng",
      role: "Co-founder, Google Brain; Founder, DeepLearning.AI",
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
      q: "How is CETL different from a traditional consultancy?",
      a: "Consultancies deliver recommendations and leave. CETL embeds capability: Forward Deployed Engineers, structured knowledge transfer, and governance frameworks stay with your organization after the engagement ends.",
    },
    {
      q: "What does \"vendor-neutral\" actually mean in practice?",
      a: "CETL holds no reseller agreements, partner incentives, or licensing revenue tied to any specific AI platform or cloud provider. Recommendations are driven solely by fit for your architecture and goals.",
    },
    {
      q: "How is data protection and regulatory compliance handled?",
      a: "All engagements are GDPR-compliant. CETL activities are explicitly limited to non-insurance sectors — banks, industry, and public-sector clients across Central Europe are fully within scope.",
    },
    {
      q: "How does proposal and contracting work?",
      a: "After an initial, no-obligation conversation, you receive a proposal with a clearly defined scope, milestones, and pricing model (day rate, fixed project fee, or framework agreement) — aligned to your internal procurement process.",
    },
    {
      q: "How long is a typical engagement?",
      a: "Formats range from a 2–3 hour trend briefing to a 3–6 month Forward Deployed Engineer program. Most Strategic Advisory bootcamps run 2–3 days; Technical Assessments run 4–6 weeks.",
    },
  ],

  CONTACT_ITEMS: [
    { label: "Email", value: "office@cetl-institute.eu", href: "mailto:office@cetl-institute.eu" },
    { label: "Location", value: "Vienna, Austria (Central Europe)", href: null },
    { label: "Academic Partnership", value: "TU Wien, Academic Director", href: null },
  ],

  CONTACT_INTEREST_OPTIONS: [
    "Executive Education / AI Literacy",
    "ELaaS: Executional Learning",
    "Strategic Advisory",
    "Technical Assessment",
    "Forward Deployed Engineer",
    "Europe Tech Hackathon",
    "General Inquiry",
  ],

  UI: {
    nav: { ctaContact: "Get in Touch", toggleMenu: "Toggle menu" },
    hero: {
      badgeLocation: "CETL · Vienna",
      headlineLine1: "Bridging the Gap:",
      headlineGradient: "Academic Excellence",
      headlineLine3: "Meets Industry Execution",
      paragraph:
        "We translate complex AI and data strategies into executable roadmaps that empower C-Suite leaders to actively steer digital transformation, not just observe it.",
      ctaPrimary: "Discover ELaaS",
      ctaSecondary: "Schedule a Briefing",
      stats: [
        { value: "3", label: "Core Pillars" },
        { value: "C-Suite", label: "Target Audience" },
        { value: "Non-Insurance", label: "Sector Focus" },
      ],
      ticker: [
        "Executive Education",
        "ELaaS",
        "Strategic Advisory",
        "Technical Assessment",
        "Forward Deployed Engineers",
        "TU Wien Academic Partnership",
      ],
      badgeVienna: "Vienna · Austria",
      badgeTUWien: "TU Wien Partner",
      badgeFDE: "Forward Deployed Engineers",
      photoCaption: "Managing Director",
    },
    problem: {
      quoteBefore: "Modern enterprises do not suffer from a lack of",
      quoteHighlight1: "AI awareness",
      quoteMiddle: ". They suffer from an inability to",
      quoteHighlight2: "operationalize it",
      intro:
        "Traditional training and consultancy models create a critical execution gap that prevents organizations from realizing the value of their AI investments.",
      answer: "CETL's answer: Executional Learning as a Service →",
    },
    pillars: {
      label: "Our Value Proposition",
      title: "Three Pillars of Transformation",
      subtitle:
        "A comprehensive framework that moves organizations from AI awareness to AI execution, embedding sovereign capability directly into your leadership and technical talent.",
    },
    elaas: {
      label: "ELaaS",
      title: "Executional Learning as a Service",
      subtitle:
        "The premier AI & data capability accelerator, engineered to dismantle the execution gap between AI hype and operational reality.",
      paragraph:
        "The market is moving from AI hype to execution. Organizations need capability transfer and implementation ownership, not more slideware. ELaaS transforms organizational leaders from passive observers of technological disruption into active architects of AI-driven enterprise value.",
      badges: ["Data Strategy", "AI Operating Models", "Value Creation", "Use Case Prioritization"],
      partnershipLabel: "Strategic Partnership — EMEA",
      partnershipBefore: "Flagship organizer of the",
      partnershipHackathon: "Europe Tech Hackathon",
      partnershipAfter: "in partnership with the City of Vienna, European Union, ÖBB, and Siemens.",
    },
    programs: {
      label: "Programs",
      title: "Formats Built for Execution",
      subtitle:
        "Every program is designed to close the gap between knowledge and action: from board briefings to embedded engineering engagements.",
      cta: "Discuss a Custom Program",
    },
    partners: {
      trusted: "Trusted by Leading Institutions & Organizations",
      blurbBefore: "Flagship organizer of the",
      blurbHackathon: "Europe Tech Hackathon",
      blurbAfter:
        ", bringing together public institutions, global enterprises, and academic leaders to accelerate technology-driven transformation across Central Europe.",
    },
    leadership: {
      label: "Leadership",
      title: "Managing Director",
      subtitle: "The academic and operational lead behind CETL Institute's Executional Learning as a Service model.",
      linkedin: "LinkedIn Profile",
      focus: "Focus Areas",
      photoTag: "AI Keynote Speaker",
      photoAlt: "Alin Kalam speaking on AI and human-centered innovation",
    },
    research: {
      label: "Research & Evidence",
      title: "The Execution Gap Isn't Anecdotal",
      subtitle:
        "Independent research from McKinsey, Gartner, BCG, MIT Sloan Management Review, and Stanford HAI consistently points to the same conclusion: the constraint on AI value is rarely the technology.",
    },
    faq: { label: "FAQ", title: "Questions Leadership Teams Ask First" },
    contact: {
      label: "Contact",
      title: "Start the Conversation",
      subtitle:
        "Whether you're exploring ELaaS, need a strategic advisory engagement, or want to schedule an AI literacy briefing: we'd like to hear from you.",
      targetAudienceLabel: "Target Audience",
      targetAudienceText: "C-Suite executives, board members, and senior leadership teams in non-insurance sectors across Central Europe.",
      complianceLabel: "Compliance Note",
      nameLabel: "Full Name *",
      namePlaceholder: "Dr. Jane Smith",
      companyLabel: "Organization *",
      companyPlaceholder: "Acme Corporation",
      emailLabel: "Email *",
      emailPlaceholder: "jane@company.com",
      interestLabel: "Area of Interest",
      interestPlaceholder: "Select a program area",
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your organization's current challenges and goals...",
      submit: "Send Message",
      successTitle: "Message Sent",
      successText: "Your email client should have opened. We'll respond within 48 hours.",
      mailSubjectPrefix: "CETL Inquiry",
      mailGeneral: "General",
      mailFieldName: "Name",
      mailFieldCompany: "Company",
      mailFieldEmail: "Email",
      mailFieldInterest: "Interest",
    },
    footer: {
      tagline: "Central European Tech Leadership Institute. Bridging academic excellence and industrial execution.",
      navLabel: "Navigation",
      contactLabel: "Contact",
      location: "Vienna, Austria",
      region: "Central Europe",
      copyright: "All rights reserved.",
      complianceLine: "All advisory activities are strictly limited to non-insurance sectors.",
    },
    wordMarquee: ["EXECUTION", "SOVEREIGNTY", "CAPABILITY", "TRANSFORMATION", "OWNERSHIP"],
  },
};
