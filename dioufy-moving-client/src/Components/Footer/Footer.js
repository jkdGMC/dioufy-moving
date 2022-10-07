import React from 'react'
import './Footer.css'
import logo from '../../assets/main-logo/white.svg'

const Footer = () => {

  return (
    <footer className='Footer'>
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logo} alt="dioufy-moving footer logo" />
            <p style={{lineHeight: '2'}}>DIOUFY MOVING ?<br/> Déménagez avec sécurité.</p>
          </div>
          <div className="footer-contact">
            <p><i></i> +221 77 152 92 69</p>
            <p><i></i> contact@dioufymoving.com</p>
            <p>Dioufy Moving SARL</p>
            <p><span style={{fontWeight: 'bold'}}>rccm</span>: SN DKR 2022 13500</p>
            <p><span style={{fontWeight: 'bold'}}>ninea</span>: 001122334</p>
          </div>
          <div className="footer-socialmedia">
            <p style={{fontWeight: 'bold'}}>Suivez nous sur ...</p>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="social-media">
            
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy;2022. DIOUFY MOVING - All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer