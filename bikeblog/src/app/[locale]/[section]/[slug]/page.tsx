import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePage } from "@/components/pages/guide-page";
import { getAllGuides, getGuideBySlug } from "@/lib/content/guides";
import { buildGuideMetadata } from "@/lib/seo/metadata";
import {
  getCategoryFromSegment,
  getCategorySegment,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n";

type Params = Promise<{ locale: string; section: string; slug: string }>;

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllGuides("groningen").map((guide) => ({
      locale,
      section: getCategorySegment(locale, guide.category),
      slug: guide.slug,
    })),
  );
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, section, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const category = getCategoryFromSegment(locale, section);

  if (!category) {
    return {};
  }

  const guide = getGuideBySlug(category, slug, "groningen");

  if (!guide) {
    return {};
  }

  return buildGuideMetadata(locale, guide);
}

export default async function LocalizedGuidePage({ params }: { params: Params }) {
  const { locale, section, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const category = getCategoryFromSegment(locale, section);

  if (!category) {
    notFound();
  }

  const guide = getGuideBySlug(category, slug, "groningen");

  if (!guide) {
    notFound();
  }

  return <GuidePage locale={locale as Locale} guide={guide} />;
}
