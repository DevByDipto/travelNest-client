import { motion } from "framer-motion";

const SlideInLeftToRight = ({ children, delay = 0.5, duration = 0.8 }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}  // বাম থেকে শুরু
      whileInView={{ x: 0, opacity: 1 }} // নিজের অবস্থানে আসবে
      viewport={{  }}
      transition={{
        // type: "spring",
        // stiffness: 100,
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInLeftToRight;
