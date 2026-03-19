import React from "react";
import { Search, MapPin } from "lucide-react";
const Hero = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary-100/50 rounded-full blur-3xl rounded-full"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
          Find Jobs &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">
            Hire Talent Faster
          </span>
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Connect with top companies and the best freelance talent on the
          world's most dynamic job marketplace powered by AI.
        </p>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-soft-lg border border-gray-100 p-2 flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex items-center px-4 bg-gray-50 rounded-xl">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="w-full bg-transparent border-none focus:ring-0 px-4 py-3 text-gray-900 placeholder-gray-500"
            />
          </div>
          <div className="flex-1 flex items-center px-4 bg-gray-50 rounded-xl">
            <MapPin className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="City, state, or zip code"
              className="w-full bg-transparent border-none focus:ring-0 px-4 py-3 text-gray-900 placeholder-gray-500"
            />
          </div>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 md:w-auto w-full">
            Find Jobs
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-4 text-sm text-gray-500">
          <span>Popular:</span>
          <a href="#" className="hover:text-primary-600 transition-colors">
            UI Designer
          </a>
          <a href="#" className="hover:text-primary-600 transition-colors">
            Frontend Dev
          </a>
          <a href="#" className="hover:text-primary-600 transition-colors">
            Product Manager
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
