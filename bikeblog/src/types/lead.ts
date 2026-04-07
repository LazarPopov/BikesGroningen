export type LeadIntent =
  | "download"
  | "partner_contact"
  | "repair_request"
  | "newsletter";

export type LeadSource =
  | "home"
  | "guide"
  | "category"
  | "exit_intent"
  | "manual";

export type LeadCampaignSource =
  | "student-guide"
  | "red-bull-hype";

export type LeadSubmission = {
  name: string;
  email: string;
  phone?: string;
  locale: "nl" | "en";
  source: LeadSource;
  intent: LeadIntent;
  articleSlug?: string;
  campaignSource?: LeadCampaignSource;
  notes?: string;
  gdprConsent: boolean;
  partnerNotification: boolean;
  submittedAt: string;
  honeypot?: string;
};

export type StoredLead = LeadSubmission & {
  id: string;
  createdAt: string;
  userAgent?: string;
  referrer?: string;
};
