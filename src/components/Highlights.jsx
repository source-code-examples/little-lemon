import React from "react";
import "./Highlights.css";
import deliveryVanIcon from "../assets/images/delivery-van.png";
import gazpachoImage from "../assets/images/gazpacho.jpg";
import mariscoImage from "../assets/images/marisco.jpg";
import flanImage from "../assets/images/flan.jpg";

const Hightlights = () => {
  return (
    <section className="highlights-section">
      <div className="highlights-header">
        <h2 className="highlights-title">This Week Specials!</h2>
        <button className="online-menu-button">Online Menu</button>
      </div>
      <div className="cards">
        <div className="card">
          <img src={gazpachoImage} alt="Gazpacho" className="card-image" />
          <div className="card-header">
            <h3 className="card-title">Gazpacho</h3>
            <span className="card-price">€ 7.50</span>
          </div>
          <p className="card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            officiis.
          </p>
          <button className="card-button">
            Order a delivery
            <img
              src={deliveryVanIcon}
              alt="delivery van"
              className="card-icon"
            />
          </button>
        </div>
        <div className="card">
          <img src={mariscoImage} alt="Marisco" className="card-image" />
          <div className="card-header">
            <h3 className="card-title">Marisco</h3>
            <span className="card-price">€ 14.90</span>
          </div>
          <p className="card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Et,
            officiis.
          </p>
          <button className="card-button">
            Order a delivery
            <img
              src={deliveryVanIcon}
              alt="delivery van"
              className="card-icon"
            />
          </button>
        </div>
        <div className="card">
          <img src={flanImage} alt="Flan" className="card-image" />
          <div className="card-header">
            <h3 className="card-title">Flan</h3>
            <span className="card-price">€ 8.50</span>
          </div>
          <p className="card-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere!
          </p>
          <button className="card-button">
            Order a delivery
            <img
              src={deliveryVanIcon}
              alt="delivery van"
              className="card-icon"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hightlights;
