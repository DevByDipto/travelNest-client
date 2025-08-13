// CardFadeInUpAnimation.jsx
import { motion, useInView } from "framer-motion";

const CardFadeInUpAnimation = ({ children, index=0 ,delay,amount,duration,y }) => {
    // const isInView = useInView(ref, { margin: "-50px 0px 0px 0px", once: true }); // 50px আগে trigger

  return (
    <motion.div
      initial={{ y: y || 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: duration || 0.9,
        delay: delay? index * delay : index * 0.3, // index এর মাধ্যমে stagger effect
        ease: "easeOut"
      }}
      viewport={{ amount: amount ||0 , once: true }}
    >
      {children}
    </motion.div>
  );
};

export default CardFadeInUpAnimation;
