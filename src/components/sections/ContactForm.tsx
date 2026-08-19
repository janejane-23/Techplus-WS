"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { homepageContent } from "@/content/homepage";
import { services } from "@/content/services";

const WEBHOOK_URL = "https://sapcxapac.app.n8n.cloud/webhook/893de0d2-3e79-4832-8abe-300e7273c382";

const PAIN_POINTS = homepageContent.executiveChallenges.items.map((item) => item.painPoint);
const SERVICE_OPTIONS = services.map((service) => service.name);

const COUNTRIES = [
  "Singapore",
  "Cambodia",
  "Philippines",
  "United States",
  "Malaysia",
  "Indonesia",
  "Thailand",
  "Vietnam",
  "Australia",
  "India",
  "Other",
];

const HEARD_ABOUT_OPTIONS = [
  "Referral",
  "LinkedIn",
  "Google Search",
  "Industry Event or Conference",
  "SAP Partner",
  "Existing Customer",
  "Other",
];

const BUSINESS_TYPES = ["Retail", "Consumer Products", "Wholesale Distribution", "Other"];

const inputClass =
  "w-full rounded-lg border border-sky-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-sky-500";
const labelClass = "text-sm font-medium text-slate-700";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload: Record<string, FormDataEntryValue | boolean | string[]> = Object.fromEntries(
      Array.from(formData.entries()).filter(([key]) => key !== "painPoints" && key !== "servicesInterested")
    );
    payload.marketingConsent = formData.get("marketingConsent") === "on";
    payload.painPoints = (formData.getAll("painPoints") as string[]).join(", ");
    payload.servicesInterested = (formData.getAll("servicesInterested") as string[]).join(", ");

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <SectionWrapper variant="flat">
        <div className="mx-auto flex max-w-xl flex-col items-center rounded-2xl border border-sky-200 bg-white p-10 text-center shadow-sm">
          <CheckCircle2 className="h-10 w-10 text-sky-600" />
          <h3 className="mt-4 text-xl font-bold text-slate-900">Request received</h3>
          <p className="mt-2 text-sm text-slate-600">
            A senior advisor will follow up shortly to schedule your strategy consultation.
          </p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper variant="flat">
      <form onSubmit={handleSubmit} className="mx-auto max-w-3xl">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label className={labelClass} htmlFor="firstName">
              First Name*
            </label>
            <input id="firstName" name="firstName" required className={inputClass} />
          </div>
          <div className="space-y-2">
            <label className={labelClass} htmlFor="lastName">
              Last Name*
            </label>
            <input id="lastName" name="lastName" required className={inputClass} />
          </div>
          <div className="space-y-2">
            <label className={labelClass} htmlFor="workEmail">
              Work Email*
            </label>
            <input id="workEmail" name="workEmail" type="email" required className={inputClass} />
          </div>
          <div className="space-y-2">
            <label className={labelClass} htmlFor="company">
              Company*
            </label>
            <input id="company" name="company" required className={inputClass} />
          </div>
          <div className="space-y-2">
            <label className={labelClass} htmlFor="phone">
              Phone*
            </label>
            <input id="phone" name="phone" type="tel" required className={inputClass} />
          </div>
          <div className="space-y-2">
            <label className={labelClass} htmlFor="country">
              Country*
            </label>
            <select id="country" name="country" required defaultValue="" className={inputClass}>
              <option value="" disabled>
                Select a country
              </option>
              {COUNTRIES.map((c) => (
                <option key={c} value={c} className="bg-white">
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className={labelClass} htmlFor="heardAbout">
              How did you hear about us?*
            </label>
            <select id="heardAbout" name="heardAbout" required defaultValue="" className={inputClass}>
              <option value="" disabled>
                Select an option
              </option>
              {HEARD_ABOUT_OPTIONS.map((o) => (
                <option key={o} value={o} className="bg-white">
                  {o}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className={labelClass} htmlFor="businessType">
              Type of Business*
            </label>
            <select id="businessType" name="businessType" required defaultValue="" className={inputClass}>
              <option value="" disabled>
                Select an option
              </option>
              {BUSINESS_TYPES.map((b) => (
                <option key={b} value={b} className="bg-white">
                  {b}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 space-y-2">
          <span className={labelClass}>Pain Points (optional)</span>
          <p className="text-xs text-slate-500">Select any that apply to your business.</p>
          <div className="mt-3 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {PAIN_POINTS.map((point) => (
              <label key={point} className="flex items-start gap-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  name="painPoints"
                  value={point}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-sky-300 bg-white accent-sky-500"
                />
                {point}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-2">
          <span className={labelClass}>Services You&apos;re Interested In (optional)</span>
          <p className="text-xs text-slate-500">Select any that apply.</p>
          <div className="mt-3 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {SERVICE_OPTIONS.map((service) => (
              <label key={service} className="flex items-start gap-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  name="servicesInterested"
                  value={service}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-sky-300 bg-white accent-sky-500"
                />
                {service}
              </label>
            ))}
          </div>
        </div>

        <label className="mt-8 flex items-start gap-3 text-sm text-slate-600">
          <input
            type="checkbox"
            name="marketingConsent"
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-sky-300 bg-white accent-sky-500"
          />
          Yes, send me updates on TechPlus services, insights, and events.
        </label>

        {status === "error" && (
          <div className="mt-6 flex items-center gap-2 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
            <AlertCircle className="h-4 w-4 shrink-0" />
            Something went wrong sending your request. Please try again or email us directly.
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-[10px] bg-sky-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === "submitting" ? "Sending..." : "Send"}
        </button>
      </form>
    </SectionWrapper>
  );
}
