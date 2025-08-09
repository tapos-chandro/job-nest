import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">JobPortal</h3>
          <p className="text-gray-400">
            Helping you find your dream job with ease and confidence.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white text-md font-semibold mb-4">Navigate</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-indigo-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/jobs" className="hover:text-indigo-400">
                Jobs
              </Link>
            </li>
            <li>
              <Link href="/companies" className="hover:text-indigo-400">
                Companies
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-indigo-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-indigo-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white text-md font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/faq" className="hover:text-indigo-400">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-indigo-400">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-indigo-400">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-indigo-400">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white text-md font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22 12a10 10 0 10-11.5 9.87v-7h-3v-3h3v-2.3c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.24 2.7.24v3h-1.5c-1.5 0-2 1-2 2v2.2h3.4l-.5 3h-2.9v7A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11 19h-3v-9h3zm-1.5-10.3a1.8 1.8 0 111.8-1.8 1.8 1.8 0 01-1.8 1.8zm13.5 10.3h-3v-4.7c0-1.1 0-2.5-1.5-2.5s-1.7 1.1-1.7 2.4v4.8h-3v-9h3v1.3h.1a3.3 3.3 0 013-1.7c3.2 0 3.8 2.1 3.8 4.8v4.6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  );
}
