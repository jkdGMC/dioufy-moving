import React, {useEffect} from 'react'
import './Header.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Header = () => {

  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, []);

  return (
    <div className='header'>
      <div className="header-desc">
        <div className="header-desc-container">
          <div className="header-image">
            <i data-aos="fade-right" data-aos-delay="300" className="fa-sharp fa-solid fa-truck-fast truck-icon"></i>
            <h1 data-aos="fade-up" data-aos-delay="900">DIOUFY MOVING</h1>
          </div>
          <div data-aos="fade-up" data-aos-delay="1200" className="header-txt">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, at! Rem eius ullam alias, veniam inventore obcaecati iusto sint? Et tenetur optio nam debitis, quasi rem labore obcaecati exercitationem ratione.</p>
          </div>
          <div className="header-btn-container">
            <input data-aos="fade-right" data-aos-delay="2400" type="button" className='btn header-qsn-btn' value="Demander un devis" />
            <a href="#contact">
              <input data-aos="fade-left" data-aos-delay="2400" type="button" className='btn header-cno-btn' value="Réclammation ?" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
