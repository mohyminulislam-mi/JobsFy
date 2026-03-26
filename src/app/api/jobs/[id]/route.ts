import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  
  await new Promise((resolve) => setTimeout(resolve, 600));

  const job = db.jobs.find((j) => j.id === id);
  if (!job) {
    return NextResponse.json({ error: "Job not found" }, { status: 404 });
  }

  // Find similar jobs (same category, excluding this one)
  const similarJobs = db.jobs
    .filter((j) => j.category === job.category && j.id !== job.id)
    .slice(0, 3);

  return NextResponse.json({ job, similarJobs });
}
