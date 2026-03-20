import React from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  Filter,
  Clock,
  DollarSign,
  Bookmark,
} from "lucide-react";

export default function JobsPage() {
  return (
    <div className="bg-gray-50 flex-grow py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Search Bar */}
        <div className="bg-white rounded-2xl shadow-soft p-4 flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 flex items-center bg-gray-50 rounded-xl px-4 py-2 border border-gray-100">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for jobs..."
              className="w-full bg-transparent border-none focus:ring-0 px-4 py-2 text-gray-900"
            />
          </div>
          <div className="flex-1 flex items-center bg-gray-50 rounded-xl px-4 py-2 border border-gray-100">
            <MapPin className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Location..."
              className="w-full bg-transparent border-none focus:ring-0 px-4 py-2 text-gray-900"
            />
          </div>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-semibold transition-all w-full md:w-auto">
            Search
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar Filter (Sticky on Desktop) */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-soft p-6 border border-gray-100 sticky top-24">
              <div className="flex items-center gap-2 font-bold text-lg mb-6 text-gray-900">
                <Filter className="w-5 h-5" /> Filters
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
                <div className="space-y-3">
                  {[
                    "Development",
                    "Design",
                    "Marketing",
                    "Data Science",
                    "Sales",
                  ].map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-gray-600 group-hover:text-primary-600 transition-colors">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6 border-t border-gray-100 pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Budget Range
                </h3>
                <div className="space-y-3">
                  {["$0 - $50k", "$50k - $100k", "$100k - $150k", "$150k+"].map(
                    (range) => (
                      <label
                        key={range}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-gray-600 group-hover:text-primary-600 transition-colors">
                          {range}
                        </span>
                      </label>
                    ),
                  )}
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Experience Level
                </h3>
                <div className="space-y-3">
                  {["Entry Level", "Intermediate", "Expert"].map((level) => (
                    <label
                      key={level}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-gray-600 group-hover:text-primary-600 transition-colors">
                        {level}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content: Job Cards */}
          <div className="lg:w-3/4 flex flex-col gap-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-gray-900">
                Showing 420 Jobs
              </h2>
              <select className="bg-white border text-sm border-gray-200 text-gray-700 rounded-lg px-3 py-2 focus:ring-primary-500">
                <option>Sort by: Newest</option>
                <option>Sort by: Salary</option>
                <option>Sort by: Relevance</option>
              </select>
            </div>

            {[1, 2, 3, 4, 5, 6].map((job) => (
              <div
                key={job}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-soft-lg hover:border-primary-100 transition-all flex flex-col md:flex-row gap-6 group"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-xl flex-shrink-0 flex items-center justify-center font-bold text-2xl text-primary-600 border border-gray-100">
                  {String.fromCharCode(64 + job)}
                </div>

                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <Link
                        href={`/jobs/${job}`}
                        className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors block mb-1"
                      >
                        Senior Full Stack Engineer
                      </Link>
                      <p className="text-primary-600 font-medium text-sm">
                        TechCorp Inc.
                      </p>
                    </div>
                    <button className="text-gray-400 hover:text-primary-500 transition-colors bg-gray-50 p-2 rounded-lg">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" /> Remote (US)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" /> Full-time
                    </span>
                    <span className="flex items-center gap-1.5">
                      <DollarSign className="w-4 h-4" /> $130k - $160k
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    We're looking for an experienced Full Stack Engineer to join
                    our core product team. You will be working with React,
                    Node.js, and modern cloud infrastructure to build scalable
                    features used by millions.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React", "Node.js", "PostgreSQL", "AWS"].map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
                    <span className="text-xs text-gray-400">
                      Posted 2 days ago
                    </span>
                    <Link
                      href={`/jobs/${job}`}
                      className="bg-primary-50 text-primary-600 hover:bg-primary-600 hover:text-white px-5 py-2 rounded-lg font-medium transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination Placeholder */}
            <div className="flex justify-center mt-8 gap-2">
              <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50">
                &laquo;
              </button>
              <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary-600 text-white font-medium shadow-soft">
                1
              </button>
              <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-50">
                2
              </button>
              <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-50">
                3
              </button>
              <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50">
                &raquo;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
