import React from 'react';

import Header from '../../Components/Header/Header';
import Apropos from '../../Components/Apropos/Apropos';
import Offers from '../../Components/Offers/Offers';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar'

import { LazyLoadComponent } from 'react-lazy-load-image-component';

const LandingPage = () => {
  return (
    <div className='LandingPage'>
        <Navbar />
        <LazyLoadComponent>
            <Header />
        </LazyLoadComponent>
        <Apropos />
        <Offers />
        <Contact />
        <Footer />
    </div>
  )
}

export default LandingPage