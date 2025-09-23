import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarLinks = [
    "Home",
    "About",
    "Menu",
    "Reservations",
    "Order Online",
    "Login",
  ];

  return (
    <nav>
      <ul>
        {navbarLinks.map((link) => (
          <li key={link}>
            <Link
              to={
                link === "Home"
                  ? "/"
                  : `/${link.toLowerCase().replace(" ", "-")}`
              }
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
