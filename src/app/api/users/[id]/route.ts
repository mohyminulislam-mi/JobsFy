import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  
  const user = db.profiles.find((p) => p.id === id);

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const updateData = await request.json();

    const userIndex = db.profiles.findIndex((p) => p.id === id);

    if (userIndex === -1) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Update the mock user profile
    db.profiles[userIndex] = {
      ...db.profiles[userIndex],
      ...updateData,
    };

    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 600));

    return NextResponse.json(db.profiles[userIndex]);
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
