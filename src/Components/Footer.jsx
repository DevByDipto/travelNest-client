import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content pt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo & Name */}
        <div>
          <h2 className="text-xl font-bold mb-2">🌍 TravelNest</h2>
          <p className="text-sm">Explore the world with us.</p>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Address</h3>
          <p className="text-sm">
            123 Travel Street<br />
            Dhaka, Bangladesh<br />
            Phone: +880 123 456 789
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Legal</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="link link-hover">Terms & Conditions</a></li>
            <li><a href="#" className="link link-hover">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#"><FaFacebookF className="hover:text-blue-600 transition" /></a>
            <a href="#"><FaTwitter className="hover:text-sky-400 transition" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-500 transition" /></a>
            <a href="#"><FaYoutube className="hover:text-red-600 transition" /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm border-t border-base-300 py-4">
        © {new Date().getFullYear()} TravelNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
