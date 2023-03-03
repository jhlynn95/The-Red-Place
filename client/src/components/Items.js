import React from 'react';
import '../styles/Menu.css';

function Items ({ title, description }) {
  return (
    <div className='items'>
      <h3 className='titles'>{title}</h3>
      <p className='description'>{description}</p>
    </div>
  )
}

export default Items;