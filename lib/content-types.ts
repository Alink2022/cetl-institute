export type LucideIconName = "Brain" | "TrendingUp" | "Award" | "Globe" | "Users";
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

export interface Feature {
  title: string;
  desc: string;
}

export interface Program {
  tag: string;
  title: string;
  format: string;
  level: string;
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
    credentials: { label: string; sub: string }[];
    focus: string[];
  };
  PILLARS: Pillar[];
  ELAAS_FEATURES: Feature[];
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
    elaas: {
      label: string;
      title: string;
      subtitle: string;
      paragraph: string;
      badges: string[];
      partnershipLabel: string;
      partnershipBefore: string;
      partnershipHackathon: string;
      partnershipAfter: string;
    };
    programs: { label: string; title: string; subtitle: string; cta: string; filterAll: string; filterLabel: string; ctaAdvisor: string };
    partners: { trusted: string; blurbBefore: string; blurbHackathon: string; blurbAfter: string };
    leadership: {
      label: string;
      title: string;
      subtitle: string;
      linkedin: string;
      focus: string;
      photoTag: string;
      photoAlt: string;
    };
    research: { label: string; title: string; subtitle: string };
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
    wordMarquee: string[];
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
    };
    instStats: { label: string };
    community: { label: string; title: string; subtitle: string; advisorCta: string };
    intersection: { label: string; title: string; subtitle: string };
    caseStudy: { label: string; title: string; subtitle: string };
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
}
