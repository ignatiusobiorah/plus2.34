import React from "react";
import circle from "../img/circle2.png";



const Hero = () => {
  return (
    <div className="hero">
      <div className="overlay">
        <div className="hero-inner">
          <div className="location-overlay">
            <p className="text">Port Harcourt, Nigeria</p>
            <img src={circle} alt="circle ove location" className="image" />
          </div>

          <h1>
            SKATEBOARDING COMMUNITY <br />
            AT THE TOP
          </h1>
          <p>
            
            Express yourself. Skateboarding is more than a sport it's an art form. Discover your style.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
