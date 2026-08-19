import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { getIcon } from "@/lib/icon-map";
import type { BusinessOutcomesContent } from "@/content/types";

export function BusinessOutcomes({ content }: { content: BusinessOutcomesContent }) {
  return (
    <SectionWrapper variant="flat">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold tracking-wide text-sky-600 uppercase">{content.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{content.heading}</h2>
        <p className="mt-4 text-slate-600">{content.intro}</p>
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
        {content.items.map((item) => {
          const Icon = getIcon(item.icon);
          return (
            <div key={item.id} className="flex flex-col items-start">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100">
                <Icon className="h-5 w-5 text-sky-600" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{item.description}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
