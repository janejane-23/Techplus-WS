import { SectionWrapper } from "@/components/ui/SectionWrapper";

interface ProseSectionProps {
  id?: string;
  variant?: "flat" | "gradient";
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  children?: React.ReactNode;
}

export function ProseSection({ id, variant = "flat", eyebrow, heading, paragraphs, children }: ProseSectionProps) {
  return (
    <SectionWrapper id={id} variant={variant}>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold tracking-wide text-sky-600 uppercase">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{heading}</h2>
        <div className="mt-6 space-y-4 text-left sm:text-center">
          {paragraphs.map((p) => (
            <p key={p} className="text-slate-700">
              {p}
            </p>
          ))}
        </div>
        {children}
      </div>
    </SectionWrapper>
  );
}
