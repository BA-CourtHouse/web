import React, { useEffect } from 'react'
import ServiceOverview from '../components/services/ServiceOverwiew';
import ServiceBody from '../components/services/ServicesBody';
import ServiceCTA from '../components/services/ServiceCTA';
import FAQSection from '../components/services/ServiceFaqs';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);

  return (
    <div>
      <ServiceOverview/>
      <ServiceBody/>
      <ServiceCTA/>
      <FAQSection/>
    </div>
  )
}

export default Services
