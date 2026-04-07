# Bikes Groningen Operations Guide

## Purpose

Use this guide when you want to maintain the site without having to rediscover where everything lives.

## Local workflow

Start dev server:

```bash
npm run dev
```

Lint:

```bash
npm run lint
```

Production build:

```bash
npm run build
```

## Main content files

- Guides data: `src/content/groningen/guides-data.ts`
- Guide body sections: `src/content/groningen/guide-bodies.ts`
- Guide checklist blocks: `src/content/groningen/guide-checklists.ts`
- Guide images: `public/images/guides`
- Guide cross-links: `src/lib/content/guides.ts`

## How to add a new blog post

1. Add a new guide entry in `src/content/groningen/guides-data.ts`
2. Add the body copy in `src/content/groningen/guide-bodies.ts`
3. Add a checklist block in `src/content/groningen/guide-checklists.ts` if useful
4. Add a hero image in `public/images/guides`
5. Add `heroImage` in the guide entry
6. Add `sources` if the post contains official claims, fines, rules, or municipality info
7. If the post belongs in the student cluster, update `guideCrossLinkMap` in `src/lib/content/guides.ts`
8. Run `npm run lint`
9. Run `npm run build`

## How to add a neighborhood page

1. Add the guide entry in `src/content/groningen/guides-data.ts`
2. Add the body copy in `src/content/groningen/guide-bodies.ts`
3. Add the neighborhood name to `src/config/cities/groningen.ts` if needed
4. Add a guide image in `public/images/guides` if you want a hero visual
5. Run `npm run lint`
6. Run `npm run build`

## How to add or edit ads

Ad config lives in:

- `src/content/ads.ts`

Placements currently used:

- `home_inline`
- `category_inline`
- `guide_inline`
- `guide_sidebar`

Rules:

- If `enabled: false`, the ad does not show
- If no ad matches a placement, nothing is shown
- Ads already track impressions and clicks

Useful pattern:

1. Duplicate the example placeholder ad
2. Change `enabled` to `true`
3. Fill in sponsor name, URL, copy, and placements
4. If needed, add image or logo fields later when that system expands

## How to swap the partner later

Main config lives here:

- `src/config/cities/groningen.ts`

But the current site still has some hardcoded partner references in a few places. Before swapping the partner, run:

```bash
rg -n "bikestoregroningen\.nl|Bike Store Groningen|Paterswoldseweg 30|info@bikestoregroningen\.nl" src README.md
```

Update the files that show up. At the moment, likely places include:

- `src/config/cities/groningen.ts`
- `src/components/layout/site-header.tsx`
- `src/components/layout/site-footer.tsx`
- `src/components/layout/category-page.tsx`
- `src/content/site-copy.ts`
- `src/content/groningen/guides-data.ts`
- `src/app/[locale]/privacy/page.tsx`
- `README.md`

## Where lead and tracking logic lives

- Lead API: `src/app/api/lead/route.ts`
- Lead validation: `src/lib/leads/validate.ts`
- Lead campaigns: `src/lib/leads/campaigns.ts`
- Lead notifications: `src/lib/leads/notify.ts`
- Analytics events: `src/lib/analytics/events.ts`

## SEO and schema files

- Metadata: `src/lib/seo/metadata.ts`
- Guide schema: `src/lib/schema/guides.ts`
- Site schema: `src/lib/schema/site.ts`
- Sitemap: `src/app/sitemap.ts`
- Robots: `src/app/robots.ts`
- Redirects: `next.config.ts`

## Before publishing a factual post

If the post mentions official rules, fines, depot policies, or municipality services:

1. Verify the official source first
2. Add a visible `sources` block in the guide data
3. Update the `updatedAt` date
4. Run `npm run build`

## Before launch

1. Check `robots.txt`
2. Check `sitemap.xml`
3. Check localized routes in both `nl` and `en`
4. Test lead form submission
5. Test partner CTA clicks
6. Test ad clicks and impressions
7. Run `npm run lint`
8. Run `npm run build`

## Current student content cluster

- `student-bike-guide-groningen-2026`
- `goedkope-tweedehands-fiets-groningen-studenten`
- `fietsdepot-groningen-boetes-2026`
- `fietsendiefstal-groningen-voorkomen-studenten`
- `swapfiets-vs-fiets-kopen-groningen-studenten`
- `fietsen-naar-zernike-groningen-studenten`
