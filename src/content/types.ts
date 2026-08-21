export interface LinkItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface NavContent {
  logo: string;
  links: LinkItem[];
  cta: LinkItem;
}

export interface HeroContent {
  badge: string;
  headline: string;
  subheadline: string;
  poweredByLine: string;
  ctaPrimary: LinkItem;
  ctaSecondary: LinkItem;
  stats: StatItem[];
}

export interface ChallengeItem {
  id: string;
  painPoint: string;
  howTechPlusHelps: string;
  icon: string;
}

export interface ExecutiveChallengesContent {
  eyebrow: string;
  heading: string;
  intro: string;
  items: ChallengeItem[];
}

export interface OutcomeItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BusinessOutcomesContent {
  eyebrow: string;
  heading: string;
  intro: string;
  items: OutcomeItem[];
}

export interface ServicePageContent {
  slug: string;
  eyebrowNumber: string;
  name: string;
  summary: string;
  capabilities: string[];
  businessChallenge: string;
  businessImpact: string;
  executiveInsight: string;
  approach: string;
  expectedOutcomes: string[];
  customerValue: string;
  cta: LinkItem;
}

export interface ConsultingServicesContent {
  eyebrow: string;
  heading: string;
  intro: string;
  services: (ServicePageContent & { href: string })[];
}

export interface SapPlatformProduct {
  id: string;
  name: string;
  stageLabel: string;
  description: string;
  capabilities: string[];
  icon: string;
}

export interface SapPlatformPillar {
  id: string;
  eyebrow: string;
  headline: string;
  intro: string;
  products: SapPlatformProduct[];
}

export interface SapPlatformFoundationItem {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface SapPlatformContent {
  eyebrow: string;
  heading: string;
  intro: string;
  pillars: SapPlatformPillar[];
  foundation: SapPlatformFoundationItem[];
}

export interface LeadToCashStage {
  id: string;
  label: string;
  description: string;
  product: string;
  accent: "sky" | "amber";
}

export interface LeadToCashFlowContent {
  eyebrow: string;
  heading: string;
  intro: string;
  backgroundImage: string;
  stages: LeadToCashStage[];
  closingLine: string;
}

export interface OmsPlusContent {
  eyebrow: string;
  heading: string;
  positioningStatement: string;
  description: string;
  outcomes: string[];
  cta: LinkItem;
}

export interface SapArchitectureItem {
  title: string;
  description: string;
}

export interface RepresentativeScenario {
  title: string;
  description: string;
}

export interface IndustryPageContent {
  slug: string;
  name: string;
  teaser: string;
  heroTagline: string;
  heroDescription: string;
  trends: string[];
  challenges: string[];
  leadToCashPainPoints: string[];
  futureOpportunities: string[];
  recommendedSapArchitecture: SapArchitectureItem[];
  expectedOutcomes: string[];
  representativeScenario: RepresentativeScenario;
  executiveInsight: string;
  cta: LinkItem;
}

export interface IndustryFocusContent {
  eyebrow: string;
  heading: string;
  intro: string;
  industries: (IndustryPageContent & { href: string })[];
}

export interface DifferentiatorItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface DifferentiatorsContent {
  eyebrow: string;
  heading: string;
  items: DifferentiatorItem[];
}

export interface Office {
  id: string;
  flag: string;
  country: string;
  entity: string;
  role: string;
  address?: string;
}

export interface GlobalPresenceContent {
  eyebrow: string;
  heading: string;
  intro: string;
  offices: Office[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
  image: string;
}

export interface BlogPreviewContent {
  eyebrow: string;
  heading: string;
  intro: string;
  posts: BlogPost[];
  cta: LinkItem;
}

export interface FinalCtaContent {
  eyebrow: string;
  heading: string;
  subheading: string;
  ctaPrimary: LinkItem;
  ctaSecondary: LinkItem;
}

export interface FooterContent {
  logo: string;
  description: string;
  phone: string;
  email: string;
  serviceLinks: LinkItem[];
  legalLinks: LinkItem[];
  businessHours: { label: string; value: string }[];
  copyright: string;
}

export interface MetaContent {
  title: string;
  description: string;
  keywords: string[];
}

export interface HomepageContent {
  meta: MetaContent;
  nav: NavContent;
  hero: HeroContent;
  executiveChallenges: ExecutiveChallengesContent;
  businessOutcomes: BusinessOutcomesContent;
  consultingServices: ConsultingServicesContent;
  sapPlatform: SapPlatformContent;
  leadToCashFlow: LeadToCashFlowContent;
  omsPlus: OmsPlusContent;
  blogPreview: BlogPreviewContent;
  industryFocus: IndustryFocusContent;
  differentiators: DifferentiatorsContent;
  globalPresence: GlobalPresenceContent;
  finalCta: FinalCtaContent;
  footer: FooterContent;
}
