import type { LeadCampaignSource, LeadSubmission } from "@/types/lead";

export function resolveLeadCampaignSource(
  input: Pick<LeadSubmission, "articleSlug" | "campaignSource">,
): LeadCampaignSource | undefined {
  if (input.campaignSource) {
    return input.campaignSource;
  }

  if (input.articleSlug === "student-bike-guide-groningen-2026") {
    return "student-guide";
  }

  if (input.articleSlug?.includes("red-bull-district-ride")) {
    return "red-bull-hype";
  }

  return undefined;
}

export function resolveLeadOfferCode(
  campaignSource?: LeadCampaignSource,
): string | undefined {
  if (campaignSource === "student-guide") {
    return "student_discount_voucher";
  }

  if (campaignSource === "red-bull-hype") {
    return "summer_performance_checkup_offer";
  }

  return undefined;
}
