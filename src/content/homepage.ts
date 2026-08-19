import type { HomepageContent } from "./types";
import { services } from "./services";
import { industries } from "./industries";
import generatedBlogPosts from "./blog-posts.generated.json";

export const homepageContent: HomepageContent = {
  meta: {
    title: "TechPlus APAC | Lead-to-Cash Transformation Specialists for SAP",
    description:
      "TechPlus APAC is a boutique SAP consulting firm specializing in Lead-to-Cash transformation for Retail, Consumer Products, and Wholesale Distribution companies across Asia-Pacific.",
    keywords: [
      "Lead-to-Cash Transformation",
      "SAP Consulting",
      "SAP Partner",
      "SAP S/4HANA",
      "SAP Business One",
      "SAP Sales Cloud",
      "SAP BTP",
      "Order Management",
      "Omnichannel Order Management",
      "Order Orchestration",
      "Sales Transformation",
      "Customer Experience",
      "Retail Digital Transformation",
      "Consumer Products",
      "Wholesale Distribution",
      "Digital Commerce",
      "OMS+",
      "Enterprise Order Management",
      "Business Process Transformation",
      "Revenue Growth",
      "Agentic AI",
      "Autonomous Enterprise",
      "Intelligent Automation",
    ],
  },

  nav: {
    logo: "TechPlus",
    links: [
      { label: "Our Approach", href: "#approach" },
      { label: "Services", href: "#services" },
      { label: "Industries", href: "#industries" },
      { label: "Global Presence", href: "#presence" },
    ],
    cta: { label: "Schedule a Strategy Consultation", href: "/contact" },
  },

  hero: {
    badge: "The APAC Lead-to-Cash Transformation Specialist",
    headline: "Transform Your Lead-to-Cash Journey",
    subheadline:
      "Modernize sales, orchestrate every order, and deliver exceptional customer experiences with SAP-powered business transformation.",
    paragraph:
      "We help Retail, Consumer Products, and Wholesale Distribution companies transform the entire Lead-to-Cash process—from customer engagement and sales automation to omnichannel order management and revenue realization.",
    poweredByLine: "Powered by SAP. Driven by autonomous outcomes.",
    ctaPrimary: { label: "Schedule a Strategy Consultation", href: "/contact" },
    ctaSecondary: { label: "Explore Our Solutions", href: "#services" },
    stats: [
      { value: "3", label: "Industries of Deep Specialization" },
      { value: "10-Stage", label: "Lead-to-Cash Expertise" },
      { value: "4", label: "APAC & Global Offices" },
      { value: "Boutique", label: "Executive-Led Advisory" },
    ],
  },

  executiveChallenges: {
    eyebrow: "Executive Challenges",
    heading: "The Lead-to-Cash Problems Standing Between You and an Autonomous Enterprise",
    intro:
      "Before we talk technology, we talk about the business problem. These are the manual, people-dependent breakdowns—the same ones autonomous, AI-driven operations are built to eliminate—that we hear most often from CEOs, COOs, and Commercial leaders across Retail, Consumer Products, and Wholesale Distribution.",
    items: [
      {
        id: "disconnected-channels",
        painPoint: "Disconnected sales channels",
        howTechPlusHelps:
          "We unify direct, dealer, B2B, and digital channels into one orchestrated, SAP-powered commerce experience.",
        icon: "Share2",
      },
      {
        id: "manual-order-processing",
        painPoint: "Manual order processing",
        howTechPlusHelps:
          "We automate order capture and fulfillment end-to-end, freeing your teams to focus on customers, not paperwork.",
        icon: "ClipboardList",
      },
      {
        id: "poor-customer-experiences",
        painPoint: "Poor customer experiences",
        howTechPlusHelps:
          "We redesign the customer journey around consistency and speed, powered by real-time SAP data at every touchpoint.",
        icon: "Heart",
      },
      {
        id: "slow-quote-to-order",
        painPoint: "Slow quote-to-order cycles",
        howTechPlusHelps:
          "We compress quote-to-cash timelines with intelligent CPQ and streamlined SAP sales workflows.",
        icon: "Zap",
      },
      {
        id: "limited-inventory-visibility",
        painPoint: "Limited inventory visibility",
        howTechPlusHelps:
          "We connect order orchestration to real-time SAP inventory, so every promise to the customer is one you can keep.",
        icon: "Eye",
      },
      {
        id: "fragmented-customer-data",
        painPoint: "Fragmented customer data",
        howTechPlusHelps:
          "We establish a single Customer 360 view across SAP and your broader commerce ecosystem.",
        icon: "Database",
      },
      {
        id: "complex-dealer-management",
        painPoint: "Complex dealer management",
        howTechPlusHelps:
          "We simplify dealer and partner operations with dedicated portals connected directly to SAP.",
        icon: "Network",
      },
      {
        id: "fulfillment-inefficiencies",
        painPoint: "Order fulfillment inefficiencies",
        howTechPlusHelps:
          "We orchestrate fulfillment across warehouses, channels, and partners for faster, more accurate delivery.",
        icon: "Truck",
      },
      {
        id: "modernizing-sap",
        painPoint: "Difficulty modernizing SAP",
        howTechPlusHelps:
          "We modernize your SAP core with a clean, extensible architecture built for continuous innovation.",
        icon: "RefreshCw",
      },
      {
        id: "operational-costs",
        painPoint: "Increasing operational costs",
        howTechPlusHelps:
          "We lower operating costs through automation, orchestration, and a leaner Lead-to-Cash operating model.",
        icon: "TrendingDown",
      },
    ],
  },

  coreNarrative: {
    eyebrow: "Our Core Narrative",
    heading: "We Support the Entire Lead-to-Cash Lifecycle",
    intro:
      "Not isolated software implementations—the full journey from first customer contact to revenue realization and insight.",
    stages: [
      { id: "lead-generation", label: "Lead Generation", description: "Identify and qualify demand." },
      { id: "customer-engagement", label: "Customer Engagement", description: "Build relationships that convert." },
      { id: "sales-management", label: "Sales Management", description: "Equip teams to sell with confidence." },
      { id: "quotation", label: "Quotation", description: "Configure, price, and quote accurately." },
      { id: "order-capture", label: "Order Capture", description: "Capture orders across every channel." },
      { id: "order-orchestration", label: "Order Orchestration", description: "Route and manage orders intelligently." },
      { id: "fulfillment", label: "Fulfillment", description: "Deliver with speed and accuracy." },
      { id: "billing", label: "Billing", description: "Invoice and realize revenue reliably." },
      { id: "subscription-billing", label: "Subscription Billing", description: "Automate recurring billing and renewals." },
      { id: "finance-and-revenue", label: "Finance and Revenue", description: "Close the books and surface executive insight." },
    ],
    closingLine: "TechPlus supports the entire lifecycle—not isolated software implementations.",
  },

  businessOutcomes: {
    eyebrow: "Business Outcomes",
    heading: "We Lead With Outcomes, Not Capabilities",
    intro: "Every engagement is measured against the business results it delivers.",
    items: [
      { id: "revenue-realization", title: "Accelerate revenue realization", description: "Shorten the path from order to cash.", icon: "TrendingUp" },
      { id: "sales-productivity", title: "Increase sales productivity", description: "Give sellers more time to sell.", icon: "Rocket" },
      { id: "customer-satisfaction", title: "Improve customer satisfaction", description: "Deliver consistent, reliable experiences.", icon: "Smile" },
      { id: "omnichannel-commerce", title: "Enable omnichannel commerce", description: "Sell seamlessly across every channel.", icon: "Layers" },
      { id: "reduce-manual-processing", title: "Reduce manual order processing", description: "Automate what used to be manual.", icon: "Bot" },
      { id: "order-accuracy", title: "Increase order accuracy", description: "Fewer errors, fewer costly corrections.", icon: "CheckCircle2" },
      { id: "inventory-visibility", title: "Improve inventory visibility", description: "Know what you have, everywhere, in real time.", icon: "Eye" },
      { id: "operating-costs", title: "Lower operating costs", description: "Do more with a leaner operating model.", icon: "PiggyBank" },
      { id: "decision-making", title: "Improve executive decision making", description: "Act on real-time, trusted data.", icon: "LineChart" },
      { id: "scalable-growth", title: "Enable scalable cloud growth", description: "Grow without re-platforming again.", icon: "CloudCog" },
      { id: "autonomous-operations", title: "Enable autonomous, AI-driven operations", description: "Let routine decisions execute themselves.", icon: "Sparkles" },
    ],
  },

  consultingServices: {
    eyebrow: "Consulting Services",
    heading: "How We Deliver Transformation",
    intro:
      "A full-lifecycle capability set, organized around the way executives actually think about the Lead-to-Cash journey—not around software modules.",
    services: services.map((service) => ({ ...service, href: `/services/${service.slug}` })),
  },

  sapPlatform: {
    eyebrow: "Our SAP Platform",
    heading: "The SAP Products Behind Every Stage of Your Journey",
    intro:
      "We don't believe in point solutions bolted together. Every stage of your Lead-to-Cash journey runs on a purpose-built SAP product, orchestrated as one connected platform.",
    stages: [
      {
        id: "sales-cloud",
        stageLabel: "Lead & Opportunity",
        name: "SAP Sales Cloud",
        description: "Capture leads, manage relationships, and build a pipeline your sales team can trust.",
        capabilities: ["Lead & opportunity management", "Customer 360", "Sales forecasting", "Mobile-first selling"],
        icon: "Users",
      },
      {
        id: "cpq",
        stageLabel: "Configure & Quote",
        name: "SAP CPQ",
        description: "Configure complex offers and generate accurate quotes without manual back-and-forth.",
        capabilities: [
          "Guided product configuration",
          "Dynamic pricing rules",
          "Quote approval workflows",
          "Instant quote-to-order conversion",
        ],
        icon: "FileText",
      },
      {
        id: "oms-plus",
        stageLabel: "Order & Fulfillment",
        name: "DataXstream OMS+",
        description:
          "Orchestrate every order across every channel, including point-of-sale, on real-time SAP data—feeding recurring orders straight into SAP Subscription Billing.",
        capabilities: [
          "Omnichannel order orchestration",
          "Point-of-sale (POS)",
          "Inventory visibility",
          "Returns & fulfillment",
          "Recurring charge triggers",
        ],
        icon: "Package",
      },
      {
        id: "subscription-billing",
        stageLabel: "Subscription & Recurring Revenue",
        name: "SAP Subscription Billing",
        description:
          "Flexible, automated billing for recurring revenue and subscription-based business models, integrated directly with OMS+ so every recurring order becomes a recurring charge automatically.",
        capabilities: ["Usage-based billing", "Subscription lifecycle", "Revenue recognition", "Contract management"],
        icon: "Repeat",
      },
      {
        id: "s4hana",
        stageLabel: "Billing & Finance",
        name: "SAP S/4HANA Cloud",
        description: "Bill accurately and close the books faster on a modern financial core, public or private cloud.",
        capabilities: ["Billing & invoicing", "Financial management", "Real-time reporting", "Public or private cloud deployment"],
        icon: "Landmark",
      },
    ],
  },

  leadToCashFlow: {
    eyebrow: "One Connected Flow",
    heading: "Lead-to-Cash, Without the Handoff Gaps",
    intro:
      "Every stage of the journey, mapped to the SAP product that powers it—orchestrated as one continuous flow, not ten disconnected handoffs.",
    backgroundImage: "/images/lead-to-cash-flow.jpg",
    stages: [
      { id: "lead-generation", label: "Lead Generation", product: "SAP Sales Cloud", accent: "sky" },
      { id: "customer-engagement", label: "Customer Engagement", product: "SAP Sales Cloud", accent: "sky" },
      { id: "sales-management", label: "Sales Management", product: "SAP Sales Cloud", accent: "sky" },
      { id: "quotation", label: "Quotation", product: "SAP CPQ", accent: "sky" },
      { id: "order-capture", label: "Order Capture", product: "DataXstream OMS+", accent: "amber" },
      { id: "order-orchestration", label: "Order Orchestration", product: "DataXstream OMS+", accent: "amber" },
      { id: "fulfillment", label: "Fulfillment", product: "DataXstream OMS+", accent: "amber" },
      { id: "billing", label: "Billing", product: "SAP S/4HANA Cloud", accent: "amber" },
      { id: "subscription-billing", label: "Subscription Billing", product: "SAP Subscription Billing", accent: "amber" },
      { id: "finance-and-revenue", label: "Finance and Revenue", product: "SAP S/4HANA Cloud", accent: "amber" },
    ],
  },

  omsPlus: {
    eyebrow: "Featured Capability",
    heading: "Intelligent Order Management",
    positioningStatement:
      "The intelligent order orchestration platform that connects every sales channel while maximizing the value of your SAP investment.",
    description:
      "Rather than bolting on a generic order management workaround, we deploy an SAP-certified orchestration layer purpose-built to unify every channel your customers order from—directly on top of your existing SAP investment.",
    outcomes: [
      "One unified order platform",
      "Consistent customer experience",
      "Faster order processing",
      "Real-time inventory visibility",
      "Improved order accuracy",
      "Reduced operational costs",
      "Greater sales productivity",
      "Scalable omnichannel growth",
    ],
    cta: { label: "Discuss Order Orchestration", href: "/contact" },
  },

  blogPreview: {
    eyebrow: "From Our Partner",
    heading: "Latest from the DataXstream Blog",
    intro:
      "TechPlus is a regional reseller of DataXstream OMS+. Follow the team defining the platform's roadmap directly.",
    posts: generatedBlogPosts,
    cta: { label: "Visit the DataXstream Blog", href: "https://www.dataxstream.com/blog/" },
  },

  industryFocus: {
    eyebrow: "Industry Focus",
    heading: "Deep Expertise, Not Generic ERP Messaging",
    intro:
      "We only work in industries where we bring genuine depth—so every recommendation is grounded in how your business actually operates.",
    industries: industries.map((industry) => ({ ...industry, href: `/industries/${industry.slug}` })),
  },

  differentiators: {
    eyebrow: "Why TechPlus",
    heading: "What Makes TechPlus Different",
    items: [
      { id: "boutique-attention", title: "Boutique consulting with executive attention", description: "Senior advisors on every engagement—not a rotating bench of junior staff.", icon: "Gem" },
      { id: "lead-to-cash-specialization", title: "Deep Lead-to-Cash specialization", description: "We know one journey exceptionally well, rather than everything superficially.", icon: "Target" },
      { id: "industry-expertise", title: "Retail, Consumer Products & Wholesale expertise", description: "Recommendations grounded in how your industry actually sells.", icon: "Building2" },
      { id: "sap-native-innovation", title: "SAP-native innovation", description: "We build on SAP's platform, not around it, to protect your existing investment.", icon: "Sparkles" },
      { id: "business-first", title: "Business-first consulting approach", description: "Every recommendation starts with a business outcome, not a feature list.", icon: "Compass" },
      { id: "end-to-end", title: "End-to-end transformation capability", description: "From strategy through managed services, under one accountable team.", icon: "Infinity" },
      { id: "long-term-partnership", title: "Long-term strategic partnership", description: "We measure success in years of continuous value, not a single go-live.", icon: "Handshake" },
      { id: "regional-delivery", title: "Regional APAC delivery excellence", description: "Local delivery teams across Southeast Asia backed by global standards.", icon: "Globe2" },
    ],
  },

  globalPresence: {
    eyebrow: "Global Presence",
    heading: "We're Where You Are",
    intro: "With offices across North America and Asia-Pacific, we deliver local expertise with global capabilities.",
    offices: [
      {
        id: "usa",
        flag: "🇺🇸",
        country: "USA Headquarters",
        entity: "TechPlus International",
        role: "Global Headquarters",
        address: "2024 Waterscape Way, PMB 231, New Bern, NC 28562",
      },
      {
        id: "singapore",
        flag: "🇸🇬",
        country: "Singapore",
        entity: "TechPlus APAC",
        role: "APAC Strategy & Advisory",
      },
      {
        id: "cambodia",
        flag: "🇰🇭",
        country: "Cambodia",
        entity: "TechPlus Systems (Cambodia)",
        role: "Transformation Delivery Hub",
        address: "Exchange Square 14th Floor, Buildings #19&20, Street 106, Phnom Penh 120211",
      },
      {
        id: "philippines",
        flag: "🇵🇭",
        country: "Philippines",
        entity: "TechPlus Systems (Philippines)",
        role: "Center of Excellence & Managed Services",
      },
    ],
  },

  finalCta: {
    eyebrow: "Ready to Get Started?",
    heading: "Transform Your Business Today",
    subheading:
      "Talk to our Lead-to-Cash transformation team about how a boutique, business-first approach to SAP can accelerate your revenue.",
    ctaPrimary: { label: "Schedule a Strategy Consultation", href: "/contact" },
    ctaSecondary: { label: "View Our Services", href: "#services" },
  },

  footer: {
    logo: "TechPlus",
    description:
      "TechPlus APAC is a boutique SAP consulting firm specializing in Lead-to-Cash transformation for Retail, Consumer Products, and Wholesale Distribution companies.",
    phone: "+855 23 972 313",
    email: "info@techplusinternational.com",
    serviceLinks: services.map((service) => ({ label: service.name, href: `/services/${service.slug}` })),
    legalLinks: [
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
    businessHours: [
      { label: "Monday–Friday", value: "9am–6pm" },
      { label: "Saturday", value: "10am–2pm" },
      { label: "Sunday", value: "Closed" },
    ],
    copyright: "© 2026 TechPlus International. All rights reserved.",
  },
};
