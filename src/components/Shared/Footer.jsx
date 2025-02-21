import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-main to-indigo-600 text-white">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">TaskNest</h3>
            <p className="text-sm text-gray-200">
              Making the world better through innovative solutions.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-300" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-gray-300" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-gray-300">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300">
                  Development
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <p className="text-sm flex items-center gap-2">
                <Mail className="w-4 h-4" />
                tasknestofficial@gmail.com
              </p>
              <button className="mt-4 bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-200">
            © 2025 Your Company. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-200">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
