import { motion } from "framer-motion";

const SlideInRightToLeft = ({ children, delay = 0.3, duration = 0.8 }) => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}  
      whileInView={{ x: 0, opacity: 1 }} 
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

export default SlideInRightToLeft;
