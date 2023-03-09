import React from 'react'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import InstagramIcon from '@mui/icons-material/Instagram';
// import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import tiktok from '../imgs/tiktok1-transformed.png';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='mediaLinks'>
        <a href='tel:9515507141'><PhoneIphoneIcon className='phone'/></a> 
        <InstagramIcon className='insta' onClick={event => window.location.href='https://instagram.com/_theredplace_?igshid=YmMyMTA2M2Y='} />
        <img className='tiktok' src={tiktok} alt='tiktok' onClick={event => window.location.href='https://www.tiktok.com/@theredplace_mangoneadas?_t=8aUayR8wpfX&_r=1'} />
      </div>
      <p> &copy; 2023 All Rights Reserved</p>
    </div>
  )
}

export default Footer;