import type { Metadata } from "next";
import { getCityConfig } from "@/config/cities";
import { categoryCopy } from "@/content/site-copy";
import { getCategoryPath, getGuidePath, type Locale, t } from "@/lib/i18n";
import type { GuideCategory } from "@/types/city";
import type { GuideEntry } from "@/types/guide";

function buildLanguageAlternates(paths: Record<Locale, string>, currentLocale: Locale) {
  return {
    canonical: paths[currentLocale],
    languages: {
      nl: paths.nl,
      en: paths.en,
    },
  };
}

function getAbsoluteImageUrl(path: string): string {
  const city = getCityConfig("groningen");
  return `${city.siteUrl}${path}`;
}

const categoryOgImagePaths: Record<GuideCategory, string> = {
  hulp: "/images/og/hulp-groningen.jpg",
  wijken: "/images/og/wijken-groningen.jpg",
  beste: "/images/og/beste-groningen.jpg",
  blog: "/images/og/blog-groningen.webp",
};

function getCategoryOgImage(category: GuideCategory): string {
  return getAbsoluteImageUrl(categoryOgImagePaths[category]);
}

export function buildDefaultMetadata(locale: Locale): Metadata {
  const city = getCityConfig("groningen");
  const title = t(city.defaultTitle, locale);
  const description = t(city.defaultDescription, locale);
  const homeImageUrl = getAbsoluteImageUrl("/images/og/home-groningen.webp");

  return {
    metadataBase: new URL(city.siteUrl),
    title: {
      default: title,
      template: `%s | ${city.siteName}`,
    },
    description,
    applicationName: city.siteName,
    alternates: buildLanguageAlternates({
      nl: "/nl",
      en: "/en",
    }, locale),
    keywords:
      locale === "nl"
        ? [
            "fietsen Groningen",
            "fiets reparatie Groningen",
            "fietsenmaker Groningen",
            "student fiets groningen",
            "tweedehands fiets Groningen",
          ]
        : [
            "cycling Groningen",
            "bike repair Groningen",
            "bike shop Groningen",
            "student bike guide Groningen",
            "second-hand bike Groningen",
          ],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: locale === "nl" ? "nl_NL" : "en_US",
      url: locale === "nl" ? `${city.siteUrl}/nl` : `${city.siteUrl}/en`,
      siteName: city.siteName,
      title,
      description,
      images: [
        {
          url: homeImageUrl,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [homeImageUrl],
    },
    category: "cycling",
  };
}

export function buildCategoryMetadata(locale: Locale, category: GuideCategory): Metadata {
  const copy = categoryCopy[category];
  const title = t(copy.metaTitle, locale);
  const description = t(copy.metaDescription, locale);
  const imageUrl = getCategoryOgImage(category);

  return {
    title,
    description,
    alternates: buildLanguageAlternates({
      nl: getCategoryPath("nl", category),
      en: getCategoryPath("en", category),
    }, locale),
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          alt: t(copy.title, locale),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function buildGuideMetadata(locale: Locale, guide: GuideEntry): Metadata {
  const city = getCityConfig("groningen");
  const imageUrl = guide.heroImage ? `${city.siteUrl}${guide.heroImage.src}` : undefined;

  return {
    title: t(guide.seoTitle, locale),
    description: t(guide.seoDescription, locale),
    alternates: buildLanguageAlternates({
      nl: getGuidePath("nl", guide.category, guide.slug),
      en: getGuidePath("en", guide.category, guide.slug),
    }, locale),
    openGraph: imageUrl
      ? {
          images: [
            {
              url: imageUrl,
              alt: t(guide.heroImage!.alt, locale),
            },
          ],
        }
      : undefined,
    twitter: imageUrl
      ? {
          card: "summary_large_image",
          images: [imageUrl],
        }
      : undefined,
  };
}
