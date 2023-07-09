import React, { useEffect } from 'react';
import './landing.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const Landing = () => {
  useEffect(() => {
    scroll.scrollToBottom({
      duration: 6000,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className='text-main'>
        <p className='text a'>Code.</p>
        <p className='text b'>Coffee.</p>
        <p className='text c'>Connect.</p>
        <Link to='/start' className='link-button'>
          <button className='myButton'>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
