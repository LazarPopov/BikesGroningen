import Link from "next/link";
import Image from "next/image";
import { TrackedExternalLink } from "@/components/analytics/tracked-external-link";
import { DynamicPartnerCta } from "@/components/conversion/dynamic-partner-cta";
import { AdSlot } from "@/components/ads/ad-slot";
import { ExitIntentModal } from "@/components/conversion/exit-intent-modal";
import { JsonLd } from "@/components/seo/json-ld";
import { getCityConfig } from "@/config/cities";
import { getGuideBodySections } from "@/content/groningen/guide-bodies";
import { getGuideChecklist } from "@/content/groningen/guide-checklists";
import { categoryCopy, siteCopy } from "@/content/site-copy";
import { getGuideCrossLinks, getRelatedGuides } from "@/lib/content/guides";
import { formatDate, getCategoryPath, getGuidePath, t, type Locale } from "@/lib/i18n";
import { buildGuideSchemas } from "@/lib/schema/guides";
import type { GuideEntry } from "@/types/guide";

type GuidePageProps = {
  locale: Locale;
  guide: GuideEntry;
};

const studentClusterCopy = {
  nl: {
    eyebrow: "Student cluster",
    title: "Lees ook deze student posts",
    description:
      "Deze gidsen bouwen op elkaar voort: slim kopen, diefstal voorkomen, boetes ontwijken en je Zernike routine fixen.",
  },
  en: {
    eyebrow: "Student cluster",
    title: "Read these student posts next",
    description:
      "These guides build on each other: buy smart, avoid theft, dodge fines, and fix your Zernike routine.",
  },
} as const;

const sourcesCopy = {
  nl: {
    eyebrow: "Bronnen",
    title: "Bronnen en checks",
    description:
      "Voor feitelijke claims linken we hier naar de pagina's die zijn gecontroleerd tijdens het updaten van deze gids.",
  },
  en: {
    eyebrow: "Sources",
    title: "Sources and checks",
    description:
      "For factual claims, we link here to the pages that were checked while updating this guide.",
  },
} as const;

const backToCategoryCopy = {
  hulp: {
    nl: "Meer hulpgidsen",
    en: "More Repair Guides",
  },
  wijken: {
    nl: "Meer wijkgidsen",
    en: "More Neighborhood Guides",
  },
  beste: {
    nl: "Meer koopgidsen",
    en: "More Buying Guides",
  },
  blog: {
    nl: "Meer fietsgidsen",
    en: "More Cycling Guides",
  },
} as const;

function replacePartnerTokens(
  value: string,
  replacements: { partnerName: string; partnerAddress: string; partnerSiteUrl: string },
) {
  return value
    .replaceAll("{partnerName}", replacements.partnerName)
    .replaceAll("{partnerAddress}", replacements.partnerAddress)
    .replaceAll("{partnerSiteUrl}", replacements.partnerSiteUrl);
}

