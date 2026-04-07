import Link from "next/link";
import { TrackedExternalLink } from "@/components/analytics/tracked-external-link";
import { AdSlot } from "@/components/ads/ad-slot";
import { JsonLd } from "@/components/seo/json-ld";
import { getCityConfig } from "@/config/cities";
import { categoryCopy, siteCopy } from "@/content/site-copy";
import { getGuidesByCategory } from "@/lib/content/guides";
import { analyticsEvents } from "@/lib/analytics/events";
import { getGuidePath, t, type Locale } from "@/lib/i18n";
import { buildCategorySchemas } from "@/lib/schema/site";
import type { GuideCategory } from "@/types/city";

type CategoryPageProps = {
  category: GuideCategory;
  locale: Locale;
};

function replacePartnerTokens(value: string, partnerName: string) {
  return value.replaceAll("{partnerName}", partnerName);
}

export function CategoryPage({ category, locale }: CategoryPageProps) {
  const city = getCityConfig("groningen");
  const content = categoryCopy[category];
  const guides = getGuidesByCategory(category, "groningen");
  const schemas = buildCategorySchemas(locale, category);
  const categoryPartnerCta =
    locale === "nl"
      ? {
          eyebrow: "Hulp nodig van een pro?",
          title: `Zoek je een hands-on fix of een proefrit? Ga dan langs bij onze vertrouwde lokale partner, ${city.partner.name}.`,
          description: "Ze kennen Groningse fietsen beter dan wie dan ook.",
          button: `Krijg hulp bij ${city.partner.name}`,
        }
      : {
          eyebrow: "Need a pro to take a look?",
          title: `If you're looking for a hands-on fix or a test ride, we recommend heading over to our trusted local partner, ${city.partner.name}.`,
          description: "They know Groningen bikes better than anyone.",
          button: `Get help at ${city.partner.name}`,
        };

  return (
    <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
      <JsonLd data={schemas} />

      <section className="max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.18em] text-brand uppercase">
          {t(content.eyebrow, locale)}
        </p>
        <h1 className="mt-4 font-display text-5xl leading-tight text-slate-950">
          {t(content.title, locale)}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">{t(content.description, locale)}</p>
      </section>

      <section className="mt-10">
        {guides.length === 0 ? (
          <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white p-8 text-slate-600">
            {t(siteCopy.guideList.noGuides, locale)}
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {guides.map((guide) => (
              <article
                key={`${guide.category}-${guide.slug}`}
                className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center justify-between gap-4 text-sm text-slate-500">
                  <span>
                    {guide.readingMinutes} {t(siteCopy.guideList.readingTime, locale)}
                  </span>
                  <span>{guide.updatedAt}</span>
                </div>

                <h2 className="mt-5 text-2xl font-semibold text-slate-950">
                  {t(guide.title, locale)}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">{t(guide.excerpt, locale)}</p>

                {guide.neighborhood ? (
                  <p className="mt-4 text-sm font-medium text-brand">
                    {t(siteCopy.guideList.neighborhoodLabel, locale)}:{" "}
                    {t(guide.neighborhood, locale)}
                  </p>
                ) : null}

                <div className="mt-5 flex flex-wrap gap-2">
                  {guide.keywords[locale].slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={getGuidePath(locale, guide.category, guide.slug)}
                    className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand"
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
                      placement: "category_card",
                      category: guide.category,
                      slug: guide.slug,
                      cta_label: replacePartnerTokens(t(guide.partnerCta.label, locale), city.partner.name),
                    }}
                    className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-brand hover:text-brand"
                  >
                    {t(siteCopy.guideList.partnerButton, locale)}
                  </TrackedExternalLink>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <AdSlot locale={locale} placement="category_inline" className="mt-12" />

      <section className="mt-12 rounded-[2rem] bg-slate-950 px-6 py-8 text-white lg:px-8">
        <p className="text-sm font-semibold tracking-[0.18em] text-cyan-300 uppercase">
          {categoryPartnerCta.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-4xl">
          {categoryPartnerCta.title}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
          {categoryPartnerCta.description}
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
          {city.partner.address}
        </p>
        <TrackedExternalLink
          href={city.partner.siteUrl}
          target="_blank"
          rel="noreferrer"
          eventName={analyticsEvents.partnerReferralClick}
          eventParams={{
            locale,
            placement: "category_bottom_cta",
            category,
            cta_label: categoryPartnerCta.button,
          }}
          className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
        >
          {categoryPartnerCta.button}
        </TrackedExternalLink>
      </section>
    </div>
  );
}
