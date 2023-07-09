import React from 'react';
import './landing.css'; 
import Navbar from '../Navbar/Navbar';
const Landing = () => {
  return (
    <div><Navbar/>
    <div className='text-main'>
      <p className='text a'>Code.</p>
      <p className='text b'>Coffee.</p>
      <p className='text c'>Connect.</p>
      <button className='myButton' >Get Started</button>
      
    </div>
    </div>
  );
}

export default Landing;
