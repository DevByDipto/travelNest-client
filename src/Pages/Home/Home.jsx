import React from 'react'
import Banner from '../../Components/home/Banner'
import FeaturedPackages from '../../Components/home/FeaturedPackages'
import WhyChooseUs from '../whychooseUs/WhyChooseUs'
import TestimonialSection from '../TestimonialSection/TestimonialSection'
import TourTypesSection from '../tourTypesSection/TourTypesSection'


const Home = () => {
 
  return (
    <div>
      <Banner></Banner>
      <FeaturedPackages></FeaturedPackages>
      <WhyChooseUs></WhyChooseUs>
      <TourTypesSection></TourTypesSection>
      <TestimonialSection></TestimonialSection>
      </div>
  )
}

export default Home