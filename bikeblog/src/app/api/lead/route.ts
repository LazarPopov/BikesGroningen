import { NextResponse } from "next/server";
import { getCityConfig } from "@/config/cities";
import { resolveLeadCampaignSource } from "@/lib/leads/campaigns";
import { notifyLead } from "@/lib/leads/notify";
import { saveLead } from "@/lib/leads/storage";
import { validateLeadSubmission } from "@/lib/leads/validate";
import type { StoredLead } from "@/types/lead";

export async function POST(request: Request) {
  try {
    const city = getCityConfig("groningen");
    const body = await request.json();
    const result = validateLeadSubmission(body);

    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: result.error },
        { status: 400 },
      );
    }

    const campaignSource = resolveLeadCampaignSource(result.data);

    const lead: StoredLead = {
      ...result.data,
      campaignSource,
      id: crypto.randomUUID(),
      city: city.slug,
      createdAt: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") ?? undefined,
      referrer: request.headers.get("referer") ?? undefined,
    };

    await saveLead(lead);

    let notified = false;

    try {
      const notificationResult = await notifyLead(lead);
      notified = notificationResult.notified;
    } catch (error) {
      console.error("Lead notification failed.", error);
    }

    return NextResponse.json({
      ok: true,
      leadId: lead.id,
      campaignSource,
      notified,
    });
  } catch (error) {
    console.error("Lead storage failed.", error);
    return NextResponse.json(
      { ok: false, error: "Unable to store lead." },
      { status: 500 },
    );
  }
}
