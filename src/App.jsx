import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
//  const url = `https://api.openweathermap.org/data/2.5/weather?q=Lahore,PK&appid=2c60111b22cd067607932c86dd6ec2f4`
  return (
    <div className='app'>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Lahore</p>
          </div>
          <div className="temp">
            <h1>60°F</h1>
          </div>
          <div className="description">
            <p>clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65°F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>20 MPH</p>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default App
