import { GA_MEASUREMENT_ID, analyticsEnabled } from "@/lib/analytics/config";
import type { AnalyticsEventName } from "@/lib/analytics/events";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (
      command: "js" | "config" | "event",
      target: string | Date,
      params?: Record<string, string | number | boolean | null | undefined>,
    ) => void;
  }
}

type EventParams = Record<string, string | number | boolean | null | undefined>;

export function trackPageView(url: string) {
  if (!analyticsEnabled || typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

export function trackEvent(name: AnalyticsEventName, params: EventParams = {}) {
  if (!analyticsEnabled || typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", name, params);
}
