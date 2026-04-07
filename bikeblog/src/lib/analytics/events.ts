export const analyticsEvents = {
  partnerReferralClick: "partner_referral_click",
  leadMagnetDownload: "lead_magnet_download",
  clickEmail: "click_email",
  clickWhatsapp: "click_whatsapp",
  exitIntentView: "exit_intent_view",
  adImpression: "ad_impression",
  adClick: "ad_click",
} as const;

export type AnalyticsEventName =
  (typeof analyticsEvents)[keyof typeof analyticsEvents];
