import React from 'react';
import './App.css';
import Barchart from './barchart'
import Scatteredchart from './scatteredchart'


function App() {
 return(
  <div className='charts'>
 <Barchart/>
 <Scatteredchart/>
  </div>
  )
}

export default App;
