import path from "node:path";

export const leadsDirectory = path.join(process.cwd(), "data", "leads");
export const leadsFilePath = path.join(leadsDirectory, "submissions.jsonl");
