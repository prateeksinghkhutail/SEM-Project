import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span>QuickSell</span>
          </div>

          {/* Center Links */}
          <div className="hidden sm:flex sm:space-x-8">
            <Link
              href="#"
              className="border-b-2 border-transparent hover:border-indigo-500 text-gray-900 font-medium inline-flex items-center px-1 pt-1 text-sm"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="border-b-2 border-transparent hover:border-indigo-500 text-gray-500 font-medium inline-flex items-center px-1 pt-1 text-sm"
            >
              Team
            </Link>
            <Link
              href="#"
              className="border-b-2 border-transparent hover:border-indigo-500 text-gray-500 font-medium inline-flex items-center px-1 pt-1 text-sm"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="border-b-2 border-transparent hover:border-indigo-500 text-gray-500 font-medium inline-flex items-center px-1 pt-1 text-sm"
            >
              Calendar
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            {/* Notification Icon */}
            <button
              type="button"
              className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <span className="sr-only">View notifications</span>
              {/* Notification Bell Icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405C18.721 14.523 18 13.337 18 12V8a6 6 0 00-9.33-4.95A6.006 6.006 0 006 8v4c0 1.337-.721 2.523-1.595 3.595L3 17h5m7 0v2a3 3 0 11-6 0v-2m6 0H9"
                />
              </svg>
            </button>

            {/* User Profile */}
            <div className="relative">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="/profilePic.svg" // Replace with your profile picture
                alt="User Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}