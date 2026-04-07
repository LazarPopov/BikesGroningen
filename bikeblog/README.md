# BikesGroningen.nl / BikesGroningen.nl

Dutch:
Lokale authority hub voor fietsers in Groningen. Dit project is gebouwd om informatieve zoekopdrachten te winnen, vertrouwen op te bouwen, en verkeer door te sturen naar de verified partner: `bikestoregroningen.nl`.

English:
Local authority hub for cyclists in Groningen. This project is built to win informational search traffic, build trust, and send qualified visitors to the verified partner: `bikestoregroningen.nl`.

## Doel / Goal

Dutch:
We bouwen geen gewone blog. We bouwen een referral engine met sterke content silos, lokale E-E-A-T signalen, en meetbare conversion points.

English:
We are not building a normal blog. We are building a referral engine with strong content silos, local E-E-A-T signals, and measurable conversion points.

## Stack / Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Static content seed data in `src/content`
- Multi-city config in `src/config/cities`

## Mobile-first requirement / Mobile-first vereiste

Dutch:
Alles moet mobile friendly zijn. De volledige site moet eerst goed werken op telefoons en daarna opschalen naar tablet en desktop.

English:
Everything must be mobile friendly. The full site must work well on phones first and then scale up to tablet and desktop.

- Navigatie, taalwissel, CTA's en formulieren moeten goed bruikbaar zijn op kleine schermen.
- Geen horizontale overflow; content moet leesbaar, klikbaar en snel blijven op mobiel.
- Guide pages, silo pages, downloads en partnerverwijzingen moeten een sterke mobiele UX houden.

## Belangrijkste routes / Main routes

- `/` home page / homepage
- `/hulp` repair help silo
- `/wijken` neighborhood silo
- `/beste` comparison silo
- `/blog` guide and authority content silo

## Structuur / Structure

- `src/app` route layer / routinglaag
- `src/components` UI and layout components / UI- en layoutcomponenten
- `src/config/cities` city-based config / stadconfiguratie
- `src/content/groningen` Groningen seed content / Groningen broncontent
- `src/lib` content helpers, SEO helpers, analytics hooks / hulpfuncties
- `src/types` shared TypeScript types / gedeelde types

## Operations Guide

Use the maintenance guide here:

- `docs/OPERATIONS.md`

## Lokale development / Local development

Run:

```bash
npm run dev
```

Lint:

```bash
npm run lint
```

Open:

```text
http://localhost:3000
```

## Taalstrategie / Language strategy

Dutch:
De repo en de zichtbare basiscontent worden tweetalig opgezet: Nederlands en Engels.

English:
The repo and the visible starter content are set up as bilingual: Dutch and English.

## Fase 1 roadmap / Phase 1 roadmap

1. Student Bike Guide Groningen publiceren / publish the Student Bike Guide Groningen.
2. Wijkpagina's bouwen / build neighborhood pages.
3. GA4 conversion events toevoegen / add GA4 conversion events.
4. Lead capture route bouwen / build the lead capture route.

## Opmerking / Note

Dutch:
Houd nieuwe copy bij voorkeur ASCII-safe in PowerShell als je direct via terminalcommando's schrijft, om encodingproblemen te vermijden.

English:
Keep new copy ASCII-safe in PowerShell when writing files directly through terminal commands to avoid encoding issues.
