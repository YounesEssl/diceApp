import React from "react";
import logowhite from "../images/logowhite.png";
import "./NavBar.css";
import { useLocation } from "react-router-dom";
export default function NavBar() {
  const withouSidebarRoutes = ["/login", "/signup"];

  const { pathname } = useLocation();
  if (withouSidebarRoutes.some((item) => pathname.includes(item))) return null;
  return (
    <>
    <header className="header-container">
      <img src={logowhite} alt="Logo" className="header-logo" />
    </header>
    </>
  );
}
