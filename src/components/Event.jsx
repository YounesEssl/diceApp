import React from "react";
import dungeonimg from "../images/dungeondice.jpeg";
import "./Event.css";
import Banner from "./Banner";
export default function Event() {
  return (
    <main className="main-dungeon">
        <Banner text="Events"/>
      <div className="all-container-dungeon">
        <h1 className="title-dungeon">Dungeons at dice</h1>
        <div className="event-container">
          <img src={dungeonimg} alt="dungeonimg" className="img-dungeon" />
          <p>
            Our weekly RPG night. Dust off your broadswords, sharpen your wands,
            string your bows and charge your nuclear powered laser blasters -
            It's Dungeons at Dice!
          </p>
        </div>
      </div>
      <div className="all-container-dungeon">
        <h1 className="title-dungeon">Dungeons at dice</h1>
        <div className="event-container">
          <img src={dungeonimg} alt="dungeonimg" className="img-dungeon" />
          <p>
            Our weekly RPG night. Dust off your broadswords, sharpen your wands,
            string your bows and charge your nuclear powered laser blasters -
            It's Dungeons at Dice!
          </p>
        </div>
      </div>
      <div className="all-container-dungeon">
        <h1 className="title-dungeon">Dungeons at dice</h1>
        <div className="event-container">
          <img src={dungeonimg} alt="dungeonimg" className="img-dungeon" />
          <p>
            Our weekly RPG night. Dust off your broadswords, sharpen your wands,
            string your bows and charge your nuclear powered laser blasters -
            It's Dungeons at Dice!
          </p>
        </div>
      </div>
    </main>
  );
}
