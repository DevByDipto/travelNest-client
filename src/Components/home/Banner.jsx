import React from 'react'
import Button from '../common/Button'
import { NavLink } from 'react-router'

const Banner = () => {
  return (
    
  <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://i.ibb.co/24VKMBB/download-8.jpg)",
  }}
>

  <div className="text-white text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Explore the World with TravelNest</h1>
      <p className="mb-5">
       Discover unforgettable journeys tailored just for you.  
From the serene hills of Sajek to the vibrant beaches of Cox’s Bazar —  
TravelNest brings you the most exciting tour packages with expert guides,  
comfortable plans, and unforgettable memories.
      </p>
      <NavLink to='/all-packages'>

      <Button className='border-none shadow-none'>Explore All Packages</Button>
      </NavLink>
    </div>
  </div>
</div>
  )
}

export default Banner