import React from 'react'
import Button from '../common/Button'
import { NavLink } from 'react-router'

const Banner = () => {
  return (
  <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Explore the World with TravelNest</h1>
      <p className="mb-5">
       Discover unforgettable journeys tailored just for you.  
From the serene hills of Sajek to the vibrant beaches of Cox’s Bazar —  
TravelNest brings you the most exciting tour packages with expert guides,  
comfortable plans, and unforgettable memories.
      </p>
      <NavLink to='/all-packages'>

      <Button>Explore All Packages</Button>
      </NavLink>
    </div>
  </div>
</div>
  )
}

export default Banner