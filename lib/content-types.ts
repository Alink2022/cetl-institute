export type LucideIconName = "Brain" | "TrendingUp" | "Award" | "Users" | "Lightbulb" | "Cog" | "Flag" | "Target" | "ChevronRight" | "ArrowRight" | "Shield" | "BookOpen" | "Layers" | "Network" | "Zap" | "BarChart2" | "GraduationCap" | "Building2" | "Globe" | "Cpu";
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

export interface PartnerGroup {
  label: string;
  partners: Partner[];
}

export interface ResearchStat {
  id: string;
  kind: "ring" | "gauge" | "bars" | "trend";
  value: string;
  label: string;
  detail: string;
  source: string;
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  photo?: string;
}

export interface MarketStat {
  id: string;
  kind: "ring" | "trend";
  value: string;
  label: string;
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

/* ── ELaaS-specific new types ── */

export interface PortfolioProduct {
  number: string;
  title: string;
  accentLine: string;
  description: string;
  capabilities: string[];
  outcomeLabel: string;
  cta: string;
  ctaHref: string;
}

export interface Package {
  number: string;
  label?: string;
  name: string;
  subtitle: string;
  description: string;
  includes: string[];
  price: string;
  priceNote?: string;
  cta: string;
  ctaHref: string;
  featured?: boolean;
}

export interface EcosystemNode {
  number: string;
  title: string;
  description: string;
}

export type ProgramFlowIconName =
  | "Search" | "Settings2" | "Rocket" | "Cog" | "Users" | "Globe" | "TrendingUp" | "UsersRound";

export interface ProgramFlowStep {
  n: string;
  icon: ProgramFlowIconName;
  title: string;
  description: string;
}

export type ProductIconName =
  | "GraduationCap" | "Users" | "Target" | "BookOpen" | "ShieldCheck" | "CheckCircle2"
  | "User" | "Star" | "BarChart2" | "Layers" | "Share2" | "Settings2" | "Handshake"
  | "UsersRound" | "Lightbulb" | "Rocket" | "ClipboardCheck" | "Landmark" | "Briefcase"
  | "FileText" | "Map" | "Calendar" | "Search" | "Scale" | "TrendingUp" | "Euro" | "Clock";

export interface ProductCardItem {
  icon: ProductIconName;
  text: string;
}

export interface ProductCard {
  number: string;
  ribbon?: string;
  titleLine1: string;
  titleLine2?: string;
  tagline: string;
  description: string;
  includes: ProductCardItem[];
  footer: ProductCardItem[];
  featured?: boolean;
}

export interface ProductGroup {
  label: string;
  cards: ProductCard[];
}

export interface ExecutionalService {
  number: string;
  title: string;
  subtitle: string;
  icon: ProductIconName;
  items: string[];
}

export type MethodologyIconName =
  | "Landmark" | "Factory" | "Users" | "GraduationCap" | "Target" | "TrendingUp"
  | "BookOpen" | "User" | "Search" | "ClipboardCheck" | "UsersRound" | "Flag" | "ShieldCheck";

export interface MethodologyPillar {
  icon: MethodologyIconName;
  title: string;
  desc: string;
}

export interface MethodologyModule {
  icon: MethodologyIconName;
  title: string;
}

export interface MethodologyFlowStep {
  n: string;
  icon: MethodologyIconName;
  title: string;
  desc: string;
}

export interface MethodologyOutcome {
  icon: MethodologyIconName;
  title: string;
  desc: string;
}

export interface ElaasMethodology {
  eyebrow: string;
  headline: string;
  pillars: MethodologyPillar[];
  modules: MethodologyModule[];
  embeddedNote: string;
  steps: MethodologyFlowStep[];
  outcomes: MethodologyOutcome[];
}

export interface NetworkLayer {
  number: string;
  title: string;
  subtitle: string;
  copy: string;
  logoPlaceholders: string[];
  outcome: string;
}

export interface RoleCard {
  title: string;
  audience: string;
  purpose: string;
}

export interface EvidenceStat {
  figure: string;
  claim: string;
  source: string;
  interpretation: string;
  isIllustrative?: boolean;
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
  PARTNER_GROUPS: PartnerGroup[];
  PRODUCT_GROUPS: ProductGroup[];
  EXECUTIONAL_SERVICES: ExecutionalService[];
  ELAAS_METHODOLOGY: ElaasMethodology;
  PROGRAM_FLOW_STEPS: ProgramFlowStep[];
  MARKET_STATS: MarketStat[];
  TEAM_MEMBERS: TeamMember[];
  PROBLEM_ITEMS: { title: string; desc: string }[];
  RESEARCH_STATS: ResearchStat[];
  EXECUTION_GAP: { label: string; detail: string; rows: { label: string; value: number }[] };
  QUOTES: Quote[];
  FAQ_ITEMS: { q: string; a: string }[];
  CONTACT_ITEMS: { label: string; value: string; href: string | null }[];
  CONTACT_INTEREST_OPTIONS: string[];

  /* ── New ELaaS content ── */
  PORTFOLIO_PRODUCTS: PortfolioProduct[];
  PACKAGES: Package[];
  ECOSYSTEM_NODES: EcosystemNode[];
  NETWORK_LAYERS: NetworkLayer[];
  ROLE_CARDS: RoleCard[];
  EVIDENCE_STATS: EvidenceStat[];

