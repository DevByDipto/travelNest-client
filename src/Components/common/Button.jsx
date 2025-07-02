import React from 'react'

const Button = ({children,className,onClick}) => {
  return (
   <button className={`btn bg-amber-500 ${className}`} onClick={onClick}>{children}</button>
  )
}

export default Button