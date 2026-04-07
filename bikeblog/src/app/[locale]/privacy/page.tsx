import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityConfig } from "@/config/cities";
import { getSharedPagePath, isLocale, type Locale } from "@/lib/i18n";

type Params = Promise<{ locale: string }>;

const copy = {
  nl: {
    title: "Privacyverklaring",
    description:
      "Hoe we met je gegevens omgaan wanneer je een gids downloadt of hulp aanvraagt via onze site.",
    intro:
      "Hoe we met je gegevens omgaan wanneer je een gids downloadt of hulp aanvraagt via onze site.",
    sections: [
      {
        title: "Welke gegevens we opslaan",
        items: [
          "Naam en e-mailadres bij gids- en resource-downloads of contactaanvragen.",
          "Optioneel telefoonnummer en aanvullende notities wanneer een formulier dat gebruikt.",
          "Technische gegevens zoals user agent, referrer en tijdstip van verzending.",
        ],
      },
      {
        title: "Waarom we deze gegevens opslaan",
        items: [
          "Om downloads te leveren en aanvragen te verwerken.",
          "Als je een offerte of specifieke reparatiehulp aanvraagt, brengen we je direct in contact met onze lokale partner shop zodat zij je kunnen helpen.",
          "Om spam te beperken en de kwaliteit van de funnel te bewaken.",
        ],
      },
      {
        title: "Partner en meldingen",
        items: [
          "We delen alleen de gegevens die nodig zijn om je aanvraag op te volgen.",
          "Webhook meldingen worden alleen gebruikt om nieuwe aanvragen sneller op te volgen.",
        ],
      },
    ],
    contactTitle: "Contact",
    contactBody:
      "Voor vragen over gegevensverwerking kun je contact opnemen via de partnergegevens hieronder.",
  },
  en: {
    title: "Privacy policy",
    description:
      "How we handle your info when you download a guide or ask for help through our site.",
    intro:
      "How we handle your info when you download a guide or ask for help through our site.",
    sections: [
      {
        title: "What we store",
        items: [
          "Name and email address for guide and resource downloads or contact requests.",
          "Optional phone number and extra notes when a form uses them.",
          "Technical data such as user agent, referrer, and submission time.",
        ],
      },
      {
        title: "Why we store it",
        items: [
          "To deliver downloads and process requests.",
          "If you request a quote or specific repair help, we connect you directly with our local partner shop so they can reach out to assist you.",
          "To reduce spam and protect lead quality.",
        ],
      },
      {
        title: "Partner and notifications",
        items: [
          "We only share the details needed to help with your request.",
          "Webhook notifications are only used to speed up response to new requests.",
        ],
      },
    ],
    contactTitle: "Contact",
    contactBody:
      "For questions about data processing, you can use the partner details below.",
  },
} as const;

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return {
    title: copy[locale].title,
    description: copy[locale].description,
    alternates: {
      canonical: getSharedPagePath(locale, "privacy"),
      languages: {
        nl: getSharedPagePath("nl", "privacy"),
        en: getSharedPagePath("en", "privacy"),
      },
    },
  };
}

export default async function PrivacyPage({ params }: { params: Params }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text = copy[locale as Locale];
  const city = getCityConfig("groningen");

  return (
    <div className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.18em] text-brand uppercase">
          Bikes Groningen
        </p>
        <h1 className="mt-4 font-display text-5xl leading-tight text-slate-950">
          {text.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">{text.intro}</p>
      </div>

      <div className="mt-10 space-y-6">
        {text.sections.map((section) => (
          <section
            key={section.title}
            className="rounded-[1.75rem] border border-black/10 bg-white p-8"
          >
            <h2 className="text-2xl font-semibold text-slate-950">{section.title}</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}

        <section className="rounded-[1.75rem] border border-black/10 bg-white p-8">
          <h2 className="text-2xl font-semibold text-slate-950">{text.contactTitle}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">{text.contactBody}</p>
          <div className="mt-4 space-y-2 text-sm text-slate-700">
            <p>{city.partner.name}</p>
            <p>{city.partner.address}</p>
            <p>{city.partner.email}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
