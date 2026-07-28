import { SectionWrapper } from "@/components/ui/SectionWrapper";
import type { CoreNarrativeContent } from "@/content/types";

export function CoreNarrative({ content }: { content: CoreNarrativeContent }) {
  return (
    <SectionWrapper variant="gradient">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold tracking-wide text-sky-400 uppercase">{content.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{content.heading}</h2>
        <p className="mt-4 text-white/60">{content.intro}</p>
      </div>

      <div className="mt-14 flex flex-wrap items-stretch justify-center gap-3">
        {content.stages.map((stage, i) => (
          <div key={stage.id} className="flex items-stretch gap-3">
            <div className="flex w-36 flex-col items-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center">
              <span className="text-xs font-semibold text-sky-400">{String(i + 1).padStart(2, "0")}</span>
              <span className="mt-2 text-sm font-semibold text-white">{stage.label}</span>
              <span className="mt-1 text-xs text-white/50">{stage.description}</span>
            </div>
            {i < content.stages.length - 1 && (
              <span className="hidden self-center text-white/20 sm:inline">&rarr;</span>
            )}
          </div>
        ))}
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center text-sm font-medium text-white/70">{content.closingLine}</p>
    </SectionWrapper>
  );
}
