import React from 'react'

import './Offers.css'

import OfferCard from './OfferCard/OfferCard'


const Offers = () => {

  let offersList = [
    {
      type: 'Yobulma',
      services: [
        'Chargement - Transport - Déchargement',
        'Transport et equipe dévouée',
      ]
    },
    {
      type: 'Standard',
      services: [
        'Chargement - Transport - Déchargement',
        'Transport et equipe dévouée',
        'Assistance à la clientèle'
      ]
    },
    {
      type: 'Yobulma',
      services: [
        'Chargement - Transport - Déchargement',
        'Transport et equipe dévouée',
        'Assistance à la clientèle',
        'Chargement - Transport - Déchargement',
        'Transport et equipe dévouée',
        'Assistance à la clientèle'
      ]
    }
  ]

  return (
    <div className='Offers'>
      <div className="offers-container">
        <div className="offers-header">
          <h1>NOS OFFRES</h1>
          <p>Choisissez l'offre de déménagement qui vous convient le mieux...</p>
        </div>
        <div className="offers-list">
          {
            offersList.map((offer,index) => 
            (
              <OfferCard
                key={index}
                type={offer.type}
                services={offer.services}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Offers;