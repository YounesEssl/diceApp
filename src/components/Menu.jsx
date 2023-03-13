import React, { useState } from "react";
import "./Menu.css";
import { FiHome, FiSearch, FiUser } from "react-icons/fi";
import { CgCardDiamonds } from "react-icons/cg";
import { AiOutlineLeft, AiOutlineMenu } from "react-icons/ai";
import logoblack from "../images/logoblack.jpg";
import { Link } from "react-router-dom";
const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="menu-button"
        style={{ color: props.couleur }}
        onClick={handleToggleMenu}
      >
        <AiOutlineMenu />
      </button>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <button className="close-button" onClick={handleToggleMenu}>
            <AiOutlineLeft />
          </button>
        )}
        <div className="all-content-menu">
          <Link to="/" className="menu-item">
            <FiHome className="icon" size={24} />
            Home
          </Link>
          <Link to="/social" className="menu-item">
            <CgCardDiamonds className="icon" size={24} />
            Social
          </Link>
          <Link to="/account" className="menu-item">
            <FiUser className="icon" size={24} />
            Account
          </Link>
          <Link to="/" className="menu-item">
            <FiSearch className="icon" size={24} />
            Search
          </Link>
        </div>
        <img src={logoblack} alt="Your" className="menu-image" />
      </div>
    </>
  );
};

export default Menu;
