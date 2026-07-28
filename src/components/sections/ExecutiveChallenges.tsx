import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { getIcon } from "@/lib/icon-map";
import type { ExecutiveChallengesContent } from "@/content/types";

export function ExecutiveChallenges({ content }: { content: ExecutiveChallengesContent }) {
  return (
    <SectionWrapper id="approach" variant="flat">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold tracking-wide text-sky-400 uppercase">{content.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{content.heading}</h2>
        <p className="mt-4 text-white/60">{content.intro}</p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {content.items.map((item) => {
          const Icon = getIcon(item.icon);
          return (
            <Card key={item.id}>
              <Icon className="h-6 w-6 text-sky-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">{item.painPoint}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{item.howTechPlusHelps}</p>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
