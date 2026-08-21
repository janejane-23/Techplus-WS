import type { LeadToCashFlowContent } from "@/content/types";

const ACCENT_STYLES = {
  sky: { border: "border-sky-300", text: "text-sky-600", dot: "bg-sky-500" },
  amber: { border: "border-amber-300", text: "text-amber-600", dot: "bg-amber-500" },
} as const;

export function LeadToCashFlow({ content }: { content: LeadToCashFlowContent }) {
  return (
    <section className="relative overflow-hidden bg-sky-50 py-20 sm:py-28">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={content.backgroundImage}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-[0.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-sky-50/90 to-sky-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-wide text-sky-600 uppercase">{content.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{content.heading}</h2>
          <p className="mt-4 text-slate-600">{content.intro}</p>
        </div>

        <div className="mt-16 flex flex-wrap items-stretch justify-center gap-3">
          {content.stages.map((stage, i) => {
            const accent = ACCENT_STYLES[stage.accent];
            return (
              <div key={stage.id} className="flex items-stretch gap-3">
                <div
                  className={`flex w-48 flex-col items-center rounded-xl border ${accent.border} bg-white/80 px-4 py-5 text-center shadow-sm backdrop-blur-sm`}
                >
                  <span className={`text-xs font-semibold ${accent.text}`}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="mt-2 text-sm font-semibold text-slate-900">{stage.label}</span>
                  <span className="mt-1 text-xs text-slate-500">{stage.description}</span>
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-100/60 px-2.5 py-1 text-[11px] text-slate-600">
                    <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
                    {stage.product}
                  </span>
                </div>
                {i < content.stages.length - 1 && (
                  <span className="hidden self-center text-slate-400 sm:inline">&rarr;</span>
                )}
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm font-medium text-slate-700">{content.closingLine}</p>
      </div>
    </section>
  );
}
