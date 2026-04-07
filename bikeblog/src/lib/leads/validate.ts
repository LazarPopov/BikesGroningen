import type { LeadSubmission } from "@/types/lead";

type ValidationResult =
  | { ok: true; data: LeadSubmission }
  | { ok: false; error: string };

const MIN_SUBMISSION_TIME_MS = 1000;

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidDate(value: string) {
  return !Number.isNaN(Date.parse(value));
}

export function validateLeadSubmission(input: unknown): ValidationResult {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Invalid payload." };
  }

  const payload = input as Record<string, unknown>;

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const phone = typeof payload.phone === "string" ? payload.phone.trim() : undefined;
  const locale = payload.locale;
  const source = payload.source;
  const intent = payload.intent;
  const articleSlug =
    typeof payload.articleSlug === "string" ? payload.articleSlug.trim() : undefined;
  const campaignSource =
    typeof payload.campaignSource === "string" ? payload.campaignSource.trim() : undefined;
  const notes = typeof payload.notes === "string" ? payload.notes.trim() : undefined;
  const gdprConsent = payload.gdprConsent === true;
  const partnerNotification = payload.partnerNotification === true;
  const submittedAt =
    typeof payload.submittedAt === "string" ? payload.submittedAt.trim() : "";
  const honeypot =
    typeof payload.honeypot === "string" ? payload.honeypot.trim() : undefined;

  const validLocales = ["nl", "en"] as const;
  const validSources = ["home", "guide", "category", "exit_intent", "manual"] as const;
  const validIntents = ["download", "partner_contact", "repair_request", "newsletter"] as const;
  const validCampaignSources = ["student-guide", "red-bull-hype"] as const;

  if (honeypot && honeypot.length > 0) {
    return { ok: false, error: "Invalid submission." };
  }

  if (name.length < 2) {
    return { ok: false, error: "Name is required." };
  }

  if (!isEmail(email)) {
    return { ok: false, error: "Valid email is required." };
  }

  if (!validLocales.includes(locale as (typeof validLocales)[number])) {
    return { ok: false, error: "Invalid locale." };
  }

  if (!validSources.includes(source as (typeof validSources)[number])) {
    return { ok: false, error: "Invalid source." };
  }

  if (!validIntents.includes(intent as (typeof validIntents)[number])) {
    return { ok: false, error: "Invalid intent." };
  }

  if (
    campaignSource &&
    !validCampaignSources.includes(campaignSource as (typeof validCampaignSources)[number])
  ) {
    return { ok: false, error: "Invalid campaign source." };
  }

  if (!gdprConsent) {
    return { ok: false, error: "GDPR consent is required." };
  }

  if (!isValidDate(submittedAt)) {
    return { ok: false, error: "Invalid submission timestamp." };
  }

  if (Date.now() - Date.parse(submittedAt) < MIN_SUBMISSION_TIME_MS) {
    return { ok: false, error: "Submission too fast." };
  }

  const normalizedLocale = locale as LeadSubmission["locale"];
  const normalizedSource = source as LeadSubmission["source"];
  const normalizedIntent = intent as LeadSubmission["intent"];
  const normalizedCampaignSource = campaignSource as LeadSubmission["campaignSource"];

  return {
    ok: true,
    data: {
      name,
      email,
      phone,
      locale: normalizedLocale,
      source: normalizedSource,
      intent: normalizedIntent,
      articleSlug,
      campaignSource: normalizedCampaignSource,
      notes,
      gdprConsent,
      partnerNotification,
      submittedAt,
      honeypot,
    },
  };
}
