import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { homepageContent } from "@/content/homepage";

export const metadata: Metadata = {
  title: "Contact TechPlus APAC | Schedule a Strategy Consultation",
  description:
    "Talk to the TechPlus APAC team about your Lead-to-Cash transformation. Reach us by phone or email, or find the office closest to you.",
};

export default function ContactPage() {
  const { footer, globalPresence } = homepageContent;

  return (
    <>
      <PageHero
        eyebrow="Let's Talk"
        headline="Schedule a Strategy Consultation"
        description="Tell us about the business challenge you're trying to solve. A senior advisor, not a call center, will follow up to schedule time."
        cta={{ label: "Email Our Team", href: `mailto:${footer.email}` }}
      />

      <SectionWrapper variant="flat">
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <Card className="flex flex-col items-start">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10">
              <Mail className="h-5 w-5 text-sky-400" />
            </span>
            <h3 className="mt-4 text-sm font-semibold text-white">Email</h3>
            <a href={`mailto:${footer.email}`} className="mt-1 text-sm text-sky-400 hover:text-sky-300">
              {footer.email}
            </a>
          </Card>
          <Card className="flex flex-col items-start">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10">
              <Phone className="h-5 w-5 text-sky-400" />
            </span>
            <h3 className="mt-4 text-sm font-semibold text-white">Phone</h3>
            <a href={`tel:${footer.phone}`} className="mt-1 text-sm text-sky-400 hover:text-sky-300">
              {footer.phone}
            </a>
          </Card>
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <h3 className="text-xs font-semibold tracking-wide text-white/50 uppercase">Business Hours</h3>
          <div className="mt-4 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-white/60">
            {footer.businessHours.map((h) => (
              <span key={h.label}>
                {h.label}: {h.value}
              </span>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <GlobalPresence content={globalPresence} />
    </>
  );
}
