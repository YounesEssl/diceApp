import React from "react";
import Banner from "./Banner";
import wishimg from "../images/wishextend.png";
import "./Wish.css";
export default function Wish() {
  return (
    <>
      <Banner text="Catalogue" />
      <div className="wish-container">
        <img src={wishimg} alt="wishimg" className="img-wish" />

        <p className="rectangle-wish">
          <h1>Rules</h1>3 Wishes is a party/family game for 3-5 players that
          plays in 3-5 minutes. With simple rules, this memory, intuition and
          bluffing game is as much about playing the game as it is about playing
          the other players. A poker face will go a long way – well, not too
          long, since the game may last only three minutes – and it will also
          serve you well as a fast and fun memory training.<br></br>A
          not-so-nice-but-not-too-evil genie appears as if from nowhere
          (someone, somewhere probably did rub a lamp) and pitches the crowd
          against one another, granting the most astute player no fewer than
          three wishes — but not all wishes come true, and only the player with
          the right balance between super powers, benefits for the world, and
          selfish gifts will be enter the good graces of the genie. <br></br>In more
          detail, each player has a hand of three cards, with two extra cards
          face down in the middle of the gaming table. On their turn, each
          player can either peek at a card or swap cards with other players or
          the common pool on the table, aiming to get three different type of
          wish cards. Once that happens, someone calls for the end of the game
          and all players reveal their hands and compare wish cards to determine
          the winner.
        </p>
        <button className="bookgame">Book this game</button>
      </div>
      
    </>
  );
}
