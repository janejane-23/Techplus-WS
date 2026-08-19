import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Quote } from "lucide-react";

interface ExecutiveInsightProps {
  insight: string;
  variant?: "flat" | "gradient";
}

export function ExecutiveInsight({ insight, variant = "gradient" }: ExecutiveInsightProps) {
  return (
    <SectionWrapper variant={variant}>
      <div className="mx-auto max-w-3xl rounded-3xl border border-sky-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <Quote className="mx-auto h-8 w-8 text-sky-600" />
        <p className="mt-6 text-xl font-medium leading-relaxed text-slate-900 sm:text-2xl">{insight}</p>
        <p className="mt-6 text-xs font-semibold tracking-wide text-slate-500 uppercase">
          TechPlus Executive Advisory Perspective
        </p>
      </div>
    </SectionWrapper>
  );
}
