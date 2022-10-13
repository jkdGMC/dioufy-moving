import React from 'react'

import './Offers.css'

import OfferCard from './OfferCard/OfferCard'


const Offers = () => {

  let offersList = [
    {
      type: 'Pack Yobulma',
      services: [
        'Chargement - Transport - Déchargement',
        'Transport et equipe dévouée',
      ]
    },
    {
      type: ' Pack Standard',
      services: [
        'Chargement - Transport - Déchargement',
        'Transport et equipe dévouée',
        'Assistance à la clientèle',
        'Emballage'
      ]
    },
    {
      type: 'Pack Deluxe',
      services: [
        'Chargement - Transport - Déchargement',
        'Transport et equipe dévouée',
        'Assistance à la clientèle',
        'Emballage',
        'Déballage',
        'Montage et Démontage de meuble',
        'Assurance premium'
      ]
    }
  ]

  return (
    <div id='' className='Offers'>
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