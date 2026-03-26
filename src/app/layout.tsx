import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jobfy - Find Jobs & Hire Talent Faster',
  description: 'A modern job marketplace platform with built-in AI assistant and real-time social networking features.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-slate-50 flex flex-col text-slate-900`}>
        <Navbar />
        <main className="flex-grow flex flex-col items-stretch">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
