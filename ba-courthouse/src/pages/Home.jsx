import React, { useEffect } from 'react'
import HeroSection from '../components/Hero'
import CoreServices from '../components/Services';
import WhyChooseUs from '../components/WhyUs';
import ContactSection from '../components/Contact';


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }
  , []);
  return (
    <div>
      <HeroSection/>
      <CoreServices/>
      <WhyChooseUs/>
      
      <ContactSection/>
    </div>
  )
}

export default Home
