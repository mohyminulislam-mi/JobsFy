import React from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  DollarSign,
  Calendar,
  Star,
  Building,
  CheckCircle,
  Share2,
  BookmarkPlus,
  ArrowLeft,
} from "lucide-react";

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="bg-gray-50 flex-grow py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/jobs"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-600 transition-colors mb-6 font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Jobs
        </Link>

        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
              Senior Full Stack Engineer (React/Node.js)
            </h1>
            <div className="flex gap-3 w-full md:w-auto">
              <button className="flex-1 md:flex-none p-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 flex items-center justify-center transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="flex-1 md:flex-none p-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 flex items-center justify-center transition-colors">
                <BookmarkPlus className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 font-medium">
            <span className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm">
              <DollarSign className="w-4 h-4" /> $130,000 - $160,000 / yr
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-400" /> Remote (USA)
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-400" /> Full-time
            </span>
            <span className="flex items-center gap-2 border-l border-gray-200 pl-6 text-sm">
              Posted 2 days ago
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            {/* Job Description */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Job Description
              </h2>
              <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4 text-base">
                <p>
                  We are seeking a talented and passionate Senior Full Stack
                  Engineer to join our fast-growing startup. You will be
                  instrumental in architecting, building, and scaling our core
                  communications platform utilized by thousands of businesses
                  globally.
                </p>
                <h3 className="text-gray-900 font-bold text-lg mt-6">
                  What you'll do:
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Design and implement scalable microservices using Node.js
                    and TypeScript.
                  </li>
                  <li>
                    Build highly responsive and intuitive user interfaces with
                    React and Next.js.
                  </li>
                  <li>
                    Collaborate closely with product managers and designers to
                    deliver robust features.
                  </li>
                  <li>
                    Perform code reviews, mentor junior engineers, and uphold
                    best practices.
                  </li>
                </ul>
                <h3 className="text-gray-900 font-bold text-lg mt-6">
                  Requirements:
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    5+ years of professional full-stack development experience.
                  </li>
                  <li>
                    Deep expertise in React, Next.js, and state management
                    libraries.
                  </li>
                  <li>
                    Strong proficiency in Node.js, Express, and REST/GraphQL
                    APIs.
                  </li>
                  <li>
                    Experience with PostgreSQL, Redis, and message queues
                    (RabbitMQ/Kafka).
                  </li>
                </ul>
              </div>

              <div className="mt-8 border-t border-gray-100 pt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Required Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Node.js",
                    "Typescript",
                    "Next.js",
                    "PostgreSQL",
                    "AWS",
                    "GraphQL",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-xl text-sm font-semibold border border-indigo-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Proposal / Apply Form */}
            <div className="bg-white rounded-2xl shadow-soft border w-full border-primary-100 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Building className="w-32 h-32 text-primary-900" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Submit Your Proposal
                </h2>
                <p className="text-gray-500 mb-6 font-medium">
                  Write a compelling proposal outlining why you're the best fit
                  for this role.
                </p>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Cover Letter / Proposal
                    </label>
                    <textarea
                      rows={6}
                      className="w-full bg-white border border-gray-200 rounded-xl p-4 text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow outline-none resize-y"
                      placeholder="Hi, I'm excited to apply for this position because..."
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Expected Rate / Salary Tracker
                    </label>
                    <div className="relative rounded-md shadow-sm xl:w-1/2">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="number"
                        className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-8 pr-12 sm:text-sm border-gray-300 rounded-xl py-4 bg-gray-50 focus:bg-white transition-colors"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-soft hover:shadow-lg hover:-translate-y-0.5"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            {/* Client Profile Card */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Building className="w-5 h-5" /> About the Client
              </h3>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-indigo-100 rounded-2xl flex items-center justify-center font-bold text-2xl text-primary-700 shadow-inner">
                  T
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    TechCorp Inc.
                  </h4>
                  <div className="flex items-center text-yellow-500 text-sm font-medium">
                    <Star className="w-4 h-4 fill-yellow-500 mr-1" /> 4.9{" "}
                    <span className="text-gray-400 ml-1">(120 reviews)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 border-t border-gray-100 pt-4 mt-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" /> San Francisco, CA
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" /> Payment
                  method verified
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Building className="w-4 h-4" /> 500+ employees
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" /> Member since 2019
                </div>
              </div>

              <button className="w-full mt-6 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 py-3 rounded-xl font-semibold transition-colors">
                View Company Profile
              </button>
            </div>

            {/* Similar Jobs */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Similar Jobs
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((job) => (
                  <Link
                    href={`/jobs/${job}`}
                    key={job}
                    className="block group border-b border-gray-50 last:border-0 pb-4 last:pb-0"
                  >
                    <h4 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-1 line-clamp-1">
                      React Desktop Engineer
                    </h4>
                    <p className="text-sm text-gray-500 mb-2">
                      InnovateHQ • Remote
                    </p>
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-green-600">$120k - $140k</span>
                      <span className="text-gray-400">1 day ago</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
