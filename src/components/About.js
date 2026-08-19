import React from "react";
import chefImage from "../assets/images/restaurant-chef.webp";
import chefsImage from "../assets/images/restaurant-chefs.webp";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2 className="about-title">Little Lemon</h2>
        <h3 className="about-location">Barcelona</h3>
        <p className="about-text">
          Little Lemon is a family-run restaurant specializing in Mediterranean
          cuisine. Since 2023, we’ve served fresh, flavorful dishes made with
          love. Our cozy space offers a warm, welcoming atmosphere. Discover
          vibrant tastes—crafted with passion and served with a smile.
        </p>
      </div>
      <div className="about-images">
        <img
          src={chefsImage}
          alt="Two chefs are preparing the food."
          className="chefs-image"
          loading="lazy"
          width={300}
          height={400}
          decoding="async"
        />
        <img
          src={chefImage}
          alt="A chef is preparing the food."
          className="chef-image"
          loading="lazy"
          width={300}
          height={400}
          decoding="async"
        />
      </div>
    </section>
  );
};

export default About;
