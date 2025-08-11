import React from 'react'
import Banner from '../../Components/home/Banner'
import FeaturedPackages from '../../Components/home/FeaturedPackages'
import WhyChooseUs from '../whychooseUs/WhyChooseUs'
import TestimonialSection from '../TestimonialSection/TestimonialSection'
import TourTypesSection from '../tourTypesSection/TourTypesSection'
import LatestNews from '../latestNews/LatestNews'


const Home = () => {
 
  return (
    <div>
      <Banner></Banner>
      <FeaturedPackages></FeaturedPackages>
      <WhyChooseUs></WhyChooseUs>
      <TourTypesSection></TourTypesSection>
      <TestimonialSection></TestimonialSection>
      {/* <LatestNews></LatestNews> */}
      
      
      </div>
  )
}

export default Home