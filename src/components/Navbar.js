import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../img/Layer 1.png";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header >
    <div className="header-inner container">
      <div className="logo-nav-btn">
        <div> 
          <a href="/">
            <img src={logo} alt="plus2.34_logo" />
          </a>
        </div>
       
        <div>
          <nav ref={navRef}>
            <a href="/">ABOUT</a>
            <a href="/">SHOP</a>
            <a href="/">GALLERY</a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
        </div>
       
        <div>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
          
          <button id="support"  className="btn btn-light">
            support us
            </button>
        </div>
      </div>


    </div>
    </header>
  );
};

export default Navbar;
