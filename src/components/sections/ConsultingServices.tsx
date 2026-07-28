import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import type { ConsultingServicesContent } from "@/content/types";

export function ConsultingServices({ content }: { content: ConsultingServicesContent }) {
  return (
    <SectionWrapper id="services" variant="gradient">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold tracking-wide text-sky-400 uppercase">{content.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{content.heading}</h2>
        <p className="mt-4 text-white/60">{content.intro}</p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {content.services.map((service) => (
          <Card key={service.slug} className="flex flex-col">
            <span className="text-xs font-semibold text-sky-400">{service.eyebrowNumber}</span>
            <h3 className="mt-2 text-xl font-bold text-white">{service.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{service.summary}</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
              {service.capabilities.map((cap) => (
                <li key={cap} className="text-xs text-white/50">
                  {cap}
                </li>
              ))}
            </ul>
            <Link
              href={service.href}
              className="mt-6 text-sm font-semibold text-sky-400 hover:text-sky-300"
            >
              Learn More &rarr;
            </Link>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
