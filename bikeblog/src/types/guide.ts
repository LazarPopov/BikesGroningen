import type { AnalyticsEventName } from "@/lib/analytics/events";
import type { GuideCategory } from "@/types/city";
import type { LocalizedString, LocalizedStringArray } from "@/types/i18n";

export type GuideFaq = {
  question: LocalizedString;
  answer: LocalizedString;
};

export type GuideHowToStep = {
  name: LocalizedString;
  text: LocalizedString;
};

export type GuidePartnerCta = {
  label: LocalizedString;
  href: string;
  description: LocalizedString;
  eventName: AnalyticsEventName;
};

export type GuideHeroImage = {
  src: string;
  alt: LocalizedString;
};

export type GuideSectionVisual = {
  src: string;
  alt: LocalizedString;
  caption?: LocalizedString;
};

export type GuideInlineCallout = {
  eyebrow: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  buttonLabel: LocalizedString;
  href: string;
  note?: LocalizedString;
};

export type GuideEventDetails = {
  name: string;
  startDate: string;
  endDate?: string;
  locationName: string;
  locationAddress?: string;
  isFree?: boolean;
};

export type GuideSource = {
  label: LocalizedString;
  href: string;
  note?: LocalizedString;
};

export type GuideBodySection = {
  title: LocalizedString;
  paragraphs: LocalizedStringArray;
  visual?: GuideSectionVisual;
};

export type GuideEntry = {
  citySlug: string;
  category: GuideCategory;
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  description: LocalizedString;
  seoTitle: LocalizedString;
  seoDescription: LocalizedString;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  featured?: boolean;
  authorName?: string;
  neighborhood?: LocalizedString;
  heroImage?: GuideHeroImage;
  inlineCallout?: GuideInlineCallout;
  eventDetails?: GuideEventDetails;
  sources?: GuideSource[];
  keywords: LocalizedStringArray;
  partnerCta: GuidePartnerCta;
  howToSteps?: GuideHowToStep[];
  faqs?: GuideFaq[];
};
