import React from 'react'

const Button = ({children,className,onClick,type}) => {
  return (
   <button className={`btn hover:bg-amber-600  bg-amber-500 ${className}`} onClick={onClick} type={type}>{children}</button>
  )
}

export default Button