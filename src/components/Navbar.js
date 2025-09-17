import React from "react";

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
            <a
              href={
                link === "Home"
                  ? "/"
                  : `/${link.toLowerCase().replace(" ", "-")}`
              }
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
