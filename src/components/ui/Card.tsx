import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 transition-colors hover:border-white/20 ${className}`}
    >
      {children}
    </div>
  );
}
