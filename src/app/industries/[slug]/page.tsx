import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { industries, getIndustryBySlug } from "@/content/industries";
import { PageHero } from "@/components/ui/PageHero";
import { InfoList } from "@/components/ui/InfoList";
import { ExecutiveInsight } from "@/components/ui/ExecutiveInsight";
import { ScenarioCard } from "@/components/ui/ScenarioCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { FinalCta } from "@/components/sections/FinalCta";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: `${industry.name} | TechPlus APAC`,
    description: industry.heroDescription,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${industry.name} Transformation`}
        headline={industry.heroTagline}
        description={industry.heroDescription}
        cta={industry.cta}
      />

      <InfoList variant="flat" eyebrow="Industry Trends" heading="What's Changing in Your Market" items={industry.trends} />

      <InfoList
        variant="gradient"
        eyebrow="Business Challenges"
        heading="What Executives Are Navigating"
        items={industry.challenges}
      />

      <InfoList
        variant="flat"
        eyebrow="Lead-to-Cash Pain Points"
        heading="Where the Process Breaks Down"
        items={industry.leadToCashPainPoints}
      />

      <InfoList
        variant="gradient"
        eyebrow="Future Opportunities"
        heading="Where the Opportunity Is"
        items={industry.futureOpportunities}
      />

      <SectionWrapper variant="flat">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-wide text-sky-400 uppercase">Recommended SAP Architecture</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            The Foundation We Recommend
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {industry.recommendedSapArchitecture.map((item) => (
            <Card key={item.title}>
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <InfoList
        variant="gradient"
        eyebrow="Business Outcomes"
        heading="What You Can Expect"
        items={industry.expectedOutcomes}
      />

      <ScenarioCard
        variant="flat"
        eyebrow="Representative Scenario"
        title={industry.representativeScenario.title}
        description={industry.representativeScenario.description}
      />

      <ExecutiveInsight insight={industry.executiveInsight} variant="gradient" />

      <FinalCta
        content={{
          eyebrow: "Ready to Get Started?",
          heading: `Let's Talk About Your ${industry.name} Business`,
          subheading:
            "Schedule a conversation with our Lead-to-Cash transformation team about the challenges specific to your industry.",
          ctaPrimary: industry.cta,
          ctaSecondary: { label: "Explore Our Services", href: "/#services" },
        }}
      />
    </>
  );
}
