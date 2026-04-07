import { TrackedAdCard } from "@/components/ads/tracked-ad-card";
import { getAdsForPlacement } from "@/content/ads";
import { t, type Locale } from "@/lib/i18n";
import type { AdPlacement } from "@/types/ad";

type AdSlotProps = {
  locale: Locale;
  placement: AdPlacement;
  className?: string;
  maxItems?: number;
};

export function AdSlot({
  locale,
  placement,
  className,
  maxItems = 1,
}: AdSlotProps) {
  const ads = getAdsForPlacement(locale, placement).slice(0, maxItems);

  if (ads.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <div className="grid gap-6">
        {ads.map((ad) => (
          <TrackedAdCard
            key={ad.id}
            adId={ad.id}
            sponsorName={ad.sponsorName}
            href={ad.href}
            headline={t(ad.headline, locale)}
            body={t(ad.body, locale)}
            ctaLabel={t(ad.ctaLabel, locale)}
            disclosure={ad.disclosure ? t(ad.disclosure, locale) : undefined}
            badge={ad.badge ? t(ad.badge, locale) : undefined}
            promoLabel={ad.promoLabel ? t(ad.promoLabel, locale) : undefined}
            promoCode={ad.promoCode}
            promoDetail={ad.promoDetail ? t(ad.promoDetail, locale) : undefined}
            theme={ad.theme}
            imageUrl={ad.imageUrl}
            imageAlt={ad.imageAlt ? t(ad.imageAlt, locale) : undefined}
            imageLowerDesktop={ad.imageLowerDesktop}
            imageStyle={ad.imageStyle}
            locale={locale}
            placement={placement}
          />
        ))}
      </div>
    </div>
  );
}
