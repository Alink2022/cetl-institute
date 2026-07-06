export type LucideIconName = "Brain" | "TrendingUp" | "Award" | "Globe" | "Users";

export const SITE = {
  name: "CETL Institute",
  fullName: "Central European Tech Leadership Institute",
  url: "https://cetl-institute.vercel.app",
  email: "office@cetl-institute.eu",
  location: "Vienna, Austria",
  region: "Central Europe",
  academic: "TU Wien, Academic Director",
  tagline: "Bridging academic excellence and industrial execution.",
  complianceNote:
    "All CETL activities are strictly limited to non-insurance sectors, explicitly excluding insurance compliance, regulatory topics, and insurance-specific engagements.",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "ELaaS", href: "#elaas" },
  { label: "Programs", href: "#programs" },
  { label: "Partners", href: "#partners" },
] as const;

export interface Pillar {
  number: string;
  icon: LucideIconName;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
}

export const PILLARS: Pillar[] = [
  {
    number: "01",
    icon: "Brain",
    title: "Executive Education",
    subtitle: "C-Suite & Board-Level Literacy",
    description:
      "Expert-level literacy sessions, board-level AI trend briefings, and industry-specific workshops that ensure decision-makers are fluent in emerging technologies and capable of market-driven use case prioritization.",
    items: [
      "C-Suite AI literacy sessions",
      "Board-level trend briefings",
      "Industry-specific AI assessments",
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
];

export interface Feature {
  title: string;
  desc: string;
}

export const ELAAS_FEATURES: Feature[] = [
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
];

export type TagColor = "gold" | "blue" | "muted";

export interface Program {
  tag: string;
  title: string;
  format: string;
  level: string;
  description: string;
}

export const PROGRAMS: Program[] = [
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
];

export const TAG_COLORS: Record<string, TagColor> = {
  "Executive Education": "gold",
  "Strategic Advisory": "blue",
  ELaaS: "gold",
  "Technical Assessment": "muted",
};

export interface Partner {
  name: string;
  sub: string;
}

export const PARTNERS: Partner[] = [
  { name: "TU Wien", sub: "Academic Partner" },
  { name: "City of Vienna", sub: "Government Partner" },
  { name: "European Union", sub: "Institutional Partner" },
  { name: "ÖBB", sub: "Industry Partner" },
  { name: "Siemens", sub: "Industry Partner" },
];

export const PROBLEM_ITEMS = [
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
];

export const CONTACT_ITEMS = [
  { label: "Email", value: "office@cetl-institute.eu", href: "mailto:office@cetl-institute.eu" },
  { label: "Location", value: "Vienna, Austria (Central Europe)", href: null },
  { label: "Academic Partnership", value: "TU Wien, Academic Director", href: null },
];

export const CONTACT_INTEREST_OPTIONS = [
  "Executive Education / AI Literacy",
  "ELaaS: Executional Learning",
  "Strategic Advisory",
  "Technical Assessment",
  "Forward Deployed Engineer",
  "Europe Tech Hackathon",
  "General Inquiry",
];
