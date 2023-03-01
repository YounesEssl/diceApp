import React from "react";
import { VscHome } from "react-icons/vsc";
import { TbPlayCard } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import "./Menu.css";
export default function Menu() {
  return (
    <div className="navcontainer">
      <div>
        <VscHome size={30} />
        <p>Home Page</p>
      </div>
      <div>
        <TbPlayCard size={30} />
        <p>Social</p>
      </div>
      <div>
        <IoPersonOutline size={30} />
        <p>Account</p>
      </div>
      <div>
        <BiSearch size={30} />
        <p>Search</p>
      </div>
    </div>
  );
}
