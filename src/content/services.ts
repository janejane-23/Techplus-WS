import type { ServicePageContent } from "./types";

export const services: ServicePageContent[] = [
  {
    slug: "strategy-advisory",
    eyebrowNumber: "01",
    name: "Lead-to-Cash Strategy & Advisory",
    summary:
      "Executive advisory that aligns transformation to business strategy before a single system is touched.",
    capabilities: [
      "Business consulting",
      "Operating model redesign",
      "Process transformation",
      "Executive workshops",
      "Digital transformation roadmap",
      "Industry benchmarking",
    ],
    businessChallenge:
      "Most Lead-to-Cash transformations fail not because of technology, but because they begin with technology—before the business strategy is clear.",
    businessImpact:
      "Without a clear operating model and roadmap, transformation investments stall, exceed budget, or fail to change how the business actually performs.",
    executiveInsight:
      "The organizations that transform successfully treat strategy as the foundation, not a formality—defining the operating model and business case before a single system is configured.",
    approach:
      "We start with your business strategy, not your SAP landscape. Through executive workshops, operating model design, and industry benchmarking, we build a Lead-to-Cash roadmap grounded in your commercial goals and sequenced for realistic delivery.",
    expectedOutcomes: [
      "A clear, business-aligned transformation roadmap",
      "Reduced execution risk on downstream SAP investment",
      "Alignment between commercial and technology leadership",
      "A realistic, sequenced path to measurable outcomes",
    ],
    customerValue:
      "Executive teams gain confidence that transformation investment is solving the right business problem, in the right order, before major systems work begins.",
    cta: { label: "Schedule a Strategy Consultation", href: "/contact" },
  },
  {
    slug: "sales-transformation",
    eyebrowNumber: "02",
    name: "Sales Transformation",
    summary: "Modernize how your teams engage customers and sell, from first touch to signed order.",
    capabilities: ["Customer engagement", "Sales Cloud", "CRM", "CPQ", "Mobile sales", "Sales automation", "Customer 360"],
    businessChallenge:
      "Sales teams are often equipped with disconnected tools that slow down quoting, ordering, and customer engagement instead of accelerating them.",
    businessImpact:
      "Slow, manual sales processes cost revenue directly—through longer sales cycles, lower win rates, and sellers who spend more time on administration than customers.",
    executiveInsight: "Sales productivity is rarely a talent problem. It's usually a process and systems problem—and it's fixable.",
    approach:
      "We modernize the seller experience end-to-end: customer engagement, CRM, CPQ, and mobile sales, all connected to a single Customer 360 view grounded in SAP data.",
    expectedOutcomes: [
      "Shorter quote-to-order cycles",
      "Higher seller productivity",
      "More consistent customer engagement",
      "A single, trusted view of every customer",
    ],
    customerValue:
      "Sales leaders gain a team that spends more time selling and less time on administrative friction, while leadership gains real-time visibility into pipeline and performance.",
    cta: { label: "Discuss Sales Transformation", href: "/contact" },
  },
  {
    slug: "intelligent-order-management",
    eyebrowNumber: "03",
    name: "Intelligent Order Management",
    summary: "Orchestrate every order across every channel with SAP-native order management.",
    capabilities: [
      "OMS+",
      "Dealer Portal",
      "Customer Portal",
      "B2B Commerce",
      "Omnichannel Order Management",
      "Order Orchestration",
      "Inventory Visibility",
      "Returns",
      "Fulfillment",
    ],
    businessChallenge:
      "Customers expect to order anywhere and receive their order reliably—but most order management processes were never designed for true omnichannel complexity.",
    businessImpact:
      "Disconnected order management leads to fulfillment errors, inventory blind spots, and customer experiences that erode loyalty.",
    executiveInsight:
      "Order management is where the customer experience promise either gets kept or broken. It deserves the same executive attention as the sales process that generates the order.",
    approach:
      "We deploy SAP-certified order orchestration—OMS+, dealer and customer portals, and B2B commerce—purpose-built to unify every channel on top of your existing SAP investment.",
    expectedOutcomes: [
      "One unified view of every order, on every channel",
      "Real-time inventory visibility",
      "Improved order accuracy",
      "Faster, more reliable fulfillment",
    ],
    customerValue:
      "Customers experience one consistent brand regardless of where or how they order, while operations teams gain the visibility to keep every promise made to them.",
    cta: { label: "Discuss Order Orchestration", href: "/contact" },
  },
  {
    slug: "sap-digital-core",
    eyebrowNumber: "04",
    name: "SAP Digital Core",
    summary: "A modern, extensible SAP foundation that powers transformation without slowing it down.",
    capabilities: ["SAP S/4HANA", "SAP Business One", "SAP BTP", "Integration Suite", "AI", "Analytics", "Automation", "Extensions", "Clean Core"],
    businessChallenge:
      "Legacy or heavily customized SAP environments become harder and more expensive to change over time, slowing every future transformation.",
    businessImpact:
      "A brittle SAP core limits the business's ability to adopt new capabilities quickly, increasing both cost and risk with every change.",
    executiveInsight: "Clean core isn't a technical preference—it's what makes future transformation fast and affordable instead of slow and expensive.",
    approach:
      "We modernize your SAP foundation—S/4HANA, Business One, BTP, and Integration Suite—with a clean, extensible architecture designed for continuous innovation, not a one-time project.",
    expectedOutcomes: [
      "A modern, extensible SAP foundation",
      "Lower cost and risk for future changes",
      "Faster adoption of new SAP innovation",
      "A platform built for continuous improvement",
    ],
    customerValue:
      "IT and business leaders gain a digital core that supports transformation instead of constraining it, protecting the value of the SAP investment for years to come.",
    cta: { label: "Discuss Your SAP Roadmap", href: "/contact" },
  },
  {
    slug: "ai-automation",
    eyebrowNumber: "05",
    name: "Autonomous Enterprise & AI Automation",
    summary:
      "Embed AI-driven automation and autonomous agents into your Lead-to-Cash process, so routine decisions execute themselves.",
    capabilities: [
      "Autonomous order exception handling",
      "AI-powered demand & inventory forecasting",
      "Intelligent sales & service agents",
      "SAP BTP AI & Joule integration",
      "Predictive customer insights",
      "Automated approvals & workflow orchestration",
    ],
    businessChallenge:
      "Most Lead-to-Cash processes still depend on people to notice exceptions, chase approvals, and manually keep operations moving—which limits how fast and how far the business can scale.",
    businessImpact:
      "Manual intervention doesn't just add cost. It slows decisions, delays orders, and caps how much growth the organization can absorb without adding headcount.",
    executiveInsight:
      "The next competitive advantage in Lead-to-Cash isn't a faster manual process—it's a process that runs itself, with people managing by exception instead of managing every transaction.",
    approach:
      "We embed AI-driven automation and autonomous agents directly into your SAP-powered Lead-to-Cash processes—from lead qualification to order exceptions to customer service—so routine decisions execute automatically and your teams focus only on what genuinely needs judgment.",
    expectedOutcomes: [
      "Fewer manual touchpoints across the Lead-to-Cash journey",
      "Faster exception resolution and order turnaround",
      "Scalable growth without proportional headcount growth",
      "Executives freed to manage by exception, not by transaction",
    ],
    customerValue:
      "Operations leaders gain a Lead-to-Cash process that increasingly runs itself—surfacing only the decisions that truly need a human, while every routine transaction moves without waiting on someone to notice it.",
    cta: { label: "Discuss Autonomous Operations", href: "/contact" },
  },
  {
    slug: "managed-services",
    eyebrowNumber: "06",
    name: "Managed Services",
    summary: "Long-term partnership that keeps your transformation improving long after go-live.",
    capabilities: ["Continuous optimization", "Innovation roadmap", "Application support", "Performance optimization", "Business process governance"],
    businessChallenge:
      "Transformation value doesn't stop at go-live—but most organizations lose momentum once the project team disbands.",
    businessImpact:
      "Without continuous optimization, systems drift from best practice, adoption plateaus, and the business case behind the original investment erodes.",
    executiveInsight: "The best-performing SAP environments aren't the ones that were implemented well once—they're the ones that keep improving.",
    approach:
      "We provide long-term application support, performance optimization, and an ongoing innovation roadmap, so your Lead-to-Cash environment keeps improving long after go-live.",
    expectedOutcomes: [
      "Sustained system performance and adoption",
      "A continuously improving innovation roadmap",
      "Reduced risk of process and data drift",
      "Long-term protection of transformation ROI",
    ],
    customerValue:
      "Executive teams gain a long-term partner accountable for outcomes, not just uptime, ensuring the value of transformation compounds over time.",
    cta: { label: "Discuss Managed Services", href: "/contact" },
  },
];

export function getServiceBySlug(slug: string): ServicePageContent | undefined {
  return services.find((s) => s.slug === slug);
}
