import React, { useState } from "react";
import "./Footer.css";
import RestaurantImage from "../assets/images/restaurant.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showMap, setShowMap] = useState(false); // state for the map

  const dormatNavigationLinks = [
    "Home",
    "About",
    "Menu",
    "Reservation",
    "Order Online",
    "Login",
  ];
  const contactLinks = [
    { label: "Email", url: "mailto:info@littlelemon.de" },
    { label: "Phone Number", url: "tel:+491234567890" },
    {
      label: "Address",
      url: "https://www.google.com/maps?q=Carrer+de+Mallorca+401,+Barcelona,+Spain",
    },
  ];

  const socialMediaLinks = [
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "X", url: "https://x.com" },
  ];

  return (
    <footer className="footer">
      <div className="footer-section image-section">
        <img src={RestaurantImage} alt="Little Lemon Restaurant" />
      </div>

      <div className="footer-section ">
        <h4>Dormat Navigation</h4> <br />
        <ul>
          {dormatNavigationLinks.map((link) => (
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
      </div>

      <div className="footer-section">
        <h4>Contact</h4> <br />
        <ul>
          {contactLinks.map(({ label, url }) => (
            <li key={label}>
              {label === "Address" ? (
                <button
                  className="address-button"
                  onClick={() => setShowMap(!showMap)}
                  aria-expanded={showMap}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--white)",
                    fontSize: "16px",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  {label}
                </button>
              ) : (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>
        {/* Embedded map only for the address */}
        {showMap && (
          <div
            style={{ opacity: showMap ? 1 : 0 }}
            className={`map ${showMap ? "show" : ""}`}
          >
            <iframe
              title="Little Lemon Barcelona Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.055389364479!2d2.160204!3d41.385063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f7e3f8b8a3%3A0x8e3c3e3c3e3c3e3c!2sCarrer+de+Mallorca+401,+Barcelona,+Spain!5e0!3m2!1sde!2sde!4v1699999999999"
              width="200%"
              height="200px"
              style={{
                border: 0,
                marginTop: "10px",
                borderRadius: "16px",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </div>

      <div className="footer-section">
        <h4>Social Media</h4> <br />
        <ul>
          {socialMediaLinks.map(({ name, url }) => (
            <li key={name}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>&copy; 2025 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
