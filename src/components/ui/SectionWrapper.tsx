import type { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  variant?: "flat" | "gradient";
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, variant = "flat", children, className = "" }: SectionWrapperProps) {
  const bg = variant === "gradient" ? "animated-gradient-bg" : "bg-sky-50";

  return (
    <section id={id} className={`relative overflow-hidden py-20 sm:py-28 ${bg} ${className}`}>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}
