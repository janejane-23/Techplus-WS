import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CheckCircle2 } from "lucide-react";

interface InfoListProps {
  id?: string;
  variant?: "flat" | "gradient";
  eyebrow: string;
  heading: string;
  intro?: string;
  items: string[];
  columns?: 1 | 2;
}

export function InfoList({ id, variant = "flat", eyebrow, heading, intro, items, columns = 2 }: InfoListProps) {
  const colClass = columns === 2 ? "sm:grid-cols-2" : "";

  return (
    <SectionWrapper id={id} variant={variant}>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold tracking-wide text-sky-400 uppercase">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{heading}</h2>
        {intro && <p className="mt-4 text-white/60">{intro}</p>}
      </div>

      <ul className={`mx-auto mt-12 grid max-w-4xl gap-x-8 gap-y-4 ${colClass}`}>
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-white/70">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
            {item}
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
