import React from "react";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <header className="hero">
        <h1>Welcome to My Photography Portfolio</h1>
        <p>Discover the beauty of the world through my lens</p>
      </header>
      <Gallery />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
