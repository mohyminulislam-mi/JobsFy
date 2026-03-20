import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const FeaturedJobs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Featured Jobs
          </h2>
          <p className="text-lg text-gray-600">
            Discover hand-picked opportunities from the best companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((job) => (
            <div
              key={job}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-soft-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-xl text-primary-600">
                  {String.fromCharCode(64 + job)}
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Full Time
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary-600 cursor-pointer transition-colors">
                Senior React Developer
              </h3>
              <div className="text-gray-500 text-sm flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4" /> San Francisco, CA (Remote)
              </div>
              <div className="flex gap-2 mb-6 flex-wrap">
                <span className="bg-gray-50 text-gray-600 px-3 py-1 rounded-lg text-sm">
                  React
                </span>
                <span className="bg-gray-50 text-gray-600 px-3 py-1 rounded-lg text-sm">
                  Next.js
                </span>
                <span className="bg-gray-50 text-gray-600 px-3 py-1 rounded-lg text-sm">
                  TypeScript
                </span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="font-bold text-gray-900">$120k - $150k</span>
                <Link
                  href="/jobs/1"
                  className="text-primary-600 font-semibold hover:text-primary-800 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl font-semibold transition-all"
          >
            View All Jobs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
