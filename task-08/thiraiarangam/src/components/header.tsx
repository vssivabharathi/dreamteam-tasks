"use client";

import React, { useState, useRef } from "react";
import Link from "next/link"; // Import Link from Next.js

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dropdown states for mobile
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLogsMenuOpen, setIsLogsMenuOpen] = useState(false);
  const [isFilmsMenuOpen, setIsFilmsMenuOpen] = useState(false);

  // Timers to delay hiding the dropdown
  const profileTimeout = useRef<NodeJS.Timeout | null>(null);
  const logsTimeout = useRef<NodeJS.Timeout | null>(null);
  const filmsTimeout = useRef<NodeJS.Timeout | null>(null);

  const delay = 300; // delay in milliseconds (adjust as needed)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuToggle = (menu: string) => {
    switch (menu) {
      case "profile":
        setIsProfileMenuOpen(!isProfileMenuOpen);
        break;
      case "logs":
        setIsLogsMenuOpen(!isLogsMenuOpen);
        break;
      case "films":
        setIsFilmsMenuOpen(!isFilmsMenuOpen);
        break;
      default:
        break;
    }
  };

  return (
    <nav className="bg-gray-900 text-white px-4 py-2 flex items-center justify-between relative">
      {/* Left Side: Logo */}
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold hover:text-yellow-500 transition duration-300">
          🎬 Thiraiaragam
        </div>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/" className="hover:text-yellow-500 transition duration-300">
          Home
        </Link>

        {/* Profile Link with Dropdown */}
        <div className="relative">
          <button
            onClick={() => handleMobileMenuToggle("profile")}
            className="hover:text-yellow-500 transition duration-300"
          >
            Profile
          </button>
          {isProfileMenuOpen && (
            <div className="absolute left-0 mt-2 bg-gray-800 text-white rounded-md w-48 p-2 space-y-2">
              <Link
                href="/login"
                className="block hover:text-yellow-500 transition duration-300"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="block hover:text-yellow-500 transition duration-300"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Logs Link with Dropdown */}
        <div className="relative">
          <button
            onClick={() => handleMobileMenuToggle("logs")}
            className="hover:text-green-500 transition duration-300"
          >
            Logs
          </button>
          {isLogsMenuOpen && (
            <div className="absolute left-0 mt-2 bg-gray-800 text-white rounded-md w-48 p-2 space-y-2">
              <Link
                href="#"
                className="block hover:text-green-500 transition duration-300"
              >
                Make Log
              </Link>
              <Link
                href="#"
                className="block hover:text-red-500 transition duration-300"
              >
                Log History
              </Link>
            </div>
          )}
        </div>

        {/* Films Link with Dropdown */}
        <div className="relative">
          <button
            onClick={() => handleMobileMenuToggle("films")}
            className="hover:text-yellow-500 transition duration-300"
          >
            Categories
          </button>
          {isFilmsMenuOpen && (
            <div className="absolute left-0 mt-2 bg-gray-800 text-white rounded-md w-48 p-2 space-y-2">
              <Link
                href="#"
                className="block hover:text-yellow-500 transition duration-300"
              >
                Flim
              </Link>
              <Link
                href="#"
                className="block hover:text-yellow-500 transition duration-300"
              >
                TV Shows
              </Link>
            </div>
          )}
        </div>

        <Link href="#" className="hover:text-yellow-500 transition duration-300">
          Trending
        </Link>
        <Link href="/watchlist" className="hover:text-yellow-500 transition duration-300">
          Watchlist
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-white"
        onClick={toggleMobileMenu}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-gray-900 text-white md:hidden flex flex-col space-y-4 p-4">
          {/* Profile Dropdown in Mobile */}
          <div className="relative">
            <button
              onClick={() => handleMobileMenuToggle("profile")}
              className="hover:text-yellow-500 transition duration-300"
            >
              Profile
            </button>
            {isProfileMenuOpen && (
              <div className="absolute left-0 mt-2 bg-gray-800 text-white rounded-md w-48 p-2 space-y-2">
                <Link
                  href="#"
                  className="block hover:text-yellow-500 transition duration-300"
                >
                  Sign In
                </Link>
                <Link
                  href="#"
                  className="block hover:text-yellow-500 transition duration-300"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Logs Dropdown in Mobile */}
          <div className="relative">
            <button
              onClick={() => handleMobileMenuToggle("logs")}
              className="hover:text-green-500 transition duration-300"
            >
              Logs
            </button>
            {isLogsMenuOpen && (
              <div className="absolute left-0 mt-2 bg-gray-800 text-white rounded-md w-48 p-2 space-y-2">
                <Link
                  href="#"
                  className="block hover:text-grey-500 transition duration-300"
                >
                  Make Log
                </Link>
                <Link
                  href="#"
                  className="block hover:text-red-500 transition duration-300"
                >
                  Log History
                </Link>
              </div>
            )}
          </div>

          {/* Films Dropdown in Mobile */}
          <div className="relative">
            <button
              onClick={() => handleMobileMenuToggle("films")}
              className="hover:text-yellow-500 transition duration-300"
            >
              Films
            </button>
            {isFilmsMenuOpen && (
              <div className="absolute left-0 mt-2 bg-gray-800 text-white rounded-md w-48 p-2 space-y-2">
                <Link
                  href="#"
                  className="block hover:text-yellow-500 transition duration-300"
                >
                  Categories
                </Link>
              </div>
            )}
          </div>

          <Link
            href="#"
            className="block hover:text-yellow-500 transition duration-300"
          >
            Trending
          </Link>
          <Link
            href="/watchlist"
            className="block hover:text-yellow-500 transition duration-300"
          >
            Watchlist
          </Link>

          {/* Search inside Mobile Dropdown */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-white rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 w-full"
            />
          </div>
        </div>
      )}

      {/* Right Side: Search (Only for Desktop) */}
      <div className="relative hidden md:block">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-800 text-white rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
        />
      </div>
    </nav>
  );
};

export default NavBar;
