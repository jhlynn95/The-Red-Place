import React from 'react';
// import woodlogo from '../imgs/close-up-of-horizontal-rough-dark-wood-board-texture.jpg';
import Navigation from './Navigation';
import '../styles/Header.css';


function Header() {
  return (
    <div id='header'>
      {/* <img className='woodlogo' src={woodlogo} alt='darkwood background' /> */}
      <h1 className='header'>The Red Place</h1>
      <Navigation />
    </div>
  )
}

export default Header;