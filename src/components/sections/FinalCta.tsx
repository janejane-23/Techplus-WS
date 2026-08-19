import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import type { FinalCtaContent } from "@/content/types";

export function FinalCta({ content }: { content: FinalCtaContent }) {
  return (
    <SectionWrapper variant="flat">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-sm font-semibold tracking-wide text-sky-600 uppercase">{content.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{content.heading}</h2>
        <p className="mt-4 max-w-xl text-slate-600">{content.subheading}</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href={content.ctaPrimary.href} variant="filled">
            {content.ctaPrimary.label}
          </Button>
          <Button href={content.ctaSecondary.href} variant="ghost">
            {content.ctaSecondary.label}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
