import React from 'react';
import { FaSuitcase, FaUserTie, FaSpa, FaPassport } from 'react-icons/fa';
import { motion } from "framer-motion";
import AnimatedHeading from '../../Components/common/AnimatedHeading';
import CardFadeInUpAnimation from '../../Components/common/CardFadeInUpAnimation';
import AnimatedSubHeading from '../../Components/common/AnimatedSubHeading';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaSuitcase size={40} className="text-amber-500" />,
      title: "Best Travel Agents",
      description: "Choose us, and you'll enjoy exclusive offers and 24/7 dedicated customer service"
    },
    {
      icon: <FaUserTie size={40} className="text-amber-500" />,
      title: "Professional team",
      description: "With a professional team, we are committed to bringing you perfect vacations."
    },
    {
      icon: <FaSpa size={40} className="text-amber-500" />,
      title: "New experience",
      description: "We turn your travel dreams into reality with unforgettable and safe experiences"
    },
    {
      icon: <FaPassport size={40} className="text-amber-500" />,
      title: "Price and quality",
      description: "Explore the world with us on unique journeys, competitive prices, and 5-star service"
    },
  ];



  return (
    <div className="py-16 md:py-32 px-4 text-center">
  {/* <motion.h2
      className="text-3xl md:text-4xl font-bold mb-4"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block", whiteSpace: "pre" }} // space preserve
        >
          {char}
        </motion.span>
      ))}
    </motion.h2> */}

<AnimatedHeading normalText="Why choose" highlightText=" TravelNest"/>

<AnimatedSubHeading text='Discover the difference with our expert team and top-tier travel experiences.' />


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {features.map((item, i) => (
          <CardFadeInUpAnimation key={i} index={i}>
          <div  className="flex flex-col items-center text-center px-5 py-10 hover:shadow-2xl hover:px-5 hover:py-10 rounded-2xl transition border border-amber-400 dark:bg-[#182432]">
            <div className="bg-amber-100 p-4 rounded-xl mb-4">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-600 dark:text-[#ECF9FF] text-sm mt-2">{item.description}</p>
          </div>
        </CardFadeInUpAnimation>
         
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
