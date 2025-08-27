import React, { useState, useEffect, useRef } from "react";
import { BiSearch, BiUser, BiMenu, BiX } from "react-icons/bi";
import { CartButton } from "../../src/Components/BuyNowButton";
import Plant0_Logo from "../assets/img/Planto_logo.svg";
import gsap from "gsap";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    // Animate navbar from top only
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="flex justify-between items-center px-5 md:px-8 py-5 bg-transparent absolute top-0 w-full z-50"
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold text-green-600 flex items-center">
        <img
          src={Plant0_Logo}
          alt="Planto Logo"
          className="h-10 w-10 inline mr-2"
        />
        Planto.
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-white font-medium">
        <li><a href="/">Home</a></li>
        <li><a href="/">Plants Type</a></li>
        <li><a href="/">More</a></li>
      </ul>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <BiX className="w-7 h-7" /> : <BiMenu className="w-7 h-7" />}
      </button>

      {/* Desktop Icons */}
      <div className="hidden md:flex items-center gap-4 text-white">
        <BiSearch className="w-5 h-5 cursor-pointer" />
        <CartButton />
        <Link to="/signup" >
                     <BiUser className="w-5 h-5 cursor-pointer" />
                    </Link>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-95 flex flex-col items-center justify-center z-[1000] md:hidden">
          {/* Mobile Menu Links */}
          <ul className="flex flex-col gap-10 text-white text-2xl font-semibold text-center">
            <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="/" onClick={() => setMenuOpen(false)}>Plants Type</a></li>
            <li><a href="/" onClick={() => setMenuOpen(false)}>More</a></li>
          </ul>

          {/* Mobile Icons */}
          <div className="flex gap-8 mt-12 text-white">
            <BiSearch className="w-8 h-8 cursor-pointer" />
            <CartButton />
            <BiUser className="w-8 h-8 cursor-pointer" />
          </div>

          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <BiX />
          </button>
        </div>
      )}

    </nav>
  );
};
