import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { randomUUID } from "crypto";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const sortedPosts = [...db.posts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return NextResponse.json(sortedPosts);
}

export async function POST(request: Request) {
  try {
    const { content } = await request.json();

    if (!content) {
      return NextResponse.json({ error: "Content is required" }, { status: 400 });
    }

    const newPost = {
      id: randomUUID(),
      authorId: "1",
      authorName: db.profiles[0].name,
      authorAvatar: db.profiles[0].avatar,
      content,
      likes: 0,
      comments: 0,
      createdAt: new Date().toISOString(),
    };

    db.posts.push(newPost);

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
