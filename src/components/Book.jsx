import React from "react";
import Banner from "./Banner";
import { TbCalendarTime } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BiChat } from "react-icons/bi";
import carte1 from "../images/carte1.png";
import carte2 from "../images/carte2.png";
import "./Book.css";
export default function Book() {
  return (
    <>
      <Banner text="Book a table" />
      <div className="book-container">
        <div className="date-and-time">
          <TbCalendarTime className="calendar-icon" size={50} color="black" />
          <input type="date" placeholder="Date" placeholder2=" "required className="date-input" onFocus="(this.type='date')" />
        </div>
        <div className="nbclients">
          <HiOutlineUserGroup className="user-icon" size={50} color="black" />
          <select className="adults-input">
            <option value="Adults">Adults</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <select className="children-input">
            <option value="Children">Children</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="special-request">
          <textarea
            name="special-request"
            className="special-request-input"
            placeholder="Special Requests : "
            rows="5"
            cols="47"
          />
        </div>
        <div className="dice-location">
          <p
            style={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              color: "#000000",
              fontWeight: "700",
              fontSize: "14px",
            }}
          >
            Which Dice location is your enquiry regarding ?
          </p>
          <div className="inputs-location">
            <div style={{ display: "flex", gap: "5px" }}>
              <input type="checkbox" className="dice-location-input" />
              <p
                style={{
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  color: "#000000",
                  fontWeight: "700",
                  fontSize: "14px",
                }}
              >
                Portsmouth
              </p>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <input type="checkbox" className="dice-location-input" />
              <p
                style={{
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  color: "#000000",
                  fontWeight: "700",
                  fontSize: "14px",
                }}
              >
                Worthing
              </p>
            </div>
          </div>
        </div>
        <img src={carte1} alt="carte1" className="carte1" />
        <div>
          <div className="info-carte1">
            <div className="mail">
              <AiOutlineMail className="mail-icon" size={20} color="black" />
              <p>info@diceboardgamelounge.com</p>
            </div>
            <div className="phone">
              <AiOutlinePhone className="phone-icon" size={20} color="black" />
              <p>023 9261 4121</p>
            </div>
            <div className="location">
              <IoLocationOutline
                className="location-icon"
                size={20}
                color="black"
              />
              <p>
                Dice Portsmouth, 149 Albert Road, Portsmouth, Hampshire. PO4 0JW
              </p>
            </div>
          </div>
        </div>
        <img src={carte2} alt="carte2" className="carte2" />
        <div>
          <div className="info-carte1">
            <div className="mail">
              <AiOutlineMail className="mail-icon" size={20} color="black" />
              <p>info@diceboardgamelounge.com</p>
            </div>
            <div className="phone">
              <AiOutlinePhone className="phone-icon" size={20} color="black" />
              <p>023 9261 4121</p>
            </div>
            <div className="location">
              <IoLocationOutline
                className="location-icon"
                size={20}
                color="black"
              />
              <p>
                Dice Portsmouth, 149 Albert Road, Portsmouth, Hampshire. PO4 0JW
              </p>
            </div>
          </div>
        </div>
        <div className="sms-mail-container">
            <p className="confirm-text">Confirmation & Reminder</p>
            <div className="sms-mail">
                <button className="btn-sms-mail"><BiChat size={50}/><p className="bold-text">SMS</p></button>
                <button className="btn-sms-mail"><AiOutlineMail size={50}/><p className="bold-text">MAIL</p></button>
            </div>
            <button className="book-btn">
                Book Now
            </button>
        </div>
      </div>
    </>
  );
}