  UI: {
    nav: { ctaContact: string; toggleMenu: string };
    hero: {
      eyebrow: string;
      headlineLine1: string;
      headlineAccent: string;
      subheadline: string;
      body: string;
      bodyParagraphs?: string[];
      ctaPrimary: string;
      ctaSecondary: string;
      supportingLine: string;
      microProof: string[];
      badgeLocation: string;
      headlineLine3: string;
      paragraph: string;
      stats: { value: string; label: string }[];
      ticker: string[];
      badgeVienna: string;
      badgeTUWien: string;
      badgeFDE: string;
      photoCaption: string;
      headlineGradient: string;
    };
    problem: {
      eyebrow: string;
      headline: string;
      intro: string;
      closingStatement: string;
      cta: string;
      quoteBefore: string;
      quoteHighlight1: string;
      quoteMiddle: string;
      quoteHighlight2: string;
      answer: string;
    };
    elaas: {
      eyebrow: string;
      headline: string;
      body: string;
      callout: string;
      calloutItems: string[];
      cta: string;
    };
    productPortfolio: {
      eyebrow: string;
      headline: string;
      intro: string;
      servicesHeading: string;
    };
    programFlow: {
      headline: string;
      goal: string;
    };
    marketStats: {
      eyebrow: string;
      headline: string;
      intro: string;
    };
    skillsQuadrant: {
      eyebrow: string;
      headline: string;
      intro: string;
      source: string;
      axisX: string;
      axisY: string;
      quadrantEmerging: string;
      quadrantCore: string;
      quadrantOutOfFocus: string;
      quadrantSteady: string;
      focusLabel: string;
      categories: {
        cognitive: string;
        engagement: string;
        ethics: string;
        management: string;
        physical: string;
        selfEfficacy: string;
        technology: string;
        workingWithOthers: string;
      };
    };
    portfolio: {
      eyebrow: string;
      headline: string;
      intro: string;
    };
    packages: {
      eyebrow: string;
      headline: string;
      intro: string;
      callout: string;
    };
    outcomes: {
      label: string;
      items: { title: string; copy: string }[];
    };
    differentiators: {
      headline: string;
      items: { title: string; copy: string }[];
    };
    methodology: {
      label: string;
      title: string;
      subtitle: string;
      cta: string;
      closingLine: string;
    };
    ecosystem: {
      eyebrow: string;
      headline: string;
      intro: string;
      bottomBand?: string[];
    };
    enterprise: {
      eyebrow: string;
      headline: string;
      body: string;
      facts: string[];
      outputs: string[];
      ctaPrimary: string;
      ctaSecondary: string;
    };
    embedded: {
      eyebrow: string;
      headline: string;
      body: string;
      modules: string[];
      fde: string;
      outcome: string;
      cta: string;
      assessmentEyebrow: string;
      assessmentHeadline: string;
      assessmentBody: string;
      assessmentItems: string[];
    };
    community: {
      eyebrow: string;
      headline: string;
      body: string;
      formats: string[];
      orgValue: string[];
      featuredStatement: string;
      ctaPrimary: string;
      ctaSecondary: string;
      label: string;
      title: string;
      subtitle: string;
      advisorCta: string;
      pills: string[];
      features: { title: string; desc: string }[];
      quote: string;
      quoteAttribution: string;
    };
    network: {
      eyebrow: string;
      headline: string;
    };
    caseStudy: {
      eyebrow: string;
      headline: string;
      body: string;
      cta: string;
      label: string;
      title: string;
      subtitle: string;
    };
    evidence: {
      eyebrow: string;
      headline: string;
      body: string;
      eriTitle: string;
      eriDesc: string;
      eriNote: string;
      cta: string;
    };
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
    testimonials: {
      label: string;
      title: string;
      subtitle: string;
      anonymousNote: string;
    };
    about: {
      eyebrow: string;
      headline: string;
      body: string;
      mission: string;
      vision: string;
      differentiator: string;
      values: { title: string; copy: string }[];
    };
    leadership: {
      eyebrow: string;
      label: string;
      title: string;
      subtitle: string;
      linkedin: string;
      focus: string;
      photoTag: string;
      photoAlt: string;
    };
    partner: {
      eyebrow: string;
      headline: string;
      body: string;
      cta: string;
    };
    faq: { label: string; title: string };
    contact: {
      eyebrow: string;
      label: string;
      title: string;
      subtitle: string;
      body: string;
      targetAudienceLabel: string;
      targetAudienceText: string;
      complianceLabel: string;
      nameLabel: string;
      namePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      roleLabel: string;
      rolePlaceholder: string;
      interestLabel: string;
      interestPlaceholder: string;
      contextLabel: string;
      contextPlaceholder: string;
      submit: string;
      successTitle: string;
      successText: string;
      mailSubjectPrefix: string;
      mailGeneral: string;
      mailFieldName: string;
      mailFieldCompany: string;
      mailFieldEmail: string;
      mailFieldInterest: string;
      privacyNote: string;
    };
    team: {
      eyebrow: string;
      headline: string;
      intro: string;
    };
    trustBar: {
      eyebrow: string;
      headline: string;
    };
    footer: {
      tagline: string;
      navLabel: string;
      contactLabel: string;
      location: string;
      region: string;
      copyright: string;
      complianceLine: string;
      imprintLabel: string;
    };
    pillars: { label: string; title: string; subtitle: string };
    programs: {
      label: string;
      title: string;
      subtitle: string;
      cta: string;
      filterAll: string;
      filterLabel: string;
      ctaAdvisor: string;
      detailCta: string;
    };
    partners: { trusted: string; blurbBefore: string; blurbHackathon: string; blurbAfter: string };
    research: { label: string; title: string; subtitle: string; cta: string };
    instStats: { label: string };
    intersection: { label: string; title: string; subtitle: string };
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
