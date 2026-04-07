"use client";

import type { ComponentPropsWithoutRef } from "react";
import { trackEvent } from "@/lib/analytics/gtag";
import type { AnalyticsEventName } from "@/lib/analytics/events";

type TrackedExternalLinkProps = ComponentPropsWithoutRef<"a"> & {
  eventName: AnalyticsEventName;
  eventParams?: Record<string, string | number | boolean | null | undefined>;
};

export function TrackedExternalLink({
  eventName,
  eventParams,
  onClick,
  children,
  ...props
}: TrackedExternalLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackEvent(eventName, eventParams);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
