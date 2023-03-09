import React from 'react';
import '../styles/Menu.css';

function Items ({ img, title, description }) {
  return (
    <div className='items'>
      <img className='images' alt='food' src={img}/>
      <h3 className='titles'>{title}</h3>
      <p className='description'>{description}</p>
    </div>
  )
}

export default Items;