import React from "react";
import "./Hero.css";
import restaurantImage from "../assets/images/waiter-serves.jpg";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Little Lemon</h1>
        <h2 className="hero-location">Barcelona</h2>
        <p className="hero-teaser">
          Fresh Mediterranean cuisine with a touch of heart.
        </p>

        <div id="loading-overlay" class="hidden">
          <div class="spinner"></div>
        </div>

        <button
          className="hero-reserve-button"
          onClick={() => {
            const overlay = document.getElementById("loading-overlay");
            overlay.classList.remove("hidden");
            setTimeout(() => {
              document.body.classList.add("fade-out");
            }, 1500); // Spinner initially visible
            setTimeout(() => {
              window.location.href = "/reservations";
            }, 2500); // Redirect after fade-out
          }}
        >
          Reserve Table
        </button>
      </div>
      <img
        src={restaurantImage}
        alt="Little Lemon Restaurant - A
        waiter serves food"
      />
    </section>
  );
};

export default Hero;
