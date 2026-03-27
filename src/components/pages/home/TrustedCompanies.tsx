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

const TrustedCompanies = () => {
  return (
    <section className="py-10 border-y border-gray-100 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
          Trusted by 10,000+ companies worldwide
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {companies.slice(0, 5).map((c) => (
            <div
              key={c.name}
              className="text-2xl font-bold font-sans text-gray-800"
            >
              {c.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
