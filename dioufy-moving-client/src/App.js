import React from 'react';

import LandingPage from './Pages/LandingPage/LandingPage';
import Page404 from './Pages/Page404/Page404'

import { Routes, Route } from 'react-router-dom';


import './App.css';



function App(){

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>

      
    </div>
  );
}

export default App;
