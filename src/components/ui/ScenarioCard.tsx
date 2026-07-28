import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";

interface ScenarioCardProps {
  eyebrow: string;
  title: string;
  description: string;
  variant?: "flat" | "gradient";
}

export function ScenarioCard({ eyebrow, title, description, variant = "gradient" }: ScenarioCardProps) {
  return (
    <SectionWrapper variant={variant}>
      <div className="mx-auto max-w-3xl">
        <Card>
          <p className="text-xs font-semibold tracking-wide text-sky-400 uppercase">{eyebrow}</p>
          <h3 className="mt-3 text-xl font-bold text-white">{title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/60">{description}</p>
          <p className="mt-6 text-xs text-white/50">
            Representative scenario illustrating a common engagement pattern.
          </p>
        </Card>
      </div>
    </SectionWrapper>
  );
}
