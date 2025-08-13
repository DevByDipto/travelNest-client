import React from "react";
import { FaMapMarkedAlt, FaPlaneDeparture, FaUsers } from "react-icons/fa";
import AnimatedHeading from "../../Components/common/AnimatedHeading";
import SlideInLeftToRight from "../../Components/common/SlideInLeftToRight";
import SlideInRightToLeft from "../../Components/common/SlideInRightToLeft";
import CardFadeInUpAnimation from "../../Components/common/CardFadeInUpAnimation";

const About = () => {

  const features = [
  {
    icon: <FaMapMarkedAlt className="text-4xl mx-auto text-amber-500 mb-3" />,
    title: "Multiple Destinations",
    description: "Explore the beauty of Bangladesh with over 50+ tour locations.",
  },
  {
    icon: <FaPlaneDeparture className="text-4xl mx-auto text-amber-500 mb-3" />,
    title: "Easy Booking",
    description: "Quick & simple booking process with real-time confirmation.",
  },
  {
    icon: <FaUsers className="text-4xl mx-auto text-amber-500 mb-3" />,
    title: "Trusted Guides",
    description: "Our guides are experienced, friendly, and always ready to help.",
  },
];

  return (
    <div className="max-w-6xl mx-auto px-4  pt-28 md:pt-32">
      <AnimatedHeading normalText='About' highlightText='TravelNest'></AnimatedHeading>
      {/* <h1 className="text-4xl font-bold text-center mb-10">About<span className="text-amber-500">TravelNest</span></h1> */}

      <div className="pb-12 md:pb-32 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Description */}
        <SlideInLeftToRight>
 <div>
          <p className="text-lg dark:text-[#ECF9FF] text-gray-700 mb-4 leading-relaxed">
            Welcome to <span className="font-semibold text-amber-500">TravelNest</span>, your trusted companion for discovering beautiful destinations across Bangladesh. Whether you're looking for a beach escape, a mountain adventure, or a cultural trip — we've got the perfect package for you.
          </p>
          <p className="text-lg dark:text-[#ECF9FF] text-gray-700 mb-4">
            We work with experienced tour guides, provide top-quality accommodations, and ensure smooth bookings every time. Your journey begins here!
          </p>
        </div>
        </SlideInLeftToRight>
       

        {/* Right: Image */}
        <SlideInRightToLeft>
  <div>
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="About Travel"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
        </SlideInRightToLeft>
      
      </div>

      {/* Features */}
      <div className="pb-12 md:pb-32">
         <AnimatedHeading normalText='Our' highlightText='Features'></AnimatedHeading>
 {/* <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Our <span className='text-amber-500'>Features</span></h2> */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-center">
  {features.map((feature, i) => (
    <CardFadeInUpAnimation  key={i} index={i}>
<div
     
      className="p-6 border border-amber-400 rounded-xl shadow hover:shadow-lg transition"
    >
      {feature.icon}
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-600 dark:text-[#ECF9FF]">{feature.description}</p>
    </div>
    </CardFadeInUpAnimation>
    
  ))}
</div>
      </div>
      
    </div>
  );
};

export default About;
