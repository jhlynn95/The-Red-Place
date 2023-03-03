import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to='/'> About </Link>
        <Link to='menu'> Menu </Link>
        <Link to='/catering'> Catering </Link>
        <Link to='/contact'> Contact </Link>
        <Link to='/home'> Home </Link>
        <Link to='/login'> Login </Link>
      </div>
    </div>
  )
}

export default Navigation;