import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <div className='header'>
      <Navbar />
      <div className="header-gif">
      TESH
      </div>
    </div>
  )
}

export default Header