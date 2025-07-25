import React from "react";
import logo from "../assets/images/logo.png";
// import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) =>
    isActive ? "underline underline-offset-[15px] decoration-2" : "";

  return (
    <nav className="bg-[#0f5253] w-full h-[101px] p-4 lg:flex justify-evenly items-center gap-[80px] fixed z-50 top-0 hidden">
      <div className="w-[70px] h-[70px]">
        <img src={logo} alt="logo" />
      </div>
      <div className="text-[#f0f0f0] flex gap-12 text-[14px]">
       <a to="/" className="">
          Home
        </a>
        <a to="/how-it-works" className="">
          How It Works
        </a>
        <a to="/donate" className="">
          Donate
        </a>
        <a to="/gallery" className="">
          Gallery
        </a>
        <a to="/blog" className="">
          Blog
        </a>
        <a to="/about" className="">
          About
        </a>
        <a to="/contact" className="">
          Contact
        </a>
        <a to="/career" className="">
          Career
        </a>
      </div>
    </nav>
  );
};

export default Navbar;