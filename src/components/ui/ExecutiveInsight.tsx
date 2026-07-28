import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Quote } from "lucide-react";

interface ExecutiveInsightProps {
  insight: string;
  variant?: "flat" | "gradient";
}

export function ExecutiveInsight({ insight, variant = "gradient" }: ExecutiveInsightProps) {
  return (
    <SectionWrapper variant={variant}>
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center sm:p-12">
        <Quote className="mx-auto h-8 w-8 text-sky-500" />
        <p className="mt-6 text-xl font-medium leading-relaxed text-white sm:text-2xl">{insight}</p>
        <p className="mt-6 text-xs font-semibold tracking-wide text-white/50 uppercase">
          TechPlus Executive Advisory Perspective
        </p>
      </div>
    </SectionWrapper>
  );
}
