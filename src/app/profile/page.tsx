import React from 'react';
import Link from 'next/link';
import { MapPin, Link as LinkIcon, Calendar, Github, Twitter, Linkedin, Star, Mail, Award, CheckCircle2, MessageSquare, ExternalLink, Clock } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="bg-gray-50 flex-grow py-8 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Profile Header Card */}
        <div className="bg-white rounded-3xl shadow-soft border border-gray-100 overflow-hidden mb-8">
          <div className="h-48 bg-gradient-to-r from-indigo-500 via-primary-500 to-blue-500 relative">
            <button className="absolute top-4 right-4 bg-black/20 hover:bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors">
              Edit Cover
            </button>
          </div>

          <div className="px-8 pb-8 relative">
            <div className="flex flex-col md:flex-row gap-6 md:items-end -mt-20 mb-6">
              <div className="w-40 h-40 rounded-3xl border-4 border-white shadow-md overflow-hidden bg-white shrink-0">
                <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
              </div>

              <div className="flex-grow pt-4">
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
                  <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-2">
                      Alex Frontend <CheckCircle2 className="w-6 h-6 text-primary-500" />
                    </h1>
                    <p className="text-lg text-gray-600 font-medium mt-1">Senior UI/UX Engineer</p>
                  </div>

                  <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-primary-300 text-gray-700 hover:text-primary-700 px-6 py-2.5 rounded-xl font-semibold transition-all shadow-sm">
                      <Mail className="w-5 h-5" /> Hire Me
                    </button>
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all shadow-soft min-w-[140px]">
                      <MessageSquare className="w-5 h-5" /> Message
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-gray-600 font-medium border-t border-gray-100 pt-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-400" /> San Francisco, CA
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" /> 4.9 (124 Reviews)
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary-500" /> Top Rated Plus
              </div>
              <div className="flex items-center gap-2">
                <LinkIcon className="w-5 h-5 text-gray-400" /> <a href="#" className="text-primary-600 hover:underline">alexui.dev</a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Main Content (Left column) */}
          <div className="md:col-span-2 flex flex-col gap-8">

            {/* About */}
            <div className="bg-white rounded-3xl shadow-soft border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">About Me</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                I'm a passionate UI/UX Engineer with over 8 years of experience creating beautiful, intuitive, and accessible digital products. I specialize in building complex web applications with React, Next.js, and modern CSS frameworks like Tailwind.
                <br /><br />
                My hybrid background in both design and engineering enables me to bridge the gap between creative teams and developers, ensuring perfect implementation of sophisticated designs.
              </p>
            </div>

            {/* Portfolio Grid */}
            <div className="bg-white rounded-3xl shadow-soft border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Portfolio</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="group relative rounded-2xl overflow-hidden border border-gray-100 cursor-pointer">
                    <img src={`https://picsum.photos/seed/${item * 20}/600/400`} alt="Project" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                      <h3 className="text-white font-bold text-lg">Fintech Dashboard UI</h3>
                      <p className="text-gray-300 text-sm mt-1">React, Tailwind, Framer Motion</p>
                      <button className="w-10 h-10 mt-4 bg-primary-600 rounded-full flex items-center justify-center text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all shadow-lg">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-3xl shadow-soft border border-gray-100 p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Reviews</h2>
                <span className="text-primary-600 font-semibold hover:underline cursor-pointer">View all 124 reviews</span>
              </div>

              <div className="space-y-6">
                {[1, 2].map((review) => (
                  <div key={review} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Complete Frontend Redesign for SaaS Platform</h3>
                    <div className="flex items-center gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                      <span className="text-gray-900 font-bold text-sm ml-2">5.0</span>
                      <span className="text-gray-400 text-sm ml-2">Aug 2023 - Sep 2023</span>
                    </div>
                    <p className="text-gray-600 mb-4 italic">"Alex is phenomenal. Delivered ahead of schedule and the quality of the React code and Tailwind styling was perfect. Highly recommended for any complex UI tasks."</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?img=${review + 30}`} alt="Client" className="w-full h-full object-cover" />
                      </div>
                      <p className="text-sm font-medium text-gray-900">Michael S., CEO at TechFlow</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="flex flex-col gap-8">

            {/* Skills Details */}
            <div className="bg-white rounded-3xl shadow-soft border border-gray-100 p-8">
              <h2 className="font-bold text-gray-900 mb-5">Skills & Expertise</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Typescript', 'Vue.js', 'Tailwind CSS'].map(s => (
                      <span key={s} className="bg-secondary bg-gray-100 text-gray-700 px-3 py-1.5 rounded-xl text-sm font-medium">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Design</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping'].map(s => (
                      <span key={s} className="bg-primary-50 text-primary-700 border border-primary-100 px-3 py-1.5 rounded-xl text-sm font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-3xl shadow-soft border border-gray-100 p-8">
              <h2 className="font-bold text-gray-900 mb-4">Availability</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Available to work</h4>
                    <p className="text-xs text-gray-500">More than 30 hrs/week</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 text-gray-600 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Response time</h4>
                    <p className="text-xs text-gray-500">Usually within 2 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-3xl shadow-soft border border-gray-100 p-8">
              <h2 className="font-bold text-gray-900 mb-4">Linked Accounts</h2>
              <div className="space-y-3">
                <a href="#" className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-gray-700" />
                    <span className="font-medium text-gray-700">GitHub</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                </a>
                <a href="#" className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-gray-700">LinkedIn</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                </a>
                <a href="#" className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <Twitter className="w-5 h-5 text-sky-500" />
                    <span className="font-medium text-gray-700">Twitter</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
