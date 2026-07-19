import type { ContentBundle } from "./content-types";
import { ARTICLE_META } from "./insights-index";

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
      "All CETL activities are strictly limited to organizations outside the insurance sector. Insurance compliance, regulatory insurance topics, and insurance-specific mandates are explicitly excluded.",
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
    bio: "20+ years at the intersection of AI strategy, data, and enterprise execution: AI governance and market intelligence at UNIQA International, BI leadership at Lufthansa Group, and Big Data at BAWAG P.S.K. Trained in engineering, business, and astrophysics at TU Wien, CEU, and the University of Vienna.",
    credentials: [
      { label: "UNIQA Insurance Group", sub: "Head of AI Coordination & Market Intelligence", logo: "/logos/uniqa.svg" },
      { label: "Lufthansa Group", sub: "Strategic BI & Analytics Lead", logo: "/logos/lufthansa.svg" },
      { label: "BAWAG P.S.K.", sub: "Big Data Officer", logo: "/logos/bawag.svg" },
      { label: "TU Wien", sub: "MSc, Engineering Management", logo: "/logos/tuwien.svg" },
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
        "Not training. Not awareness campaigns. Leadership teams develop the technological judgment to decode vendor narratives, independently assess architecture risks, and weight use-case portfolios by strategic priority, not demonstrability.",
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
        "Forward Deployed Engineers are not external consultants. They are temporarily embedded specialists who work methodically alongside your technical teams. The objective is not project delivery but structured transfer of enterprise AI and data competency directly into your organization. Validated competency remains in the organization throughout, vendor-neutral and structurally independent of external providers.",
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
        "Participants learn how data, AI, and modern automation actually work. That lets them realistically assess potential, limits, and risks.",
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
        "Practical examples from other business units and industries open new perspectives. Successful patterns are transferred to your own organization.",
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
        "Intensive formats that develop the capacity to decode vendor narratives, independently assess architecture risks, and weight use-case portfolios by strategic priority, without requiring technical background.",
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
        "CETL engineers work directly in your teams, project-integrated, not parallel. Result: validated internal experts, documented governance structures, and a use-case pipeline that can be independently extended.",
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
        "Curated briefings on AI developments in your sector: regulatory environment, competitive architectures, and emerging use cases, without vendor agenda.",
    },
    {
      tag: "ELaaS",
      title: "Use-Case Prioritization Workshop",
      format: "1 day",
      level: "Cross-Functional Teams",
      description:
        "Structured methodology for identifying and prioritizing AI use cases by data maturity, governance prerequisites, and ROI potential. Result: an actionable innovation backlog with clear ownership.",
    },
    {
      tag: "Enterprise Program",
      title: "AI Competency Program for Enterprises",
      format: "Modular · 3–12 months",
      level: "All roles: staff to leadership",
      description:
        "Role-based enablement program combining knowledge-building, hands-on application, and real use cases. From the Foundation Program to the AI Leadership journey: every learning path ends in a concrete, company-specific result.",
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
      desc: "The use case works in sandbox. Production data unresolved, governance undefined, ownership unassigned. Three quarters, zero scalable value creation.",
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
      detail: "Most failures stem from execution and adoption, not technology selection.",
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
    detail: "Proprietary benchmark from CETL client assessments (illustrative, not a scientific study).",
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
      a: "Classical consulting models deliver recommendations and project resources. Both are unavailable after contract end. CETL delivers capability structures: validated internal experts, documented frameworks, and governance architectures that operate independently of the CETL engagement.",
    },
    {
      q: "What does vendor neutrality mean in concrete terms?",
      a: "CETL holds no reseller accreditations, platform partnerships, or license-revenue-dependent structures with AI or cloud providers. All technical recommendations are based exclusively on fit to the existing architecture, compliance requirements, and the organization's mid-term sovereignty objectives.",
    },
    {
      q: "Which organization types is the portfolio designed for?",
      a: "For organizations with enterprise architecture complexity and regulatory requirements, primarily in financial services, industry, and the public sector. The focus is on organizations treating AI initiatives as strategic infrastructure, not isolated innovation projects.",
    },
    {
      q: "How is an engagement structured?",
      a: "Following an initial scoping conversation, a clearly defined scope of work is developed: with milestones, measurable outcomes, and a transparent fee model (day rate, fixed price, or framework agreement). The process is designed for internal procurement requirements of regulated organizations.",
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
        "CETL Institute combines academic rigor with industrial execution experience, from the leadership level to a role-based AI competency program for the entire organization. Understand. Apply. Execute.",
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
        "Large-scale AI and data initiatives do not fail from lack of ambition. They fail from structural incompatibility between strategic intent and technical reality: between what a roadmap promises and what enterprise architecture, data maturity, and governance can actually sustain.",
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
        "Our approach follows the principle of Executional Learning: knowledge is never taught in isolation. It is tied directly to your organization's real tasks and challenges.",
      cta: "See the full methodology",
    },
    programs: {
      label: "Flagship Program",
      title: "One program. Every role. Full operational impact.",
      subtitle:
        "From the Foundation Program to the AI Leadership journey: our end-to-end format brings knowledge-building, hands-on application, and real use cases together in one system, for every role in the organization.",
      cta: "Initiate framework conversation",
      filterAll: "All formats",
      filterLabel: "Filter by format",
      ctaAdvisor: "Talk with an advisor",
      detailCta: "Explore the program in detail",
      rolesLabel: "Role-Based Learning Journeys",
      roles: ["AI Users", "AI Champions", "Internal AI Developers", "AI Leadership"],
    },
    partners: {
      trusted: "Trusted by leading institutions & organizations",
      blurbBefore: "Organizer of the",
      blurbHackathon: "Europe Tech Hackathon",
      blurbAfter:
        "public institutions, global enterprises, and academic leaders jointly driving technology-led transformation in Central Europe.",
    },
    trustBar: { label: "In partnership with leading institutions" },
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
      cta: "Request the full study overview",
    },
    faq: { label: "Frequently Asked", title: "Questions decision-makers ask first" },
    contact: {
      label: "Contact",
      title: "Initiate strategic exchange",
      subtitle:
        "Whether architecture review, embedded engineering engagement, or executive briefing: the first conversation is non-binding and serves to clarify scope.",
      targetAudienceLabel: "Target audience",
      targetAudienceText: "Organizations with enterprise architecture complexity in financial services, industry, and the public sector (outside the insurance sector) across Central Europe.",
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
      successTitle: "Email client opened",
      successText: "Please check your email app and send the prepared message. If nothing opened, please contact us directly using the details shown alongside.",
      mailSubjectPrefix: "CETL Inquiry",
      mailGeneral: "General",
      mailFieldName: "Name",
      mailFieldCompany: "Company",
      mailFieldEmail: "Email",
      mailFieldInterest: "Topic area",
    },
    footer: {
      tagline: "Central European Tech Leadership Institute. Technological sovereignty is not a state. It is a competency.",
      navLabel: "Navigation",
      contactLabel: "Contact",
      location: "Vienna, Austria",
      region: "Central Europe",
      copyright: "All rights reserved.",
      complianceLine: "All services are strictly limited to organizations outside the insurance sector.",
    },
    testimonials: {
      label: "From Practice",
      title: "What decision-makers say after experiencing the difference.",
      subtitle: "Anonymized at organizational request. Roles and sectors are authentic.",
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
        "Research briefs, whitepapers and frameworks for decision-makers in banking, industry and the public sector, from research into practice.",
      back: "All insights",
      published: "Published",
      byline: "Alin Kalam, Managing Director, CETL Institute",
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
      subtitle: "CETL sits precisely at the center of Academia, Community and Industry: the intersection of enterprise demand, flagship community visibility and academic partnership depth.",
    },
    caseStudy: {
      label: "In Practice",
      title: "Proof the model works.",
      subtitle: "Executional Learning in action, with measurable transfer.",
      cta: "Discuss a similar result for your organization",
    },
    faculty: {
      label: "People",
      positionOpen: "Position Open",
      featuredTitle: "+ Featured experts",
      featuredDesc: "From the Central European AI, research and community landscape, curated per module and use case.",
    },
    forOrgs: {
      label: "For Organizations",
      title: "Transform technological ambition into operational reality.",
      subtitle:
        "CETL works directly with organizations, not individuals. Every engagement is tailored to the organization's specific architecture situation, regulatory environment, and strategic objectives.",
      ctaPrimary: "Request custom engagement",
      ctaSecondary: "Start needs assessment",
      items: [
        {
          title: "Custom-built programs",
          desc: "No standard curriculum. Every program is calibrated to the organization's data maturity, governance structure, and use-case portfolio.",
        },
        {
          title: "Integrated execution",
          desc: "CETL experts work inside your live initiatives, not alongside them. No lab, no presentation, no report without implementation accountability.",
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
      quote: "AI initiatives don't fail because of technology. They fail because of the organization. CETL helped us understand that, before we approved the next budget round.",
      role: "Head of Digital Transformation",
      sector: "Austrian major bank",
      orgSize: "2,500+ employees",
    },
    {
      quote: "We had an AI strategy. What we didn't have was the internal capability to execute it. The Embedded Engineering program changed that in four months: structurally, not superficially.",
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

  // Card metadata comes client-safely from insights-index (no full texts in the bundle).
  INSIGHTS: ARTICLE_META.en,

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
        desc: "The European (AI & Data) Tech Hackathon (organized with the City of Vienna, Vienna Business Agency, ÖBB and further partners) creates Europe-wide visibility, engagement and market relevance.",
      },
      {
        title: "Year-round formats",
        desc: "Roundtables, Data & AI Executive Club, Safari, Dinner and Editions keep the community active and relevant, converting networking into structured partnership and delivery opportunities.",
      },
      {
        title: "Execution vehicle",
        desc: "The Tech Execution Community feeds directly into CETL's agenda: guided delivery, operating-model thinking and implementation readiness, an executional ecosystem beyond classical consulting.",
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
    desc: "Customized Executional Learning programs already deliver for enterprise clients, e.g. the AI Competence Program co-designed with Raiffeisenlandesbank Oberösterreich: an integrated enablement system, not a training catalog.",
    metrics: [
      { label: "Foundation Program", value: "15 days" },
      { label: "Role tracks (AI Users, AI Champions)", value: "2 × 8 days" },
      { label: "Total program scope", value: "31 days", highlight: true },
      { label: "Guided projects", value: "Own use case" },
      { label: "Delivery model", value: "ELaaS" },
    ],
    principles: [
      { num: "I", title: "Role-sharp enablement", desc: "Learning journeys for AI Leadership, AI Users, AI Champions and internal AI Developers, matched to responsibility and maturity." },
      { num: "II", title: "Guided projects with output", desc: "Every learning path ends in concrete use cases, business cases or implementation contributions, from use-case canvas to final pitch." },
      { num: "III", title: "Direct contribution to strategy", desc: "Results feed straight into the client's use-case pipeline, prioritization logic and transformation initiative: measurable transfer." },
    ],
  },

  INTERSECTION_CATEGORIES: [
    {
      label: "Academia",
      partners: [
        { name: "TU Wien", desc: "Technische Universität Wien: academic depth & data literacy" },
        { name: "Lauder Business School", desc: "Applied management & leadership education" },
      ],
    },
    {
      label: "Community",
      partners: [
        { name: "Europe Tech Hackathon", desc: "Flagship European AI & Data community event" },
        { name: "TEC (Tech Execution Community)", desc: "Executive network & proven formats" },
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

  KI_PROGRAM: {
    hero: {
      badge: "Corporate Program",
      title: "AI Competency Program for Organizations",
      tagline: "Understand AI. Apply it safely. Implement it effectively.",
      p1: "Artificial intelligence is transforming workflows, decisions, and business models. The decisive success factor, however, is not the technology alone — it is an organization's ability to use it meaningfully, responsibly, and productively.",
      p2: "Our AI Competency Program combines rigorous knowledge-building with hands-on application. Employees, functional experts, technical specialists, and leaders develop exactly the competencies their role requires — from day one, with real use cases from their own organization.",
      tags: ["Practice-Oriented", "Role-Based", "Organization-Specific", "Implementation-Focused"],
      cta: "Schedule a non-binding initial conversation",
    },
    intro: {
      label: "Starting Point",
      title: "From individual training to an integrated capability program",
      p1: "Many organizations already have initial AI tools, internal learning offerings, or pilot projects. What is often missing is a shared framework that connects knowledge, application, governance, and concrete implementation.",
      p2: "The AI Competency Program brings existing initiatives together into a coherent capability system. It integrates digital self-learning, live training, role-specific deepening, and guided practice projects — creating not just knowledge about AI, but concrete workflows, prioritized use cases, business cases, technical solution concepts, and organizational competencies.",
      outcomesLabel: "The program creates",
      outcomes: [
        "a shared understanding of data, AI, and automation",
        "safe and responsible AI use",
        "productive applications for daily work",
        "concrete use cases with measurable value",
        "internal multipliers and AI experts",
        "a solid foundation for scaling AI",
      ],
    },
    keyVisual: {
      alt: "Chess queen in warm light — a symbol of strategic foresight and decision-making competence",
      caption: "Strategic foresight does not come from watching — it comes from learning, move by move, how the game works.",
    },
    cycle: {
      label: "Methodology",
      title: "Learn, apply, and implement",
      subtitle: "Our approach follows the principle of Executional Learning. Knowledge is not taught in isolation — it is immediately connected to real tasks and challenges from within the organization.",
      steps: ["Understand", "Apply", "Transfer", "Implement"],
      details: [
        {
          n: "1",
          title: "Understand",
          text: "Participants learn how data, artificial intelligence, and modern automation work. They can realistically assess potentials, limitations, and risks.",
        },
        {
          n: "2",
          title: "Apply",
          text: "Company-specific tools, processes, and standards are integrated directly into the program. Participants practice AI on typical tasks from their daily work.",
        },
        {
          n: "3",
          title: "Transfer",
          text: "Practical examples from different business areas and industries open new perspectives. Successful patterns are transferred to the participant's own organization.",
        },
        {
          n: "4",
          title: "Implement",
          text: "Each learning journey is tied to a concrete use case. Initial ideas evolve into structured use cases, prototypes, business cases, or implementation roadmaps.",
        },
      ],
    },
    foundation: {
      label: "The Foundation Program",
      title: "The shared foundation for data and AI competence",
      subtitle: "The Foundation Program creates a common language within the organization. It conveys the key fundamentals and prepares participants for role-specific deepening. Existing learning platforms, internal guidelines, and AI tools already in use can be integrated as preparation, enrichment, and follow-up.",
      modules: [
        {
          n: "01",
          title: "Understanding and using data",
          text: "Foundational understanding of data structures, data quality, and data-driven decisions.",
          items: [
            "Data types, sources, and architectures",
            "Data quality, governance, and accountability",
            "Data value chain and analytical thinking",
            "Visualization and storytelling with data",
            "Identifying relevant data for your own use cases",
          ],
        },
        {
          n: "02",
          title: "How artificial intelligence works",
          text: "Technological foundations — clear and without unnecessary technical complexity.",
          items: [
            "Foundations of machine learning and generative AI",
            "How large language models work",
            "Opportunities, limitations, and common failure modes",
            "Hallucinations, bias, and reliability",
            "Classifying different AI technologies",
          ],
        },
        {
          n: "03",
          title: "AI in daily work",
          text: "Using AI tools safely and productively.",
          items: [
            "Research, structuring, and summarizing",
            "Creating texts, presentations, and analyses",
            "Effective prompting and quality control",
            "Developing AI-supported workflows",
            "Using company AI and Copilot solutions",
          ],
        },
        {
          n: "04",
          title: "Machine learning and data science",
          text: "Practical understanding of analytical and predictive AI applications.",
          items: [
            "Core machine learning methods",
            "Predictive analytics and generative AI",
            "Data science workflows and model logic",
            "Feasibility and data checks",
            "Use cases for forecasting, classification, and anomaly detection",
          ],
        },
        {
          n: "05",
          title: "Processes, governance, and responsibility",
          text: "AI must not only work — it must be used safely and responsibly.",
          items: [
            "Process analysis, digitization, and automation",
            "Data protection and information security",
            "EU AI Act and regulatory requirements",
            "Responsible AI and trustworthy AI",
            "Roles, responsibilities, and approval processes",
          ],
        },
        {
          n: "06",
          title: "From use case to business case",
          text: "An idea becomes an evaluable and actionable use case.",
          items: [
            "Systematically identifying AI potential",
            "Structuring and prioritizing use cases",
            "Assessing value, effort, and risk",
            "Defining KPIs and success criteria",
            "Developing business cases and decision documents",
            "Presenting results persuasively",
          ],
        },
      ],
    },
    journeys: {
      label: "Role-Based Learning Journeys",
      title: "The right competencies for every role",
      subtitle: "Not all employees need the same competencies. That is why the program is built around clearly defined roles.",
      focusLabel: "Focus Areas",
      projectLabel: "Practice Project",
      roles: [
        {
          role: "AI Users",
          subtitle: "Using AI in daily work safely and productively",
          audience: "Employees from functional departments, administration, sales, finance, HR, operations, and support.",
          focus: [
            "AI productivity in daily work",
            "Prompting and quality control",
            "AI-supported departmental workflows",
            "Data protection and responsible use",
            "Personal automations",
            "Shared standards and best practices",
          ],
          project: "Developing an AI-supported workflow with direct value for the individual's work area.",
        },
        {
          role: "AI Champions and Enthusiasts",
          subtitle: "Identifying potential and driving implementation within a department",
          audience: "Multipliers, innovation drivers, and first points of contact for AI within a business unit.",
          focus: [
            "Use case design and prioritization",
            "Process analysis and AI readiness",
            "Automation and process redesign",
            "Building simple agents and assistants",
            "Change management, adoption, and stakeholder management",
            "Business cases and pilot planning",
          ],
          project: "Building a prioritized AI use case portfolio for a business unit, including a pilot proposal and implementation path.",
        },
        {
          role: "Internal AI Developers",
          subtitle: "Building technical solutions and moving them into production",
          audience: "Data scientists, data engineers, software developers, IT architects, and technical specialists.",
          focus: [
            "Data architectures and engineering",
            "Data modeling and data pipelines",
            "Machine learning and advanced analytics",
            "Large language models and retrieval-augmented generation",
            "Vector databases and embeddings",
            "MLOps, LLMOps, and monitoring",
            "Transitioning prototypes into production",
          ],
          project: "Developing a technical solution blueprint for a prioritized AI use case.",
        },
        {
          role: "AI Leadership",
          subtitle: "Steering AI strategically and realizing organizational value",
          audience: "C-suite, divisional leaders, executives, and sponsors of AI initiatives.",
          focus: [
            "AI strategy and target vision",
            "Market and technology dynamics",
            "Governance, risk, and responsible AI",
            "Business cases, ROI, and value realization",
            "Investment and portfolio steering",
            "Operating model and accountability",
            "Change and transformation roadmap",
          ],
          project: "Developing a prioritized AI portfolio including investment decisions, governance, and a transformation roadmap.",
        },
      ],
    },
    useCases: {
      label: "Real Use Cases as a Common Thread",
      title: "From use case to implementation",
      subtitle: "Every participant works on their own use case from within the organization throughout the program. Participants receive methodological support from trainers and subject matter experts.",
      steps: [
        "Identify the problem",
        "Analyze data & processes",
        "Formulate value hypothesis",
        "Assess feasibility",
        "Evaluate risks",
        "Develop business case",
        "Present results",
      ],
      crossIndustryLabel: "Cross-Industry Learning",
      crossIndustryText: "In addition to organization-specific tasks, selected use cases from other industries are explored. This helps participants recognize transferable patterns, new solution approaches, and potential synergies.",
    },
    customization: {
      label: "Tailored to your organization",
      title: "Possible areas of customization",
      subtitle: "The program is tailored to the organization's strategic goals, technological maturity, and existing systems.",
      groups: [
        {
          title: "Tools and platforms",
          items: [
            "Company AI assistants",
            "Microsoft 365 Copilot",
            "Copilot Studio and Power Platform",
            "Azure, Databricks, or comparable data platforms",
            "Internal knowledge bases and learning platforms",
          ],
        },
        {
          title: "Departments and application areas",
          items: [
            "Sales and customer service",
            "Finance and controlling",
            "Human resources",
            "Marketing and communications",
            "Production and logistics",
            "Procurement and supply chain",
            "Legal, compliance, and risk management",
            "IT, data management, and innovation",
          ],
        },
        {
          title: "Strategic future topics",
          items: [
            "AI agents and agentic systems",
            "Process automation",
            "Data and AI security",
            "Responsible AI",
            "Advanced analytics",
            "Digital business models",
            "Future technology developments",
          ],
        },
      ],
    },
    process: {
      label: "From impulse to impact",
      title: "How your AI Competency Program is built",
      subtitle: "From analysis to scaling.",
      steps: ["Analysis & Target Vision", "Curriculum & Learning Paths", "Piloting", "Implementation & Coaching", "Scaling"],
    },
    benefits: {
      label: "The Value",
      title: "What your organization gains",
      items: [
        {
          title: "Shared direction",
          text: "Employees and leaders develop a unified understanding of data, AI, opportunities, and accountabilities.",
        },
        {
          title: "Productive AI use",
          text: "AI tools are not just introduced — they are integrated into concrete workflows.",
        },
        {
          title: "Prioritized use cases",
          text: "Ideas are systematically evaluated by value, feasibility, risk, and scalability.",
        },
        {
          title: "Internal competencies",
          text: "The organization builds multipliers, AI champions, technical experts, and decision-ready leadership teams.",
        },
        {
          title: "Responsible implementation",
          text: "Governance, data protection, security, and regulatory requirements are addressed from the start.",
        },
        {
          title: "Measurable transfer",
          text: "The program produces concrete outputs: workflows, use case portfolios, business cases, prototypes, and roadmaps.",
        },
      ],
    },
    formats: {
      label: "Flexible program design",
      title: "Scope, duration, and format on demand",
      subtitle: "The AI Competency Program is modular. Scope, duration, and the combination of learning paths are determined by the organization's maturity and objectives. Delivery is possible in person, online, or in a hybrid format.",
      badges: [
        "Compact Foundation Program",
        "Multi-stage Learning Journey",
        "Role-specific intensive programs",
        "Executive Workshops",
        "Train-the-Trainer Programs",
        "Use Case Sprints",
        "Technical Bootcamps",
        "Guided pilot projects",
        "Organization-wide AI Academy",
      ],
      facultyLabel: "Faculty and experts",
      facultyText: "A tailored pool of trainers, researchers, technology experts, and practitioners is assembled for each program. Selection is guided by the specific modules, target audiences, technologies, and use cases involved. Participants gain not only theoretical knowledge but diverse perspectives from research, industry, and concrete implementation practice.",
    },
    faq: {
      label: "Frequently Asked Questions",
      title: "What organizations want to know",
      items: [
        {
          q: "Which organizations is this program suited for?",
          a: "The program is suited for organizations that want to introduce AI in a structured way, scale existing initiatives, or systematically develop their employees' AI capabilities.",
        },
        {
          q: "Do AI tools need to be in place already?",
          a: "No. The program can support the introduction of new tools or integrate existing systems and learning offerings.",
        },
        {
          q: "Do participants need technical prerequisites?",
          a: "No technical background is required for the Foundation Program or the AI Users learning path. Technical content is deepened in a dedicated learning path.",
        },
        {
          q: "Can organization-specific use cases be incorporated?",
          a: "Yes. Real tasks and use cases from within the organization form a central part of the program.",
        },
        {
          q: "Is the program adapted to internal guidelines?",
          a: "Yes. Governance, data protection, security requirements, existing approval processes, and internal standards are integrated into the curriculum.",
        },
        {
          q: "How is learning success made visible?",
          a: "Success is assessed not only through attendance and knowledge checks. Depending on the program, concrete work outputs are produced: AI workflows, use case portfolios, business cases, prototypes, and implementation roadmaps.",
        },
      ],
    },
    closing: {
      title: "AI competence that creates impact within the organization",
      text: "A successful AI program does not end on the last day of training. It creates the conditions for people to use AI safely, identify potential independently, and drive implementation together. We connect learning, application, and execution into an integrated capability system for your organization.",
      cta: "Discuss the AI Competency Program",
    },
  },
};
