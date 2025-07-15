import React from "react";
import logo from "./icons_assets/Logo.svg";
import Nav from "./Components/Nav";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <Nav />
    </header>
  );
}

export default Header;
