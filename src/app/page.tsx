'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Briefcase, Users, Star, ArrowRight, CheckCircle2, MessageSquare, Zap, TrendingUp } from 'lucide-react';

// --- Animated Counter ---
function useCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function StatCounter({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-primary-200 font-medium text-lg">{label}</div>
    </div>
  );
}

// --- Featured Companies Marquee ---
const companies = [
  { name: 'Google', color: '#4285F4' },
  { name: 'Microsoft', color: '#00A4EF' },
  { name: 'Airbnb', color: '#FF5A5F' },
  { name: 'Spotify', color: '#1DB954' },
  { name: 'Stripe', color: '#635BFF' },
  { name: 'Figma', color: '#F24E1E' },
  { name: 'Notion', color: '#000000' },
  { name: 'Vercel', color: '#000000' },
  { name: 'Shopify', color: '#96BF48' },
  { name: 'Slack', color: '#4A154B' },
];

const categories = [
  { name: 'Design & Creative', count: '1,240', icon: '🎨', query: 'Design' },
  { name: 'Development & IT', count: '3,150', icon: '💻', query: 'Development' },
  { name: 'Marketing', count: '850', icon: '📈', query: 'Marketing' },
  { name: 'Data Science', count: '420', icon: '🔬', query: 'Data Science' },
  { name: 'Writing & Translation', count: '930', icon: '✍️', query: 'Marketing' },
  { name: 'Customer Support', count: '540', icon: '🎧', query: 'Management' },
  { name: 'Sales', count: '1,100', icon: '🤝', query: 'Management' },
  { name: 'HR & Recruiting', count: '310', icon: '👥', query: 'HR' },
];

