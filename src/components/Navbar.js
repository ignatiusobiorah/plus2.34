import React, { useEffect } from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../img/Layer 1.png";
import { CircleUserRound } from "lucide-react";
import { ShoppingBag } from "lucide-react";

const Navbar = () => {
  const navRef = useRef();
  const headerRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    //Prevent scrolling when menu is open
    document.body.classList.toggle("menu-open");
  };

  //Close mobile menu when user clicks outside of it
  useEffect(()=> {
    const closeMenu = (event) => {
      if (
        navRef.current && 
        navRef.current.classList.contains("responsive_nav") &&
        !navRef.current.contains(event.target) &&
        !event.target.classList.contains("nav-btn")
      ){
        navRef.current.classList.remove("responsive_nav");
        document.body.classList.remove("menu-open");
      }
    };

    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  //Handle window resize 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && navRef.current.classList.contains("responsive_nav")) {
        navRef.current.classList.remove("responsive_nav");
        document.body.classList.remove("menu-open");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header ref={headerRef}>
      <div className="overlay">
      <div className="header-inner container">
      <div className="logo-nav-btn">
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
          <ShoppingBag className="cart"/>
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
    </div>

    </header>
  );
};

export default Navbar;
