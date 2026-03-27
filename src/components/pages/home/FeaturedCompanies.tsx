"use client";
import React from "react";

const companies = [
  { name: "Google", color: "#4285F4" },
  { name: "Microsoft", color: "#00A4EF" },
  { name: "Airbnb", color: "#FF5A5F" },
  { name: "Spotify", color: "#1DB954" },
  { name: "Stripe", color: "#635BFF" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Notion", color: "#000000" },
  { name: "Vercel", color: "#000000" },
  { name: "Shopify", color: "#96BF48" },
  { name: "Slack", color: "#4A154B" },
];

const FeaturedCompanies = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Employers
          </h2>
          <p className="text-lg text-gray-600">
            Top companies actively hiring on Jobfy right now.
          </p>
        </div>

        {/* Marquee Row 1 */}
        <div className="overflow-hidden mb-6">
          <div className="flex gap-6 marquee-track">
            {[...companies, ...companies].map((company, i) => (
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

        {/* Marquee Row 2 (reverse) */}
        <div className="overflow-hidden">
          <div className="flex gap-6 marquee-track-reverse">
            {[
              ...companies.slice(5),
              ...companies,
              ...companies.slice(0, 5),
            ].map((company, i) => (
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
  );
};

export default FeaturedCompanies;
