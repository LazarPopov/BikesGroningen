import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import type { StoredLead } from "@/types/lead";

type BikeblogLeadRow = {
  id: string;
  created_at: string;
  city: string;
  name: string;
  email: string;
  phone: string | null;
  locale: "nl" | "en";
  source: StoredLead["source"];
  intent: StoredLead["intent"];
  article_slug: string | null;
  campaign_source: StoredLead["campaignSource"] | null;
  notes: string | null;
  gdpr_consent: boolean;
  partner_notification: boolean;
  submitted_at: string;
  user_agent: string | null;
  referrer: string | null;
};

function toRow(lead: StoredLead): BikeblogLeadRow {
  return {
    id: lead.id,
    created_at: lead.createdAt,
    city: lead.city,
    name: lead.name,
    email: lead.email,
    phone: lead.phone ?? null,
    locale: lead.locale,
    source: lead.source,
    intent: lead.intent,
    article_slug: lead.articleSlug ?? null,
    campaign_source: lead.campaignSource ?? null,
    notes: lead.notes ?? null,
    gdpr_consent: lead.gdprConsent,
    partner_notification: lead.partnerNotification,
    submitted_at: lead.submittedAt,
    user_agent: lead.userAgent ?? null,
    referrer: lead.referrer ?? null,
  };
}

function fromRow(row: BikeblogLeadRow): StoredLead {
  return {
    id: row.id,
    createdAt: row.created_at,
    city: row.city,
    name: row.name,
    email: row.email,
    phone: row.phone ?? undefined,
    locale: row.locale,
    source: row.source,
    intent: row.intent,
    articleSlug: row.article_slug ?? undefined,
    campaignSource: row.campaign_source ?? undefined,
    notes: row.notes ?? undefined,
    gdprConsent: row.gdpr_consent,
    partnerNotification: row.partner_notification,
    submittedAt: row.submitted_at,
    userAgent: row.user_agent ?? undefined,
    referrer: row.referrer ?? undefined,
  };
}

export async function saveLead(lead: StoredLead) {
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase.from("bikeblog").insert(toRow(lead));

  if (error) {
    throw new Error(`Unable to store lead in Supabase: ${error.message}`);
  }

  return lead;
}

export async function readLeads(): Promise<StoredLead[]> {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("bikeblog")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Unable to read leads from Supabase: ${error.message}`);
  }

  return (data ?? []).map(fromRow);
}
