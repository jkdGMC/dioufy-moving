import React from 'react'
import './AproposSection.css'
import aproposLogo from '../../../assets/images/apropos-logo.png'

const AproposSection = () => {
  return (
    <div className='a-propos-section'>
      <div className="apropos-img"></div>
      <div className="a-propos-text">
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
