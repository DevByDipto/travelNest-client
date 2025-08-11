import React from "react";
import Button from "../common/Button";
import { NavLink } from "react-router";

const Banner = () => {
  return (
    <div
      className="hero min-h-[600px]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/mC3kWWkK/pexels-francesco-ungaro-2325446.jpg)",
      }}
    >
      <div className="relative bg-[#1d1b1b23]  w-full h-full z-0"></div>

      <div className="text-white text-center z-10 mt-20">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl lg:text-5xl font-bold">
            Explore the World <span className="text-amber-500">with TravelNest</span>
          </h1>
          <p className="mb-5 p-5 md:p-0 md:text-xl lg:text-lg">
            Discover unforgettable journeys tailored just for you. From the
            serene hills of Sajek to the vibrant beaches of Cox’s Bazar —
            TravelNest brings you the most exciting tour packages with expert
            guides, comfortable plans, and unforgettable memories.
          </p>
          <NavLink to="/all-packages">
            <Button className="border-none shadow-none text-white transition duration-300">
              Explore All Packages
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
