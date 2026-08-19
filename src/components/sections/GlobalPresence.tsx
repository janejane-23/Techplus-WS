import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import type { GlobalPresenceContent } from "@/content/types";

export function GlobalPresence({ content }: { content: GlobalPresenceContent }) {
  return (
    <SectionWrapper id="presence" variant="gradient">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold tracking-wide text-sky-600 uppercase">{content.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{content.heading}</h2>
        <p className="mt-4 text-slate-600">{content.intro}</p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {content.offices.map((office) => (
          <Card key={office.id}>
            <span className="text-3xl">{office.flag}</span>
            <h3 className="mt-4 text-sm font-semibold text-slate-900">{office.country}</h3>
            <p className="mt-1 text-xs text-slate-600">{office.entity}</p>
            <p className="mt-2 text-xs font-medium text-sky-600">{office.role}</p>
            {office.address && <p className="mt-3 text-xs leading-relaxed text-slate-500">{office.address}</p>}
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
