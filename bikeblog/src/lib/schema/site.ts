import { getCityConfig } from "@/config/cities";
import { categoryCopy } from "@/content/site-copy";
import { getCategoryPath, getLocalePath, t, type Locale } from "@/lib/i18n";
import type { GuideCategory } from "@/types/city";

type JsonLd = Record<string, unknown>;

export function buildHomeSchemas(locale: Locale): JsonLd[] {
  const city = getCityConfig("groningen");
  const homeUrl = `${city.siteUrl}${getLocalePath(locale)}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: city.siteName,
      url: homeUrl,
      inLanguage: locale,
      description: t(city.defaultDescription, locale),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: t(city.defaultTitle, locale),
      url: homeUrl,
      inLanguage: locale,
      description: t(city.defaultDescription, locale),
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
}

export function buildCategorySchemas(locale: Locale, category: GuideCategory): JsonLd[] {
  const city = getCityConfig("groningen");
  const homeUrl = `${city.siteUrl}${getLocalePath(locale)}`;
  const categoryUrl = `${city.siteUrl}${getCategoryPath(locale, category)}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: city.siteName,
          item: homeUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: t(categoryCopy[category].navLabel, locale),
          item: categoryUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: t(categoryCopy[category].title, locale),
      description: t(categoryCopy[category].metaDescription, locale),
      url: categoryUrl,
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
}
