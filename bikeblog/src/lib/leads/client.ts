import type { LeadSubmission } from "@/types/lead";

export async function submitLead(payload: LeadSubmission) {
  const response = await fetch("/api/lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as {
    ok: boolean;
    error?: string;
    leadId?: string;
  };

  if (!response.ok || !data.ok) {
    throw new Error(data.error ?? "Unable to submit lead.");
  }

  return data;
}
