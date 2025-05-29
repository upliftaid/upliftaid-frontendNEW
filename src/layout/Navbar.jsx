// src/components/Header.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import upliftaid from '../assets/images/logo1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-[#00733C] text-white">
      {/* Navbar */}
      <div className="shadow-sm px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center space-x-1">
          <img src={upliftaid} alt="upliftaid Logo" className="h-[70px]" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 h-[70px] p-[15px] text-[#ffffff]">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Causes</a>
          <a href="#">Events</a>
          <a href="#">Portfolio</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <button className="bg-[#ffb600] hover:bg-[#e6a700] text-black font-[14px] py-2 px-4">
            Donate
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#00733C] px-4 pb-4 space-y-2 text-sm">
          <a href="#" className="block">Home</a>
          <a href="#" className="block">About Us</a>
          <a href="#" className="block">Causes</a>
          <a href="#" className="block">Events</a>
          <a href="#" className="block">Portfolio</a>
          <a href="#" className="block">Blog</a>
          <a href="#" className="block">Contact</a>
          <button className="w-full mt-2 bg-[#ffb600] hover:bg-[#e6a700] text-black font-[14px] py-2 px-4">
            Donate
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
