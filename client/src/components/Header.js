import React from 'react';
// import woodlogo from '../imgs/close-up-of-horizontal-rough-dark-wood-board-texture.jpg';
import redplace from '../imgs/The Red Place Logo 1.png';
import Navigation from './Navigation';
import '../styles/Header.css';


function Header() {
  return (
    <div id='header'>
      {/* <img className='woodlogo' src={woodlogo} alt='darkwood background' /> */}
      <div className='header1'>
      <h1 className='header'>The Red Place</h1>
      <img className='redplace' src={redplace} alt='logo' />
      </div>
      <Navigation />
    </div>
  )
}

export default Header;