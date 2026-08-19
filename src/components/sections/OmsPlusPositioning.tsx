import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { OmsPlusLogo } from "@/components/ui/OmsPlusLogo";
import { CheckCircle2 } from "lucide-react";
import type { OmsPlusContent } from "@/content/types";

export function OmsPlusPositioning({ content }: { content: OmsPlusContent }) {
  return (
    <SectionWrapper variant="flat">
      <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-100 via-white to-white p-8 shadow-sm sm:p-12">
        <div className="flex items-center gap-3">
          <OmsPlusLogo />
          <span className="text-xs font-semibold tracking-wide text-sky-600 uppercase">{content.eyebrow}</span>
        </div>

        <h2 className="mt-6 max-w-2xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {content.heading}
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-slate-700">{content.positioningStatement}</p>
        <p className="mt-4 max-w-2xl text-sm text-slate-600">{content.description}</p>

        <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {content.outcomes.map((outcome) => (
            <li key={outcome} className="flex items-center gap-2 text-sm text-slate-700">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-600" />
              {outcome}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Button href={content.cta.href} variant="filled">
            {content.cta.label}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
