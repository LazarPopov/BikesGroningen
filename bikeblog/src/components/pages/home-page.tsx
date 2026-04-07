import Image from "next/image";
import Link from "next/link";
import { TrackedExternalLink } from "@/components/analytics/tracked-external-link";
import { AdSlot } from "@/components/ads/ad-slot";
import { ExitIntentModal } from "@/components/conversion/exit-intent-modal";
import { LeadMagnetForm } from "@/components/conversion/lead-magnet-form";
import { JsonLd } from "@/components/seo/json-ld";
import { getCityConfig } from "@/config/cities";
import { categoryCopy, siteCopy } from "@/content/site-copy";
import { getFeaturedGuides } from "@/lib/content/guides";
import { analyticsEvents } from "@/lib/analytics/events";
import { getCategoryPath, getGuidePath, t, type Locale } from "@/lib/i18n";
import { buildHomeSchemas } from "@/lib/schema/site";

type HomePageProps = {
  locale: Locale;
};

const categories = ["hulp", "wijken", "beste"] as const;

function replacePartnerTokens(value: string, partnerName: string) {
  return value.replaceAll("{partnerName}", partnerName);
}

export function HomePage({ locale }: HomePageProps) {
  const city = getCityConfig("groningen");
  const featuredGuides = getFeaturedGuides("groningen");
  const schemas = buildHomeSchemas(locale);
  const homeHeroImage = "/images/og/home-groningen.webp";
  const partnerButtonLabel = `${t(siteCopy.home.partnerButton, locale)} ${city.partner.name}`;

  return (
    <div className="overflow-hidden">
      <JsonLd data={schemas} />
      <ExitIntentModal locale={locale} downloadHref={city.leadMagnet} articleSlug="home" />

      <section className="border-b border-black/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.35fr,0.85fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-brand uppercase">
              {t(siteCopy.home.eyebrow, locale)}
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight text-slate-950 md:text-6xl">
              {t(siteCopy.home.title, locale)}
            </h1>
            {t(siteCopy.home.description, locale) ? (
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                {t(siteCopy.home.description, locale)}
              </p>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#featured-guides"
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand"
              >
                {t(siteCopy.home.guidesButton, locale)}
              </Link>
              <TrackedExternalLink
                href={city.partner.siteUrl}
                target="_blank"
                rel="noreferrer"
                eventName={analyticsEvents.partnerReferralClick}
                eventParams={{
                  locale,
                  placement: "home_hero",
                  cta_label: partnerButtonLabel,
                }}
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand hover:text-brand"
              >
                {partnerButtonLabel}
              </TrackedExternalLink>
            </div>
          </div>

          <figure className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
            <Image
              src={homeHeroImage}
              alt={t(city.defaultTitle, locale)}
              width={1200}
              height={630}
              className="h-full w-full object-cover"
              priority
            />
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <LeadMagnetForm locale={locale} downloadHref={city.leadMagnet} articleSlug="home" />
      </section>

      <AdSlot
        locale={locale}
        placement="home_inline"
        className="mx-auto max-w-6xl px-6 py-2 lg:px-8"
      />

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-brand uppercase">
            {t(siteCopy.home.silosEyebrow, locale)}
          </p>
          <h2 className="mt-3 font-display text-4xl text-slate-950">
            {t(siteCopy.home.silosTitle, locale)}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category}
              href={getCategoryPath(locale, category)}
              className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
                {t(categoryCopy[category].eyebrow, locale)}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">
                {t(categoryCopy[category].navLabel, locale)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {t(categoryCopy[category].cardDescription, locale)}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section id="featured-guides" className="border-y border-black/10 bg-white/70">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.18em] text-brand uppercase">
                {t(siteCopy.home.phaseEyebrow, locale)}
              </p>
              <h2 className="mt-3 font-display text-4xl text-slate-950">
                {t(siteCopy.home.phaseTitle, locale)}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-700">
              {t(siteCopy.home.phaseDescription, locale)}
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {featuredGuides.map((guide) => (
              <article
                key={`${guide.category}-${guide.slug}`}
                className="rounded-[1.75rem] border border-black/10 bg-slate-50 p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-brand uppercase">
                    {t(categoryCopy[guide.category].navLabel, locale)}
                  </span>
                  <span className="text-sm text-slate-500">
                    {guide.readingMinutes} {t(siteCopy.guideList.readingTime, locale)}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-slate-950">
                  {t(guide.title, locale)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {t(guide.excerpt, locale)}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={getGuidePath(locale, guide.category, guide.slug)}
                    className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand"
                  >
                    {t(siteCopy.guideList.openGuide, locale)}
                  </Link>
                  <TrackedExternalLink
                    href={guide.partnerCta.href}
                    target="_blank"
                    rel="noreferrer"
                    eventName={analyticsEvents.partnerReferralClick}
                    eventParams={{
                      locale,
                      placement: "home_featured_card",
                      category: guide.category,
                      slug: guide.slug,
                      cta_label: replacePartnerTokens(t(guide.partnerCta.label, locale), city.partner.name),
                    }}
                    className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-brand hover:text-brand"
                  >
                    {replacePartnerTokens(t(guide.partnerCta.label, locale), city.partner.name)}
                  </TrackedExternalLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

