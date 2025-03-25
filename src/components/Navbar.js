import React, { useEffect } from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../img/Layer 1.png";
import { CircleUserRound } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import Cart from "./Cart";

const Navbar = ({size}) => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    //Prevent scrolling when menu is open
    document.body.classList.toggle("menu-open");
  };

  return (
    <header>
      <div className="header-content">
        <div> 
          <a href="/">
            <img src={logo} alt="plus2.34_logo" />
          </a>
        </div>
       
        <nav ref={navRef}>
          <a href="/" onClick={showNavbar}>ABOUT</a>
          <a href="/" onClick={showNavbar}>SHOP</a>
          <a href="/" onClick={showNavbar}>GALLERY</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        

        <div className="nav-shop">
          <CircleUserRound className="user"/>
          <ShoppingBag onClick={Cart} className="cart"/>
          <span>{size}</span>
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
    

    </header>
  );
};

export default Navbar;
