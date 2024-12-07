"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
       
      <div className="container mx-auto px-4 text-center">
        {/* Top section: Social Links */}
        <div className="mb-4">
          <a
            href="#"
            className="text-yellow-500 hover:text-white mx-2 transition duration-300"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-yellow-500 hover:text-white mx-2 transition duration-300"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-yellow-500 hover:text-white mx-2 transition duration-300"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-yellow-500 hover:text-white mx-2 transition duration-300"
          >
            LinkedIn
          </a>
        </div>

        {/* Middle section: Quick Links */}
        <div className="mb-4 flex justify-center space-x-6">
          <a
            href="#"
            className="text-white hover:text-yellow-500 transition duration-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow-500 transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow-500 transition duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow-500 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Bottom section: Copyright */}
        <div className="text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Thiraiaragam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
