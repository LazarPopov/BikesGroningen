import { TrackedExternalLink } from "@/components/analytics/tracked-external-link";
import { getCityConfig } from "@/config/cities";
import { analyticsEvents } from "@/lib/analytics/events";
import { type Locale } from "@/lib/i18n";
import type { GuideCategory } from "@/types/city";

type DynamicPartnerCtaProps = {
  locale: Locale;
  category: GuideCategory;
  slug: string;
  articleTitle: string;
  partnerLabel: string;
  partnerDescription: string;
};

const copy = {
  hulp: {
    nl: {
      eyebrow: "Snelle hulp",
      title: "Neem direct contact op voor reparatie of vervanging",
      summary: "Als er iets misgaat, wil je snel een route naar lokale hulp.",
    },
    en: {
      eyebrow: "Quick help",
      title: "Get in touch fast for repair or replacement",
      summary: "When something goes wrong, you want a fast route to local help.",
    },
  },
  wijken: {
    nl: {
      eyebrow: "Lokale hulp",
      title: "Contact voor fietsers uit deze wijk",
      summary: "Als je in dit deel van Groningen fietst, is dit de snelste route naar lokale hulp.",
    },
    en: {
      eyebrow: "Local help",
      title: "Contact options for riders in this area",
      summary: "If you are riding in this part of Groningen, this is the fastest way to get local help.",
    },
  },
  beste: {
    nl: {
      eyebrow: "Vergelijk slim",
      title: "Vraag advies voordat je beslist",
      summary: "Twijfel je nog over service, prijs of voorraad, dan kun je de winkel direct vragen.",
    },
    en: {
      eyebrow: "Compare smart",
      title: "Ask for advice before you decide",
      summary: "If you still have questions about service, price, or stock, you can ask the shop directly.",
    },
  },
  blog: {
    nl: {
      eyebrow: "Volgende stap",
      title: "Zet de gids om in actie",
      summary: "Lees de gids en zet daarna de volgende stap met lokale hulp als je die nodig hebt.",
    },
    en: {
      eyebrow: "Next step",
      title: "Turn the guide into action",
      summary: "Read the guide, then take the next step with local help if you need it.",
    },
  },
} as const;

const commonCopy = {
  nl: {
    whatsapp: "Open WhatsApp",
    email: "Stuur e-mail",
    visitPrefix: "Krijg hulp bij",
    address: "Adres",
  },
  en: {
    whatsapp: "Open WhatsApp",
    email: "Send email",
    visitPrefix: "Get help at",
    address: "Address",
  },
} as const;

export function DynamicPartnerCta({
  locale,
  category,
  slug,
  articleTitle,
  partnerLabel,
  partnerDescription,
}: DynamicPartnerCtaProps) {
  const city = getCityConfig("groningen");
  const text = copy[category][locale];
  const common = commonCopy[locale];
  const visitLabel = `${common.visitPrefix} ${city.partner.name}`;

  const emailSubject =
    locale === "nl"
      ? `Vraag via Bikes Groningen: ${articleTitle}`
      : `Question via Bikes Groningen: ${articleTitle}`;

  const emailHref = city.partner.email
    ? `mailto:${city.partner.email}?subject=${encodeURIComponent(emailSubject)}`
    : null;

  return (
    <section className="rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-[0_20px_80px_rgba(15,23,42,0.14)]">
      <p className="text-sm font-semibold tracking-[0.18em] text-cyan-300 uppercase">
        {text.eyebrow}
      </p>
      <h2 className="mt-4 text-2xl font-semibold">{text.title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-300">{text.summary}</p>

      <div className="mt-5 rounded-2xl bg-white/5 p-4">
        <p className="text-sm font-semibold text-white">{partnerLabel}</p>
        <p className="mt-2 text-sm leading-7 text-slate-300">{partnerDescription}</p>
        <p className="mt-3 text-sm text-slate-300">
          {common.address}: {city.partner.address}
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {city.partner.whatsappUrl ? (
          <TrackedExternalLink
            href={city.partner.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            eventName={analyticsEvents.clickWhatsapp}
            eventParams={{
              locale,
              placement: "guide_dynamic_cta",
              category,
              slug,
            }}
            className="inline-flex justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            {common.whatsapp}
          </TrackedExternalLink>
        ) : null}

        {emailHref ? (
          <TrackedExternalLink
            href={emailHref}
            eventName={analyticsEvents.clickEmail}
            eventParams={{
              locale,
              placement: "guide_dynamic_cta",
              category,
              slug,
            }}
            className="inline-flex justify-center rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
          >
            {common.email}
          </TrackedExternalLink>
        ) : null}

        <TrackedExternalLink
          href={city.partner.siteUrl}
          target="_blank"
          rel="noreferrer"
          eventName={analyticsEvents.partnerReferralClick}
          eventParams={{
            locale,
            placement: "guide_dynamic_cta",
            category,
            slug,
          }}
          className="inline-flex justify-center rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
        >
          {visitLabel}
        </TrackedExternalLink>
      </div>
    </section>
  );
}
