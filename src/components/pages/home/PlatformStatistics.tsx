"use client";
import React, { useEffect, useRef, useState } from "react";
import { TrendingUp } from "lucide-react";

function StatCounter({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-primary-200 font-medium text-lg">{label}</div>
    </div>
  );
}
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
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}
const PlatformStatistics = () => {
  const [jobCount, setJobCount] = useState(0);

  useEffect(() => {
    fetch("/api/jobs")
      .then((r) => r.json())
      .then((jobs: unknown[]) => setJobCount(jobs.length))
      .catch(() => setJobCount(15));
  }, []);
  return (
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powering Careers Worldwide
          </h2>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Join millions of professionals who trust Jobfy to find their next
            opportunity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <StatCounter
            value={jobCount > 0 ? jobCount * 800 : 12000}
            label="Total Jobs Posted"
            suffix="+"
          />
          <StatCounter value={250000} label="Active Users" suffix="+" />
          <StatCounter value={48000} label="Hired Candidates" suffix="+" />
        </div>
      </div>
    </section>
  );
};

export default PlatformStatistics;
