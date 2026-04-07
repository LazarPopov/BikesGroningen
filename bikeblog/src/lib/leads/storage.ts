import { appendFile, mkdir, readFile } from "node:fs/promises";
import { leadsDirectory, leadsFilePath } from "@/lib/leads/config";
import type { StoredLead } from "@/types/lead";

export async function ensureLeadsStorage() {
  await mkdir(leadsDirectory, { recursive: true });
}

export async function saveLead(lead: StoredLead) {
  await ensureLeadsStorage();
  await appendFile(leadsFilePath, `${JSON.stringify(lead)}\n`, "utf8");
  return lead;
}

export async function readLeads(): Promise<StoredLead[]> {
  try {
    const file = await readFile(leadsFilePath, "utf8");

    return file
      .split(/\r?\n/)
      .filter(Boolean)
      .map((line) => JSON.parse(line) as StoredLead);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}
