import React from "react";
import Banner from "./Banner";
import "./Catalogue.css";
import game1 from "../images/games/game1.png";
import game2 from "../images/games/game2.png";
import game3 from "../images/games/game3.png";
import game4 from "../images/games/game4.png";
import game5 from "../images/games/game5.png";
import { BiSort } from "react-icons/bi";

export default function Catalogue() {
  return (
    <>
      <div>
        <Banner text="Catalogue"></Banner>
      </div>
      <div className="search-bar-container">
        <div>
          <div className="search-bar">
            <input
              className="input-catalogue"
              type="text"
              placeholder="Search..."
            />
          <BiSort/>
          </div>
        </div>
      </div>
      <div className="main-in-catalogue">
        <div className="gamecard-container">
          <img src={game1} alt="game1" />
          <div className="mon-rectangle">
            <span className="text-game">Game Summary</span>
            <span>1</span>
          </div>
        </div>
        <div className="gamecard-container">
          <img src={game2} alt="game1" />
          <div className="mon-rectangle">
            <span className="text-game">Game Summary</span>
            <span>1</span>
          </div>
        </div>
        <div className="gamecard-container">
          <img src={game3} alt="game1" />
          <div className="mon-rectangle">
            <span className="text-game">Game Summary</span>
            <span>1</span>
          </div>
        </div>
        <div className="gamecard-container">
          <img src={game4} alt="game1" />
          <div className="mon-rectangle">
            <span className="text-game">Game Summary</span>
            <span>1</span>
          </div>
        </div>
        <div className="gamecard-container">
          <img src={game5} alt="game1" />
          <div className="mon-rectangle">
            <span className="text-game">Game Summary</span>
            <span>1</span>
          </div>
        </div>
      </div>
    </>
  );
}
