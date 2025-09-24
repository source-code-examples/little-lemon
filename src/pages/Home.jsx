import React from "react";
import Hero from "../components/Hero.jsx";
import Hightlights from "../components/Highlights.jsx";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-main">
      <Hero />
      <Hightlights />
      <Testimonials />
      <About />
    </main>
  );
};

export default Home;
