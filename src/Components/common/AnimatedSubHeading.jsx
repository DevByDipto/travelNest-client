import { motion } from "framer-motion";

const AnimatedSubHeading = ({text,className}) => {
//   const text = "Why choose TravelNest";
  const letters = text.split(""); // space সহ প্রতিটা letter array

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: 0 * i }
    })
  };

  const child = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };
let firstSentence;
  return (
    <motion.p
       className={`md:text-xl lg:text-lg text-gray-500 dark:text-[#ECF9FF] max-w-xl mx-auto ${className || "mb-12"}  `}
   
      variants={container}
      initial="hidden"
      whileInView="visible"
          viewport={{ once: true }}

    >
      {letters.map((char, index) =>  { 
        // firstSentence =firstSentence + char
      return  <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block", whiteSpace: "pre" }} // space preserve
        >
          
          
          {char}
        </motion.span>
      })}
     
          
    </motion.p>
  );
};

export default AnimatedSubHeading;
