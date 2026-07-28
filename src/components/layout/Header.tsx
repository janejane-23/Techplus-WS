"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import type { NavContent } from "@/content/types";

export function Header({ content }: { content: NavContent }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {content.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button href={content.cta.href} className="hidden md:inline-flex">
          {content.cta.label}
        </Button>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-white md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {content.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white/70 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button href={content.cta.href} className="mt-6 w-full">
            {content.cta.label}
          </Button>
        </div>
      )}
    </header>
  );
}
