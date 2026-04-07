import { groningenGuides } from "@/content/groningen/guides-data";
import type { GuideCategory } from "@/types/city";
import type { GuideEntry } from "@/types/guide";

const guidesByCity = {
  groningen: groningenGuides,
} as const;

const guideCrossLinkMap: Record<string, string[]> = {
  "student-bike-guide-groningen-2026": [
    "goedkope-tweedehands-fiets-groningen-studenten",
    "fietsendiefstal-groningen-voorkomen-studenten",
    "fietsdepot-groningen-boetes-2026",
    "swapfiets-vs-fiets-kopen-groningen-studenten",
  ],
  "goedkope-tweedehands-fiets-groningen-studenten": [
    "student-bike-guide-groningen-2026",
    "swapfiets-vs-fiets-kopen-groningen-studenten",
    "fietsendiefstal-groningen-voorkomen-studenten",
  ],
  "fietsdepot-groningen-boetes-2026": [
    "student-bike-guide-groningen-2026",
    "fietsendiefstal-groningen-voorkomen-studenten",
    "fietsen-naar-zernike-groningen-studenten",
  ],
  "fietsendiefstal-groningen-voorkomen-studenten": [
    "student-bike-guide-groningen-2026",
    "goedkope-tweedehands-fiets-groningen-studenten",
    "fietsdepot-groningen-boetes-2026",
  ],
  "swapfiets-vs-fiets-kopen-groningen-studenten": [
    "student-bike-guide-groningen-2026",
    "goedkope-tweedehands-fiets-groningen-studenten",
    "fietsen-naar-zernike-groningen-studenten",
  ],
  "fietsen-naar-zernike-groningen-studenten": [
    "student-bike-guide-groningen-2026",
    "fietsendiefstal-groningen-voorkomen-studenten",
    "fietsdepot-groningen-boetes-2026",
  ],
};

export function getAllGuides(citySlug: keyof typeof guidesByCity = "groningen"): GuideEntry[] {
  return [...guidesByCity[citySlug]].sort(
    (left, right) => Date.parse(right.updatedAt) - Date.parse(left.updatedAt),
  );
}

export function getFeaturedGuides(
  citySlug: keyof typeof guidesByCity = "groningen",
): GuideEntry[] {
  return getAllGuides(citySlug).filter((guide) => guide.featured);
}

export function getGuidesByCategory(
  category: GuideCategory,
  citySlug: keyof typeof guidesByCity = "groningen",
): GuideEntry[] {
  return getAllGuides(citySlug).filter((guide) => guide.category === category);
}

export function getGuideBySlug(
  category: GuideCategory,
  slug: string,
  citySlug: keyof typeof guidesByCity = "groningen",
): GuideEntry | undefined {
  return getAllGuides(citySlug).find(
    (guide) => guide.category === category && guide.slug === slug,
  );
}

export function getGuideCrossLinks(
  slug: string,
  citySlug: keyof typeof guidesByCity = "groningen",
): GuideEntry[] {
  const targetSlugs = guideCrossLinkMap[slug];

  if (!targetSlugs?.length) {
    return [];
  }

  const guides = getAllGuides(citySlug);

  return targetSlugs
    .map((targetSlug) => guides.find((guide) => guide.slug === targetSlug))
    .filter((guide): guide is GuideEntry => Boolean(guide));
}

export function getRelatedGuides(
  slug: string,
  citySlug: keyof typeof guidesByCity = "groningen",
  limit = 3,
): GuideEntry[] {
  const currentGuide = getAllGuides(citySlug).find((guide) => guide.slug === slug);

  if (!currentGuide) {
    return getAllGuides(citySlug).slice(0, limit);
  }

  const allOtherGuides = getAllGuides(citySlug).filter((guide) => guide.slug !== slug);
  const sameCategory = allOtherGuides.filter((guide) => guide.category === currentGuide.category);
  const featured = allOtherGuides.filter((guide) => guide.featured);
  const ordered = [...sameCategory, ...featured, ...allOtherGuides];

  return ordered.filter(
    (guide, index, array) => index === array.findIndex((item) => item.slug === guide.slug),
  ).slice(0, limit);
}
