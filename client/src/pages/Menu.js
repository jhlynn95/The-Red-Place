import React from 'react';
import Items from '../components/Items';

const menu = [
  {
    title: "Tortas Calientes Estilo Guadalajara",
    description: "Pierna, Lomo, Mixta: Pierna y Lomo crema, mayonesa, lechuga, tomatate, cebolla, arguacate",
  },
  {
    title: "Burriatas de Pierna",
    description: "4 Tortillas de harina, Lechuga, Tomate, Cebolla, Aguacate, y Crema"
  },
  {
    title: "Nachos Supreme",
    description: "Nacho Chips, Carne de Pierna, Lechuga, Jitomate, Crema, Queso de nacho y Queso de Cotija" 
  },
  {
    title: "Famosas Mangoneadas",
    description: "Hielo, Sabor de mango natural, Mango Fresco, Mango Seco, Tamazela, Chamoy, Chile Polvo, y limon"
  },
  {
    title: "Famosos Diabiltos",
    description: "Hielo, Sabor de tamarindo natural, Chile en polvo, chile en polvo picoso, sal, Limon, Chamoy, Salsaghetti, Serpentina, Tamazela"
  },
  {
    title: "Raspados Naturals Sabores",
    description: "Mango, Tamarindo, Guayaba, Pina, Fresa, Vanilla, Coco, Nuez"
  },
  {
    title: "Rainbow Red",
    description: "Choice of Red or Blue flavor, Cotton Candy, Rice Crispy, Bubble gum, Variety of Gummies, and Sour Belts."
  },
  {
    title: "Snacks of Calientes",
    description: "Nachos Regular, Hot Cheeto Nachos, Taki Nachos, Super Nachos (Nacho Chips, Hot Cheeto Chips y taki chips"
  },
  {
    title: "Agua Frescas",
    description: "Horchata, Fresa con Leche, Mazapan, Chicle, Fresa, Pepino con limon y chia, Mango, Pina, Sandia, Jamaica, Tamarindo, Melon, Frutas"
  },
  {
    title: "Snowcone Sabores",
    description: "Blue (chicle)(bubblegum), Red (cereza)(cherry)"
  },
  {
    title: "Tostiloco",
    description: "Bolsa de Tostis, Jicama, Pepino, Cueritos, Cacahuates, Chacachaca, Chile en Polvo, Chamoy, Valentina, Limon"
  },
  {
    title: "Super Tostiloco",
    description: "Regular + Mango Fresco, Churitos, ex fruta y cueritos"
  },
  {
    title: "Papaloca",
    description: "Papas Mexicanas, Jimaca, Pepino, Cueritos, Cacahuates, Chacachaca, Chile en Polvo, Chamoy, Valentina, Limon"
  },
  {
    title: "Takiloco",
    description: "Bolsa de Takis, Jimaca, Pepino, Cueritos, Cacahuates, Chacachaca, Chile en Polvo, Chamoy, Valentina, Limon"
  },
  {
    title: "Hotcheetoloco",
    description: "Bolsa de Hot Cheeto, Jicama, Pepino, Cueritos, Cacahuates, Chacachaca, Chile en Polvo, Chamoy, Valentina, Limon"
  },
  {
    title: "Cueritoloco",
    description: "Vaso de Cueritos, Con Churritos, Jiaca, Pepino, Cacahuates, Chile en Polvo, Valentina, Limon"
  },
  {
    title: "Cacahuateloco",
    description: "Cacahuates, Cueritos, Chile en polvo, Chamoy, Valentina, Limon"
  },
  {
    title: "Duroloco",
    description: "Duro, Crema, Cueritos, Repollo, Pepino, Jicama, Queso Cotija, Chamoy, Valentina, Limon, y Chile en Polvo"
  },
  {
    title: "Vaso De Curitos",
    description: "Puro Cueritos, Valentina, Limon, Chamoy, Chile en Polvo"
  },
  {
    title: "Vaso de Frutas",
    description: "Preparando con sal, Limon, Chamoy, y Chile en Polvo"
  }
]


function Menu() {
  return (
    <div>
      {menu.map(items => <Items title={items.title} description={items.description} />)} 
    </div>
  )
}

export default Menu;