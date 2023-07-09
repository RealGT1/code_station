<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import "./landing.css";
import Navbar from "../Navbar/Navbar";
import teamimg from "./team.png"
import collab from "./collab.png"
const Landing = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      if (scrollTop > windowHeight * 0.5 && scrollTop < scrollHeight - windowHeight * 1.5) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Navbar />

      <div className="text-main">
        <p className="text a">Code.</p>
        <p className="text b">Coffee.</p>
        <p className="text c">Connect.</p>
        <button className="myButton" >Get Started</button>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2092/2092494.png"
          alt="img of codeeditor"
          className="codeeditorimg"
        />
        <img src={collab} alt="team" className="collab" />
=======
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
>>>>>>> strt
      </div>
    </div>
  );
};

export default Landing;