export function GuidePage({ locale, guide }: GuidePageProps) {
  const city = getCityConfig("groningen");
  const bodySections = getGuideBodySections(guide.slug);
  const checklist = getGuideChecklist(guide.slug);
  const clusterGuides = getGuideCrossLinks(guide.slug, "groningen");
  const relatedGuides = getRelatedGuides(guide.slug, "groningen", 4).filter(
    (relatedGuide) => !clusterGuides.some((clusterGuide) => clusterGuide.slug === relatedGuide.slug),
  ).slice(0, 3);
  const schemas = buildGuideSchemas(locale, guide);
  const clusterText = studentClusterCopy[locale];
  const sourcesText = sourcesCopy[locale];
  const backToCategoryText = backToCategoryCopy[guide.category][locale];
  const partnerReplacements = {
    partnerName: city.partner.name,
    partnerAddress: city.partner.address,
    partnerSiteUrl: city.partner.siteUrl,
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
      <JsonLd data={schemas} />
      <ExitIntentModal
        locale={locale}
        downloadHref={city.leadMagnet}
        articleSlug={guide.slug}
      />

      <div className="max-w-3xl">
        <Link
          href={getCategoryPath(locale, guide.category)}
          className="text-sm font-semibold text-brand transition hover:text-slate-950"
        >
          {backToCategoryText}
        </Link>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-brand uppercase">
            {t(categoryCopy[guide.category].navLabel, locale)}
          </span>
          {guide.featured ? (
            <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-white uppercase">
              {t(siteCopy.guidePage.featuredLabel, locale)}
            </span>
          ) : null}
        </div>

        <h1 className="mt-6 font-display text-5xl leading-tight text-slate-950">
          {t(guide.title, locale)}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">{t(guide.description, locale)}</p>

        <dl className="mt-8 grid gap-4 rounded-[1.75rem] border border-black/10 bg-white p-6 text-sm text-slate-700 md:grid-cols-3">
          <div>
            <dt className="font-semibold text-slate-950">{t(siteCopy.guidePage.publishedLabel, locale)}</dt>
            <dd className="mt-1">{formatDate(guide.publishedAt, locale)}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-950">{t(siteCopy.guidePage.updatedLabel, locale)}</dt>
            <dd className="mt-1">{formatDate(guide.updatedAt, locale)}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-950">{t(siteCopy.guidePage.readingTime, locale)}</dt>
            <dd className="mt-1">
              {guide.readingMinutes} {t(siteCopy.guidePage.readingTime, locale)}
            </dd>
          </div>
        </dl>
      </div>

      {guide.heroImage ? (
        <figure className="mt-10 overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
          <Image
            src={guide.heroImage.src}
            alt={t(guide.heroImage.alt, locale)}
            width={1600}
            height={900}
            className="h-auto w-full"
            priority={guide.featured}
          />
        </figure>
      ) : null}

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.35fr,0.65fr]">
        <article className="space-y-10">
          {checklist ? (
            <section className="rounded-[1.75rem] border border-brand/15 bg-brand/5 p-8">
              <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
                {t(checklist.eyebrow, locale)}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                {t(checklist.title, locale)}
              </h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {checklist.items[locale].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                      +
                    </span>
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {bodySections.length > 0 ? (
            <section className="rounded-[1.75rem] border border-black/10 bg-white p-8">
              <div className="space-y-8">
                {bodySections.map((section, index) => (
                  <div key={`${guide.slug}-body-${index}`}>
                    <h2 className="text-2xl font-semibold text-slate-950">
                      {t(section.title, locale)}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {section.paragraphs[locale].map((paragraph) => (
                        <p key={paragraph} className="text-sm leading-7 text-slate-700">
                          {replacePartnerTokens(paragraph, partnerReplacements)}
                        </p>
                      ))}
                    </div>
                    {section.visual ? (
                      <figure className="mt-6 overflow-hidden rounded-[1.5rem] border border-black/10 bg-slate-50">
                        <Image
                          src={section.visual.src}
                          alt={t(section.visual.alt, locale)}
                          width={1400}
                          height={840}
                          className="h-auto w-full"
                        />
                        {section.visual.caption ? (
                          <figcaption className="border-t border-black/10 px-4 py-3 text-sm leading-6 text-slate-600">
                            {t(section.visual.caption, locale)}
                          </figcaption>
                        ) : null}
                      </figure>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {clusterGuides.length > 0 ? (
            <section className="rounded-[1.75rem] border border-black/10 bg-slate-950 p-8 text-white">
              <p className="text-xs font-semibold tracking-[0.16em] text-cyan-300 uppercase">
                {clusterText.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold">{clusterText.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                {clusterText.description}
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {clusterGuides.map((clusterGuide) => (
                  <article
                    key={clusterGuide.slug}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-xs font-semibold tracking-[0.16em] text-cyan-300 uppercase">
                      {t(categoryCopy[clusterGuide.category].navLabel, locale)}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-white">
                      {t(clusterGuide.title, locale)}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {t(clusterGuide.excerpt, locale)}
                    </p>
                    <Link
                      href={getGuidePath(locale, clusterGuide.category, clusterGuide.slug)}
                      className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                    >
                      {t(siteCopy.guideList.openGuide, locale)}
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <section className="rounded-[1.75rem] border border-black/10 bg-white p-8">
            <h2 className="text-2xl font-semibold text-slate-950">
              {t(siteCopy.guidePage.keywordsLabel, locale)}
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {guide.keywords[locale].map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </section>

          {guide.howToSteps ? (
            <section className="rounded-[1.75rem] border border-black/10 bg-white p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                {t(siteCopy.guidePage.howToTitle, locale)}
              </h2>
              <ol className="mt-6 space-y-5">
                {guide.howToSteps.map((step, index) => (
                  <li key={`${guide.slug}-${index}`} className="flex gap-4">
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-950">
                        {t(step.name, locale)}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {t(step.text, locale)}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          <AdSlot locale={locale} placement="guide_inline" />

          {guide.inlineCallout ? (
            <section className="rounded-[1.75rem] border border-black/10 bg-slate-950 p-8 text-white">
              <p className="text-xs font-semibold tracking-[0.16em] text-cyan-300 uppercase">
                {t(guide.inlineCallout.eyebrow, locale)}
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                {t(guide.inlineCallout.title, locale)}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                {t(guide.inlineCallout.description, locale)}
              </p>
              <TrackedExternalLink
                href={guide.inlineCallout.href}
                target="_blank"
                rel="noreferrer"
                eventName={guide.partnerCta.eventName}
                eventParams={{
                  locale,
                  placement: "guide_inline_callout",
                  category: guide.category,
                  slug: guide.slug,
                  cta_label: t(guide.inlineCallout.buttonLabel, locale),
                }}
                className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                {t(guide.inlineCallout.buttonLabel, locale)}
              </TrackedExternalLink>
              {guide.inlineCallout.note ? (
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {t(guide.inlineCallout.note, locale)}
                </p>
              ) : null}
            </section>
          ) : null}

          {guide.faqs ? (
            <section className="rounded-[1.75rem] border border-black/10 bg-white p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                {t(siteCopy.guidePage.faqTitle, locale)}
              </h2>
              <div className="mt-6 space-y-5">
                {guide.faqs.map((faq, index) => (
                  <div key={`${guide.slug}-faq-${index}`} className="rounded-2xl bg-slate-50 p-5">
                    <h3 className="text-lg font-semibold text-slate-950">
                      {t(faq.question, locale)}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      {t(faq.answer, locale)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {guide.sources?.length ? (
            <section className="rounded-[1.75rem] border border-black/10 bg-white p-8">
              <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
                {sourcesText.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                {sourcesText.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700">
                {sourcesText.description}
              </p>

              <div className="mt-6 space-y-4">
                {guide.sources.map((source) => (
                  <div key={source.href} className="rounded-2xl bg-slate-50 p-5">
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base font-semibold text-brand transition hover:text-slate-950"
                    >
                      {t(source.label, locale)}
                    </a>
                    {source.note ? (
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {t(source.note, locale)}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {relatedGuides.length > 0 ? (
            <section className="rounded-[1.75rem] border border-black/10 bg-white p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                {t(siteCopy.guidePage.relatedGuidesTitle, locale)}
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {relatedGuides.map((relatedGuide) => (
                  <article
                    key={relatedGuide.slug}
                    className="rounded-2xl bg-slate-50 p-5"
                  >
                    <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
                      {t(categoryCopy[relatedGuide.category].navLabel, locale)}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-slate-950">
                      {t(relatedGuide.title, locale)}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      {t(relatedGuide.excerpt, locale)}
                    </p>
                    <Link
                      href={getGuidePath(locale, relatedGuide.category, relatedGuide.slug)}
                      className="mt-4 inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand"
                    >
                      {t(siteCopy.guideList.openGuide, locale)}
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
        </article>

        <aside className="space-y-6">
          <DynamicPartnerCta
            locale={locale}
            category={guide.category}
            slug={guide.slug}
            articleTitle={t(guide.title, locale)}
            partnerLabel={replacePartnerTokens(t(guide.partnerCta.label, locale), partnerReplacements)}
            partnerDescription={replacePartnerTokens(t(guide.partnerCta.description, locale), partnerReplacements)}
          />
          <AdSlot locale={locale} placement="guide_sidebar" />
        </aside>
      </div>
    </div>
  );
}




