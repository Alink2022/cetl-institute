export type LucideIconName = "Brain" | "TrendingUp" | "Award" | "Users" | "Lightbulb" | "Cog" | "Flag";
export type TagColor = "gold" | "blue" | "muted";

export interface Testimonial {
  quote: string;
  role: string;
  sector: string;
  orgSize: string;
}

export interface Insight {
  slug: string;
  category: string;
  tag: string;
  title: string;
  teaser: string;
  readTime: string;
}

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "olist"; items: string[] };

export interface Article extends Insight {
  date: string;
  blocks: ArticleBlock[];
}

export interface InstStat {
  value: string;
  label: string;
  sub: string;
}

export interface Pillar {
  number: string;
  icon: LucideIconName;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
}

export interface Program {
  tag: string;
  title: string;
  format: string;
  level: string;
  description: string;
  href?: string;
}

export interface MethodologyStep {
  n: string;
  icon: LucideIconName;
  title: string;
  description: string;
}

export interface Partner {
  name: string;
  sub: string;
  logo: string;
  logoWidth?: number;
  logoHeight?: number;
}

export interface ResearchStat {
  id: string;
  kind: "ring" | "gauge" | "bars" | "trend";
  value: string;
  label: string;
  detail: string;
  source: string;
}

export interface Quote {
  quote: string;
  translation: string;
  author: string;
  role: string;
}

export interface CommunityFeature {
  title: string;
  desc: string;
}

export interface FacultyPosition {
  initials: string;
  role: string;
  desc: string;
}

export interface CaseMetric {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface CasePrinciple {
  num: string;
  title: string;
  desc: string;
}

export interface IntersectionPartner {
  name: string;
  desc: string;
}

export interface IntersectionCategory {
  label: string;
  partners: IntersectionPartner[];
}

/** Komplette Textinhalte der Seite /programme/ki-kompetenzprogramm.
 *  Icons bleiben in der View-Komponente und werden per Index zugeordnet —
 *  die Reihenfolge der Arrays (cycle.steps, foundation.modules, journeys.roles,
 *  useCases.steps, process.steps) muss daher zwischen DE und EN identisch sein. */
export interface KiProgramContent {
  hero: {
    badge: string;
    title: string;
    tagline: string;
    p1: string;
    p2: string;
    tags: string[];
    cta: string;
  };
  intro: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    outcomesLabel: string;
    outcomes: string[];
  };
  keyVisual: { alt: string; caption: string };
  cycle: {
    label: string;
    title: string;
    subtitle: string;
    steps: string[];
    details: { n: string; title: string; text: string }[];
  };
  foundation: {
    label: string;
    title: string;
    subtitle: string;
    modules: { n: string; title: string; text: string; items: string[] }[];
  };
  journeys: {
    label: string;
    title: string;
    subtitle: string;
    focusLabel: string;
    projectLabel: string;
    roles: { role: string; subtitle: string; audience: string; focus: string[]; project: string }[];
  };
  useCases: {
    label: string;
    title: string;
    subtitle: string;
    steps: string[];
    crossIndustryLabel: string;
    crossIndustryText: string;
  };
  customization: {
    label: string;
    title: string;
    subtitle: string;
    groups: { title: string; items: string[] }[];
  };
  process: { label: string; title: string; subtitle: string; steps: string[] };
  benefits: { label: string; title: string; items: { title: string; text: string }[] };
  formats: {
    label: string;
    title: string;
    subtitle: string;
    badges: string[];
    facultyLabel: string;
    facultyText: string;
  };
  faq: { label: string; title: string; items: { q: string; a: string }[] };
  closing: { title: string; text: string; cta: string };
}

