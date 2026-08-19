import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { LinkItem } from "@/content/types";

interface PageHeroProps {
  eyebrow: string;
  headline: string;
  description: string;
  cta: LinkItem;
}

export function PageHero({ eyebrow, headline, description, cta }: PageHeroProps) {
  return (
    <SectionWrapper variant="gradient" className="pt-16 pb-16 sm:pt-24 sm:pb-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Badge>{eyebrow}</Badge>
        <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">{headline}</h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">{description}</p>
        <div className="mt-10">
          <Button href={cta.href} variant="filled">
            {cta.label}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
