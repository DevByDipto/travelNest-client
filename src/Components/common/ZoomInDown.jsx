import { motion } from "framer-motion";

const ZoomInDown = ({ normalText,highlightText,className }) => {
  return (
    <motion.div
      initial={{ scale: 0.5, y: -100, opacity: 0 }}  // ছোট, উপরে + invisible
      animate={{ scale: 1, y: 0, opacity: 1 }}       // normal size, original position, visible
      transition={{
        duration: 0.8,        // animation কতক্ষণ চলবে
        ease: "easeOut"       // smooth effect
      }}
      className={` ${className}`}
    >
      {normalText} <span className="text-amber-500">{highlightText}</span>
    </motion.div>
  );
};

export default ZoomInDown;
