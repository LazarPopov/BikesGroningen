"use client";

import { useEffect, useState } from "react";
import { analyticsEvents } from "@/lib/analytics/events";
import { trackEvent } from "@/lib/analytics/gtag";
import { type Locale } from "@/lib/i18n";
import { submitLead } from "@/lib/leads/client";

type ExitIntentModalProps = {
  locale: Locale;
  downloadHref: string;
  articleSlug: string;
};

const copy = {
  nl: {
    eyebrow: "Voor je weggaat",
    title: "The Groningen First Year Survival Guide 2026",
    description:
      "Everything you need to know (and what the KEI-week won't tell you).",
    name: "Naam",
    email: "E-mail",
    consent: "Ik geef toestemming om mijn gegevens op te slaan voor deze aanvraag.",
    submit: "Stuur de gids",
    later: "Misschien later",
    loading: "Bezig...",
    success: "Gelukt. Je download start nu.",
    error: "Er ging iets mis. Probeer het opnieuw.",
  },
  en: {
    eyebrow: "Before you leave",
    title: "The Groningen First Year Survival Guide 2026",
    description:
      "Everything you need to know (and what the KEI-week won't tell you).",
    name: "Name",
    email: "Email",
    consent: "I give permission to store my data for this request.",
    submit: "Send the guide",
    later: "Maybe later",
    loading: "Loading...",
    success: "Success. Your download is starting now.",
    error: "Something went wrong. Please try again.",
  },
} as const;

export function ExitIntentModal({
  locale,
  downloadHref,
  articleSlug,
}: ExitIntentModalProps) {
  const text = copy[locale];
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [submittedAt] = useState(() => new Date().toISOString());

  useEffect(() => {
    const storageKey = `exit-intent:${articleSlug}`;

    if (typeof window === "undefined" || sessionStorage.getItem(storageKey) === "1") {
      return;
    }

    let shown = false;

    function openModal(trigger: "cursor" | "timer") {
      if (shown) {
        return;
      }

      shown = true;
      sessionStorage.setItem(storageKey, "1");
      setIsOpen(true);

      trackEvent(analyticsEvents.exitIntentView, {
        locale,
        placement: "exit_intent_modal",
        article_slug: articleSlug,
        trigger,
      });
    }

    function handleMouseOut(event: MouseEvent) {
      if (window.innerWidth < 1024) {
        return;
      }

      if (event.clientY <= 0) {
        openModal("cursor");
      }
    }

    const timerId = window.setTimeout(() => {
      if (window.innerWidth < 1024) {
        openModal("timer");
      }
    }, 18000);

    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.clearTimeout(timerId);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [articleSlug, locale]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      await submitLead({
        name,
        email,
        locale,
        source: "exit_intent",
        intent: "download",
        articleSlug,
        gdprConsent,
        partnerNotification: false,
        submittedAt,
      });

      trackEvent(analyticsEvents.leadMagnetDownload, {
        locale,
        placement: "exit_intent_modal",
        article_slug: articleSlug,
      });

      setMessage(text.success);
      window.location.assign(downloadHref);
    } catch {
      setMessage(text.error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-slate-950/70 p-4 sm:items-center">
      <div className="w-full max-w-xl rounded-[1.75rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.35)]">
        <p className="text-sm font-semibold tracking-[0.18em] text-brand uppercase">
          {text.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl text-slate-950">{text.title}</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">{text.description}</p>

        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
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

          <label className="flex items-start gap-3 text-sm leading-6 text-slate-700">
            <input
              type="checkbox"
              checked={gdprConsent}
              onChange={(event) => setGdprConsent(event.target.checked)}
              className="mt-1"
              required
            />
            <span>{text.consent}</span>
          </label>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand disabled:opacity-60"
            >
              {isSubmitting ? text.loading : text.submit}
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-950"
            >
              {text.later}
            </button>
          </div>

          {message ? <p className="text-sm text-slate-600">{message}</p> : null}
        </form>
      </div>
    </div>
  );
}
