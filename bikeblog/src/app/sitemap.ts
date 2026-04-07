import type { MetadataRoute } from "next";
import { getCityConfig } from "@/config/cities";
import { getAllGuides } from "@/lib/content/guides";
import { getCategoryPath, getGuidePath, locales } from "@/lib/i18n";
import type { GuideCategory } from "@/types/city";

const categories: GuideCategory[] = ["hulp", "wijken", "beste", "blog"];

export default function sitemap(): MetadataRoute.Sitemap {
  const city = getCityConfig("groningen");

  const staticRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) => [
    {
      url: `${city.siteUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: locale === "nl" ? 1 : 0.9,
    },
    ...categories.map((category) => ({
      url: `${city.siteUrl}${getCategoryPath(locale, category)}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ]);

  const guideRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    getAllGuides("groningen").map((guide) => ({
      url: `${city.siteUrl}${getGuidePath(locale, guide.category, guide.slug)}`,
      lastModified: new Date(guide.updatedAt),
      changeFrequency: "monthly" as const,
      priority: guide.featured ? 0.9 : 0.7,
    })),
  );

  return [...staticRoutes, ...guideRoutes];
}
