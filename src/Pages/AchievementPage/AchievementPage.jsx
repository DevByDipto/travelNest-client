import React from "react";
import SlideInLeftToRight from "../../Components/common/SlideInLeftToRight";
import SlideInRightToLeft from "../../Components/common/SlideInRightToLeft";
import CountUp from "react-countup";
import { motion} from "framer-motion";
import CardFadeInUpAnimation from "../../Components/common/CardFadeInUpAnimation";
import AnimatedHeading from "../../Components/common/AnimatedHeading";


const AchievementPage = () => {
  const stats = [
  { value: 500, label: "Projects Completed" },
  { value: 120, label: "Awards Won" },
  { value: 300, label: "Happy Clients" },
  { value: 50, label: "Tours Organized" },
];

const teamMembers = [
  {
    name: "Alice Williams",
    role: "Event Manager",
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Robert Brown",
    role: "Guide Leader",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Jessica Lee",
    role: "Project Manager",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
  }
];

  return (
    <div className="">

      {/* Section 1: Achievement and Award */}
     <section className="pb-16 md:pb-32 pt-20 md:pt-40 ">
  <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    {/* Left Content */}
    <SlideInLeftToRight>
<div className="bg-gray-50 dark:bg-[#182432] shadow-lg rounded-2xl p-8">
      <h4 className="font-bold uppercase tracking-wider mb-2 text-amber-500">
        Achievement
      </h4>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-700 dark:text-[#ECF9FF] mb-4">
        Our Achievements and Awards
      </h2>
      <p className="text-gray-700 dark:text-[#ECF9FF]">
        Over the years, we have successfully completed over 500 projects across various industries, earning 120+ prestigious awards for innovation and excellence. Our commitment to delivering quality solutions has earned us the trust of 300+ satisfied clients worldwide.
      </p>
    </div>
    </SlideInLeftToRight>
    

    {/* Right Content */}
    <SlideInRightToLeft>
 <div>
      <p className="text-gray-700 dark:text-[#ECF9FF] mb-6">
        Our journey is marked by consistent growth and dedication to excellence. We focus on creating innovative, reliable, and scalable solutions that meet our clients' needs. Our team’s expertise and passion ensure every project is a success story.
      </p>
      <p className="text-gray-700 dark:text-[#ECF9FF]">
        We continue to push boundaries, setting new standards in quality and client satisfaction. Join us as we build the future with passion, precision, and purpose.
      </p>
   


            {/* Logos Row */}
            {/* <div className="flex flex-wrap items-center gap-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Quality_Circle_Logo.svg/1200px-Quality_Circle_Logo.svg.png"
                alt="QC"
                className="h-12"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Ultraman_logo.svg/1024px-Ultraman_logo.svg.png"
                alt="Ultra"
                className="h-12"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Mega_logo.svg/1024px-Mega_logo.svg.png"
                alt="Mega"
                className="h-12"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Hyper_Logo.svg/1024px-Hyper_Logo.svg.png"
                alt="Hyper"
                className="h-12"
              />
            </div> */}
          </div>
    </SlideInRightToLeft>
   
        </div>
      </section>

      {/* Section 2: Statistics */}
       <section className="py-16 bg-gray-50 dark:bg-[#182432]">
        <CardFadeInUpAnimation>
 <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-4xl font-bold text-amber-500">
              <CountUp end={stat.value} duration={2.5}  />+
            </h3>
            <p className="text-gray-700 dark:text-[#ECF9FF]">{stat.label}</p>
          </div>
        ))}
      </div>
        </CardFadeInUpAnimation>
     
    </section>

      {/* New Section 3: Our Team */}
      <section className="py-16 md:py-32">
        <div
     
        className="container mx-auto px-6 lg:px-20">
          <AnimatedHeading normalText='Meet' highlightText='Our Team' />            
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <motion.div 
           initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        key={index} className="text-center">
          <img
            src={member.img}
            alt={member.name}
            className="mx-auto rounded-full h-40 w-40 object-cover mb-4"
          />
          <h4 className="font-bold text-lg">{member.name}</h4>
          <p className="text-gray-700 dark:text-[#ECF9FF]">{member.role}</p>
        </motion.div>
      ))}
    </div>

         
        </div>
      </section>

    </div>
  );
};

export default AchievementPage;
