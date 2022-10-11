import React from 'react';

import Apropos from './Components/Apropos/Apropos';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Contact from './Components/Contact/Contact';

import './App.css';

import { LazyLoadComponent } from 'react-lazy-load-image-component';


function App(){

  return (
    <div className="App">
    <LazyLoadComponent>
      <Header />
    </LazyLoadComponent>
    <Apropos />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
