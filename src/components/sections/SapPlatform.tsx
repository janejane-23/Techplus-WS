import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { getIcon } from "@/lib/icon-map";
import type { SapPlatformContent } from "@/content/types";

export function SapPlatform({ content }: { content: SapPlatformContent }) {
  return (
    <SectionWrapper id="services" variant="flat">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold tracking-wide text-sky-600 uppercase">{content.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{content.heading}</h2>
        <p className="mt-4 text-slate-600">{content.intro}</p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {content.pillars.map((pillar) => (
          <Card key={pillar.id} className="flex flex-col">
            <span className="text-xs font-semibold tracking-wide text-sky-600 uppercase">{pillar.eyebrow}</span>
            <h3 className="mt-2 text-lg font-bold text-slate-900">{pillar.headline}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.intro}</p>

            <div className="mt-6 flex flex-1 flex-col gap-5">
              {pillar.products.map((product) => {
                const Icon = getIcon(product.icon);
                return (
                  <div key={product.id} className="flex gap-3 border-t border-sky-100 pt-5 first:border-t-0 first:pt-0">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100">
                      <Icon className="h-4 w-4 text-sky-600" />
                    </span>
                    <div>
                      <span className="text-[11px] font-semibold tracking-wide text-slate-500 uppercase">
                        {product.stageLabel}
                      </span>
                      <h4 className="text-sm font-semibold text-slate-900">{product.name}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600">{product.description}</p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {product.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="rounded-full border border-sky-200 bg-sky-50 px-2 py-0.5 text-[11px] text-slate-600"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        ))}
      </div>

      <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-4 rounded-2xl border border-sky-200 bg-sky-50 p-6 sm:flex-row sm:items-center sm:justify-center sm:gap-10">
        {content.foundation.map((item) => {
          const Icon = getIcon(item.icon);
          return (
            <div key={item.id} className="flex items-start gap-3 sm:max-w-xs">
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
              <div>
                <span className="text-xs font-semibold text-slate-900">{item.name}</span>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-600">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
