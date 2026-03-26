import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const post = db.posts.find((p) => p.id === id);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  post.likes += 1; // Simplistic like count logic (avoids toggle logic for mock)

  return NextResponse.json({ success: true, likes: post.likes });
}
