import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <div className='header'>
    <Navbar />
      <div className="header-desc">
        <div className="header-desc-container">
          <div className="header-image">
            <h1>DIOUFY MOVING</h1>
          </div>
          <div className="header-txt">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, at! Rem eius ullam alias, veniam inventore obcaecati iusto sint? Et tenetur optio nam debitis, quasi rem labore obcaecati exercitationem ratione.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header