export interface ContentBundle {
  TESTIMONIALS: Testimonial[];
  INSIGHTS: Insight[];
  INST_STATS: InstStat[];
  COMMUNITY: {
    pills: string[];
    features: CommunityFeature[];
    quote: string;
    quoteAttribution: string;
  };
  FACULTY_POSITIONS: FacultyPosition[];
  CASE_STUDY: {
    clientTag: string;
    client: string;
    title: string;
    desc: string;
    metrics: CaseMetric[];
    principles: CasePrinciple[];
  };
  INTERSECTION_CATEGORIES: IntersectionCategory[];
  SITE: {
    name: string;
    fullName: string;
    url: string;
    email: string;
    formEmail: string;
    location: string;
    region: string;
    academic: string;
    tagline: string;
    complianceNote: string;
  };
  NAV_LINKS: { label: string; href: string }[];
  MANAGING_DIRECTOR: {
    name: string;
    initials: string;
    title: string;
    headline: string;
    location: string;
    linkedin: string;
    bio: string;
    credentials: { label: string; sub: string; logo?: string }[];
    focus: string[];
  };
  PILLARS: Pillar[];
  METHODOLOGY_STEPS: MethodologyStep[];
  PROGRAMS: Program[];
  TAG_COLORS: Record<string, TagColor>;
  PARTNERS: Partner[];
  PROBLEM_ITEMS: { title: string; desc: string }[];
  RESEARCH_STATS: ResearchStat[];
  EXECUTION_GAP: { label: string; detail: string; rows: { label: string; value: number }[] };
  QUOTES: Quote[];
  FAQ_ITEMS: { q: string; a: string }[];
  CONTACT_ITEMS: { label: string; value: string; href: string | null }[];
  CONTACT_INTEREST_OPTIONS: string[];
  UI: {
    nav: { ctaContact: string; toggleMenu: string };
    hero: {
      badgeLocation: string;
      headlineLine1: string;
      headlineGradient: string;
      headlineLine3: string;
      paragraph: string;
      ctaPrimary: string;
      ctaSecondary: string;
      stats: { value: string; label: string }[];
      ticker: string[];
      badgeVienna: string;
      badgeTUWien: string;
      badgeFDE: string;
      photoCaption: string;
    };
    problem: {
      quoteBefore: string;
      quoteHighlight1: string;
      quoteMiddle: string;
      quoteHighlight2: string;
      intro: string;
      answer: string;
    };
    pillars: { label: string; title: string; subtitle: string };
    methodology: { label: string; title: string; subtitle: string; cta: string };
    programs: { label: string; title: string; subtitle: string; cta: string; filterAll: string; filterLabel: string; ctaAdvisor: string; detailCta: string; rolesLabel: string; roles: string[] };
    partners: { trusted: string; blurbBefore: string; blurbHackathon: string; blurbAfter: string };
    trustBar: { label: string };
    leadership: {
      label: string;
      title: string;
      subtitle: string;
      linkedin: string;
      focus: string;
      photoTag: string;
      photoAlt: string;
    };
    research: { label: string; title: string; subtitle: string; cta: string };
    faq: { label: string; title: string };
    contact: {
      label: string;
      title: string;
      subtitle: string;
      targetAudienceLabel: string;
      targetAudienceText: string;
      complianceLabel: string;
      nameLabel: string;
      namePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      interestLabel: string;
      interestPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      successTitle: string;
      successText: string;
      mailSubjectPrefix: string;
      mailGeneral: string;
      mailFieldName: string;
      mailFieldCompany: string;
      mailFieldEmail: string;
      mailFieldInterest: string;
    };
    footer: {
      tagline: string;
      navLabel: string;
      contactLabel: string;
      location: string;
      region: string;
      copyright: string;
      complianceLine: string;
    };
    testimonials: { label: string; title: string; subtitle: string; anonymousNote: string };
    insights: {
      label: string;
      title: string;
      subtitle: string;
      cta: string;
      readCta: string;
      pageTitle: string;
      pageSubtitle: string;
      back: string;
      published: string;
      byline: string;
      ctaTitle: string;
      ctaText: string;
      ctaButton: string;
      moreLabel: string;
      authorLabel: string;
      share: string;
      shareCopied: string;
      prevLabel: string;
      nextLabel: string;
    };
    instStats: { label: string };
    community: { label: string; title: string; subtitle: string; advisorCta: string };
    intersection: { label: string; title: string; subtitle: string };
    caseStudy: { label: string; title: string; subtitle: string; cta: string };
    faculty: { label: string; positionOpen: string; featuredTitle: string; featuredDesc: string };
    forOrgs: {
      label: string;
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
      items: { title: string; desc: string }[];
    };
  };
  KI_PROGRAM: KiProgramContent;
}
