import type { StoredLead } from "@/types/lead";
import { resolveLeadOfferCode } from "@/lib/leads/campaigns";

type NotifyLeadResult = {
  notified: boolean;
};

export async function notifyLead(lead: StoredLead): Promise<NotifyLeadResult> {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  const webhookSecret = process.env.LEAD_WEBHOOK_SECRET;

  if (!webhookUrl) {
    return { notified: false };
  }

  const offerCode = resolveLeadOfferCode(lead.campaignSource);

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(webhookSecret ? { "x-lead-secret": webhookSecret } : {}),
    },
    body: JSON.stringify({
      type: "new_lead",
      lead,
      automation: offerCode
        ? {
            campaignSource: lead.campaignSource,
            offerCode,
          }
        : null,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Lead notification failed with status ${response.status}.`);
  }

  return { notified: true };
}
