import type { GuideCategory } from "@/types/city";
import type { LocalizedString } from "@/types/i18n";

type CategoryCopy = {
  navLabel: LocalizedString;
  eyebrow: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  cardDescription: LocalizedString;
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
};

export const categoryCopy: Record<GuideCategory, CategoryCopy> = {
  hulp: {
    navLabel: { nl: "Hulp", en: "Repair" },
    eyebrow: { nl: "Hulp & reparatie", en: "Help & Repairs" },
    title: {
      nl: "Directe fietshulp voor pech, diefstal en onderhoudsvragen.",
      en: "Direct bike help for repairs, theft, and urgent maintenance questions.",
    },
    description: {
      nl: "Snelle oplossingen voor de meest voorkomende fietsstress in Groningen, want je fiets lopend over de Vismarkt duwen is nooit het plan.",
      en: "Quick solutions for Groningen's most common bike headaches, because walking your bike across the Vismarkt is never the plan.",
    },
    cardDescription: {
      nl: "Snelle hulp bij lekke banden, diefstal en de fietsproblemen die je dag slopen.",
      en: "Quick help for flat tires, theft, and the bike problems that can derail your day.",
    },
    metaTitle: { nl: "Fietshulp Groningen", en: "Bike Repair Help Groningen" },
    metaDescription: {
      nl: "How-to en noodgidsen voor fietshulp in Groningen, van diefstal tot snelle reparatievragen.",
      en: "How-to and emergency bike-help guides for Groningen, from theft to urgent repair questions.",
    },
  },
  wijken: {
    navLabel: { nl: "Wijken", en: "Neighborhoods" },
    eyebrow: { nl: "Fietswinkel per wijk", en: "Shop Finder by Neighborhood" },
    title: {
      nl: "Hyperlokale wijkgidsen voor fietsers in Groningen.",
      en: "Hyper-local neighborhood guides for cyclists in Groningen.",
    },
    description: {
      nl: "Een straat-voor-straat blik op waar je betrouwbare monteurs en winkels vindt in Groningen, van de rustige hoeken van Helpman tot de studentenhubs in Selwerd.",
      en: "A street-by-street look at where to find reliable mechanics and shops across Groningen, from the quiet corners of Helpman to the student hubs in Selwerd.",
    },
    cardDescription: {
      nl: "Vind betrouwbare fietshulp per wijk, van Helpman tot Selwerd.",
      en: "Find reliable bike help by neighborhood, from Helpman to Selwerd.",
    },
    metaTitle: { nl: "Wijken Groningen", en: "Groningen Neighborhood Guides" },
    metaDescription: {
      nl: "Hyperlokale wijkgidsen voor fietsers in Groningen, met nadruk op buurtspecifieke hulp en vertrouwen.",
      en: "Hyper-local neighborhood guides for cyclists in Groningen, focused on local trust and area-specific help.",
    },
  },
  beste: {
    navLabel: { nl: "Beste", en: "Compare" },
    eyebrow: { nl: "Koopgidsen & vergelijkingen", en: "Buying Guides & Comparisons" },
    title: {
      nl: "Koopgidsen en vergelijkingen voor slimme fietskeuzes.",
      en: "Buying guides and comparisons for smart cycling decisions.",
    },
    description: {
      nl: "Wij hebben het huiswerk al gedaan. We vergelijken de beste tweedehands deals, huuropties en winkels in Groningen, zodat jij dat niet meer hoeft te doen.",
      en: "We've done the homework for you. We compare Groningen's best second-hand deals, rental options, and shop services so you don't have to.",
    },
    cardDescription: {
      nl: "Vergelijk tweedehands fietsen, huuropties en lokale service zonder eindeloos zelf te zoeken.",
      en: "Compare second-hand bikes, rental options, and local shop services without doing all the homework yourself.",
    },
    metaTitle: { nl: "Beste Fietsopties Groningen", en: "Best Bike Options Groningen" },
    metaDescription: {
      nl: "Vergelijkingspagina's voor tweedehands fietsen, servicekeuzes en slimme koopbeslissingen in Groningen.",
      en: "Comparison pages for second-hand bikes, service choices, and smarter buying decisions in Groningen.",
    },
  },
  blog: {
    navLabel: { nl: "Gidsen", en: "Guides" },
    eyebrow: { nl: "Expert fietsgidsen", en: "Expert Cycling Guides" },
    title: {
      nl: "De essentiele gidsen voor studenten en dagelijkse fietsers in Groningen.",
      en: "The essential Groningen guides for students and everyday cyclists.",
    },
    description: {
      nl: "Het essentiele Groningse fietsplaybook, met deep dives over alles van boetes ontwijken tot je dagelijkse rit naar Zernike overleven.",
      en: "The essential Groningen playbook. Deep dives into everything from dodging fines to surviving your daily commute to Zernike.",
    },
    cardDescription: {
      nl: "Studentvriendelijke gidsen over boetes, forenzen, goedkope fietsen en dagelijks fietsen in Groningen.",
      en: "Student-friendly guides on fines, commuting, cheap bikes, and everyday cycling in Groningen.",
    },
    metaTitle: { nl: "Fietsgidsen Groningen", en: "Groningen Bike Guides" },
    metaDescription: {
      nl: "Evergreen gidsen en praktische blogcontent voor studenten en dagelijkse fietsers in Groningen.",
      en: "Evergreen guides and practical blog content for students and everyday cyclists in Groningen.",
    },
  },
};

