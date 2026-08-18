import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { getIcon } from "@/lib/icon-map";
import type { SapPlatformContent } from "@/content/types";

export function SapPlatform({ content }: { content: SapPlatformContent }) {
  return (
    <SectionWrapper variant="flat">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold tracking-wide text-sky-400 uppercase">{content.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{content.heading}</h2>
        <p className="mt-4 text-white/60">{content.intro}</p>
      </div>

      <div className="mx-auto mt-14 max-w-3xl">
        {content.stages.map((stage, i) => {
          const Icon = getIcon(stage.icon);
          const isLast = i === content.stages.length - 1;
          return (
            <div key={stage.id} className="relative flex gap-6 pb-10 last:pb-0">
              {!isLast && (
                <span
                  aria-hidden
                  className="absolute left-6 top-14 -bottom-2 w-px bg-white/10"
                />
              )}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-sky-500/30 bg-black">
                <Icon className="h-5 w-5 text-sky-400" />
              </div>
              <Card className="flex-1">
                <span className="text-xs font-semibold tracking-wide text-sky-400 uppercase">
                  {String(i + 1).padStart(2, "0")} · {stage.stageLabel}
                </span>
                <h3 className="mt-2 text-lg font-bold text-white">{stage.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{stage.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {stage.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
