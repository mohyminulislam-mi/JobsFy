import React from "react";

const TrustedCompanies = () => {
  return (
    <section className="py-10 border-y border-gray-100 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
          Trusted by 10,000+ companies worldwide
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {["Google", "Microsoft", "Airbnb", "Spotify", "Stripe"].map(
            (company) => (
              <div
                key={company}
                className="text-2xl font-bold font-sans text-gray-800"
              >
                {company}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
