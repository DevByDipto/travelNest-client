import React from "react";
import { FaMapMarkedAlt, FaPlaneDeparture, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 ">About <span className="text-amber-500">TravelNest</span></h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Description */}
        <div>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Welcome to <span className="font-semibold text-amber-500">TravelNest</span>, your trusted companion for discovering beautiful destinations across Bangladesh. Whether you're looking for a beach escape, a mountain adventure, or a cultural trip — we've got the perfect package for you.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We work with experienced tour guides, provide top-quality accommodations, and ensure smooth bookings every time. Your journey begins here!
          </p>
        </div>

        {/* Right: Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="About Travel"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-center">
        <div className="p-6 border border-amber-400 rounded-xl shadow hover:shadow-lg transition">
          <FaMapMarkedAlt className="text-4xl mx-auto text-amber-500 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Multiple Destinations</h3>
          <p className="text-gray-600">Explore the beauty of Bangladesh with over 50+ tour locations.</p>
        </div>
        <div className="p-6 border border-amber-400 rounded-xl shadow hover:shadow-lg transition">
          <FaPlaneDeparture className="text-4xl mx-auto text-amber-500 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
          <p className="text-gray-600">Quick & simple booking process with real-time confirmation.</p>
        </div>
        <div className="p-6 border border-amber-400 rounded-xl shadow hover:shadow-lg transition">
          <FaUsers className="text-4xl mx-auto text-amber-500 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Trusted Guides</h3>
          <p className="text-gray-600">Our guides are experienced, friendly, and always ready to help.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
