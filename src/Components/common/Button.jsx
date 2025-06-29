import React from 'react'

const Button = ({children,className}) => {
  return (
   <button className={`btn btn-primary ${className}`}>{children}</button>
  )
}

export default Button