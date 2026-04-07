import type { AdEntry, AdPlacement } from "@/types/ad";
import type { Locale } from "@/types/i18n";

export const groningenAds: AdEntry[] = [
  {
    id: "student-jobs-groningen",
    enabled: true,
    sponsorName: "Student Jobs Groningen",
    href: "https://www.studentjobsgroningen.nl/",
    placements: ["home_inline", "category_inline"],
    headline: {
      nl: "Vind studentenwerk in Groningen",
      en: "Find student jobs in Groningen",
    },
    body: {
      nl: "Bijbanen, stages en studentvriendelijk werk op een plek. Handig als je budget naar huur, boeken en je fiets blijft gaan.",
      en: "Part-time jobs, internships, and student-friendly work in one place. Useful when your budget keeps disappearing into rent, books, and your bike.",
    },
    ctaLabel: {
      nl: "Bekijk student jobs",
      en: "Browse student jobs",
    },
    disclosure: {
      nl: "Gesponsord",
      en: "Sponsored",
    },
    badge: {
      nl: "Jobs",
      en: "Jobs",
    },
    theme: "amber",
    imageUrl: "/images/ads/student-jobs-groningen.jpg",
    imageAlt: {
      nl: "Student die in Groningen werkt achter een laptop",
      en: "Student working on a laptop in Groningen",
    },
    imageLowerDesktop: true,
  },
  {
    id: "signaal-rentals-groningen",
    enabled: true,
    sponsorName: "Signaal.app",
    href: "https://signaal.app/?airbridge_referrer=airbridge%3Dtrue%26app%3Dsignaal%26client_id%3Da03f11ac-fb24-4532-b0c3-56d5a61863be%26event_uuid%3Dc17ddc9b-3ccd-4008-80cc-c7a507206fbe%26referrer_timestamp%3D1775510073480%26short_id%3Dx2n9q8h%26custom_short_id%3Dstudentjobsnl%26channel%3Dstudentjobsnl%26tracking_template_id%3Dc925eea21526b9c2870669f1c2511a29%26og_tag_id%3D404300327%26routing_short_id%3Dx2n9q8h",
    placements: ["guide_inline", "guide_sidebar"],
    headline: {
      nl: "Wees als eerste bij nieuwe huurwoningen in Groningen",
      en: "Be first for new rentals in Groningen",
    },
    body: {
      nl: "Directe alerts en een plek om passende listings in Groningen te volgen, zodat je kunt reageren voordat iedereen erop springt.",
      en: "Instant alerts and one place to track matching listings in Groningen, so you can reply before everyone else jumps on them.",
    },
    ctaLabel: {
      nl: "Vind huurwoningen in Groningen",
      en: "Find rentals in Groningen",
    },
    disclosure: {
      nl: "Gesponsord door",
      en: "Sponsored by",
    },
    badge: {
      nl: "Housing",
      en: "Housing",
    },
    promoLabel: {
      nl: "Gebruik code",
      en: "Use code",
    },
    promoCode: "ASJOBS",
    promoDetail: {
      nl: "10% korting",
      en: "10% off",
    },
    theme: "cyan",
    imageUrl: "/images/ads/signaal.png",
    imageAlt: {
      nl: "Signaal app visual voor huurwoningen in Groningen",
      en: "Signaal app visual for rentals in Groningen",
    },
    imageStyle: "logo",
  },
  // Example placeholder ad.
  // Keep enabled as false to hide it, or switch to true and replace the copy and URL.
  {
    id: "example-local-partner-placeholder",
    enabled: false,
    sponsorName: "Example Local Partner",
    href: "https://example.com",
    placements: ["home_inline", "category_inline", "guide_sidebar"],
    headline: {
      nl: "Jouw lokale partner kan hier staan",
      en: "Your local partner can be featured here",
    },
    body: {
      nl: "Gebruik dit slot voor een simpele lokale advertentie, ook als de partner geen bestaande banner heeft.",
      en: "Use this slot for a simple local ad, even when the partner does not have a ready-made banner.",
    },
    ctaLabel: {
      nl: "Bekijk partner",
      en: "View partner",
    },
    disclosure: {
      nl: "Advertentie",
      en: "Advertisement",
    },
    badge: {
      nl: "Voorbeeld",
      en: "Example",
    },
    theme: "amber",
  },
];

export function getAdsForPlacement(locale: Locale, placement: AdPlacement): AdEntry[] {
  return groningenAds.filter((ad) => {
    const matchesPlacement = ad.placements.includes(placement);
    const matchesLocale = !ad.locales || ad.locales.includes(locale);

    return ad.enabled && matchesPlacement && matchesLocale;
  });
}
