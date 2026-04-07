import type { LocalizedString, LocalizedStringArray } from "@/types/i18n";

type GuideChecklist = {
  eyebrow: LocalizedString;
  title: LocalizedString;
  items: LocalizedStringArray;
};

const groningenGuideChecklists: Record<string, GuideChecklist> = {
  "student-bike-guide-groningen-2026": {
    eyebrow: {
      nl: "Snelle student check",
      en: "Quick student check",
    },
    title: {
      nl: "Wat je echt wilt onthouden",
      en: "What you actually want to remember",
    },
    items: {
      nl: [
        "Mik op EUR 75 tot EUR 120 voor een simpele studentenfiets.",
        "Gebruik altijd een ringslot plus een kettingslot aan iets vasts.",
        "Lock nooit alleen je voorwiel als je je hele fiets wilt terugzien.",
        "Check bij Grote Markt eerst de gemeente info voordat je uitgaat van diefstal.",
        "Telefoon in de hand en slechte verlichting zijn dure fouten.",
        "Een saaie fiets is in Groningen vaak slimmer dan een opvallende.",
      ],
      en: [
        "Aim for EUR 75 to EUR 120 for a simple student bike.",
        "Always use a frame lock plus a chain lock attached to something fixed.",
        "Never lock only your front wheel if you want to see the full bike again.",
        "Near Grote Markt, check the municipality info before assuming theft.",
        "Phone-in-hand and bad lights are expensive mistakes.",
        "In Groningen, a boring bike is often smarter than a flashy one.",
      ],
    },
  },
  "goedkope-tweedehands-fiets-groningen-studenten": {
    eyebrow: {
      nl: "Koop slim",
      en: "Buy smart",
    },
    title: {
      nl: "Budget checklist",
      en: "Budget checklist",
    },
    items: {
      nl: [
        "Check remmen, banden, verlichting, slot en frame.",
        "Hou het low-key: te mooi wordt sneller een target.",
        "Een simpele fiets met rust in de techniek wint van een flashy probleemfiets.",
        "Vermijd shady deals op straat.",
      ],
      en: [
        "Check brakes, tires, lights, lock, and frame.",
        "Keep it low-key: too pretty becomes a target faster.",
        "A simple bike with solid mechanics beats a flashy problem bike.",
        "Avoid shady street deals.",
      ],
    },
  },
  "fietsdepot-groningen-boetes-2026": {
    eyebrow: {
      nl: "No panic",
      en: "No panic",
    },
    title: {
      nl: "Eerst dit checken",
      en: "Check this first",
    },
    items: {
      nl: [
        "Kijk eerst of je fiets verplaatst of weggehaald is.",
        "Check daarna de officiele gemeente pagina en kijk of je fiets later op verlorenofgevonden.nl verschijnt.",
        "Bij Grote Markt kun je binnen 24 uur gratis ophalen op Ossenmarkt.",
        "Daarna gaat de fiets naar Vinkhuizen en kost ophalen EUR 25.",
        "Telefoon in de hand: EUR 430 volgens de gecontroleerde OM pagina.",
        "Geen verplichte fietsverlichting: EUR 75 volgens de gecontroleerde OM pagina.",
      ],
      en: [
        "First check whether the bike was moved or removed.",
        "Then check the official municipality page and see whether the bike later appears on verlorenofgevonden.nl.",
        "Near Grote Markt, you can collect it for free at Ossenmarkt within 24 hours.",
        "After that it goes to Vinkhuizen and collection costs EUR 25.",
        "Phone in hand: EUR 430 according to the checked OM page.",
        "Missing required bike lights: EUR 75 according to the checked OM page.",
      ],
    },
  },
  "fietsendiefstal-groningen-voorkomen-studenten": {
    eyebrow: {
      nl: "Anti-diefstal",
      en: "Anti-theft",
    },
    title: {
      nl: "De boring maar goated routine",
      en: "The boring but goated routine",
    },
    items: {
      nl: [
        "Kies een simpele fiets die niet om aandacht vraagt.",
        "Gebruik twee sloten, niet alleen een ringslot.",
        "Zet je fiets vast aan een rek of paal, nooit alleen door het voorwiel.",
        "Een budget tracker onder het zadel is een slimme extra laag.",
        "Check bij twijfel ook altijd eerst de gemeente info voordat je pure diefstal aanneemt.",
      ],
      en: [
        "Choose a simple bike that does not ask for attention.",
        "Use two locks, not just a frame lock.",
        "Attach your bike to a rack or pole, never only through the front wheel.",
        "A budget tracker under the seat is a smart extra layer.",
        "If in doubt, check municipality info before assuming pure theft.",
      ],
    },
  },
  "swapfiets-vs-fiets-kopen-groningen-studenten": {
    eyebrow: {
      nl: "Vergelijk slim",
      en: "Compare smart",
    },
    title: {
      nl: "De korte versie",
      en: "The short version",
    },
    items: {
      nl: [
        "Huren is handig voor een korte landing.",
        "Kopen wint vaak als je langer blijft.",
        "Wachttijden aan het begin van het studiejaar kunnen oplopen.",
        "Sleutel- en diefstalkosten tellen mee in het echte prijsplaatje.",
        "Voor veel studenten is een simpele tweedehands fiets uiteindelijk slimmer.",
      ],
      en: [
        "Renting is useful for a short landing.",
        "Buying often wins if you stay longer.",
        "Waiting times can grow at the start of the academic year.",
        "Key and theft costs matter in the real price picture.",
        "For many students, a simple second-hand bike is the smarter long-term move.",
      ],
    },
  },
  "fietsen-naar-zernike-groningen-studenten": {
    eyebrow: {
      nl: "Commuter check",
      en: "Commuter check",
    },
    title: {
      nl: "Voor je naar Zernike vertrekt",
      en: "Before you ride to Zernike",
    },
    items: {
      nl: [
        "Check lichten en bandenspanning voor vertrek.",
        "Los kleine problemen dezelfde week op.",
        "Parkeer in een rek en zet je fiets goed vast.",
        "Kijk achterom voordat je wegloopt.",
        "Betrouwbaar wint harder dan fancy op een commuter route.",
      ],
      en: [
        "Check lights and tire pressure before leaving.",
        "Fix small problems in the same week.",
        "Park in a rack and lock your bike properly.",
        "Look back before walking away.",
        "Reliable beats fancy on a commuter route.",
      ],
    },
  },
  "red-bull-district-ride-groningen-2026-guide": {
    eyebrow: {
      nl: "TL;DR",
      en: "TL;DR",
    },
    title: {
      nl: "District Ride weekend in 3 snelle punten",
      en: "District Ride weekend in 3 quick points",
    },
    items: {
      nl: [
        "De officiele eventkalender wijst op 24 en 25 juli 2026 in Groningen, met finals day op zaterdag 25 juli 2026.",
        "Grote Markt is de bevestigde eventkern; check ook de interactieve ArcGIS-kaart in de bronnen voor extra planning context.",
        "Lokale berichtgeving wijst op een huge rooftop-to-square moment op de Grote Markt, en als je je eigen fiets niet wilt riskeren zijn NS OV-fiets, CHECK en Bolt logische backup-opties om eerst te checken.",
      ],
      en: [
        "The official event calendar points to July 24 and 25, 2026 in Groningen, with finals day on Saturday, July 25, 2026.",
        "Grote Markt is the confirmed event core; also check the interactive ArcGIS map in the sources for extra planning context.",
        "Local reporting points to a huge rooftop-to-square moment on Grote Markt, and if you do not want to risk your own bike, NS OV-fiets, CHECK, and Bolt are logical backup options to check first.",
      ],
    },
  },
};

export function getGuideChecklist(slug: string): GuideChecklist | undefined {
  return groningenGuideChecklists[slug];
}
