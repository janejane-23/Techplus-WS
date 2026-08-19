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
      ? "bg-sky-500 text-white hover:bg-sky-600"
      : "border border-sky-300 text-slate-900 hover:border-sky-400 hover:bg-sky-100/60";
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}
