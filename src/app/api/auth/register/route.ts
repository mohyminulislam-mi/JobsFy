import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hashPassword, signToken, COOKIE_NAME } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, designation, location, portfolio, avatar, password } = body;

    // Validate required fields
    if (!name || !email || !phone || !designation || !password) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Password length
    if (password.length < 8) {
      return NextResponse.json(
        { success: false, message: "Password must be at least 8 characters." },
        { status: 400 }
      );
    }

    // Check email uniqueness
    const existingUser = db.users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "An account with this email already exists." },
        { status: 409 }
      );
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Create user
    const newUser = {
      id: `u-${Date.now()}`,
      name,
      email: email.toLowerCase(),
      phone,
      passwordHash,
      designation: designation || "",
      location: location || "",
      portfolio: portfolio || "",
      avatar: avatar || `https://i.pravatar.cc/150?u=${email}`,
      createdAt: new Date().toISOString(),
    };

    db.users.push(newUser);

    // Sign JWT
    const token = signToken({ id: newUser.id, email: newUser.email, name: newUser.name });

    // Return success with cookie
    const response = NextResponse.json({
      success: true,
      message: "Account created successfully! Welcome to Jobfy.",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        designation: newUser.designation,
        avatar: newUser.avatar,
      },
    });

    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
