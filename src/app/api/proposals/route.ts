import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { randomUUID } from "crypto";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { jobId, coverLetter, bidAmount } = body;

    if (!jobId || !coverLetter || !bidAmount) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Check if the job exists
    const job = db.jobs.find((j) => j.id === jobId);
    if (!job) {
      return NextResponse.json({ error: "Job not found." }, { status: 404 });
    }

    // Current mock user ID
    const userId = "1";

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Check if user already applied
    const existing = db.proposals.find(
      (p) => p.jobId === jobId && p.userId === userId
    );

    if (existing) {
      return NextResponse.json(
        { error: "You have already applied to this job." },
        { status: 400 }
      );
    }

    const newProposal = {
      id: randomUUID(),
      jobId,
      userId,
      coverLetter,
      bidAmount: Number(bidAmount),
      createdAt: new Date().toISOString(),
    };

    db.proposals.push(newProposal);

    return NextResponse.json(
      { message: "Proposal submitted successfully!", proposal: newProposal },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: "Server error handling proposal." },
      { status: 500 }
    );
  }
}
