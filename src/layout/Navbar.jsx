import React from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) =>
    isActive ? "underline underline-offset-[15px] decoration-2" : "";

  return (
    <nav className="bg-[#0f5253] w-full h-[101px] p-4 lg:flex justify-evenly items-center gap-[80px] fixed z-50 top-0 hidden">
      <div className="w-[70px] h-[70px]">
        <img src={logo} alt="logo" />
      </div>
      <div className="text-[#f0f0f0] flex gap-12 text-[14px]">
        <NavLink to="/" className={navLinkStyles}>
          Home
        </NavLink>
        <NavLink to="/how-it-works" className={navLinkStyles}>
          How It Works
        </NavLink>
        <NavLink to="/donate" className={navLinkStyles}>
          Donate
        </NavLink>
        <NavLink to="/gallery" className={navLinkStyles}>
          Gallery
        </NavLink>
        <NavLink to="/blog" className={navLinkStyles}>
          Blog
        </NavLink>
        <NavLink to="/about" className={navLinkStyles}>
          About
        </NavLink>
        <NavLink to="/contact" className={navLinkStyles}>
          Contact
        </NavLink>
        <NavLink to="/career" className={navLinkStyles}>
          Career
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
