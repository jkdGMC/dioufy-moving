import React from 'react'

import './OfferCard.css'

const OfferCard = ({type,services}) => {

  return (
    <div className='OfferCard'>
        <div className="offerCard-container">
            <div className="type-container">
                <h1>{type}</h1>
            </div>
            <div className='services-container'>
                <ul>
                    {services.map((service, index) => (
                        <div className='service' key={index} ><i class="fa-solid fa-check"></i><li>{service}</li></div>))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default OfferCard