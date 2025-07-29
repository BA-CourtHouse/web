import React, { useEffect } from 'react'
import ContactSection from '../components/Contact'

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);
  return (
    <div>
      <ContactSection/>
    </div>
  )
}

export default Contact
