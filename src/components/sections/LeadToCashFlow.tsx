import type { LeadToCashFlowContent } from "@/content/types";

const ACCENT_STYLES = {
  sky: { border: "border-sky-500/40", text: "text-sky-400", dot: "bg-sky-500" },
  amber: { border: "border-amber-400/40", text: "text-amber-400", dot: "bg-amber-400" },
} as const;

export function LeadToCashFlow({ content }: { content: LeadToCashFlowContent }) {
  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-28">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={content.backgroundImage}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-wide text-sky-400 uppercase">{content.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{content.heading}</h2>
          <p className="mt-4 text-white/60">{content.intro}</p>
        </div>

        <div className="mt-16 flex flex-wrap items-stretch justify-center gap-3">
          {content.stages.map((stage, i) => {
            const accent = ACCENT_STYLES[stage.accent];
            return (
              <div key={stage.id} className="flex items-stretch gap-3">
                <div
                  className={`flex w-40 flex-col items-center rounded-xl border ${accent.border} bg-black/60 px-4 py-5 text-center backdrop-blur-sm`}
                >
                  <span className={`text-xs font-semibold ${accent.text}`}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="mt-2 text-sm font-semibold text-white">{stage.label}</span>
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/60">
                    <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
                    {stage.product}
                  </span>
                </div>
                {i < content.stages.length - 1 && (
                  <span className="hidden self-center text-white/20 sm:inline">&rarr;</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