export const siteCopy = {
  header: {
    tagline: { nl: "Groningens fietsinsider", en: "Groningen's Bike Insider" },
    partnerButton: { nl: "Onze aanbevolen shop", en: "Our Recommended Shop" },
    languageLabel: { nl: "Taal", en: "Language" },
  },
  footer: {
    title: {
      nl: "Fietsen in Groningen makkelijker maken, één gids tegelijk.",
      en: "Making cycling in Groningen easier, one guide at a time.",
    },
    description: {
      nl: "Praktische hulp, wijkgidsen en koopadvies voor fietsers in Groningen.",
      en: "Practical help, neighborhood guides, and buying advice for cyclists in Groningen.",
    },
    partnerLabel: { nl: "Onze aanbevolen shop", en: "Our Recommended Shop" },
    partnerLink: { nl: "Ga naar de partnerwebsite", en: "Visit the partner site" },
  },
  home: {
    eyebrow: {
      nl: "Het ultieme Groningse fietsplaybook",
      en: "The Ultimate Groningen Cycling Playbook",
    },
    title: {
      nl: "Jouw lokale gids voor kopen, repareren en overleven op de fiets in Groningen.",
      en: "Your local guide to buying, fixing, and surviving the bike life in Groningen.",
    },
    description: {
      nl: "",
      en: "",
    },
    guidesButton: { nl: "Bekijk gidsen", en: "View guides" },
    partnerButton: {
      nl: "In samenwerking met:",
      en: "In partnership with:",
    },
    cityConfigEyebrow: { nl: "", en: "" },
    leadMagnetLabel: { nl: "Gratis pdf-gids", en: "Free PDF Guide" },
    revalidateLabel: { nl: "Revalidate", en: "Revalidate" },
    partnerAddressLabel: { nl: "Partneradres", en: "Partner address" },
    silosEyebrow: { nl: "Bladeren op onderwerp", en: "Browse by Topic" },
    silosTitle: {
      nl: "Alles wat je moet weten",
      en: "Everything you need to know",
    },
    phaseEyebrow: { nl: "Begin hier", en: "Start Here" },
    phaseTitle: {
      nl: "Essentiële leestips voor nieuwe fietsers",
      en: "Essential Reads for New Cyclists",
    },
    phaseDescription: {
      nl: "Begin met deze praktische gidsen over kopen, parkeren, repareren en dagelijks fietsen in Groningen.",
      en: "Start with these practical guides on buying, parking, repairs, and everyday cycling in Groningen.",
    },
  },
  guideList: {
    openGuide: { nl: "Open gids", en: "Open guide" },
    noGuides: {
      nl: "We werken op dit moment aan meer gidsen voor dit onderdeel. Kom snel terug.",
      en: "We’re currently drafting more guides for this section. Stay tuned!",
    },
    partnerButton: { nl: "Onze aanbevolen shop", en: "Our Recommended Shop" },
    neighborhoodLabel: { nl: "Wijk", en: "Area" },
    readingTime: { nl: "min leestijd", en: "min read" },
  },
  guidePage: {
    backToCategory: { nl: "Terug naar de silo", en: "Back to the silo" },
    publishedLabel: { nl: "Gepubliceerd", en: "Published" },
    updatedLabel: { nl: "Bijgewerkt", en: "Updated" },
    readingTime: { nl: "min leestijd", en: "min read" },
    keywordsLabel: { nl: "In deze gids", en: "What we cover" },
    howToTitle: { nl: "Wat nu te doen", en: "What to do next" },
    faqTitle: { nl: "Veelgestelde vragen", en: "Frequently asked questions" },
    verifiedPartnerTitle: { nl: "Onze aanbevolen shop", en: "Our Recommended Shop" },
    visitPartner: { nl: "Krijg lokale hulp", en: "Get local help" },
    featuredLabel: { nl: "Essentiele leestip", en: "Essential Reading" },
    relatedGuidesTitle: { nl: "Gerelateerde gidsen", en: "Related guides" },
  },
} as const;

