"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { analyticsEvents } from "@/lib/analytics/events";
import { trackEvent } from "@/lib/analytics/gtag";
import type { AdImageStyle, AdPlacement, AdTheme } from "@/types/ad";
import type { Locale } from "@/types/i18n";

type TrackedAdCardProps = {
  adId: string;
  sponsorName: string;
  href: string;
  headline: string;
  body: string;
  ctaLabel: string;
  disclosure?: string;
  badge?: string;
  promoLabel?: string;
  promoCode?: string;
  promoDetail?: string;
  theme?: AdTheme;
  imageUrl?: string;
  imageAlt?: string;
  imageLowerDesktop?: boolean;
  imageStyle?: AdImageStyle;
  locale: Locale;
  placement: AdPlacement;
};

const themeClasses: Record<AdTheme, string> = {
  amber: "border-amber-300 bg-amber-50 text-slate-900",
  cyan: "border-cyan-300 bg-cyan-50 text-slate-900",
  slate: "border-slate-300 bg-slate-50 text-slate-900",
};

export function TrackedAdCard({
  adId,
  sponsorName,
  href,
  headline,
  body,
  ctaLabel,
  disclosure,
  badge,
  promoLabel,
  promoCode,
  promoDetail,
  theme = "slate",
  imageUrl,
  imageAlt,
  imageLowerDesktop,
  imageStyle = "cover",
  locale,
  placement,
}: TrackedAdCardProps) {
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const trackedViewRef = useRef(false);
  const isExternal = /^https?:\/\//.test(href);

  useEffect(() => {
    const node = linkRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry?.isIntersecting || trackedViewRef.current) {
          return;
        }

        trackedViewRef.current = true;

        trackEvent(analyticsEvents.adImpression, {
          locale,
          ad_id: adId,
          sponsor_name: sponsorName,
          placement,
        });

        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [adId, locale, placement, sponsorName]);

  return (
    <a
      ref={linkRef}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer sponsored nofollow" : undefined}
      onClick={() => {
        trackEvent(analyticsEvents.adClick, {
          locale,
          ad_id: adId,
          sponsor_name: sponsorName,
          placement,
        });
      }}
      className={`block rounded-[1.75rem] border p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 ${themeClasses[theme]}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700">
            {disclosure ?? "Advertisement"}
          </span>
          {badge ? (
            <span className="rounded-full bg-slate-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
              {badge}
            </span>
          ) : null}
        </div>
        <span className="text-xs font-medium text-slate-600">{sponsorName}</span>
      </div>

      {imageUrl ? (
        <div
          className={`mt-5 overflow-hidden rounded-2xl border border-black/10 bg-white ${
            imageStyle === "logo" ? "p-6" : ""
          }`}
        >
          <Image
            src={imageUrl}
            alt={imageAlt ?? headline}
            width={640}
            height={352}
            className={
              imageStyle === "logo"
                ? "h-36 w-full object-contain"
                : `h-44 w-full object-cover ${
                    imageLowerDesktop ? "md:object-[50%_18%]" : ""
                  }`
            }
          />
        </div>
      ) : null}

      <h3 className="mt-5 text-2xl font-semibold text-current">{headline}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-700">{body}</p>

      {promoCode ? (
        <div className="mt-5 rounded-2xl border border-black/10 bg-white/70 p-4">
          {promoLabel ? (
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              {promoLabel}
            </p>
          ) : null}
          <p className="mt-2 text-2xl font-semibold tracking-[0.12em] text-slate-950 uppercase">
            {promoCode}
          </p>
          {promoDetail ? (
            <p className="mt-2 text-sm leading-6 text-slate-700">{promoDetail}</p>
          ) : null}
        </div>
      ) : null}

      <span className="mt-5 inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand">
        {ctaLabel}
      </span>
    </a>
  );
}
