import React from "react";
import logo from "../assets/images/logo.jpg";
import Navbar from "./Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Little Lemon Header Logo" width={200} />
      <Navbar />
    </header>
  );
};

export default Header;
