import type { IndustryPageContent } from "./types";

export const industries: IndustryPageContent[] = [
  {
    slug: "retail",
    name: "Retail",
    teaser: "Unify store, digital, and marketplace selling into one connected, SAP-powered customer experience.",
    heroTagline: "Unify Every Channel Your Customers Shop",
    heroDescription:
      "Retailers are expected to deliver one seamless brand experience across stores, digital, and marketplaces, while SAP remains the system of record behind it all. We help retail leaders modernize the Lead-to-Cash journey so every channel feels like one business.",
    trends: [
      "Customers expect to browse, buy, return, and get support interchangeably across channels.",
      "Marketplaces and social commerce are becoming primary demand-generation channels, not side experiments.",
      "Store associates are expected to sell like digital channels, with full visibility into inventory and customer history.",
      "Margin pressure is pushing retailers to automate promotions, pricing, and fulfillment decisions.",
    ],
    challenges: [
      "Store, e-commerce, and marketplace systems operate as disconnected silos.",
      "Promotions and pricing are managed manually across channels, creating inconsistency.",
      "Store associates lack real-time visibility into inventory across the network.",
      "Returns and exchanges create friction instead of loyalty.",
    ],
    leadToCashPainPoints: [
      "Orders placed online can't reliably be fulfilled from the nearest store.",
      "Customer data is fragmented across POS, e-commerce, and CRM systems.",
      "Peak-season order volume overwhelms manual order management processes.",
      "Reporting on true omnichannel performance takes weeks, not minutes.",
    ],
    futureOpportunities: [
      "Unified commerce that lets customers buy anywhere and fulfill anywhere.",
      "AI-assisted personalization powered by a single customer record.",
      "Store associates equipped as digital sellers, not just cashiers.",
      "Real-time, SAP-native inventory visibility across the entire network.",
    ],
    recommendedSapArchitecture: [
      { title: "SAP S/4HANA", description: "A modern digital core for financials, inventory, and order management." },
      { title: "OMS+ Order Orchestration", description: "Unify store, digital, and marketplace orders into one fulfillment engine." },
      { title: "SAP BTP & Integration Suite", description: "Connect POS, e-commerce, and marketplace platforms to SAP in real time." },
      { title: "SAP Sales Cloud / CPQ", description: "Equip associates and B2B sales teams with a single customer view." },
    ],
    expectedOutcomes: [
      "Faster, more accurate omnichannel order fulfillment",
      "A single, trusted view of inventory across stores and channels",
      "Higher customer satisfaction and repeat purchase rates",
      "Lower cost to serve through automated order orchestration",
    ],
    representativeScenario: {
      title: "Unifying Store and Digital Fulfillment",
      description:
        "A multi-format retailer needed to let customers buy online and pick up or return in any store, without overwhelming staff with manual order lookups. By orchestrating orders through SAP-native OMS+, the retailer connected POS, e-commerce, and inventory into one system, cutting fulfillment delays and giving store teams real-time visibility into every order.",
    },
    executiveInsight:
      "Retail leaders increasingly compete on operational execution, not just product or price. The retailers pulling ahead are the ones who treat Lead-to-Cash as one connected process, not a collection of channel-specific workarounds.",
    cta: { label: "Discuss Your Retail Transformation", href: "/contact" },
  },
  {
    slug: "consumer-products",
    name: "Consumer Products",
    teaser: "Orchestrate complex trade, distributor, and direct-to-consumer sales models on a single Lead-to-Cash backbone.",
    heroTagline: "Orchestrate Complex Trade and Direct-to-Consumer Sales",
    heroDescription:
      "Consumer products companies sell through an increasingly complex mix of distributors, retail trade partners, and direct-to-consumer channels, all on the same SAP backbone. We help commercial leaders bring order to that complexity.",
    trends: [
      "Direct-to-consumer is growing alongside, not instead of, traditional trade relationships.",
      "Trade promotion spend is under growing scrutiny to prove ROI.",
      "Distributors and retail partners expect faster, more transparent order processing.",
      "Supply constraints are pushing companies toward better demand and inventory visibility.",
    ],
    challenges: [
      "Trade, distributor, and DTC sales run on inconsistent processes and data.",
      "Trade promotions are tracked manually, obscuring true profitability.",
      "Order-to-cash cycles vary widely by channel and region.",
      "Sales and finance lack a shared, real-time view of order status.",
    ],
    leadToCashPainPoints: [
      "Distributor orders require manual reconciliation against SAP.",
      "Pricing and promotion logic is duplicated across systems instead of governed centrally.",
      "DTC order volumes strain processes designed for bulk trade orders.",
      "Returns and chargebacks slow down revenue recognition.",
    ],
    futureOpportunities: [
      "One order orchestration layer spanning trade, distributor, and DTC channels.",
      "Real-time trade promotion visibility tied directly to SAP financials.",
      "Faster, more accurate distributor and retailer onboarding.",
      "Demand signals from DTC feeding back into trade and supply planning.",
    ],
    recommendedSapArchitecture: [
      { title: "SAP S/4HANA", description: "A unified digital core spanning trade, distribution, and DTC financials." },
      { title: "OMS+ & B2B Commerce", description: "Orchestrate distributor and trade orders alongside direct-to-consumer demand." },
      { title: "SAP BTP & Integration Suite", description: "Connect DTC platforms, distributor EDI, and trade systems to SAP." },
      { title: "SAP Analytics & Automation", description: "Give commercial and finance teams a shared, real-time view of performance." },
    ],
    expectedOutcomes: [
      "Faster, more transparent distributor and trade order processing",
      "Clearer visibility into trade promotion ROI",
      "A single order orchestration layer across all channels",
      "Improved accuracy in revenue and rebate recognition",
    ],
    representativeScenario: {
      title: "Bringing Trade and DTC Onto One Backbone",
      description:
        "A consumer products company selling through distributors, national retail accounts, and a growing DTC channel needed a single order process instead of three disconnected ones. Consolidating order orchestration onto their SAP core gave commercial and finance teams a shared, real-time view of order status and trade spend for the first time.",
    },
    executiveInsight:
      "The consumer products companies winning today aren't choosing between trade and direct channels. They're building the operational backbone to run both well, on the same platform, with the same data.",
    cta: { label: "Discuss Your Commercial Model", href: "/contact" },
  },
  {
    slug: "wholesale-distribution",
    name: "Wholesale Distribution",
    teaser: "Simplify dealer networks and B2B ordering while improving inventory accuracy across every warehouse.",
    heroTagline: "Simplify Dealer Networks and B2B Ordering",
    heroDescription:
      "Wholesale distributors compete on speed, accuracy, and ease of doing business with dealers and B2B customers. We help distribution leaders modernize order management without disrupting the relationships their business depends on.",
    trends: [
      "B2B buyers increasingly expect self-service ordering, not phone and fax.",
      "Dealer networks are consolidating, raising the bar for service consistency.",
      "Inventory accuracy across warehouses is now a competitive differentiator.",
      "Margin compression is pushing distributors toward automation over headcount growth.",
    ],
    challenges: [
      "Dealer and B2B ordering relies heavily on manual, person-to-person processes.",
      "Inventory accuracy varies significantly across warehouses and regions.",
      "Pricing and contract terms are managed inconsistently across the dealer network.",
      "Order status visibility is limited for both dealers and internal teams.",
    ],
    leadToCashPainPoints: [
      "Dealers lack self-service visibility into pricing, availability, and order status.",
      "Manual order entry introduces errors that are costly to correct downstream.",
      "Multi-warehouse fulfillment decisions are made without real-time inventory data.",
      "Returns processing is slow and inconsistent across the dealer network.",
    ],
    futureOpportunities: [
      "Self-service dealer and B2B ordering portals connected directly to SAP.",
      "Real-time, network-wide inventory visibility for smarter fulfillment decisions.",
      "Consistent pricing and contract governance across every dealer relationship.",
      "Faster, more predictable order-to-delivery cycles.",
    ],
    recommendedSapArchitecture: [
      { title: "SAP Business One / S/4HANA", description: "A right-sized digital core for distribution financials and operations." },
      { title: "Dealer Portal & B2B Commerce", description: "Give dealers self-service visibility into pricing, availability, and orders." },
      { title: "OMS+ Order Orchestration", description: "Coordinate fulfillment intelligently across multiple warehouses." },
      { title: "SAP BTP & Integration Suite", description: "Connect dealer, EDI, and warehouse systems directly to SAP." },
    ],
    expectedOutcomes: [
      "Higher order accuracy and fewer costly corrections",
      "Real-time inventory visibility across every warehouse",
      "A more consistent, self-service dealer experience",
      "Lower cost to serve through order automation",
    ],
    representativeScenario: {
      title: "Giving Dealers Self-Service Visibility",
      description:
        "A wholesale distributor relying on phone and email orders needed to reduce manual order entry without losing the relationship-driven service dealers expected. A connected dealer portal, orchestrated through their SAP environment, gave dealers real-time pricing and inventory visibility while cutting manual order processing significantly.",
    },
    executiveInsight:
      "In distribution, ease of doing business is the product. The distributors gaining share are the ones making it easier for dealers to buy, without losing the service relationships that built the business.",
    cta: { label: "Discuss Your Distribution Network", href: "/contact" },
  },
];

export function getIndustryBySlug(slug: string): IndustryPageContent | undefined {
  return industries.find((i) => i.slug === slug);
}
