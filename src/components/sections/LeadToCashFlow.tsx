import { ArrowRightLeft } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import type { LeadToCashFlowContent } from "@/content/types";

const ACCENT_STYLES = {
  sky: { ring: "border-sky-500", text: "text-sky-400" },
  amber: { ring: "border-amber-400", text: "text-amber-400" },
} as const;

export function LeadToCashFlow({ content }: { content: LeadToCashFlowContent }) {
  return (
    <SectionWrapper variant="gradient">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold tracking-wide text-sky-400 uppercase">{content.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{content.heading}</h2>
        <p className="mt-4 text-white/60">{content.intro}</p>
      </div>

      <div className="mx-auto mt-16 max-w-4xl">
        <div className="flex flex-col items-center gap-14 sm:flex-row sm:items-start sm:justify-center sm:gap-0">
          {content.loops.map((loop, i) => {
            const accent = ACCENT_STYLES[loop.accent];
            const isFirst = i === 0;
            return (
              <div key={loop.id} className="contents">
                <div className={`flex flex-col items-center ${isFirst ? "sm:mr-[-2.5rem]" : "sm:ml-[-2.5rem]"}`}>
                  <div
                    className={`flex h-56 w-56 flex-col items-center justify-center rounded-full border-[6px] ${accent.ring} bg-black text-center`}
                  >
                    <span className={`text-xs font-semibold uppercase tracking-wide ${accent.text}`}>{loop.label}</span>
                    <span className="mt-2 px-8 text-base font-bold text-white">{loop.productLabel}</span>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-2">
                    {loop.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-center text-xs text-white/60"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
                {isFirst && (
                  <div className="z-10 flex h-14 w-14 shrink-0 items-center justify-center self-center rounded-full bg-black ring-4 ring-black">
                    <ArrowRightLeft className="h-5 w-5 text-white" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
