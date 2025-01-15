import React from "react";
import { Link } from "react-router-dom";
import slide1 from "../pages/Images/IMG_2529 - Copy.jpg";
import slide2 from "../pages/Images/IMG_2644.jpg";
import slide3 from "../pages/Images/KPOA2798.JPG";
import "./Home.css";

const Home = () => {
  return (
    <div className="hero">
      <div className="slideshow">
        <img src={slide1} alt="Slide 1" />
        <img src={slide2} alt="Slide 2" />
        <img src={slide3} alt="Slide 3" />
      </div>
      <div className="overlay">
        <h1 className="hero-title">Welcome </h1>
        <h1 className="hero-title">Adi_Snapshot Photography</h1>
        <p className="hero-subtitle">
          Discover the beauty of the world through my lens.
        </p>
        <Link to="/gallery" className="cta-button">Explore My Gallery</Link>
      </div>
    </div>
  );
};

export default Home;
