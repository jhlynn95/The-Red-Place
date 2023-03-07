import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='mediaLinks'>
        <EmailIcon className='email' onClick={event => window.location.href='mailto:'} />
        <InstagramIcon className='insta' onClick={event => window.location.href='https://instagram.com/_theredplace_?igshid=YmMyMTA2M2Y='} />
      </div>
      <p> &copy; 2023 All Rights Reserved</p>
    </div>
  )
}

export default Footer;