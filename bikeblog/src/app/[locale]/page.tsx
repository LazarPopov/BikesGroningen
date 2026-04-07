import { notFound } from "next/navigation";
import { HomePage } from "@/components/pages/home-page";
import { isLocale } from "@/lib/i18n";

export const revalidate = 3600;

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <HomePage locale={locale} />;
}
