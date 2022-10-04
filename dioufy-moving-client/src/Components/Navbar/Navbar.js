import React, { useState } from 'react'
import logo from '../../Assets/main-logo/black.svg'
import './Navbar.css'

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    const background = () => (window.scrollY >=50) ? setNavbar(true) : setNavbar(false)
    window.addEventListener('scroll', background)

    const routes = [
        {
            name: "A propos",
            path: "#"
        },
        {
            name: "Guide déménagement",
            path: "#"
        },
        {
            name: "Offres",
            path: "#"
        },
        {
            name: "Contact",
            path: "#"
        },
    ]

  return (
    <div className='Navbar'>
         <nav className={navbar ? 'navbar active' : 'navbar'}>
            <div className="logo-container">
                <img className="dioufy-moving-logo" src={logo} alt="Dioufy moving" />
            </div>
            <div className="navigation-panel">
                <ul>
                {
                    routes.map((nav,index) => (<li key={index}>{nav.name}</li>))
                }
                </ul>
            </div>
            <div className="btn-panel">
                <div className="login-container-btn">
                    <i className="fa-solid fa-user"></i>
                    <input className='login-btn' type="button" value='Se connecter'/>
                </div>
                <div className="signup-container-btn">
                    <input className='signup-btn' type="button" value="S'inscrire"/>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;