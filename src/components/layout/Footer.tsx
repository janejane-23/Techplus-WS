import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import type { FooterContent, GlobalPresenceContent } from "@/content/types";

interface FooterProps {
  content: FooterContent;
  presence: GlobalPresenceContent;
}

export function Footer({ content, presence }: FooterProps) {
  return (
    <footer className="border-t border-sky-200 bg-sky-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-slate-600">{content.description}</p>
          <div className="mt-6 space-y-2 text-sm">
            <a href={`tel:${content.phone}`} className="block text-slate-600 hover:text-slate-900">
              {content.phone}
            </a>
            <a href={`mailto:${content.email}`} className="block text-slate-600 hover:text-slate-900">
              {content.email}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Services</h3>
          <ul className="mt-4 space-y-3">
            {content.serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-600 hover:text-slate-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Global Offices</h3>
          <ul className="mt-4 space-y-3">
            {presence.offices.map((office) => (
              <li key={office.id} className="text-sm text-slate-600">
                <span className="mr-2">{office.flag}</span>
                {office.country}
                {office.role ? <span className="block pl-6 text-slate-500">{office.role}</span> : null}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Business Hours</h3>
          <ul className="mt-4 space-y-2">
            {content.businessHours.map((h) => (
              <li key={h.label} className="text-sm text-slate-600">
                {h.label}: {h.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-sky-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500 sm:flex-row lg:px-8">
          <p>{content.copyright}</p>
          <div className="flex gap-6">
            {content.legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-slate-700">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
