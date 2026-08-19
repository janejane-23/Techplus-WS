import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import type { IndustryFocusContent } from "@/content/types";

export function IndustryFocus({ content }: { content: IndustryFocusContent }) {
  return (
    <SectionWrapper id="industries" variant="gradient">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold tracking-wide text-sky-600 uppercase">{content.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{content.heading}</h2>
        <p className="mt-4 text-slate-600">{content.intro}</p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {content.industries.map((industry) => (
          <Card key={industry.slug} className="flex flex-col">
            <h3 className="text-lg font-bold text-slate-900">{industry.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{industry.teaser}</p>
            <Link href={industry.href} className="mt-6 text-sm font-semibold text-sky-600 hover:text-sky-700">
              Explore {industry.name} &rarr;
            </Link>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
