import { TrackedExternalLink } from "@/components/analytics/tracked-external-link";
import { getCityConfig } from "@/config/cities";
import { siteCopy } from "@/content/site-copy";
import { analyticsEvents } from "@/lib/analytics/events";
import { t, type Locale } from "@/lib/i18n";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const city = getCityConfig("groningen");

  return (
    <footer className="border-t border-black/10 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1.3fr,0.7fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-cyan-300 uppercase">
            Bikes Groningen
          </p>
          <h2 className="mt-3 font-display text-3xl text-white">
            {t(siteCopy.footer.title, locale)}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            {t(siteCopy.footer.description, locale)}
          </p>
        </div>

        <div className="space-y-3 text-sm text-slate-300">
          <p className="font-semibold text-white">{t(siteCopy.footer.partnerLabel, locale)}</p>
          <p>{city.partner.name}</p>
          <p>{city.partner.address}</p>
          <TrackedExternalLink
            href={city.partner.siteUrl}
            target="_blank"
            rel="noreferrer"
            eventName={analyticsEvents.partnerReferralClick}
            eventParams={{
              locale,
              placement: "footer",
              cta_label: t(siteCopy.footer.partnerLink, locale),
            }}
            className="inline-block text-cyan-300 transition hover:text-cyan-200"
          >
            {t(siteCopy.footer.partnerLink, locale)}
          </TrackedExternalLink>
        </div>
      </div>
    </footer>
  );
}
