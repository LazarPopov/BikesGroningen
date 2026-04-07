"use client";

import { useState } from "react";
import { analyticsEvents } from "@/lib/analytics/events";
import { trackEvent } from "@/lib/analytics/gtag";
import { type Locale } from "@/lib/i18n";
import { submitLead } from "@/lib/leads/client";

type LeadMagnetFormProps = {
  locale: Locale;
  downloadHref: string;
  articleSlug?: string;
};

const copy = {
  nl: {
    eyebrow: "Gratis pdf-gids",
    title: "Download de Groningen Bike Map",
    description:
      "Download de Groningen Bike Map PDF.",
    name: "Naam",
    email: "E-mail",
    submit: "Download gratis gids",
    loading: "Bezig...",
    consent:
      "Ik geef toestemming om mijn gegevens op te slaan voor deze aanvraag.",
    success: "Gelukt. Je download start nu.",
    error: "Er ging iets mis. Probeer het opnieuw.",
  },
  en: {
    eyebrow: "Free PDF Guide",
    title: "Download the Groningen Bike Map",
    description:
      "Download the Groningen Bike Map PDF.",
    name: "Name",
    email: "Email",
    submit: "Download free guide",
    loading: "Loading...",
    consent:
      "I give permission to store my data for this request.",
    success: "Success. Your download is starting now.",
    error: "Something went wrong. Please try again.",
  },
} as const;

export function LeadMagnetForm({
  locale,
  downloadHref,
  articleSlug,
}: LeadMagnetFormProps) {
  const text = copy[locale];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [submittedAt] = useState(() => new Date().toISOString());

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      await submitLead({
        name,
        email,
        locale,
        source: "home",
        intent: "download",
        articleSlug,
        gdprConsent,
        partnerNotification: false,
        submittedAt,
        honeypot,
      });

      trackEvent(analyticsEvents.leadMagnetDownload, {
        locale,
        placement: "home_lead_magnet",
        article_slug: articleSlug ?? "home",
      });

      setMessage(text.success);
      window.location.assign(downloadHref);
    } catch {
      setMessage(text.error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
      <p className="text-sm font-semibold tracking-[0.18em] text-brand uppercase">
        {text.eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl text-slate-950">{text.title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700">
        {text.description}
      </p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            <span>Company</span>
            <input
              value={honeypot}
              onChange={(event) => setHoneypot(event.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          <span>{text.name}</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand"
            required
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          <span>{text.email}</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand"
            required
          />
        </label>

        <label className="md:col-span-2 flex items-start gap-3 text-sm leading-6 text-slate-700">
          <input
            type="checkbox"
            checked={gdprConsent}
            onChange={(event) => setGdprConsent(event.target.checked)}
            className="mt-1"
            required
          />
          <span>{text.consent}</span>
        </label>

        <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand disabled:opacity-60"
          >
            {isSubmitting ? text.loading : text.submit}
          </button>

          {message ? <p className="text-sm text-slate-600">{message}</p> : null}
        </div>
      </form>
    </section>
  );
}
