import React from 'react'
import {motion} from "framer-motion"
const AnimatedHeading = ({normalText,highlightText }) => {
  return (
    <motion.h3
    initial={{ y: -50, opacity: 0 }} // শুরুতে উপরে + transparent
      whileInView={{ y: 0, opacity: 1 }}    // নিচে এসে visible হবে
      transition={{
        duration: 1,                   // সময় লাগবে
        ease: "easeIn"
         }}
               viewport={{ once: true }}

         className="text-3xl md:text-4xl font-bold mb-4 text-center"
    >
        {normalText} <span className='text-amber-500'>{highlightText }</span>
    </motion.h3>
  )
}

export default AnimatedHeading