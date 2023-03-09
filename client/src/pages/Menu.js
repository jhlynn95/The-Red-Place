import React from "react";
import Items from "../components/Items";
// import logo from '../imgs/Menu.jpg';
import torta from "../imgs/torta.jpg";
import nacho from "../imgs/Nachos Supreme.jpg";
import burritas from "../imgs/burriatas de pierna.jpg";
import mangonada from "../imgs/Mangonada-Recipe_Feat.jpg";
import diabilto from "../imgs/Diablito_Drink_.jpeg";
import raspado from "../imgs/Raspados.jpg";
import chips from "../imgs/chips.jpg";
import rainbow from "../imgs/rainbow raspados.jpg";
import agua from "../imgs/aguas.jpg";
import drink from "../imgs/drink.jpeg";
import tostiloco from "../imgs/tostiloco.jpeg";
import mega from "../imgs/mega-tostiloco.jpeg";
import papa from "../imgs/papa-loca.jpg";
import taki from "../imgs/takiloco.jpg";
import vaso from "../imgs/vaso de curitos.jpg";
import vaso1 from "../imgs/vaso de frutas.jpg";

const menu = [
  {
    title: "Tortas Calientes Estilo Guadalajara",
    description:
      "Pierna, Lomo, Mixta: Pierna y Lomo crema, mayonesa, lechuga, tomatate, cebolla, arguacate",
    img: torta,
  },
  {
    title: "Burriatas de Pierna",
    description:
      "4 Tortillas de harina, Lechuga, Tomate, Cebolla, Aguacate, y Crema",
    img: burritas,
  },
  {
    title: "Nachos Supreme",
    description:
      "Nacho Chips, Carne de Pierna, Lechuga, Jitomate, Crema, Queso de nacho y Queso de Cotija",
    img: nacho,
  },
  {
    title: "Famosas Mangoneadas",
    description:
      "Hielo, Sabor de mango natural, Mango Fresco, Mango Seco, Tamazela, Chamoy, Chile Polvo, y limon",
    img: mangonada,
  },
  {
    title: "Famosos Diabiltos",
    description:
      "Hielo, Sabor de tamarindo natural, Chile en polvo, chile en polvo picoso, sal, Limon, Chamoy, Salsaghetti, Serpentina, Tamazela",
    img: diabilto,
  },
  {
    title: "Raspados Naturals Sabores",
    description: "Mango, Tamarindo, Guayaba, Pina, Fresa, Vanilla, Coco, Nuez",
    img: raspado,
  },
  {
    title: "Rainbow Red",
    description:
      "Choice of Red or Blue flavor, Cotton Candy, Rice Crispy, Bubble gum, Variety of Gummies, and Sour Belts.",
    img: rainbow,
  },
  {
    title: "Snacks of Calientes",
    description:
      "Nachos Regular, Hot Cheeto Nachos, Taki Nachos, Super Nachos (Nacho Chips, Hot Cheeto Chips y taki chips",
    img: chips,
  },
  {
    title: "Agua Frescas",
    description:
      "Horchata, Fresa con Leche, Mazapan, Chicle, Fresa, Pepino con limon y chia, Mango, Pina, Sandia, Jamaica, Tamarindo, Melon, Frutas",
    img: agua,
  },
  {
    title: "Snowcone Sabores",
    description: "Blue (chicle)(bubblegum), Red (cereza)(cherry)",
    img: drink,
  },
  {
    title: "Tostiloco",
    description:
      "Bolsa de Tostis, Jicama, Pepino, Cueritos, Cacahuates, Chacachaca, Chile en Polvo, Chamoy, Valentina, Limon",
    img: tostiloco,
  },
  {
    title: "Super Tostiloco",
    description: "Regular + Mango Fresco, Churitos, ex fruta y cueritos",
    img: mega,
  },
  {
    title: "Papaloca",
    description:
      "Papas Mexicanas, Jimaca, Pepino, Cueritos, Cacahuates, Chacachaca, Chile en Polvo, Chamoy, Valentina, Limon",
    img: papa,
  },
  {
    title: "Takiloco",
    description:
      "Bolsa de Takis, Jimaca, Pepino, Cueritos, Cacahuates, Chacachaca, Chile en Polvo, Chamoy, Valentina, Limon",
    img: taki,
  },
  {
    title: "Hotcheetoloco",
    description:
      "Bolsa de Hot Cheeto, Jicama, Pepino, Cueritos, Cacahuates, Chacachaca, Chile en Polvo, Chamoy, Valentina, Limon",
    img: torta,
  },
  {
    title: "Cueritoloco",
    description:
      "Vaso de Cueritos, Con Churritos, Jiaca, Pepino, Cacahuates, Chile en Polvo, Valentina, Limon",
    img: torta,
  },
  {
    title: "Cacahuateloco",
    description:
      "Cacahuates, Cueritos, Chile en polvo, Chamoy, Valentina, Limon",
    img: torta,
  },
  {
    title: "Duroloco",
    description:
      "Duro, Crema, Cueritos, Repollo, Pepino, Jicama, Queso Cotija, Chamoy, Valentina, Limon, y Chile en Polvo",
    img: torta,
  },
  {
    title: "Vaso De Curitos",
    description: "Puro Cueritos, Valentina, Limon, Chamoy, Chile en Polvo",
    img: vaso,
  },
  {
    title: "Vaso de Frutas",
    description: "Preparando con sal, Limon, Chamoy, y Chile en Polvo",
    img: vaso1,
  },
];

function Menu() {
  return (
    <div className="border">
      <h1 className="menu"> Menu </h1>
      {menu.map((items) => (
        <Items
          img={items.img}
          title={items.title}
          description={items.description}
        />
      ))}
    </div>
  );
}

export default Menu;
