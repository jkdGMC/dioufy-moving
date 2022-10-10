import React from 'react';

import './App.css';
import Apropos from './Components/Apropos/Apropos';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Apropos />
      <Footer />
    </div>
  );
}

export default App;
