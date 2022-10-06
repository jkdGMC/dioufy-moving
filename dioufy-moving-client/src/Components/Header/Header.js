import React, {useEffect} from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Header = () => {

  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, []);

  return (
    <div  className='header'>
      <Navbar />
      <div className="header-desc">
        <div data-aos="fade-up" className="header-desc-container">
          <div className="header-image">
            <i className="fa-sharp fa-solid fa-truck truck-icon"></i>
            <h1>DIOUFY MOVING</h1>
          </div>
          <div className="header-txt">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, at! Rem eius ullam alias, veniam inventore obcaecati iusto sint? Et tenetur optio nam debitis, quasi rem labore obcaecati exercitationem ratione.</p>
          </div>
          <div className="header-btn-container">
            <input type="button" className='btn header-qsn-btn' value="Qui sommes nous ?"/>
            <input type="button" className='btn header-cno-btn' value="Consulter nos offres"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
