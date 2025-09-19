import React from "react";
import Hero from "./Hero";
import Hightlights from "./Hightlights";
import Testimonials from "./Testimonials";
import About from "./About";
import "./Main.css";

const Main = () => {
  return (
    <>
      <main>
        <br />
        <Hero />
        <Hightlights />
        <Testimonials />
        <About />
      </main>
    </>
  );
};

export default Main;
