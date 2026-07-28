import type { StatItem } from "@/content/types";

export function StatCounter({ value, label }: StatItem) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-3xl font-extrabold text-white sm:text-4xl">{value}</span>
      <span className="text-sm text-white/60">{label}</span>
    </div>
  );
}
