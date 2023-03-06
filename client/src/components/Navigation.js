import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to='/'> Home </Link>
        <Link to='menu'> Menu </Link>
        <Link to='/catering'> Catering </Link>
        <Link to='/contact'> Contact </Link>
        <Link to='/about'> About </Link>
        <Link to='/login'> Login </Link>
        <Link to='/signup'> SignUp </Link>
      </div>
    </div>
  )
}

export default Navigation;