export default function Home() {
  const router = useRouter();
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [jobCount, setJobCount] = useState(0);

  useEffect(() => {
    fetch('/api/jobs')
      .then((r) => r.json())
      .then((jobs: unknown[]) => setJobCount(jobs.length))
      .catch(() => setJobCount(15));
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (jobTitle) params.set('title', jobTitle);
    if (location) params.set('location', location);
    router.push(`/jobs?${params.toString()}`);
  };

  const handlePopularTag = (tag: string) => {
    router.push(`/jobs?title=${encodeURIComponent(tag)}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── Hero Section ── */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary-100/50 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
            Find Jobs &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">
              Hire Talent Faster
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Connect with top companies and the best freelance talent on the world&apos;s most dynamic job marketplace powered by AI.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto bg-white rounded-2xl shadow-soft-lg border border-gray-100 p-2 flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 bg-gray-50 rounded-xl">
              <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <input
                type="text"
                id="home-job-title"
                placeholder="Job title, keywords, or company"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full bg-transparent border-none focus:ring-0 px-4 py-3 text-gray-900 placeholder-gray-500"
              />
            </div>
            <div className="flex-1 flex items-center px-4 bg-gray-50 rounded-xl">
              <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <input
                type="text"
                id="home-location"
                placeholder="City, state, or country"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent border-none focus:ring-0 px-4 py-3 text-gray-900 placeholder-gray-500"
              />
            </div>
            <button
              type="submit"
              id="home-search-btn"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 md:w-auto w-full"
            >
              Find Jobs
            </button>
          </form>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="font-medium">Popular:</span>
            {['UI Designer', 'Frontend Dev', 'Product Manager'].map((tag) => (
              <button
                key={tag}
                onClick={() => handlePopularTag(tag)}
                className="hover:text-primary-600 transition-colors hover:underline"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trusted Companies ── */}
      <section className="py-10 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
            Trusted by 10,000+ companies worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {companies.slice(0, 5).map((c) => (
              <div key={c.name} className="text-2xl font-bold font-sans text-gray-800">
                {c.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features Section ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything you need to succeed</h2>
            <p className="text-lg text-gray-600">Our platform brings together the best tools for job seekers and employers in one seamless experience.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Briefcase, color: 'blue', title: 'Job Marketplace', desc: 'Access thousands of job listings from top companies or post your own to hire the best talent.' },
              { icon: Users, color: 'purple', title: 'Social Job Feed', desc: 'Network with professionals, share your achievements, and discover opportunities organically.' },
              { icon: Zap, color: 'indigo', title: 'AI Assistant', desc: 'Get AI-powered resume tips, interview prep, and personalized job matching recommendations.' },
              { icon: MessageSquare, color: 'green', title: 'Real-time Chat', desc: 'Communicate instantly with employers or candidates through our built-in secure messaging platform.' },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className={`bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-soft-lg hover:-translate-y-1 transition-all group`}>
                <div className={`w-14 h-14 bg-${color}-50 text-${color}-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-${color}-600 group-hover:text-white transition-colors`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular Categories ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Categories</h2>
              <p className="text-lg text-gray-600">Explore jobs across various trending industries.</p>
            </div>
            <Link href="/jobs" className="hidden md:flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              Explore All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                href={`/jobs?category=${encodeURIComponent(cat.query)}`}
                key={cat.name}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-soft hover:border-primary-100 transition-all flex flex-col gap-4 group cursor-pointer"
              >
                <div className="text-3xl bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{cat.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">{cat.count} jobs available</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform Statistics (Animated Counters) ── */}
      <section className="py-24 bg-gradient-to-br from-primary-700 via-primary-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 text-primary-100 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20">
              <TrendingUp className="w-4 h-4" /> Platform Growth
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powering Careers Worldwide</h2>
            <p className="text-lg text-primary-200 max-w-2xl mx-auto">Join millions of professionals who trust Jobfy to find their next opportunity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <StatCounter value={jobCount > 0 ? jobCount * 800 : 12000} label="Total Jobs Posted" suffix="+" />
            <StatCounter value={250000} label="Active Users" suffix="+" />
            <StatCounter value={48000} label="Hired Candidates" suffix="+" />
          </div>
        </div>
      </section>

      {/* ── Featured Companies Section ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Employers</h2>
            <p className="text-lg text-gray-600">Top companies actively hiring on Jobfy right now.</p>
          </div>

          {/* Marquee Row 1 */}
          <div className="overflow-hidden mb-6">
            <div className="flex gap-6 marquee-track">
              {[...companies, ...companies].map((company, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-gray-50 border border-gray-100 rounded-2xl px-8 py-5 flex items-center justify-center hover:border-primary-200 hover:bg-primary-50 hover:shadow-soft transition-all group cursor-pointer min-w-[180px]"
                >
                  <span
                    className="text-xl font-bold text-gray-400 group-hover:text-gray-800 transition-colors tracking-tight"
                  >
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 (reverse) */}
          <div className="overflow-hidden">
            <div className="flex gap-6 marquee-track-reverse">
              {[...companies.slice(5), ...companies, ...companies.slice(0, 5)].map((company, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-gray-50 border border-gray-100 rounded-2xl px-8 py-5 flex items-center justify-center hover:border-primary-200 hover:bg-primary-50 hover:shadow-soft transition-all group cursor-pointer min-w-[180px]"
                >
                  <span className="text-xl font-bold text-gray-400 group-hover:text-gray-800 transition-colors tracking-tight">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-primary-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[140%] bg-primary-800 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[140%] bg-indigo-800 rounded-full blur-3xl opacity-50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by talents and employers</h2>
            <p className="text-lg text-primary-200">See what our community has to say about their experience on Jobfy.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Jenkins', role: 'Frontend Engineer', text: 'Jobfy made my job search incredibly smooth. The AI features helped me optimize my resume and I landed my dream role in just two weeks!' },
              { name: 'Michael Chen', role: 'Design Lead at TechCorp', text: "As a hiring manager, the quality of candidates on Jobfy is unmatched. The platform's filtering and social features give us great insight into potential hires." },
              { name: 'Elena Rodriguez', role: 'Freelance Copywriter', text: 'The freelance marketplace here is bustling. I love how easy it is to manage proposals and communicate with clients all in one place.' },
            ].map((t, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-lg italic mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center font-bold text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-primary-200 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
