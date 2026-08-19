import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { getIcon } from "@/lib/icon-map";
import type { DifferentiatorsContent } from "@/content/types";

export function Differentiators({ content }: { content: DifferentiatorsContent }) {
  return (
    <SectionWrapper variant="flat">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold tracking-wide text-sky-600 uppercase">{content.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{content.heading}</h2>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {content.items.map((item) => {
          const Icon = getIcon(item.icon);
          return (
            <div key={item.id}>
              <Icon className="h-6 w-6 text-sky-600" />
              <h3 className="mt-4 text-sm font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{item.description}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
