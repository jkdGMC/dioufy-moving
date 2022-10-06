import React, { useEffect } from 'react'
import './AproposSection.css'
import aproposLogo from '../../../assets/images/apropos-logo.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const AproposSection = () => {

  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])
  
  
  return (
    <div className='a-propos-section'>
      <div data-aos="zoom-in" data-aos-delay="800" className="apropos-img"></div>
      <div data-aos="flip-left" data-aos-delay="2000" className="a-propos-text">
        <div className="a-propos-text-title">
          <img className='apropos-logo' src={aproposLogo} alt="A propos logo" height='100' />
          <h1>DIOUFY MOVING</h1>
        </div>
        <div className="a-propos-text-desc">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, at debitis voluptas esse error vel minima aperiam incidunt totam. Fugit quas suscipit aut nesciunt tenetur asperiores! Exercitationem aspernatur illum deserunt.</p>
        </div>
      </div>
    </div>
  )
}

export default AproposSection
