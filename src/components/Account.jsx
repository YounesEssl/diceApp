import React from "react";
import Banner from "./Banner";
import "./Account.css";
import { FaPencilAlt } from "react-icons/fa"; // import de l'icône crayon
import { FaUserCircle, FaRegUser, FaRegBell } from "react-icons/fa";
import { AiOutlineSetting, AiOutlineLike } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import aboutus from "../images/aboutus.png";
import badge from "../images/badge.png";
export default function Account() {
  return (
    <>
      <div>
        <Banner text="Account" />
      </div>
      <div className="all-container-account">
        <div className="container-account">
          <FaUserCircle className="cgprofile" size={50} color="white" />
          <div className="second-container-account">
            <h3>Username</h3>
            <p>@username</p>
            <div className="pencil-container">
              <FaPencilAlt className="pencil-icon" size={18} color="black" />
            </div>
          </div>
        </div>
      </div>
      <div className="all-account-menu">
        <div className="menu-account">
          <div className="circle">
            <FaRegUser color="black" size={25} className="iconuser" />
          </div>
          <div className="second-container-menu-account">
            <h4>My Account</h4>
            <p style={{ color: "gray" }}>Make changes to your account</p>
          </div>
        </div>
        <div className="menu-account">
          <div className="circle">
            <img src={badge} alt="badge" style={{ width:"24px", filter: 'drop-shadow(5.48449px 5.48449px 6.26798px rgba(0, 0, 0, 0.3))'}} />
          </div>
          <div className="second-container-menu-account">
            <h4>Badges</h4>
            <p style={{ color: "gray" }}>See what you earned</p>
          </div>
        </div>
        <div className="menu-account">
          <div className="circle">
            <FaRegBell color="black" size={25} className="iconuser" />
          </div>
          <div className="second-container-menu-account">
            <h4>Notifications</h4>
            <p style={{ color: "gray" }}>Manage your device</p>
          </div>
        </div>
        <div className="menu-account">
          <div className="circle">
            <AiOutlineSetting color="black" size={25} className="iconuser" />
          </div>
          <div className="second-container-menu-account">
            <h4>Settings</h4>
          </div>
        </div>
        <div className="menu-account">
          <div className="circle">
            <MdLogout color="black" size={25} className="iconuser" />
          </div>
          <div className="second-container-menu-account">
            <h4>Log out</h4>
          </div>
        </div>
        <span className="test"></span>
        <div className="menu-account">
          <div className="circle">
            <AiOutlineLike color="black" size={25} className="iconuser" />
          </div>
          <div className="second-container-menu-account">
            <h4>Help & Support</h4>
          </div>
        </div>
        <div className="menu-account">
          <div className="circle">
            <img src={aboutus} alt="aboutus"/>
          </div>
          <div className="second-container-menu-account">
            <h4>About us</h4>
          </div>
        </div>
      </div>

    </>
  );
}
