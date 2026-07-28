import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "filled" | "ghost";
  className?: string;
}

export function Button({ href, children, variant = "filled", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-[10px] px-6 py-3 text-sm font-semibold transition-colors";
  const styles =
    variant === "filled"
      ? "bg-sky-500 text-white hover:bg-sky-400"
      : "border border-white/20 text-white hover:border-white/40 hover:bg-white/5";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
