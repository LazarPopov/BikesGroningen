import type { LocalizedString } from "@/types/i18n";

export type GuideCategory = "hulp" | "wijken" | "beste" | "blog";

export type PartnerConfig = {
  id: string;
  name: string;
  siteUrl: string;
  address: string;
  ctaLabel: string;
  whatsappUrl?: string;
  email?: string;
};

export type CityGuideConfig = {
  slug: string;
  siteName: string;
  siteUrl: string;
  locale: string;
  city: string;
  region: string;
  country: string;
  defaultTitle: LocalizedString;
  defaultDescription: LocalizedString;
  leadMagnet: string;
  neighborhoods: string[];
  partner: PartnerConfig;
  primaryCategories: GuideCategory[];
  revalidateMinutes: number;
};
