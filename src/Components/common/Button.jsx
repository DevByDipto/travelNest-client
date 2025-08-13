import React from 'react'
import { motion } from "framer-motion";

const Button = ({children,className,onClick,type,scale}) => {
  return (
   <motion.button
   
      whileHover={{ scale: scale || 1.1}}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.4 }}
      
   className={`btn hover:bg-amber-600  bg-amber-500 ${className}`} onClick={onClick} type={type}>{children}</motion.button>
  )
}

export default Button