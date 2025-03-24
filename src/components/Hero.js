import React from "react";
import Navbar from "./Navbar";
import circle from "../img/circle2.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="overlay">
        <Navbar />
        <div className="hero-inner">
          <div className="location-overlay">
            <p className="text">Port Harcourt, Nigeria</p>
            <img src={circle} alt="circle ove location" className="image" />
          </div>

          <h1>
            SKATEBOARDING COMMUNITY <br />
            AT THE TOP
          </h1>

          <p className="hero-text">
            Express yourself <br /> 
            Skateboarding is more than a sport it's an art form<br /> 
            Discover your style...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
