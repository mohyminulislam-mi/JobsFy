"use client";
import React from "react";
import Link from "next/link";
import { Search, Bell, MessageSquare, Briefcase, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Desktop Nav */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                Jobfy.
              </span>
            </Link>

            <div className="hidden md:flex space-x-1">
              <Link
                href="/jobs"
                className="px-4 py-2 text-gray-600 hover:text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
              >
                Find Jobs
              </Link>
              <Link
                href="/feed"
                className="px-4 py-2 text-gray-600 hover:text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
              >
                Social Feed
              </Link>
              <Link
                href="/chat/ai"
                className="px-4 py-2 text-primary-600 font-medium rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors flex items-center gap-2"
              >
                Ask AI{" "}
                <span className="flex h-2 w-2 rounded-full bg-primary-600"></span>
              </Link>
            </div>
          </div>

          {/* Right section - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3 border-r border-gray-200 pr-4">
              <Link
                href="/chat"
                className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors relative"
              >
                <MessageSquare className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </Link>
              <button className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </button>
            </div>

            <Link
              href="/profile"
              className="text-gray-600 font-medium hover:text-gray-900 px-4 py-2"
            >
              Login
            </Link>
            <Link
              href="/profile"
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-soft transition-all hover:-translate-y-0.5"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/jobs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
            >
              Find Jobs
            </Link>
            <Link
              href="/feed"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
            >
              Social Feed
            </Link>
            <Link
              href="/chat/ai"
              className="block px-3 py-2 rounded-md text-base font-medium text-primary-600 bg-primary-50"
            >
              Ask AI
            </Link>
            <Link
              href="/chat"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
            >
              Messages
            </Link>
            <Link
              href="/profile"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
            >
              Profile
            </Link>
          </div>
          <div className="pt-4 pb-4 border-t border-gray-200 px-4 flex flex-col gap-2">
            <Link
              href="/profile"
              className="block text-center px-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              Login
            </Link>
            <Link
              href="/profile"
              className="block text-center px-4 py-2 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Header;
