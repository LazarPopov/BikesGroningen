import { getCityConfig } from "@/config/cities";
import { categoryCopy } from "@/content/site-copy";
import { getCategoryPath, getGuidePath, t, type Locale } from "@/lib/i18n";
import type { GuideEntry } from "@/types/guide";

type JsonLd = Record<string, unknown>;

export function buildGuideSchemas(locale: Locale, guide: GuideEntry): JsonLd[] {
  const city = getCityConfig("groningen");
  const guideUrl = `${city.siteUrl}${getGuidePath(locale, guide.category, guide.slug)}`;
  const categoryUrl = `${city.siteUrl}${getCategoryPath(locale, guide.category)}`;
  const imageUrl = guide.heroImage ? `${city.siteUrl}${guide.heroImage.src}` : undefined;

  const schemas: JsonLd[] = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: city.siteName,
          item: `${city.siteUrl}/${locale}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: t(categoryCopy[guide.category].navLabel, locale),
          item: categoryUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: t(guide.title, locale),
          item: guideUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: t(guide.title, locale),
      description: t(guide.seoDescription, locale),
      url: guideUrl,
      inLanguage: locale,
      isPartOf: {
        "@type": "WebSite",
        name: city.siteName,
        url: city.siteUrl,
      },
      isRelatedTo: {
        "@type": "LocalBusiness",
        name: city.partner.name,
        url: city.partner.siteUrl,
        address: city.partner.address,
      },
    },
  ];

  if (guide.authorName) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: t(guide.title, locale),
      description: t(guide.seoDescription, locale),
      datePublished: guide.publishedAt,
      dateModified: guide.updatedAt,
      inLanguage: locale,
      ...(imageUrl ? { image: imageUrl } : {}),
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": guideUrl,
      },
      author: {
        "@type": "Person",
        name: guide.authorName,
      },
      publisher: {
        "@type": "Organization",
        name: city.siteName,
        url: city.siteUrl,
      },
    });
  }

  if (guide.eventDetails) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Event",
      name: guide.eventDetails.name,
      startDate: guide.eventDetails.startDate,
      ...(guide.eventDetails.endDate ? { endDate: guide.eventDetails.endDate } : {}),
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: guide.eventDetails.locationName,
        ...(guide.eventDetails.locationAddress
          ? { address: guide.eventDetails.locationAddress }
          : {}),
      },
      ...(imageUrl ? { image: imageUrl } : {}),
      organizer: {
        "@type": "Organization",
        name: "Red Bull",
        url: "https://www.redbull.com",
      },
      ...(guide.eventDetails.isFree ? { isAccessibleForFree: true } : {}),
      description: t(guide.seoDescription, locale),
      url: guideUrl,
    });
  }

  if (guide.howToSteps?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: t(guide.title, locale),
      description: t(guide.description, locale),
      inLanguage: locale,
      step: guide.howToSteps.map((step) => ({
        "@type": "HowToStep",
        name: t(step.name, locale),
        text: t(step.text, locale),
      })),
    });
  }

  if (guide.faqs?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guide.faqs.map((faq) => ({
        "@type": "Question",
        name: t(faq.question, locale),
        acceptedAnswer: {
          "@type": "Answer",
          text: t(faq.answer, locale),
        },
      })),
    });
  }

  return schemas;
}
