import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const fontUrbanist = Urbanist({
  variable: "--font-Urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jobfy - Find Jobs & Hire Talent Faster",
  description:
    "A modern job marketplace platform with built-in AI assistant and real-time social networking features.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontUrbanist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
