import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { buildDefaultMetadata } from "@/lib/seo/metadata";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return buildDefaultMetadata(locale);
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div lang={locale} className="flex min-h-screen flex-col">
      <Suspense fallback={null}>
        <GoogleAnalytics />
      </Suspense>
      <SiteHeader locale={locale as Locale} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={locale as Locale} />
    </div>
  );
}
