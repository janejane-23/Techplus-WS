import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getServiceBySlug } from "@/content/services";
import { PageHero } from "@/components/ui/PageHero";
import { ProseSection } from "@/components/ui/ProseSection";
import { ExecutiveInsight } from "@/components/ui/ExecutiveInsight";
import { Checklist } from "@/components/ui/Checklist";
import { InfoList } from "@/components/ui/InfoList";
import { FinalCta } from "@/components/sections/FinalCta";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} | TechPlus APAC`,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow={`Consulting Service ${service.eyebrowNumber}`}
        headline={service.name}
        description={service.summary}
        cta={service.cta}
      />

      <ProseSection
        variant="flat"
        eyebrow="The Business Challenge"
        heading="Why This Matters"
        paragraphs={[service.businessChallenge, service.businessImpact]}
      />

      <ExecutiveInsight insight={service.executiveInsight} variant="gradient" />

      <ProseSection variant="flat" eyebrow="Our Approach" heading="How TechPlus Helps" paragraphs={[service.approach]}>
        <Checklist heading="Capabilities That Enable This" items={service.capabilities} />
      </ProseSection>

      <InfoList
        variant="gradient"
        eyebrow="Business Outcomes"
        heading="What You Can Expect"
        items={service.expectedOutcomes}
      />

      <ProseSection
        variant="flat"
        eyebrow="Customer Value"
        heading="What This Means for Your Business"
        paragraphs={[service.customerValue]}
      />

      <FinalCta
        content={{
          eyebrow: "Ready to Get Started?",
          heading: `Let's Talk About ${service.name}`,
          subheading:
            "Schedule a conversation with our Lead-to-Cash transformation team to discuss your specific business challenge.",
          ctaPrimary: service.cta,
          ctaSecondary: { label: "Explore All Services", href: "/#services" },
        }}
      />
    </>
  );
}
