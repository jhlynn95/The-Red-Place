import React from 'react';
import food from '../imgs/IMG_4012.jpg';
import magnodrink from '../imgs/mango.JPG';
import horchata from '../imgs/horchata.JPG';
import '../styles/Home.css';

function Home() {
  return (
    <div>
      <h1 className='thered'> The Red Place </h1>
      <img className='foodimg' src={food} alt='chicken' />
      <p className='intro'> The Red Place is a restaurant that provides authentic delicious Mexican drinks and food! We provide such drinks as Mangonadas,
      Raspados, Horchata, Jamaica and other assortment of great flavors. We also provide food such as Nachos Supreme, Leg burriatas, hot cakes 
      Guadalajara style and more. You can find us at the Winchester SwapMeet every Saturday
      and Sunday from 8am till 3pm!</p>
      <img className='drinkimg' src={magnodrink} alt='mangodrink' />
      <img className='drinkimg' src={horchata} alt='horchatadrink' />
    </div>
  )
}

export default Home;