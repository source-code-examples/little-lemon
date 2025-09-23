import React from "react";
import logo from "../assets/images/logo.jpg";
import Navbar from "./Navbar.jsx";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Little Lemon Header Logo" />
      <Navbar />
    </header>
  );
};

export default Header;
