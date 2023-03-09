import React from 'react';
import melon from '../imgs/melon.JPG';
import jamaica from '../imgs/jamaica.JPG';
import pepino from '../imgs/pepino.JPG';
import mangonada from '../imgs/Mangonada-Recipe_Feat.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
      <h1 className='aboutUs'> About Us </h1>
      <p className='aboutInfo'> Founded in 2013 by Ricardo & Veronica, the Red Place is geared toward providing customers with authentic Mexican food dishes
      and drinks! From humble beginnings to where they are now, they make it their goal to provide the customers with the best eating exprience. </p>
     <div className='aboutimgs'> <img className='melonimg' src={melon} alt='melon drink' />
      <img className="jamaicaimg" src={jamaica} alt='jamaica drink' />
      <img className='pepinoimg' src={pepino} alt='pepino drink' />
      <img className='mangonada' src={mangonada} alt='mangonada drink' />
    </div>
    </div>
  )
}

export default About;