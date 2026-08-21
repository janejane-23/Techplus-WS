import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StatCounter } from "@/components/ui/StatCounter";
import { PartnerBadge } from "@/components/ui/PartnerBadge";
import type { HeroContent } from "@/content/types";

export function Hero({ content }: { content: HeroContent }) {
  return (
    <SectionWrapper variant="gradient" className="pt-20 pb-20 sm:pt-28 sm:pb-28">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Badge>{content.badge}</Badge>

        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
          {content.headline}
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-700 sm:text-xl">{content.subheadline}</p>

        <p className="mt-4 text-sm font-semibold tracking-wide text-sky-600 uppercase">
          {content.poweredByLine}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href={content.ctaPrimary.href} variant="filled">
            {content.ctaPrimary.label}
          </Button>
          <Button href={content.ctaSecondary.href} variant="ghost">
            {content.ctaSecondary.label}
          </Button>
        </div>

        <div className="mt-8">
          <PartnerBadge />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {content.stats.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
