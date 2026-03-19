import React from "react";
import { Home } from "lucide-react";
import Link from "next/link";
import BackButton from "@/components/shared/BackButton";


const NotFound = () => {
  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* Decorative Element */}
        <p className="text-8xl font-bold text-primary-600">404</p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>

        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn't find the page you were looking for. You may have
          entered the wrong link. Please try again.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          {/* Primary Action */}
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all"
          >
            <Home size={18} />
            Back to home
          </Link>

          {/* Secondary Action */}
          <BackButton>Return</BackButton>
        </div>

        {/* Optional: Helpful links */}
        <div className="mt-16 border-t border-gray-100 pt-10">
          <p className="text-sm text-gray-500">
            Need help?{" "}
            <Link
              href="/contact"
              className="font-medium text-primary-600 hover:underline"
            >
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;