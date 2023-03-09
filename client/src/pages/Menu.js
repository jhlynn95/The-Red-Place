import React from 'react';
import Items from '../components/Items';
// import logo from '../imgs/Menu.jpg';
import Img from '../imgs/fresa.JPG';

const menu = [
  {
    title: "Tortas Calientes Estilo Guadalajara",
    description: "Pierna, Lomo, Mixta: Pierna y Lomo crema, mayonesa, lechuga, tomatate, cebolla, arguacate",
    img: Img
  },
  {
    title: "Burriatas de Pierna",
    description: "4 Tortillas de harina, Lechuga, Tomate, Cebolla, Aguacate, y Crema",
    img: Img
  },
  {
    title: "Nachos Supreme",
    description: "Nacho Chips, Carne de Pierna, Lechuga, Jitomate, Crema, Queso de nacho y Queso de Cotija",
    img: Img
  },
  {
    title: "Famosas Mangoneadas",
    description: "Hielo, Sabor de mango natural, Mango Fresco, Mango Seco, Tamazela, Chamoy, Chile Polvo, y limon",
    img: Img
  },
  {
    title: "Famosos Diabiltos",
    description: "Hielo, Sabor de tamarindo natural, Chile en polvo, chile en polvo picoso, sal, Limon, Chamoy, Salsaghetti, Serpentina, Tamazela",
    img: Img
  },
  {
    title: "Raspados Naturals Sabores",
    description: "Mango, Tamarindo, Guayaba, Pina, Fresa, Vanilla, Coco, Nuez",
    img: Img
  },
  {
    title: "Rainbow Red",
    description: "Choice of Red or Blue flavor, Cotton Candy, Rice Crispy, Bubble gum, Variety of Gummies, and Sour Belts.",
    img: Img
  },
  {
    title: "Snacks of Calientes",
    description: "Nachos Regular, Hot Cheeto Nachos, Taki Nachos, Super Nachos (Nacho Chips, Hot Cheeto Chips y taki chips",
    img: Img
  },
  {
    title: "Agua Frescas",
    description: "Horchata, Fresa con Leche, Mazapan, Chicle, Fresa, Pepino con limon y chia, Mango, Pina, Sandia, Jamaica, Tamarindo, Melon, Frutas",
    img: Img
  },
  {
    title: "Snowcone Sabores",
    description: "Blue (chicle)(bubblegum), Red (cereza)(cherry)",
    img: Img
  },
  {
    title: "Tostiloco",
    description: "Bolsa de Tostis, Jicama, Pepino, Cueritos, Cacahuates, Chacachaca, Chile en Polvo, Chamoy, Valentina, Limon",
    img: Img
  },
  {
    title: "Super Tostiloco",
    description: "Regular + Mango Fresco, Churitos, ex fruta y cueritos",
    img: Img
  },
  {
    title: "Papaloca",
    description: "Papas Mexicanas, Jimaca, Pepino, Cueritos, Cacahuates, Chacachaca, Chile en Polvo, Chamoy, Valentina, Limon",
    img: Img
  },
  {
    title: "Takiloco",
    description: "Bolsa de Takis, Jimaca, Pepino, Cueritos, Cacahuates, Chacachaca, Chile en Polvo, Chamoy, Valentina, Limon",
    img: Img
  },
  {
    title: "Hotcheetoloco",
    description: "Bolsa de Hot Cheeto, Jicama, Pepino, Cueritos, Cacahuates, Chacachaca, Chile en Polvo, Chamoy, Valentina, Limon",
    img: Img
  },
  {
    title: "Cueritoloco",
    description: "Vaso de Cueritos, Con Churritos, Jiaca, Pepino, Cacahuates, Chile en Polvo, Valentina, Limon",
    img: Img
  },
  {
    title: "Cacahuateloco",
    description: "Cacahuates, Cueritos, Chile en polvo, Chamoy, Valentina, Limon",
    img: Img
  },
  {
    title: "Duroloco",
    description: "Duro, Crema, Cueritos, Repollo, Pepino, Jicama, Queso Cotija, Chamoy, Valentina, Limon, y Chile en Polvo",
    img: Img
  },
  {
    title: "Vaso De Curitos",
    description: "Puro Cueritos, Valentina, Limon, Chamoy, Chile en Polvo",
    img: Img
  },
  {
    title: "Vaso de Frutas",
    description: "Preparando con sal, Limon, Chamoy, y Chile en Polvo",
    img: Img
  }
]

function Menu() {
  return (
    <div className='border'>
      <h1 className='menu'> Menu </h1>
      {menu.map(items => <Items img={items.img} title={items.title} description={items.description} />)} 
    </div>
  )
}

export default Menu;