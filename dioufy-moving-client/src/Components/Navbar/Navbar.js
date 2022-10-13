import React, { useEffect, useState } from 'react'
import logo from '../../assets/main-logo/black.svg'
import './Navbar.css'


const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    const background = () => (window.scrollY >=45) ? setNavbar(true) : setNavbar(false)
    window.addEventListener('scroll', background)   

    const routes = [
        {
            name: "A propos",
            path: "#propos"
        },
        {
            name: "Guide déménagement",
            path: "#guidedemenagement"
        },
        {
            name: "Offres",
            path: "#offres"
        },
        {
            name: "Contact",
            path: "#contact"
        }
    ]
    

  return (
    <div className='Navbar'>
        <nav className={navbar ? 'navbar active sticky ' : 'navbar'}>
                <div className="logo-container">
                    <img className="dioufy-moving-logo" src={logo} alt="Dioufy Moving" />
                </div>
                <div className="navigation-panel">
                    <ul>
                        {routes.map((nav,index) => (
                            <li key={index}>
                                <a href={nav.path}>{nav.name}</a>
                            </li>
                            )
                        )}
                    </ul>
                </div>
                <div className="btn-panel">
                    <div className="login-container-btn">
                        <i className="fa-solid fa-user"></i>
                        <input className='login-btn' type="button" value='Se connecter'/>
                    </div>
                    <div className="signup-container-btn">
                        <i className="fa-solid fa-right-to-bracket"></i>
                        <input className='signup-btn' type="button" value="S'inscrire"/>
                    </div>
                </div>
        </nav>
    </div>
  )
}

export default Navbar;
