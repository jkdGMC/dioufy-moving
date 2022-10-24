import React, { useEffect } from 'react'
import './Apropos.css'
import AproposSection from './AproposSection/AproposSection'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Apropos = () => {

  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, []);
  
  return (
    <div className='a-propos'>
        <h1 data-aos="fade-down" className='a-propos-title'>A propos de nous</h1>
        <AproposSection />
    </div>
  )
}

export default Apropos;
