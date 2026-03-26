import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title")?.toLowerCase() || "";
  const location = searchParams.get("location")?.toLowerCase() || "";
  const category = searchParams.get("category");
  const type = searchParams.get("type"); // e.g., "Full-time", "Remote"
  const budgetStr = searchParams.get("budget");

  let filteredJobs = db.jobs;

  if (title) {
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(title) ||
        job.company.toLowerCase().includes(title)
    );
  }

  if (location) {
    filteredJobs = filteredJobs.filter((job) =>
      job.location.toLowerCase().includes(location)
    );
  }

  if (category && category !== "All") {
    filteredJobs = filteredJobs.filter((job) => job.category === category);
  }

  if (type && type !== "All") {
    filteredJobs = filteredJobs.filter((job) => job.type === type);
  }

  if (budgetStr) {
    const minBudgetTarget = parseInt(budgetStr, 10);
    filteredJobs = filteredJobs.filter(
      (job) => job.budgetMin >= minBudgetTarget
    );
  }

  return NextResponse.json(filteredJobs);
}
