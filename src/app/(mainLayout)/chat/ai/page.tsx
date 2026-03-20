"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Send,
  Sparkles,
  User,
  RefreshCw,
  MoreVertical,
  Paperclip,
} from "lucide-react";

const AIChatPage = () => {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      content:
        "Hi there! I'm Jobfy AI. I can help you find jobs, optimize your resume, prepare for interviews, or answer any career-related questions. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content:
            "That's a great question! Based on your profile, I recommend highlighting your React expertise and focusing on remote-first companies. Would you like me to find some open roles matching that criteria?",
        },
      ]);
    }, 1500);
  };

  const handleSuggestion = (text: string) => {
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "Here's what I found for you..." },
      ]);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 flex-grow py-8 h-[calc(100vh-64px)] overflow-hidden flex flex-col">
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col h-full gap-4">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-4 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-4">
            <Link
              href="/jobs"
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 relative">
                <Sparkles className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <h2 className="font-bold text-gray-900 leading-tight flex items-center gap-2">
                  Jobfy AI Assistant
                </h2>
                <p className="text-xs text-primary-600 font-medium tracking-wide">
                  Always learning, always ready
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-colors"
              title="Start over"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="bg-white rounded-2xl shadow-soft border border-gray-100 flex-grow flex flex-col overflow-hidden relative">
          {/* Messages */}
          <div className="flex-grow p-6 overflow-y-auto flex flex-col gap-6 custom-scrollbar scrollbar-hide">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-gray-200" : "bg-primary-100 text-primary-600"}`}
                >
                  {msg.role === "user" ? (
                    <User className="w-4 h-4 text-gray-600" />
                  ) : (
                    <Sparkles className="w-4 h-4" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] rounded-2xl px-5 py-3.5 text-sm md:text-base leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary-600 text-white rounded-tr-none shadow-md"
                      : "bg-gray-50 text-gray-700 rounded-tl-none border border-gray-100 shadow-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-none px-5 py-4 flex items-center gap-1.5 w-max">
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            )}

            {messages.length === 1 && !isTyping && (
              <div className="mt-auto grid md:grid-cols-2 gap-3 mb-4">
                {[
                  "Review my resume",
                  "Find remote React jobs",
                  "Prepare for technical interview",
                  "What is a good salary for a Senior Dev?",
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSuggestion(suggestion)}
                    className="bg-white border text-sm text-left border-gray-200 hover:border-primary-300 hover:bg-primary-50 text-gray-700 hover:text-primary-700 px-4 py-3 rounded-xl transition-all shadow-sm flex items-center justify-between group"
                  >
                    <span>{suggestion}</span>
                    <ArrowLeft
                      className="w-4 h-4 rotate-135 text-primary-400 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                      style={{ transform: "rotate(135deg)" }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-100 bg-white">
            <form onSubmit={handleSend} className="relative">
              <button
                type="button"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-600 transition-colors p-2"
              >
                <Paperclip className="w-5 h-5" />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-16 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all shadow-inner"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-2.5 rounded-xl transition-colors shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="text-center text-xs text-gray-400 mt-3 font-medium">
              Jobfy AI can make mistakes. Consider verifying important
              information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AIChatPage;
