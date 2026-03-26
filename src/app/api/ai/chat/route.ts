import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Simulate AI thinking time (1.5 seconds)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simple mock responses based on keywords
    let aiResponse = "I can help you find jobs, review your resume, or prepare for interviews. What do you need assistance with?";
    
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes("job") || lowerMessage.includes("work") || lowerMessage.includes("hiring")) {
      aiResponse = "I can definitely help with job searches! Have you tried browsing our 'Development' or 'Design' categories on the Jobs board? Let me know your skills, and I'll suggest some roles.";
    } else if (lowerMessage.includes("resume") || lowerMessage.includes("cv")) {
      aiResponse = "Your resume is your ticket to a great job! Make sure to highlight your quantifiable achievements. I can review it if you paste snippets of it here.";
    } else if (lowerMessage.includes("interview")) {
      aiResponse = "Interview preparation is key. I'd recommend practicing the STAR method (Situation, Task, Action, Result) for behavioral questions.";
    } else if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      aiResponse = "Hello there! How can I assist you with your career goals today?";
    }

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
