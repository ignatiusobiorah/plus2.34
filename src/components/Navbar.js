import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../img/Layer 2.png";
import "../styles/navbar.scss";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <a href="/">
        <img src={logo} alt="plus2.34_logo" />
      </a>

      <nav ref={navRef}>
        <a href="/">ABOUT</a>
        <a href="/">SHOP</a>
        <a href="/">GALLERY</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <div>
        <button id="support">support us</button>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
