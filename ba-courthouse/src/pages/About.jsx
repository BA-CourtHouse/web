import React from 'react'
import { useEffect } from 'react'
import AboutOverview from '../components/about/AboutOverview'
import ProcessAndIndustriesSection from '../components/about/AboutMet'

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);
  return (
    <div>
      <AboutOverview/>
      <ProcessAndIndustriesSection/>
    </div>
  )
}

export default About
