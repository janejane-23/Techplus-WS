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
  paragraph: string;
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

export interface FlowStage {
  id: string;
  label: string;
  description: string;
}

export interface CoreNarrativeContent {
  eyebrow: string;
  heading: string;
  intro: string;
  stages: FlowStage[];
  closingLine: string;
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
  coreNarrative: CoreNarrativeContent;
  businessOutcomes: BusinessOutcomesContent;
  consultingServices: ConsultingServicesContent;
  omsPlus: OmsPlusContent;
  industryFocus: IndustryFocusContent;
  differentiators: DifferentiatorsContent;
  globalPresence: GlobalPresenceContent;
  finalCta: FinalCtaContent;
  footer: FooterContent;
}
