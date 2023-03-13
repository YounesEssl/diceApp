import React from "react";
import Menu from "../components/Menu";
import "./Home.css";
import Slider from "../components/Slider";
import Card from "../components/Card";


export default function Home() {
  const cards = [
    {
      id: 1,
      size: "small",
      imageSrc: "https://picsum.photos/seed/picsum/170/140",
      buttonText: "Button 1",
      buttonLink: "/page1",
    },
    {
      id: 2,
      size: "small",
      imageSrc: "https://picsum.photos/seed/picsum/170/170",
      buttonText: "Button 2",
      buttonLink: "/page2",
    },
    {
      id: 3,
      size: "small",
      imageSrc: "https://picsum.photos/seed/picsum/170/170",
      buttonText: "Button 3",
      buttonLink: "/page3",
    },
    {
      id: 4,
      size: "small",
      imageSrc: "https://picsum.photos/seed/picsum/170/170",
      buttonText: "Button 4",
      buttonLink: "/page4",
    },
  ];

  return (
    <>
      <div className="main">
      <Menu couleur="black"/>
        <div className="home">
          <h1 className="title-home">DICE BOARD GAME</h1>
        </div>
      </div>
      <Slider></Slider>

      <div className="container-grid-container">
        <div className="grid-container">
          {cards.map((card) => (
            <Card
              key={card.id}
              size={card.size}
              imageSrc={card.imageSrc}
              buttonText={card.buttonText}
              buttonLink={card.buttonLink}
            />
          ))}
        </div>
      </div>
    </>
  );
}
