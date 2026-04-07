"use client";

import Link from "next/link";
import { useState } from "react";
import { TrackedExternalLink } from "@/components/analytics/tracked-external-link";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { categoryCopy, siteCopy } from "@/content/site-copy";
import { analyticsEvents } from "@/lib/analytics/events";
import { getCategoryPath, getLocalePath, t, type Locale } from "@/lib/i18n";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: getCategoryPath(locale, "hulp"), label: t(categoryCopy.hulp.navLabel, locale) },
    { href: getCategoryPath(locale, "wijken"), label: t(categoryCopy.wijken.navLabel, locale) },
    { href: getCategoryPath(locale, "beste"), label: t(categoryCopy.beste.navLabel, locale) },
    { href: getCategoryPath(locale, "blog"), label: t(categoryCopy.blog.navLabel, locale) },
  ];

  const menuLabel = locale === "nl" ? "Menu" : "Menu";
  const closeLabel = locale === "nl" ? "Sluiten" : "Close";
  const mobileNavLabel = locale === "nl" ? "Navigatie" : "Navigation";

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href={getLocalePath(locale)} className="min-w-0 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
            BG
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-[0.18em] text-brand uppercase">
              Bikes Groningen
            </p>
            <p className="truncate text-xs text-slate-500">
              {t(siteCopy.header.tagline, locale)}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher locale={locale} label={t(siteCopy.header.languageLabel, locale)} />
          <TrackedExternalLink
            href="https://bikestoregroningen.nl"
            target="_blank"
            rel="noreferrer"
            eventName={analyticsEvents.partnerReferralClick}
            eventParams={{
              locale,
              placement: "header",
              cta_label: t(siteCopy.header.partnerButton, locale),
            }}
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand"
          >
            {t(siteCopy.header.partnerButton, locale)}
          </TrackedExternalLink>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-site-nav"
          className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-brand hover:text-brand md:hidden"
        >
          {isOpen ? closeLabel : menuLabel}
        </button>
      </div>

      {isOpen ? (
        <div id="mobile-site-nav" className="border-t border-black/10 bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
              {mobileNavLabel}
            </p>

            <nav className="mt-4 grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-5">
              <LanguageSwitcher locale={locale} label={t(siteCopy.header.languageLabel, locale)} />
            </div>

            <TrackedExternalLink
              href="https://bikestoregroningen.nl"
              target="_blank"
              rel="noreferrer"
              eventName={analyticsEvents.partnerReferralClick}
              eventParams={{
                locale,
                placement: "header_mobile_menu",
                cta_label: t(siteCopy.header.partnerButton, locale),
              }}
              className="mt-5 inline-flex w-full justify-center rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand"
            >
              {t(siteCopy.header.partnerButton, locale)}
            </TrackedExternalLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
