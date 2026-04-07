import type { CityGuideConfig } from "@/types/city";

export const groningenConfig: CityGuideConfig = {
  slug: "groningen",
  siteName: "Bikes Groningen",
  siteUrl: "https://bikesgroningen.nl",
  locale: "nl-NL",
  city: "Groningen",
  region: "Groningen",
  country: "Nederland",
  defaultTitle: {
    nl: "Bikes Groningen | Lokale fietsgids voor Groningen",
    en: "Bikes Groningen | Local cycling guide for Groningen",
  },
  defaultDescription: {
    nl: "De ultieme fietsgids voor Groningen. Vermijd boetes, vind de beste tweedehands deals en krijg lokale reparatietips van Groningens meest vertrouwde fietsexperts.",
    en: "The ultimate Groningen bike guide. Avoid fines, find the best second-hand deals, and get local repair tips from Groningen's most trusted cycling experts.",
  },
  leadMagnet: "/downloads/groningen-first-year-survival-guide-2026.pdf",
  neighborhoods: ["Vinkhuizen", "Helpman", "Korrewegwijk", "Centrum", "Selwerd"],
  partner: {
    id: "bikes-groningen-config",
    name: "Bike Store Groningen",
    siteUrl: "https://bikestoregroningen.nl",
    address: "Paterswoldseweg 30, Groningen",
    ctaLabel: "Direct Repair at Paterswoldseweg 30",
    whatsappUrl: "https://wa.me/31000000000",
    email: "info@bikestoregroningen.nl",
  },
  primaryCategories: ["hulp", "wijken", "beste", "blog"],
  revalidateMinutes: 60,
};

