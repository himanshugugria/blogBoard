import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 py-10 border-t border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col justify-between">
            <div className="mb-4 flex items-center">
              <Logo width="100px" />
              <span className="ml-2 text-xl font-bold text-white">BLOGBOARD</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              © {new Date().getFullYear()} BLOGBOARD. All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition">Features</Link></li>
              <li><Link to="/" className="hover:text-white transition">Pricing</Link></li>
              <li><Link to="/" className="hover:text-white transition">Affiliate Program</Link></li>
              <li><Link to="/" className="hover:text-white transition">Press Kit</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition">Account</Link></li>
              <li><Link to="/" className="hover:text-white transition">Help</Link></li>
              <li><Link to="/" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link to="/" className="hover:text-white transition">Customer Support</Link></li>
            </ul>
          </div>

          {/* Legals */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Legals
            </h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition">Terms &amp; Conditions</Link></li>
              <li><Link to="/" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-white transition">Licensing</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
