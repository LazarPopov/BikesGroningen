import type { Locale, LocalizedString } from "@/types/i18n";

export const adPlacements = [
  "home_inline",
  "category_inline",
  "guide_inline",
  "guide_sidebar",
] as const;

export type AdPlacement = (typeof adPlacements)[number];

export type AdTheme = "amber" | "cyan" | "slate";
export type AdImageStyle = "cover" | "logo";

export type AdEntry = {
  id: string;
  enabled: boolean;
  sponsorName: string;
  href: string;
  placements: AdPlacement[];
  locales?: Locale[];
  headline: LocalizedString;
  body: LocalizedString;
  ctaLabel: LocalizedString;
  disclosure?: LocalizedString;
  badge?: LocalizedString;
  promoLabel?: LocalizedString;
  promoCode?: string;
  promoDetail?: LocalizedString;
  theme?: AdTheme;
  imageUrl?: string;
  imageAlt?: LocalizedString;
  imageLowerDesktop?: boolean;
  imageStyle?: AdImageStyle;
};
