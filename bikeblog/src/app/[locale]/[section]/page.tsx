import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryPage } from "@/components/layout/category-page";
import { buildCategoryMetadata } from "@/lib/seo/metadata";
import {
  getCategoryFromSegment,
  getCategorySegment,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n";

type Params = Promise<{ locale: string; section: string }>;

const categories = ["hulp", "wijken", "beste", "blog"] as const;

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    categories.map((category) => ({
      locale,
      section: getCategorySegment(locale, category),
    })),
  );
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, section } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const category = getCategoryFromSegment(locale, section);

  if (!category) {
    return {};
  }

  return buildCategoryMetadata(locale, category);
}

export default async function LocalizedCategoryPage({ params }: { params: Params }) {
  const { locale, section } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const category = getCategoryFromSegment(locale, section);

  if (!category) {
    notFound();
  }

  return <CategoryPage category={category} locale={locale as Locale} />;
}
