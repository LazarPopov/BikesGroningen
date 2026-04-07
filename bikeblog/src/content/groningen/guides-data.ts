import { getCityConfig } from "@/config/cities";
import type { GuideEntry } from "@/types/guide";

const city = getCityConfig("groningen");

export const groningenGuides: GuideEntry[] = [
  {
    citySlug: "groningen",
    category: "blog",
    slug: "student-bike-guide-groningen-2026",
    title: {
      nl: "Student Fietsgids Groningen 2026",
      en: "Student Bike Guide Groningen 2026",
    },
    excerpt: {
      nl: "De student survival guide voor goedkoop kopen, slim parkeren, diefstal voorkomen en je fiets terugvinden in Groningen.",
      en: "The student survival guide for buying cheap, parking smart, avoiding theft, and finding your bike again in Groningen.",
    },
    description: {
      nl: "Een actuele gids voor studenten in Groningen over goedkope tweedehands fietsen, Swapfiets versus kopen, anti-diefstal gewoontes, boetes en het fietsdepot.",
      en: "An up-to-date guide for students in Groningen covering cheap second-hand bikes, Swapfiets versus buying, anti-theft habits, fines, and the bike depot.",
    },
    seoTitle: {
      nl: "Student Fietsgids Groningen 2026 | Goedkoop kopen, boetes en anti-diefstal",
      en: "Student Bike Guide Groningen 2026 | Cheap bikes, fines, and anti-theft",
    },
    seoDescription: {
      nl: "Actuele studentengids voor Groningen met tips over goedkope fietsen, anti-diefstal, Zernike ritten, boetes en wat je doet als je fiets weg is.",
      en: "Current student guide for Groningen with tips on cheap bikes, anti-theft, Zernike rides, fines, and what to do when your bike is gone.",
    },
    publishedAt: "2026-04-06",
    updatedAt: "2026-04-06",
    readingMinutes: 11,
    featured: true,
    authorName: "Groningen Cycling Expert",
    heroImage: {
      src: "/images/guides/student-bike-guide-groningen-2026.jpeg",
      alt: {
        nl: "Student op een fiets in Groningen voor de Student Fietsgids 2026",
        en: "Student riding a bike in Groningen for the Student Bike Guide 2026",
      },
    },
    keywords: {
      nl: [
        "student bike guide groningen 2026",
        "goedkope tweedehands fietsen groningen",
        "fietsverlichting boete 2026",
      ],
      en: [
        "student bike guide groningen 2026",
        "student bike sale groningen",
        "phone on bike fine netherlands",
      ],
    },
    partnerCta: {
      label: {
        nl: "Goedkope tweedehands fietsen",
        en: "Cheap second-hand bikes",
      },
      href: city.partner.siteUrl,
      description: {
        nl: "Bekijk een lokale optie voor betaalbare tweedehands fietsen en een snelle studentencheck.",
        en: "See a local option for affordable second-hand bikes and a quick student bike check.",
      },
      eventName: "partner_referral_click",
    },
    sources: [
      {
        label: {
          nl: "Gemeente Groningen: fiets kwijt",
          en: "Municipality of Groningen: missing bike",
        },
        href: "https://gemeente.groningen.nl/fiets-kwijt",
        note: {
          nl: "Gecontroleerd op 6 april 2026 voor Ossenmarkt, Vinkhuizen en de 24-uurs regeling.",
          en: "Checked on April 6, 2026 for Ossenmarkt, Vinkhuizen, and the 24-hour pickup rule.",
        },
      },
      {
        label: {
          nl: "Gemeente Groningen: fietsparkeren",
          en: "Municipality of Groningen: bike parking",
        },
        href: "https://gemeente.groningen.nl/fietsparkeren",
        note: {
          nl: "Gecontroleerd op 6 april 2026 voor centrumzones, rekken en parkeerregels.",
          en: "Checked on April 6, 2026 for city-center zones, racks, and parking rules.",
        },
      },
      {
        label: {
          nl: "OM Boetebase: telefoon in de hand",
          en: "OM Boetebase: phone in hand",
        },
        href: "https://boetebase.om.nl/?SrtCatVer=B1&Zoe=R545",
        note: {
          nl: "Gecontroleerd op 6 april 2026. De gepubliceerde tariefpagina verwees nog naar bedragen vanaf 1 februari 2025.",
          en: "Checked on April 6, 2026. The published tariff page still pointed to rates effective February 1, 2025.",
        },
      },
      {
        label: {
          nl: "OM Boetebase: verplichte fietsverlichting",
          en: "OM Boetebase: required bike lights",
        },
        href: "https://boetebase.om.nl/?Linked=R+438+k&SrtCatVer=a4&boete_tree=22809%2C22644%2C22602%2C21960%2C21912",
        note: {
          nl: "Gecontroleerd op 6 april 2026 voor de lichtboete die in deze gids wordt genoemd.",
          en: "Checked on April 6, 2026 for the bike-light fine referenced in this guide.",
        },
      },
    ],
    faqs: [
      {
        question: {
          nl: "Wat is een realistisch budget voor een studentenfiets in Groningen?",
          en: "What is a realistic budget for a student bike in Groningen?",
        },
        answer: {
          nl: "Voor veel studenten is EUR 75 tot EUR 120 een sterke range voor een simpele tweedehands fiets die niet direct een diefstalmagneet is.",
          en: "For many students, EUR 75 to EUR 120 is a strong range for a simple second-hand bike that is not an instant theft magnet.",
        },
      },
      {
        question: {
          nl: "Is Swapfiets beter dan kopen?",
          en: "Is Swapfiets better than buying?",
        },
        answer: {
          nl: "Voor een korte start kan Swapfiets handig zijn, maar bij een verblijf van meerdere jaren loopt de prijs op. Ook wachttijden aan het begin van het studiejaar en kosten bij diefstal of sleutelproblemen tellen mee.",
          en: "For a short start, Swapfiets can be convenient, but over multiple years the cost adds up. Waiting times at the start of the academic year and costs around theft or key issues also matter.",
        },
      },
      {
        question: {
          nl: "Mijn fiets was bij Grote Markt weg. Gestolen of weggehaald?",
          en: "My bike disappeared near Grote Markt. Was it stolen or removed?",
        },
        answer: {
          nl: "Volgens de gemeente kan een verkeerd geparkeerde fiets uit het roze gebied rond Grote Markt worden weggehaald. Binnen 24 uur kun je die gratis ophalen op Ossenmarkt; daarna gaat de fiets naar Vinkhuizen en kost ophalen EUR 25.",
          en: "According to the municipality, a wrongly parked bike from the pink zone around Grote Markt can be removed. Within 24 hours you can collect it for free at Ossenmarkt; after that it goes to Vinkhuizen and collection costs EUR 25.",
        },
      },
      {
        question: {
          nl: "Welke boetes moeten studenten echt kennen?",
          en: "Which fines do students really need to know?",
        },
        answer: {
          nl: "Op basis van de officieel gepubliceerde OM pagina's die op 6 april 2026 zijn gecontroleerd, staat telefoon in de hand op EUR 430 en geen verplichte fietsverlichting op EUR 75. Beide bedragen zijn exclusief administratiekosten.",
          en: "Based on the officially published OM pages checked on April 6, 2026, holding a phone while riding is EUR 430 and missing required bike lights is EUR 75. Both amounts are before admin costs.",
        },
      },
    ],
  },
  {
    citySlug: "groningen",
    category: "blog",
    slug: "goedkope-tweedehands-fiets-groningen-studenten",
    title: {
      nl: "Goedkope tweedehands fiets Groningen voor studenten",
      en: "Cheap second-hand bike Groningen for students",
    },
    excerpt: {
      nl: "Waar studenten in Groningen op moeten letten als ze een betaalbare fiets zoeken zonder meteen een diefstalmagneet te kopen.",
      en: "What students in Groningen should look for when they want an affordable bike without buying an instant theft magnet.",
    },
    description: {
      nl: "Praktische koopgids voor studenten die in Groningen een goedkope tweedehands fiets willen vinden in de range van EUR 75 tot EUR 120.",
      en: "Practical buying guide for students who want to find a cheap second-hand bike in Groningen in the EUR 75 to EUR 120 range.",
    },
    seoTitle: {
      nl: "Goedkope tweedehands fiets Groningen voor studenten | Budget gids",
      en: "Cheap second-hand bike Groningen for students | Budget guide",
    },
    seoDescription: {
      nl: "Actuele gids voor studenten in Groningen over goedkope tweedehands fietsen, budget, risico's en waar je slim op let.",
      en: "Current guide for students in Groningen about cheap second-hand bikes, budget, risks, and what to check before buying.",
    },
    publishedAt: "2026-04-06",
    updatedAt: "2026-04-06",
    readingMinutes: 7,
    authorName: "Groningen Cycling Expert",
    heroImage: {
      src: "/images/guides/goedkope-tweedehands-fiets-groningen-studenten.webp",
      alt: {
        nl: "Rij tweedehands fietsen voor studenten in Groningen",
        en: "Row of second-hand bikes for students in Groningen",
      },
    },
    keywords: {
      nl: [
        "goedkope tweedehands fietsen groningen",
        "goedkope studentenfiets groningen",
        "student bike sale groningen",
      ],
      en: [
        "cheap second hand bike groningen",
        "student bike sale groningen",
        "buy used bike groningen student",
      ],
    },
    partnerCta: {
      label: {
        nl: "Betaalbare tweedehands fietsen",
        en: "Affordable second-hand bikes",
      },
      href: city.partner.siteUrl,
      description: {
        nl: "Bekijk een lokale optie voor goedkope tweedehands fietsen en een snelle studentencheck.",
        en: "See a local option for affordable second-hand bikes and a quick student bike check.",
      },
      eventName: "partner_referral_click",
    },
    faqs: [
      {
        question: {
          nl: "Wat is een slim budget voor een studentenfiets in Groningen?",
          en: "What is a smart budget for a student bike in Groningen?",
        },
        answer: {
          nl: "Voor veel studenten is EUR 75 tot EUR 120 een sterke range: betaalbaar, simpel, en minder aantrekkelijk voor diefstal dan een opvallend dure fiets.",
          en: "For many students, EUR 75 to EUR 120 is a strong range: affordable, simple, and less attractive to thieves than an expensive standout bike.",
        },
      },
      {
        question: {
          nl: "Is Swapfiets beter dan kopen?",
          en: "Is Swapfiets better than buying?",
        },
        answer: {
          nl: "Swapfiets kan handig zijn in het begin, maar wachttijden rond de start van het studiejaar, extra kosten bij diefstal of sleutelproblemen, en de totale kosten over meerdere jaren maken kopen vaak slimmer.",
          en: "Swapfiets can be useful at the start, but waiting times around the beginning of the academic year, extra costs around theft or key issues, and the total multi-year cost often make buying smarter.",
        },
      },
      {
        question: {
          nl: "Waarom moet je geen fiets kopen van shady verkopers?",
          en: "Why should you avoid buying from shady sellers?",
        },
        answer: {
          nl: "Omdat je vaak een gestolen fiets koopt, een diefstalcyclus in stand houdt, en soms zelfs iemand nog een reserve sleutel heeft waarmee de fiets later teruggestolen wordt.",
          en: "Because you are often buying a stolen bike, feeding the theft cycle, and sometimes someone still has a spare key that can be used to steal it back later.",
        },
      },
    ],
  },
  {
    citySlug: "groningen",
    category: "blog",
    slug: "fietsdepot-groningen-boetes-2026",
    title: {
      nl: "Fietsdepot Groningen en fietsboetes 2026",
      en: "Groningen bike depot and bike fines 2026",
    },
    excerpt: {
      nl: "Praktische gids voor studenten die hun fiets kwijt zijn rond Grote Markt of willen weten welke boetes echt pijn doen in 2026.",
      en: "Practical guide for students whose bike disappeared near Grote Markt or who want to know which fines actually hurt in 2026.",
    },
    description: {
      nl: "Actuele gids over Fietsdepot Groningen, gratis ophalen op Ossenmarkt, regels in het centrum en de belangrijkste fietsboetes voor studenten.",
      en: "Current guide covering the Groningen bike depot, free pickup at Ossenmarkt, city-center parking rules, and the most important bike fines for students.",
    },
    seoTitle: {
      nl: "Fietsdepot Groningen en fietsboetes 2026 | Wat studenten moeten weten",
      en: "Groningen bike depot and bike fines 2026 | What students need to know",
    },
    seoDescription: {
      nl: "Up-to-date gids voor studenten in Groningen over Fietsdepot, Ossenmarkt, gemeente verwijdering, telefoonboete en fietsverlichting boete.",
      en: "Up-to-date guide for students in Groningen about the bike depot, Ossenmarkt, municipality removal, phone fines, and bike light fines.",
    },
    publishedAt: "2026-04-07",
    updatedAt: "2026-04-07",
    readingMinutes: 8,
    authorName: "Groningen Cycling Expert",
    heroImage: {
      src: "/images/guides/fietsdepot-groningen-boetes-1-2026.jpeg",
      alt: {
        nl: "Fietsen bij het depot voor de gids over Fietsdepot Groningen en fietsboetes 2026",
        en: "Bikes at the depot for the Groningen bike depot and bike fines 2026 guide",
      },
    },
    keywords: {
      nl: [
        "fietsdepot groningen",
        "fietsverlichting boete 2026",
        "telefoon op de fiets boete",
      ],
      en: [
        "groningen bike depot",
        "bike light fine netherlands 2026",
        "phone on bike fine netherlands",
      ],
    },
    partnerCta: {
      label: {
        nl: "Snelle check na depotstress",
        en: "Quick check after depot stress",
      },
      href: city.partner.siteUrl,
      description: {
        nl: "Handig als je fiets terug is maar je licht, remmen of slot meteen een check nodig hebben.",
        en: "Useful when your bike is back but your lights, brakes, or lock need a quick check right away.",
      },
      eventName: "partner_referral_click",
    },
    sources: [
      {
        label: {
          nl: "Gemeente Groningen: fiets kwijt",
          en: "Municipality of Groningen: missing bike",
        },
        href: "https://gemeente.groningen.nl/fiets-kwijt",
        note: {
          nl: "Gecontroleerd op 6 april 2026 voor Ossenmarkt, Vinkhuizen en de 24-uurs regeling.",
          en: "Checked on April 6, 2026 for Ossenmarkt, Vinkhuizen, and the 24-hour pickup rule.",
        },
      },
      {
        label: {
          nl: "Gemeente Groningen: fietsparkeren",
          en: "Municipality of Groningen: bike parking",
        },
        href: "https://gemeente.groningen.nl/fietsparkeren",
        note: {
          nl: "Gecontroleerd op 6 april 2026 voor centrumzones, rekken en parkeerregels.",
          en: "Checked on April 6, 2026 for city-center zones, racks, and parking rules.",
        },
      },
      {
        label: {
          nl: "OM Boetebase: telefoon in de hand",
          en: "OM Boetebase: phone in hand",
        },
        href: "https://boetebase.om.nl/?SrtCatVer=B1&Zoe=R545",
        note: {
          nl: "Gecontroleerd op 6 april 2026. De gepubliceerde tariefpagina verwees nog naar bedragen vanaf 1 februari 2025.",
          en: "Checked on April 6, 2026. The published tariff page still pointed to rates effective February 1, 2025.",
        },
      },
      {
        label: {
          nl: "OM Boetebase: verplichte fietsverlichting",
          en: "OM Boetebase: required bike lights",
        },
        href: "https://boetebase.om.nl/?Linked=R+438+k&SrtCatVer=a4&boete_tree=22809%2C22644%2C22602%2C21960%2C21912",
        note: {
          nl: "Gecontroleerd op 6 april 2026 voor de lichtboete die in deze gids wordt genoemd.",
          en: "Checked on April 6, 2026 for the bike-light fine referenced in this guide.",
        },
      },
    ],
    faqs: [
      {
        question: {
          nl: "Mijn fiets was weg bij Grote Markt. Gestolen of weggehaald?",
          en: "My bike disappeared near Grote Markt. Was it stolen or removed?",
        },
        answer: {
          nl: "Dat kan allebei, maar in het roze gebied rond Grote Markt haalt de gemeente verkeerd geparkeerde fietsen ook weg. Controleer daarom eerst de officiele gemeente pagina en kijk daarna of je fiets na een paar dagen op verlorenofgevonden.nl staat voordat je uitgaat van diefstal.",
          en: "It can be either, but in the pink zone around Grote Markt the municipality also removes wrongly parked bikes. Check the official municipality page first and then see whether your bike appears on verlorenofgevonden.nl after a few days before assuming theft.",
        },
      },
      {
        question: {
          nl: "Wanneer kan ik mijn fiets gratis ophalen op Ossenmarkt?",
          en: "When can I collect my bike for free at Ossenmarkt?",
        },
        answer: {
          nl: "Volgens de gemeente kun je een fiets die uit het roze gebied rond Grote Markt is verwijderd binnen 24 uur gratis ophalen op Ossenmarkt.",
          en: "According to the municipality, you can collect a bike removed from the pink zone around Grote Markt for free at Ossenmarkt within 24 hours.",
        },
      },
      {
        question: {
          nl: "Wat kost Fietsdepot Groningen in Vinkhuizen?",
          en: "How much does the Groningen bike depot in Vinkhuizen cost?",
        },
        answer: {
          nl: "Na 24 uur gaat de fiets volgens de gemeente naar het depot in Vinkhuizen. Ophalen kost daar EUR 25 en betalen gaat met pin.",
          en: "After 24 hours, the municipality says the bike goes to the depot in Vinkhuizen. Collection there costs EUR 25 and payment is by card.",
        },
      },
      {
        question: {
          nl: "Wat zijn de belangrijkste fietsboetes voor studenten in 2026?",
          en: "What are the most important bike fines for students in 2026?",
        },
        answer: {
          nl: "Op basis van de officiele OM pagina's die op 6 april 2026 zijn gecontroleerd, staat telefoon in de hand op EUR 430 en geen verplichte fietsverlichting op EUR 75, beide exclusief administratiekosten.",
          en: "Based on the official OM pages checked on April 6, 2026, holding a phone while riding is EUR 430 and missing required bike lights is EUR 75, both before admin costs.",
        },
      },
    ],
  },
  {
    citySlug: "groningen",
    category: "blog",
    slug: "fietsendiefstal-groningen-voorkomen-studenten",
    title: {
      nl: "Fietsendiefstal Groningen voorkomen voor studenten",
      en: "Prevent bike theft in Groningen for students",
    },
    excerpt: {
      nl: "De praktische anti-diefstal gids voor studenten die hun fiets niet elke maand opnieuw willen zoeken, terugkopen of vervangen.",
      en: "The practical anti-theft guide for students who do not want to keep searching for, replacing, or rebuying their bike every month.",
    },
    description: {
      nl: "Studentengids voor Groningen met anti-diefstal gewoontes, slimme slotkeuzes, tracker tips en parkeerfouten die je echt wilt vermijden.",
      en: "Student guide for Groningen with anti-theft habits, smart lock choices, tracker tips, and parking mistakes you really want to avoid.",
    },
    seoTitle: {
      nl: "Fietsendiefstal Groningen voorkomen | Beste fietsslot student + tips",
      en: "Prevent bike theft in Groningen | Best student bike lock + tips",
    },
    seoDescription: {
      nl: "Actuele anti-diefstal gids voor studenten in Groningen met tips over sloten, trackers, saaie fietsen, Vismarkt, Grote Markt en Zernike.",
      en: "Current anti-theft guide for students in Groningen with tips on locks, trackers, boring bikes, Vismarkt, Grote Markt, and Zernike.",
    },
    publishedAt: "2026-04-07",
    updatedAt: "2026-04-07",
    readingMinutes: 8,
    authorName: "Groningen Cycling Expert",
    heroImage: {
      src: "/images/guides/fietsendiefstal-groningen-voorkomen-studenten.jpeg",
      alt: {
        nl: "Goed vastgezette fiets in Groningen voor de anti-diefstal gids",
        en: "Securely locked bike in Groningen for the anti-theft guide",
      },
    },
    keywords: {
      nl: [
        "fietsendiefstal groningen voorkomen",
        "beste fietsslot student",
        "fiets gestolen voorkomen groningen",
      ],
      en: [
        "prevent bike theft groningen",
        "best bike lock student",
        "student bike theft groningen",
      ],
    },
    partnerCta: {
      label: {
        nl: "Sloten en snelle checks",
        en: "Locks and quick checks",
      },
      href: city.partner.siteUrl,
      description: {
        nl: "Handig als je slot, verlichting of algemene fietssetup een snelle student-proof check nodig heeft.",
        en: "Useful when your lock, lights, or general bike setup needs a quick student-proof check.",
      },
      eventName: "partner_referral_click",
    },
    sources: [
      {
        label: {
          nl: "Gemeente Groningen: fiets kwijt",
          en: "Municipality of Groningen: missing bike",
        },
        href: "https://gemeente.groningen.nl/fiets-kwijt",
        note: {
          nl: "Gecontroleerd op 7 april 2026 voor wat je eerst moet checken als je fiets misschien is weggehaald of later op verlorenofgevonden.nl verschijnt.",
          en: "Checked on April 7, 2026 for what to verify first if your bike may have been removed or later appears on verlorenofgevonden.nl.",
        },
      },
    ],
    howToSteps: [
      {
        name: {
          nl: "Kies een saaie, betrouwbare fiets",
          en: "Choose a boring, reliable bike",
        },
        text: {
          nl: "Een simpele fiets trekt minder aandacht en geeft minder stress in drukke rekken dan een opvallend of duur model.",
          en: "A simple bike attracts less attention and creates less stress in busy racks than a flashy or expensive model.",
        },
      },
      {
        name: {
          nl: "Gebruik twee sloten",
          en: "Use two locks",
        },
        text: {
          nl: "Een ringslot alleen is vaak niet genoeg. Combineer het met een kettingslot dat je aan iets stevigs vastmaakt.",
          en: "A frame lock alone is often not enough. Combine it with a chain lock attached to something solid.",
        },
      },
      {
        name: {
          nl: "Parkeer bewust",
          en: "Park with intention",
        },
        text: {
          nl: "Laat je fiets niet haastig achter met alleen een slot door het eigen wiel, en zeker niet alleen door het voorwiel. Dat is precies hoe je later alleen nog een wiel terugziet rond Vismarkt, Grote Markt of Zernike.",
          en: "Do not leave your bike in a rush with only a lock through its own wheel, and especially not only through the front wheel. That is exactly how you later end up finding only a wheel around Vismarkt, Grote Markt, or Zernike.",
        },
      },
      {
        name: {
          nl: "Voeg een tracker en routine toe",
          en: "Add a tracker and a routine",
        },
        text: {
          nl: "Een budget tracker onder het zadel en een vaste parkeergewoonte maken het veel makkelijker om snel te handelen als je fiets weg is.",
          en: "A budget tracker under the seat and a repeatable parking routine make it much easier to act fast if your bike disappears.",
        },
      },
    ],
    faqs: [
      {
        question: {
          nl: "Wat is het beste fietsslot voor een student in Groningen?",
          en: "What is the best bike lock for a student in Groningen?",
        },
        answer: {
          nl: "Voor de meeste studenten is een combinatie van een stevig ringslot en een kettingslot het slimst. Het doel is niet alleen afsluiten, maar je fiets ook aan iets vastmaken en nooit alleen je voorwiel te locken.",
          en: "For most students, a solid frame lock plus a chain lock is the smartest combination. The goal is not only locking the bike, but attaching it to something fixed and never locking only the front wheel.",
        },
      },
      {
        question: {
          nl: "Waarom wint een saaie fiets vaak van een mooie fiets?",
          en: "Why does a boring bike often beat a nice-looking bike?",
        },
        answer: {
          nl: "Omdat een opvallende of dure fiets sneller een target wordt. In Groningen is low-key vaak de slimste anti-diefstal move.",
          en: "Because a flashy or expensive bike becomes a target faster. In Groningen, low-key is often the smartest anti-theft move.",
        },
      },
      {
        question: {
          nl: "Heeft een tracker zin?",
          en: "Is a tracker worth it?",
        },
        answer: {
          nl: "Een budget tracker kan handig zijn als extra laag, vooral wanneer je fiets is verplaatst of je snel wilt checken of hij nog in de buurt staat.",
          en: "A budget tracker can be useful as an extra layer, especially when your bike was moved or when you want to check quickly whether it is still nearby.",
        },
      },
      {
        question: {
          nl: "Waar gaat het vaak mis bij studenten?",
          en: "Where do students usually get it wrong?",
        },
        answer: {
          nl: "Vaak door haast: alleen een ringslot gebruiken, alleen het voorwiel vastzetten, niet aan een paal of rek vastzetten, of een te opvallende fiets kopen en denken dat het wel goed komt.",
          en: "Usually because of rushing: using only a frame lock, locking only the front wheel, not attaching the bike to a pole or rack, or buying a bike that is too flashy and hoping for the best.",
        },
      },
      {
        question: {
          nl: "Wat check ik eerst als mijn fiets ineens weg lijkt?",
          en: "What should I check first if my bike suddenly seems gone?",
        },
        answer: {
          nl: "Check eerst of je fiets verplaatst of weggehaald kan zijn. De gemeente Groningen heeft daarvoor een officiele pagina, en verwijderde fietsen kunnen na een paar dagen op verlorenofgevonden.nl verschijnen.",
          en: "First check whether your bike may have been moved or removed. The Municipality of Groningen has an official page for that, and removed bikes can appear on verlorenofgevonden.nl after a few days.",
        },
      },
    ],
  },
  {
    citySlug: "groningen",
    category: "blog",
    slug: "swapfiets-vs-fiets-kopen-groningen-studenten",
    title: {
      nl: "Swapfiets vs fiets kopen in Groningen voor studenten",
      en: "Swapfiets vs buying a bike in Groningen for students",
    },
    excerpt: {
      nl: "De eerlijke vergelijking voor studenten in Groningen: wanneer huren handig is, wanneer kopen slimmer is, en waar de kosten echt opstapelen.",
      en: "The honest comparison for students in Groningen: when renting is useful, when buying is smarter, and where the real costs start stacking up.",
    },
    description: {
      nl: "Praktische gids voor studenten die twijfelen tussen Swapfiets en een goedkope tweedehands fiets in Groningen, inclusief wachttijden, diefstalrisico en totale kosten.",
      en: "Practical guide for students deciding between Swapfiets and a cheap second-hand bike in Groningen, including waiting times, theft risk, and total cost.",
    },
    seoTitle: {
      nl: "Swapfiets vs fiets kopen Groningen | Wat is slimmer voor studenten?",
      en: "Swapfiets vs buying a bike in Groningen | What is smarter for students?",
    },
    seoDescription: {
      nl: "Actuele vergelijking voor studenten in Groningen over Swapfiets versus kopen, met tips over budget, wachttijden, sleutels, diefstal en lange termijn kosten.",
      en: "Current comparison for students in Groningen covering Swapfiets versus buying, with tips on budget, waiting times, keys, theft, and long-term costs.",
    },
    publishedAt: "2026-04-07",
    updatedAt: "2026-04-07",
    readingMinutes: 7,
    authorName: "Groningen Cycling Expert",
    heroImage: {
      src: "/images/guides/swapfiets-vs-fiets-kopen-groningen-studenten.jpeg",
      alt: {
        nl: "Studentenfiets vergelijking voor Swapfiets versus kopen in Groningen",
        en: "Student bike comparison for Swapfiets versus buying in Groningen",
      },
    },
    keywords: {
      nl: [
        "swapfiets vs kopen groningen",
        "student fiets huren of kopen groningen",
        "swapfiets groningen student",
      ],
      en: [
        "swapfiets vs buying bike groningen",
        "rent or buy bike groningen student",
        "student bike sale groningen",
      ],
    },
    partnerCta: {
      label: {
        nl: "Slim kopen in plaats van blijven huren",
        en: "Buy smart instead of renting forever",
      },
      href: city.partner.siteUrl,
      description: {
        nl: "Handig als je liever een betaalbare studentenfiets koopt en die meteen even wilt laten checken.",
        en: "Useful if you would rather buy an affordable student bike and have it checked right away.",
      },
      eventName: "partner_referral_click",
    },
    faqs: [
      {
        question: {
          nl: "Wanneer is Swapfiets handig?",
          en: "When is Swapfiets useful?",
        },
        answer: {
          nl: "Voor een korte start of de eerste weken in Groningen kan Swapfiets handig zijn, vooral als je nog niets geregeld hebt en snel iets nodig hebt om mobiel te zijn.",
          en: "For a short landing or the first weeks in Groningen, Swapfiets can be useful, especially if you have not arranged anything yet and need to stay mobile fast.",
        },
      },
      {
        question: {
          nl: "Wanneer is kopen slimmer?",
          en: "When is buying smarter?",
        },
        answer: {
          nl: "Als je langer blijft, zeker richting meerdere jaren, wint kopen vaak op totale kosten. Een simpele tweedehands fiets in de range van EUR 75 tot EUR 120 is dan vaak logischer.",
          en: "If you are staying longer, especially for multiple years, buying often wins on total cost. A simple second-hand bike in the EUR 75 to EUR 120 range usually makes more sense then.",
        },
      },
      {
        question: {
          nl: "Waarom tellen sleutel- en diefstalrisico's mee?",
          en: "Why do key and theft risks matter?",
        },
        answer: {
          nl: "Omdat die situaties extra kosten en stress kunnen opleveren. Studenten vergeten dat huren niet alleen maandkosten heeft, maar ook penalties en praktische gedoe-risico's.",
          en: "Because those situations can add extra cost and stress. Students often forget that renting does not only mean a monthly fee, but also penalties and practical hassle risk.",
        },
      },
      {
        question: {
          nl: "Moet je vroeg reserveren als je toch wilt huren?",
          en: "Should you reserve early if you still want to rent?",
        },
        answer: {
          nl: "Rond de start van het studiejaar kunnen wachttijden oplopen. Als huren je plan is, is vroeg regelen vaak slimmer dan last minute hopen.",
          en: "Around the start of the academic year, waiting times can increase. If renting is your plan, arranging it early is often smarter than hoping at the last minute.",
        },
      },
    ],
  },
  {
    citySlug: "groningen",
    category: "blog",
    slug: "fietsen-naar-zernike-groningen-studenten",
    title: {
      nl: "Fietsen naar Zernike in Groningen voor studenten",
      en: "Cycling to Zernike in Groningen for students",
    },
    excerpt: {
      nl: "De praktische commuter gids voor studenten die bijna elke week tussen centrum en Zernike pendelen en geen zin hebben in kapotte lichten, zachte banden of ochtendstress.",
      en: "The practical commuter guide for students who ride between the city center and Zernike almost every week and do not want broken lights, soft tires, or morning stress.",
    },
    description: {
      nl: "Studentengids voor dagelijks fietsen naar Zernike in Groningen, met tips over routine, verlichting, wind, parkeergewoontes en snelle fixes onderweg.",
      en: "Student guide for daily rides to Zernike in Groningen, with tips on routine, lights, wind, parking habits, and quick fixes on the way.",
    },
    seoTitle: {
      nl: "Fietsen naar Zernike Groningen | Student commuter gids",
      en: "Cycling to Zernike Groningen | Student commuter guide",
    },
    seoDescription: {
      nl: "Actuele gids voor studenten die van centrum naar Zernike fietsen, met tips over verlichting, lekke banden, routine en een betrouwbare dagelijkse setup.",
      en: "Current guide for students cycling from the center to Zernike, with tips on lights, flat tires, routine, and a reliable daily setup.",
    },
    publishedAt: "2026-04-07",
    updatedAt: "2026-04-07",
    readingMinutes: 7,
    authorName: "Groningen Cycling Expert",
    heroImage: {
      src: "/images/guides/fietsen-naar-zernike-groningen-studenten.avif",
      alt: {
        nl: "Studenten die naar Zernike fietsen in Groningen",
        en: "Students cycling to Zernike in Groningen",
      },
    },
    keywords: {
      nl: [
        "fietsen naar zernike groningen",
        "student fiets zernike",
        "zernike fiets tips",
      ],
      en: [
        "cycling to zernike groningen",
        "zernike student bike commute",
        "bike to zernike tips",
      ],
    },
    partnerCta: {
      label: {
        nl: "Snelle commuter check",
        en: "Quick commuter check",
      },
      href: city.partner.siteUrl,
      description: {
        nl: "Handig als je fiets dagelijks naar Zernike moet en je geen zin hebt in gedoe met banden, remmen of verlichting.",
        en: "Useful if your bike needs to survive daily Zernike rides without drama from tires, brakes, or lights.",
      },
      eventName: "partner_referral_click",
    },
    howToSteps: [
      {
        name: {
          nl: "Check je lichten en bandenspanning",
          en: "Check your lights and tire pressure",
        },
        text: {
          nl: "Een korte check voor vertrek voorkomt de meest irritante student commuter problemen op donkere of natte dagen.",
          en: "A quick check before leaving prevents the most annoying student commuter issues on dark or rainy days.",
        },
      },
      {
        name: {
          nl: "Parkeer met een vaste routine",
          en: "Park with a fixed routine",
        },
        text: {
          nl: "Zorg dat je weet waar je fiets staat en kijk een keer achterom voordat je Zernike inloopt.",
          en: "Make sure you know where your bike is and look back once before walking into Zernike.",
        },
      },
      {
        name: {
          nl: "Los kleine problemen dezelfde week op",
          en: "Fix small issues the same week",
        },
        text: {
          nl: "Een zacht bandje of zwakke rem voelt klein, tot het je op maandagochtend precies te laat maakt.",
          en: "A soft tire or weak brake feels small until it is exactly what makes you late on Monday morning.",
        },
      },
    ],
    faqs: [
      {
        question: {
          nl: "Wat maakt fietsen naar Zernike anders dan korte ritten in het centrum?",
          en: "What makes cycling to Zernike different from short rides in the center?",
        },
        answer: {
          nl: "Het is vaak een terugkerende dagelijkse rit, dus kleine problemen zoals slechte lichten, een zachte band of zwakke remmen vallen sneller op en kosten je direct tijd.",
          en: "It is often a repeated daily ride, so small issues like weak lights, a soft tire, or bad brakes show up faster and cost you time immediately.",
        },
      },
      {
        question: {
          nl: "Waarom zijn lichten zo belangrijk voor studenten die naar Zernike fietsen?",
          en: "Why are lights so important for students cycling to Zernike?",
        },
        answer: {
          nl: "Omdat veel ritten vroeg of laat op de dag plaatsvinden en je zonder goede verlichting niet alleen minder veilig bent, maar ook onnodig risico loopt op een boete.",
          en: "Because many rides happen early or late in the day, and without proper lights you are not only less safe, but also taking an unnecessary fine risk.",
        },
      },
      {
        question: {
          nl: "Wat is de slimste routine als ik mijn fiets bij Zernike parkeer?",
          en: "What is the smartest routine when I park my bike at Zernike?",
        },
        answer: {
          nl: "Parkeer in een rek, zet je fiets goed vast, en kijk nog een keer om voordat je wegloopt. Daarmee voorkom je later veel zoekstress.",
          en: "Park in a rack, lock your bike properly, and look back once before walking away. That prevents a lot of later search stress.",
        },
      },
      {
        question: {
          nl: "Wanneer moet ik een kleine reparatie niet meer uitstellen?",
          en: "When should I stop delaying a small repair?",
        },
        answer: {
          nl: "Zodra een probleem terugkomt tijdens je dagelijkse ritten. Voor commuter fietsen worden kleine issues snel grote tijdvreters.",
          en: "As soon as the problem starts showing up on your daily rides. For commuter bikes, small issues quickly turn into big time drains.",
        },
      },
    ],
  },
  {
    citySlug: "groningen",
    category: "blog",
    slug: "red-bull-district-ride-groningen-2026-guide",
    title: {
      nl: "Red Bull District Ride 2026: beste kijkplekken en lokale survival guide",
      en: "Red Bull District Ride 2026: best viewing spots and local survival guide",
    },
    excerpt: {
      nl: "De lokale gids voor District Ride weekend in Groningen, met kijkplekken, crowd survival, fietsparkeren en een tune-up bridge voor je eigen rit.",
      en: "The local guide for District Ride weekend in Groningen, with viewing spots, crowd survival, bike parking, and a tune-up bridge for your own ride.",
    },
    description: {
      nl: "Up-to-date event guide voor Red Bull District Ride 2026 in Groningen, met lokale kijkstrategie, Grote Markt context, parkeerwaarschuwingen en een district-ready bike CTA.",
      en: "Up-to-date event guide for Red Bull District Ride 2026 in Groningen, with local viewing strategy, Grote Markt context, parking warnings, and a district-ready bike CTA.",
    },
    seoTitle: {
      nl: "Red Bull District Ride Groningen 2026 Guide | Kijkplekken en lokale tips",
      en: "Red Bull District Ride Groningen 2026 Guide | Viewing spots and local tips",
    },
    seoDescription: {
      nl: "Lokale event guide voor Red Bull District Ride 2026 in Groningen met kijkplekken, Grote Markt tips, crowd survival, fietsparkeren en live info.",
      en: "Local event guide for Red Bull District Ride 2026 in Groningen with viewing spots, Grote Markt tips, crowd survival, bike parking, and live info.",
    },
    publishedAt: "2026-04-07",
    updatedAt: "2026-04-07",
    readingMinutes: 8,
    featured: true,
    authorName: "Groningen Cycling Expert",
    heroImage: {
      src: "/images/guides/red-bull-district-ride-groningen-2026-hero.webp",
      alt: {
        nl: "Urban slopestyle rider voor Red Bull District Ride 2026 in Groningen",
        en: "Urban slopestyle rider for Red Bull District Ride 2026 in Groningen",
      },
    },
    inlineCallout: {
      eyebrow: {
        nl: "District Ride Tune-Up Special",
        en: "District Ride Tune-Up Special",
      },
      title: {
        nl: "Voel je de hype? Maak je eigen fiets district-ready",
        en: "Feeling the hype? Get your own bike district-ready",
      },
      description: {
        nl: "Kijken naar riders die huge tricks midden in de stad droppen maakt je snel bewust van je eigen piepende remmen. Plan een snelle safety check of summer tune-up zodat je zonder drama naar je spot kunt fietsen.",
        en: "Watching riders throw huge tricks in the middle of the city makes you notice your own squeaky brakes very fast. Book a quick safety check or summer tune-up so you can ride to your viewing spot without drama.",
      },
      buttonLabel: {
        nl: "Book My Tune-Up",
        en: "Book My Tune-Up",
      },
      href: city.partner.siteUrl,
      note: {
        nl: "De actuele partnerlink blijft centraal beheerd, zodat deze CTA later makkelijk te wisselen is.",
        en: "The active partner link stays centrally managed, so this CTA can be swapped later without friction.",
      },
    },
    eventDetails: {
      name: "Red Bull District Ride 2026",
      startDate: "2026-07-24",
      endDate: "2026-07-25",
      locationName: "Grote Markt, Groningen",
      locationAddress: "Grote Markt 1, 9712 HN Groningen, Netherlands",
    },
    keywords: {
      nl: [
        "red bull district ride groningen 2026",
        "district ride groningen kijkplekken",
        "grote markt mountainbike event groningen",
      ],
      en: [
        "red bull district ride groningen 2026 guide",
        "best viewing spots district ride groningen",
        "groningen urban slopestyle event",
      ],
    },
    partnerCta: {
      label: {
        nl: "District-ready tune-up",
        en: "District-ready tune-up",
      },
      href: city.partner.siteUrl,
      description: {
        nl: "Handig als je deze week naar de viewing spots wilt fietsen zonder gedoe met remmen, banden of verlichting.",
        en: "Useful if you want to ride to the viewing spots this week without brake, tire, or light drama.",
      },
      eventName: "partner_referral_click",
    },
    sources: [
      {
        label: {
          nl: "Red Bull events: District Ride 2026",
          en: "Red Bull events: District Ride 2026",
        },
        href: "https://www.redbull.com/nl-nl/events",
        note: {
          nl: "Gecontroleerd op 7 april 2026 voor locatie Groningen en de data 24-25 juli 2026.",
          en: "Checked on April 7, 2026 for the Groningen location and the July 24-25, 2026 dates.",
        },
      },
      {
        label: {
          nl: "Red Bull: all you need to know about District Ride 2026",
          en: "Red Bull: all you need to know about District Ride 2026",
        },
        href: "https://www.redbull.com/ca-en/red-bull-district-ride-need-to-know",
        note: {
          nl: "Gecontroleerd op 7 april 2026 voor finals day op 25 juli, vrouwencompetitie en het feit dat het volledige parcours nog niet was vrijgegeven.",
          en: "Checked on April 7, 2026 for finals day on July 25, the women's competition, and the fact that the full course was not yet released.",
        },
      },
      {
        label: {
          nl: "Discover Groningen event page",
          en: "Discover Groningen event page",
        },
        href: "https://discovergroningen.com/event/red-bull-district-ride/",
        note: {
          nl: "Gecontroleerd op 7 april 2026 voor Grote Markt als eventlocatie in de binnenstad.",
          en: "Checked on April 7, 2026 for Grote Markt as the event location in the city center.",
        },
      },
      {
        label: {
          nl: "FMB World Tour calendar",
          en: "FMB World Tour calendar",
        },
        href: "https://www.fmbworldtour.com/calendar/district-ride/",
        note: {
          nl: "Gecontroleerd op 7 april 2026 voor Diamond status en categorieen Women / Men.",
          en: "Checked on April 7, 2026 for Diamond status and Women / Men categories.",
        },
      },
      {
        label: {
          nl: "OOG Groningen: Grote Markt toneel van slopestyle-competitie",
          en: "OOG Groningen: Grote Markt hosts slopestyle competition",
        },
        href: "https://www.oogtv.nl/2026/01/grote-markt-in-juli-toneel-van-mountainbike-slopestyle-competitie/",
        note: {
          nl: "Gecontroleerd op 7 april 2026 voor lokale context over Grote Markt, dakdrop en de sprong midden op het plein.",
          en: "Checked on April 7, 2026 for local context about Grote Markt, the rooftop drop, and the jump into the square.",
        },
      },
      {
        label: {
          nl: "Stay in Groningen event listing",
          en: "Stay in Groningen event listing",
        },
        href: "https://stayingroningen.com/de/events/red-bull-district-ride",
        note: {
          nl: "Gecontroleerd op 7 april 2026. Deze lokale listing markeerde het event als gratis en noemde Red Bull TV en Ziggo Sport, maar check kort voor het event altijd de officiele updates.",
          en: "Checked on April 7, 2026. This local listing marked the event as free and mentioned Red Bull TV and Ziggo Sport, but always check official updates close to the event.",
        },
      },
      {
        label: {
          nl: "Interactieve ArcGIS kaart voor eventgebied",
          en: "Interactive ArcGIS map for the event area",
        },
        href: "https://www.arcgis.com/apps/instant/sidebar/index.html?appid=bb3747a53ae44605a46486e01f3aa5a7",
        note: {
          nl: "Handig als extra visuele laag voor looproutes, eventzones en planning rond het centrum.",
          en: "Useful as an extra visual layer for walking routes, event zones, and planning around the city center.",
        },
      },
      {
        label: {
          nl: "NS OV-fiets en OV-ebike",
          en: "NS OV-fiets and OV-ebike",
        },
        href: "https://www.ns.nl/en/door-to-door/ov-fiets/faq-e-bike",
        note: {
          nl: "Gecontroleerd op 7 april 2026. NS noemt Groningen expliciet als locatie voor OV-ebike en biedt OV-fiets/huurinfo via stationlocaties.",
          en: "Checked on April 7, 2026. NS explicitly lists Groningen as an OV-ebike location and provides OV-fiets rental info via station locations.",
        },
      },
      {
        label: {
          nl: "CHECK in Groningen",
          en: "CHECK in Groningen",
        },
        href: "https://ridecheck.app/newsroom/nieuwe-vergunning-groningen",
        note: {
          nl: "Gecontroleerd op 7 april 2026 voor beschikbaarheid van CHECK in Groningen. Beschikbaarheid op de dag zelf blijft afhankelijk van de app en lokale regels.",
          en: "Checked on April 7, 2026 for CHECK availability in Groningen. Day-of availability still depends on the app and local rules.",
        },
      },
      {
        label: {
          nl: "Bolt in Groningen",
          en: "Bolt in Groningen",
        },
        href: "https://bolt.eu/en/cities/groningen/",
        note: {
          nl: "Gecontroleerd op 7 april 2026. Bolt toont in Groningen micromobility en e-bike opties, maar live beschikbaarheid blijft afhankelijk van de app.",
          en: "Checked on April 7, 2026. Bolt shows micromobility and e-bike options in Groningen, but live availability still depends on the app.",
        },
      },
    ],
    faqs: [
      {
        question: {
          nl: "Is Red Bull District Ride Groningen 2026 gratis?",
          en: "Is Red Bull District Ride Groningen 2026 free?",
        },
        answer: {
          nl: "Lokale event listings markeren het event op dit moment als gratis, maar check kort voor 24 en 25 juli 2026 altijd nog even de officiele Red Bull updates voor de laatste toegangsinformatie.",
          en: "Local event listings currently mark the event as free, but check official Red Bull updates shortly before July 24 and 25, 2026 for the latest access information.",
        },
      },
      {
        question: {
          nl: "Waar parkeer ik mijn fiets het slimst?",
          en: "Where is the smartest place to park my bike?",
        },
        answer: {
          nl: "Gebruik de walking-route logica uit deze gids en de interactieve map in de bronnen, en mik op rekken net buiten de drukste Grote Markt-zone. Op eventdagen wil je niet gokken op een plek die later ineens in een no-parking of crowd-control zone valt.",
          en: "Use the walking-route logic from this guide and the interactive map in the sources, and aim for racks just outside the busiest Grote Markt zone. On event days, you do not want to gamble on a spot that later ends up inside a no-parking or crowd-control zone.",
        },
      },
      {
        question: {
          nl: "Hoe laat start de finale?",
          en: "What time does the final start?",
        },
        answer: {
          nl: "Wat nu officieel duidelijk is, is dat finals day op zaterdag 25 juli 2026 valt. Een exacte finaletijd was in de gecontroleerde bronnen nog niet duidelijk gepubliceerd, dus check Red Bull TV en event updates vlak voor vertrek.",
          en: "What is officially clear right now is that finals day falls on Saturday, July 25, 2026. An exact final start time was not clearly published in the checked sources yet, so check Red Bull TV and event updates before you head in.",
        },
      },
      {
        question: {
          nl: "Waar moet ik vooral op letten als ik er op de fiets naartoe ga?",
          en: "What should I pay attention to if I bike there myself?",
        },
        answer: {
          nl: "Verwacht drukte, tijdelijke omleidingen en extra signage in het centrum. Parkeer slim, kijk goed waar je je fiets neerzet en neem het depot-risico rond Grote Markt serieus.",
          en: "Expect crowds, temporary reroutes, and extra signage in the center. Park smart, pay attention to where you leave your bike, and take the depot risk around Grote Markt seriously.",
        },
      },
      {
        question: {
          nl: "Wat als ik mijn eigen fiets juist niet mee wil nemen?",
          en: "What if I do not want to bring my own bike?",
        },
        answer: {
          nl: "Dan zijn NS OV-fiets of OV-ebike vanaf station Groningen, CHECK en Bolt e-bike logische backup-opties. Check wel altijd eerst de app of stationsinformatie, want beschikbaarheid op eventdagen kan snel veranderen.",
          en: "Then NS OV-fiets or OV-ebike from Groningen station, CHECK, and Bolt e-bike are logical backup options. Always check the app or station info first, because event-day availability can change quickly.",
        },
      },
    ],
  },
  {
    citySlug: "groningen",
    category: "hulp",
    slug: "fiets-gestolen-groningen-wat-nu",
    title: {
      nl: "Fiets gestolen in Groningen: wat nu?",
      en: "Bike stolen in Groningen: what now?",
    },
    excerpt: {
      nl: "Een direct stappenplan voor aangifte, opsporing en vervangend vervoer na fietsdiefstal.",
      en: "A direct action plan for reporting theft, checking recovery options, and arranging replacement transport.",
    },
    description: {
      nl: "Volg deze stappen als je fiets in Groningen is gestolen, van aangifte tot nieuwe sleutels en vervangende opties.",
      en: "Follow these steps if your bike is stolen in Groningen, from filing a report to arranging keys and replacement options.",
    },
    seoTitle: {
      nl: "Fiets gestolen Groningen: wat nu? | Direct stappenplan",
      en: "Bike stolen in Groningen: what now? | Immediate action plan",
    },
    seoDescription: {
      nl: "Praktisch hulpartikel voor gestolen fietsen in Groningen met directe vervolgstappen en lokale hulpopties.",
      en: "Practical bike-theft help article for Groningen with next steps and local support options.",
    },
    publishedAt: "2026-04-06",
    updatedAt: "2026-04-06",
    readingMinutes: 6,
    featured: true,
    keywords: {
      nl: [
        "fiets gestolen groningen wat nu",
        "aangifte fiets gestolen groningen",
        "gestolen fiets groningen hulp",
      ],
      en: [
        "bike stolen groningen what now",
        "report stolen bike groningen",
        "stolen bike groningen help",
      ],
    },
    partnerCta: {
      label: {
        nl: "Directe hulp van {partnerName}",
        en: "Direct help from {partnerName}",
      },
      href: city.partner.siteUrl,
      description: {
        nl: "Hulp nodig met een vervangende fiets of directe service? Bezoek onze aanbevolen shop.",
        en: "Need a replacement bike or direct service? Visit our recommended shop.",
      },
      eventName: "partner_referral_click",
    },
    howToSteps: [
      {
        name: {
          nl: "Controleer de omgeving",
          en: "Check the area",
        },
        text: {
          nl: "Controleer eerst of de fiets niet is verplaatst door handhaving of verkeerd is geparkeerd.",
          en: "First check whether the bike was moved by enforcement or parked incorrectly.",
        },
      },
      {
        name: {
          nl: "Doe aangifte",
          en: "Report the theft",
        },
        text: {
          nl: "Meld de diefstal zo snel mogelijk en noteer framenummer, merk en opvallende kenmerken.",
          en: "Report the theft quickly and note the frame number, brand, and unique details.",
        },
      },
      {
        name: {
          nl: "Regel vervanging",
          en: "Arrange a replacement",
        },
        text: {
          nl: "Zoek meteen een tijdelijke of tweedehands oplossing om mobiel te blijven.",
          en: "Find a temporary or second-hand replacement right away so you can stay mobile.",
        },
      },
    ],
  },
  {
    citySlug: "groningen",
    category: "wijken",
    slug: "vinkhuizen-fietsenmakers-gids",
    title: {
      nl: "Vinkhuizen fietsenmakers gids",
      en: "Vinkhuizen bike repair guide",
    },
    excerpt: {
      nl: "Hyperlokale gids voor bewoners van Vinkhuizen die snel een betrouwbare fietsenmaker zoeken.",
      en: "Hyper-local guide for Vinkhuizen residents looking for a reliable bike repair option.",
    },
    description: {
      nl: "Lokale wijkgids voor fietsreparaties, veelvoorkomende problemen en handige fietsroutes rond Vinkhuizen.",
      en: "Local area guide for bike repairs, common issues, and useful cycling routes around Vinkhuizen.",
    },
    seoTitle: {
      nl: "Vinkhuizen fietsenmakers gids | Lokale fietshulp in Groningen",
      en: "Vinkhuizen bike repair guide | Local cycling help in Groningen",
    },
    seoDescription: {
      nl: "Ontdek praktische fietshulp, wijkinformatie en betrouwbare reparatieopties voor Vinkhuizen in Groningen.",
      en: "Discover practical bike help, neighborhood insight, and reliable repair options for Vinkhuizen in Groningen.",
    },
    publishedAt: "2026-04-06",
    updatedAt: "2026-04-06",
    readingMinutes: 5,
    neighborhood: {
      nl: "Vinkhuizen",
      en: "Vinkhuizen",
    },
    heroImage: {
      src: "/images/neighborhoods/vinkhuizen.jpg",
      alt: {
        nl: "Straatbeeld in Vinkhuizen voor de lokale fietsgids",
        en: "Street scene in Vinkhuizen for the local bike guide",
      },
    },
    keywords: {
      nl: [
        "vinkhuizen fietsenmaker",
        "fiets reparatie vinkhuizen",
        "fietsenmaker groningen vinkhuizen",
      ],
      en: [
        "vinkhuizen bike repair",
        "bike repair vinkhuizen",
        "bike mechanic groningen vinkhuizen",
      ],
    },
    partnerCta: {
      label: {
        nl: "{partnerName}",
        en: "{partnerName}",
      },
      href: city.partner.siteUrl,
      description: {
        nl: "Betrouwbare reparatiepartner voor fietsers uit Vinkhuizen.",
        en: "Reliable repair partner for cyclists coming from Vinkhuizen.",
      },
      eventName: "partner_referral_click",
    },
    faqs: [
      {
        question: {
          nl: "Is er snelle fietshulp voor Vinkhuizen?",
          en: "Is there fast bike repair help for Vinkhuizen?",
        },
        answer: {
          nl: "Ja, veel fietsers kiezen voor een centrale reparatiepartner met snelle doorlooptijd.",
          en: "Yes, many cyclists choose a central repair partner with a fast turnaround.",
        },
      },
      {
        question: {
          nl: "Welke problemen komen hier vaak voor?",
          en: "Which issues are common here?",
        },
        answer: {
          nl: "Lekke banden, remafstelling en verlichting zijn veelvoorkomende hulpvragen.",
          en: "Flat tires, brake adjustment, and light repairs are common support issues here.",
        },
      },
    ],
  },
  {
    citySlug: "groningen",
    category: "wijken",
    slug: "helpman-fietsenmakers-gids",
    title: {
      nl: "Helpman fietsenmakers gids",
      en: "Helpman bike repair guide",
    },
    excerpt: {
      nl: "Hyperlokale gids voor fietsers in Helpman die snelle en betrouwbare fietshulp zoeken.",
      en: "Hyper-local guide for cyclists in Helpman looking for fast and reliable bike help.",
    },
    description: {
      nl: "Lokale wijkgids voor reparaties, dagelijkse fietsproblemen en praktische routes rond Helpman.",
      en: "Local area guide for repairs, daily bike issues, and practical cycling routes around Helpman.",
    },
    seoTitle: {
      nl: "Helpman fietsenmakers gids | Lokale fietshulp in Groningen",
      en: "Helpman bike repair guide | Local cycling help in Groningen",
    },
    seoDescription: {
      nl: "Ontdek praktische fietshulp, wijkinformatie en betrouwbare reparatieopties voor Helpman in Groningen.",
      en: "Discover practical bike help, neighborhood insight, and reliable repair options for Helpman in Groningen.",
    },
    publishedAt: "2026-04-06",
    updatedAt: "2026-04-06",
    readingMinutes: 5,
    neighborhood: {
      nl: "Helpman",
      en: "Helpman",
    },
    heroImage: {
      src: "/images/neighborhoods/helpman.avif",
      alt: {
        nl: "Straatbeeld in Helpman voor de lokale fietsgids",
        en: "Street scene in Helpman for the local bike guide",
      },
    },
    keywords: {
      nl: [
        "helpman fietsenmaker",
        "fiets reparatie helpman",
        "fietsenmaker groningen helpman",
      ],
      en: [
        "helpman bike repair",
        "bike repair helpman",
        "bike mechanic groningen helpman",
      ],
    },
    partnerCta: {
      label: {
        nl: "{partnerName}",
        en: "{partnerName}",
      },
      href: city.partner.siteUrl,
      description: {
        nl: "Betrouwbare reparatiepartner voor fietsers uit Helpman.",
        en: "Reliable repair partner for cyclists coming from Helpman.",
      },
      eventName: "partner_referral_click",
    },
    faqs: [
      {
        question: {
          nl: "Is snelle fietshulp vanuit Helpman belangrijk?",
          en: "Is fast bike help important for Helpman riders?",
        },
        answer: {
          nl: "Ja, veel fietsers willen storingen snel oplossen zodat woon-werk en schoolritten niet stilvallen.",
          en: "Yes, many cyclists want issues fixed quickly so commutes and school trips do not get interrupted.",
        },
      },
      {
        question: {
          nl: "Welke reparaties komen hier vaak voor?",
          en: "Which repairs are common here?",
        },
        answer: {
          nl: "Remmen, verlichting, kettingproblemen en lekke banden zijn veelvoorkomende vragen.",
          en: "Brakes, lights, chain issues, and flat tires are common requests here.",
        },
      },
    ],
  },
  {
    citySlug: "groningen",
    category: "wijken",
    slug: "korrewegwijk-fietsenmakers-gids",
    title: {
      nl: "Korrewegwijk fietsenmakers gids",
      en: "Korrewegwijk bike repair guide",
    },
    excerpt: {
      nl: "Hyperlokale gids voor fietsers in Korrewegwijk die snel een betrouwbare fietsenmaker zoeken.",
      en: "Hyper-local guide for cyclists in Korrewegwijk who want a reliable repair option fast.",
    },
    description: {
      nl: "Lokale wijkgids voor reparaties, drukke fietsstraten en veelvoorkomende problemen rond Korrewegwijk.",
      en: "Local area guide for repairs, busy cycling streets, and common bike issues around Korrewegwijk.",
    },
    seoTitle: {
      nl: "Korrewegwijk fietsenmakers gids | Lokale fietshulp in Groningen",
      en: "Korrewegwijk bike repair guide | Local cycling help in Groningen",
    },
    seoDescription: {
      nl: "Ontdek praktische fietshulp, wijkinformatie en betrouwbare reparatieopties voor Korrewegwijk in Groningen.",
      en: "Discover practical bike help, neighborhood insight, and reliable repair options for Korrewegwijk in Groningen.",
    },
    publishedAt: "2026-04-06",
    updatedAt: "2026-04-06",
    readingMinutes: 5,
    neighborhood: {
      nl: "Korrewegwijk",
      en: "Korrewegwijk",
    },
    heroImage: {
      src: "/images/neighborhoods/korrewegwijk.jpg",
      alt: {
        nl: "Straatbeeld in Korrewegwijk voor de lokale fietsgids",
        en: "Street scene in Korrewegwijk for the local bike guide",
      },
    },
    keywords: {
      nl: [
        "korrewegwijk fietsenmaker",
        "fiets reparatie korrewegwijk",
        "fietsenmaker groningen korrewegwijk",
      ],
      en: [
        "korrewegwijk bike repair",
        "bike repair korrewegwijk",
        "bike mechanic groningen korrewegwijk",
      ],
    },
    partnerCta: {
      label: {
        nl: "{partnerName}",
        en: "{partnerName}",
      },
      href: city.partner.siteUrl,
      description: {
        nl: "Betrouwbare reparatiepartner voor fietsers uit Korrewegwijk.",
        en: "Reliable repair partner for cyclists coming from Korrewegwijk.",
      },
      eventName: "partner_referral_click",
    },
    faqs: [
      {
        question: {
          nl: "Welke fietshulp zoeken bewoners van Korrewegwijk vaak?",
          en: "What kind of bike help do Korrewegwijk riders often need?",
        },
        answer: {
          nl: "Snelle hulp bij banden, remmen, verlichting en dagelijkse slijtage is hier vaak belangrijk.",
          en: "Fast help with tires, brakes, lights, and daily wear is often important here.",
        },
      },
      {
        question: {
          nl: "Waarom werkt een wijkgerichte gids hier goed?",
          en: "Why does a neighborhood guide work well here?",
        },
        answer: {
          nl: "Bezoekers zoeken vaak op hun eigen buurtnaam en willen meteen een logische lokale vervolgstap zien.",
          en: "Visitors often search with their own neighborhood name and want to see a logical local next step immediately.",
        },
      },
    ],
  },
  {
    citySlug: "groningen",
    category: "wijken",
    slug: "centrum-fietsenmakers-gids",
    title: {
      nl: "Centrum fietsenmakers gids",
      en: "Centrum bike repair guide",
    },
    excerpt: {
      nl: "Hyperlokale gids voor fietsers in het centrum die snel een betrouwbare fietsenmaker zoeken.",
      en: "Hyper-local guide for cyclists in the city center who want a reliable repair option fast.",
    },
    description: {
      nl: "Lokale wijkgids voor reparaties, drukke stallingen en veelvoorkomende fietsproblemen in het centrum van Groningen.",
      en: "Local area guide for repairs, busy parking areas, and common bike issues in the center of Groningen.",
    },
    seoTitle: {
      nl: "Centrum fietsenmakers gids | Lokale fietshulp in Groningen",
      en: "Centrum bike repair guide | Local cycling help in Groningen",
    },
    seoDescription: {
      nl: "Ontdek praktische fietshulp, centruminformatie en betrouwbare reparatieopties voor fietsers in Groningen Centrum.",
      en: "Discover practical bike help, local center insight, and reliable repair options for cyclists in Groningen Centrum.",
    },
    publishedAt: "2026-04-06",
    updatedAt: "2026-04-06",
    readingMinutes: 5,
    neighborhood: {
      nl: "Centrum",
      en: "Centrum",
    },
    heroImage: {
      src: "/images/neighborhoods/centrum.jpg",
      alt: {
        nl: "Straatbeeld in het centrum van Groningen voor de lokale fietsgids",
        en: "Street scene in Groningen city center for the local bike guide",
      },
    },
    keywords: {
      nl: [
        "centrum fietsenmaker",
        "fiets reparatie centrum groningen",
        "fietsenmaker groningen centrum",
      ],
      en: [
        "centrum bike repair",
        "bike repair groningen center",
        "bike mechanic groningen centrum",
      ],
    },
    partnerCta: {
      label: {
        nl: "{partnerName}",
        en: "{partnerName}",
      },
      href: city.partner.siteUrl,
      description: {
        nl: "Betrouwbare reparatiepartner voor fietsers uit het centrum.",
        en: "Reliable repair partner for cyclists coming from the city center.",
      },
      eventName: "partner_referral_click",
    },
    faqs: [
      {
        question: {
          nl: "Welke fietsproblemen komen in het centrum vaak voor?",
          en: "Which bike problems are common in the city center?",
        },
        answer: {
          nl: "Lekke banden, remproblemen, verlichting en schade door drukke stallingen komen hier vaak voor.",
          en: "Flat tires, brake issues, lighting problems, and damage from busy parking areas are common here.",
        },
      },
      {
        question: {
          nl: "Waarom werkt een centrumgids goed voor SEO?",
          en: "Why does a city-center guide work well for SEO?",
        },
        answer: {
          nl: "Veel bezoekers zoeken op centrum-gerichte termen en verwachten direct een lokale oplossing.",
          en: "Many visitors search with center-focused terms and expect an immediate local solution.",
        },
      },
    ],
  },
  {
    citySlug: "groningen",
    category: "wijken",
    slug: "selwerd-fietsenmakers-gids",
    title: {
      nl: "Selwerd fietsenmakers gids",
      en: "Selwerd bike repair guide",
    },
    excerpt: {
      nl: "Hyperlokale gids voor fietsers in Selwerd die snelle en betrouwbare fietshulp zoeken.",
      en: "Hyper-local guide for cyclists in Selwerd looking for fast and reliable bike help.",
    },
    description: {
      nl: "Lokale wijkgids voor reparaties, studentenritten en veelvoorkomende fietsproblemen rond Selwerd.",
      en: "Local area guide for repairs, student rides, and common bike issues around Selwerd.",
    },
    seoTitle: {
      nl: "Selwerd fietsenmakers gids | Lokale fietshulp in Groningen",
      en: "Selwerd bike repair guide | Local cycling help in Groningen",
    },
    seoDescription: {
      nl: "Ontdek praktische fietshulp, wijkinformatie en betrouwbare reparatieopties voor Selwerd in Groningen.",
      en: "Discover practical bike help, neighborhood insight, and reliable repair options for Selwerd in Groningen.",
    },
    publishedAt: "2026-04-06",
    updatedAt: "2026-04-06",
    readingMinutes: 5,
    neighborhood: {
      nl: "Selwerd",
      en: "Selwerd",
    },
    heroImage: {
      src: "/images/neighborhoods/selwerd.jpg",
      alt: {
        nl: "Straatbeeld in Selwerd voor de lokale fietsgids",
        en: "Street scene in Selwerd for the local bike guide",
      },
    },
    keywords: {
      nl: [
        "selwerd fietsenmaker",
        "fiets reparatie selwerd",
        "fietsenmaker groningen selwerd",
      ],
      en: [
        "selwerd bike repair",
        "bike repair selwerd",
        "bike mechanic groningen selwerd",
      ],
    },
    partnerCta: {
      label: {
        nl: "{partnerName}",
        en: "{partnerName}",
      },
      href: city.partner.siteUrl,
      description: {
        nl: "Betrouwbare reparatiepartner voor fietsers uit Selwerd.",
        en: "Reliable repair partner for cyclists coming from Selwerd.",
      },
      eventName: "partner_referral_click",
    },
    faqs: [
      {
        question: {
          nl: "Welke hulp zoeken fietsers in Selwerd vaak?",
          en: "What kind of help do cyclists in Selwerd often need?",
        },
        answer: {
          nl: "Snelle hulp bij banden, remmen, kettingen en verlichting is hier vaak belangrijk.",
          en: "Fast help with tires, brakes, chains, and lights is often important here.",
        },
      },
      {
        question: {
          nl: "Waarom past Selwerd goed in de wijkensilo?",
          en: "Why does Selwerd fit well in the neighborhood silo?",
        },
        answer: {
          nl: "De wijk heeft een duidelijke lokale zoekintentie en veel dagelijkse fietsbewegingen.",
          en: "The area has a clear local search intent and a lot of daily bike traffic.",
        },
      },
    ],
  },
  {
    citySlug: "groningen",
    category: "beste",
    slug: "beste-tweedehands-fiets-groningen",
    title: {
      nl: "Beste tweedehands fiets in Groningen",
      en: "Best second-hand bike in Groningen",
    },
    excerpt: {
      nl: "Vergelijk waar je op moet letten als je in Groningen een goede tweedehands fiets zoekt.",
      en: "Compare what matters when you are looking for a good second-hand bike in Groningen.",
    },
    description: {
      nl: "Commerciele vergelijkingsgids voor prijs, betrouwbaarheid, garantie en service rond tweedehands fietsen in Groningen.",
      en: "Commercial comparison guide covering price, trust, warranty, and service around second-hand bikes in Groningen.",
    },
    seoTitle: {
      nl: "Beste tweedehands fiets Groningen | Vergelijking en kooptips",
      en: "Best second-hand bike Groningen | Comparison and buying tips",
    },
    seoDescription: {
      nl: "Vergelijk tweedehands fietsen in Groningen en ontdek waar je op moet letten bij prijs, staat en service.",
      en: "Compare second-hand bikes in Groningen and see what matters most for price, condition, and service.",
    },
    publishedAt: "2026-04-06",
    updatedAt: "2026-04-06",
    readingMinutes: 7,
    featured: true,
    keywords: {
      nl: [
        "beste tweedehands fiets groningen",
        "tweedehands fiets kopen groningen",
        "gebruikte fiets groningen vergelijking",
      ],
      en: [
        "best second hand bike groningen",
        "buy used bike groningen",
        "used bike groningen comparison",
      ],
    },
    partnerCta: {
      label: {
        nl: "Bekijk onze aanbevolen shop",
        en: "See our recommended shop",
      },
      href: city.partner.siteUrl,
      description: {
        nl: "Vergelijk opties en kies een winkel met lokale service en vertrouwen.",
        en: "Compare your options and choose a shop with trusted local service.",
      },
      eventName: "partner_referral_click",
    },
    faqs: [
      {
        question: {
          nl: "Waar let ik op bij een tweedehands fiets?",
          en: "What should I check on a second-hand bike?",
        },
        answer: {
          nl: "Controleer frame, remmen, versnellingen, verlichting en sloten voordat je koopt.",
          en: "Check the frame, brakes, gears, lights, and locks before you buy.",
        },
      },
      {
        question: {
          nl: "Is service belangrijker dan prijs?",
          en: "Is service more important than price?",
        },
        answer: {
          nl: "In Groningen vaak wel, omdat snelle nazorg en reparaties veel frustratie schelen.",
          en: "In Groningen that is often true, because fast aftercare and repair support remove a lot of stress.",
        },
      },
    ],
  },
];





