export const locales = ["nl", "en"] as const;

export type Locale = (typeof locales)[number];

export type LocalizedString = Record<Locale, string>;
export type LocalizedStringArray = Record<Locale, string[]>;

export const defaultLocale: Locale = "nl";
