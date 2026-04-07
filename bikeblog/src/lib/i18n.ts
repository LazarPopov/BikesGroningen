import type { GuideCategory } from "@/types/city";
import { defaultLocale, locales, type Locale, type LocalizedString } from "@/types/i18n";

const categorySegments: Record<Locale, Record<GuideCategory, string>> = {
  nl: {
    hulp: "hulp",
    wijken: "wijken",
    beste: "beste",
    blog: "blog",
  },
  en: {
    hulp: "repair",
    wijken: "neighborhoods",
    beste: "compare",
    blog: "guides",
  },
};

const sharedSegments = new Set(["privacy"]);

export { defaultLocale, locales };
export type { Locale };

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function t(value: LocalizedString, locale: Locale): string {
  return value[locale];
}

export function getCategorySegment(locale: Locale, category: GuideCategory): string {
  return categorySegments[locale][category];
}

export function getCategoryFromSegment(
  locale: Locale,
  segment: string,
): GuideCategory | undefined {
  const entry = Object.entries(categorySegments[locale]).find(
    ([, localizedSegment]) => localizedSegment === segment,
  );

  return entry?.[0] as GuideCategory | undefined;
}

export function getLocalePath(locale: Locale): string {
  return `/${locale}`;
}

export function getCategoryPath(locale: Locale, category: GuideCategory): string {
  return `${getLocalePath(locale)}/${getCategorySegment(locale, category)}`;
}

export function getGuidePath(locale: Locale, category: GuideCategory, slug: string): string {
  return `${getCategoryPath(locale, category)}/${slug}`;
}

export function getSharedPagePath(locale: Locale, page: "privacy"): string {
  return `${getLocalePath(locale)}/${page}`;
}

export function translatePathname(pathname: string, targetLocale: Locale): string {
  const parts = pathname.split("/").filter(Boolean);

  if (parts.length === 0) {
    return getLocalePath(targetLocale);
  }

  const [currentLocale, currentSection, ...rest] = parts;

  if (!isLocale(currentLocale)) {
    return getLocalePath(targetLocale);
  }

  if (!currentSection) {
    return getLocalePath(targetLocale);
  }

  const suffix = rest.length > 0 ? `/${rest.join("/")}` : "";
  const category = getCategoryFromSegment(currentLocale, currentSection);

  if (category) {
    const targetSection = getCategorySegment(targetLocale, category);
    return `/${targetLocale}/${targetSection}${suffix}`;
  }

  if (sharedSegments.has(currentSection)) {
    return `/${targetLocale}/${currentSection}${suffix}`;
  }

  return getLocalePath(targetLocale);
}

export function formatDate(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "nl" ? "nl-NL" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
