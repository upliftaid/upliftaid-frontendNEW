// src/components/Header.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleDonateModal } from '../redux/uiSlice';
import {
  FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaYoutube,
  FaGlobe, FaLinkedinIn, FaGithub, FaRss, FaGooglePlusG,
  FaHandshake
} from 'react-icons/fa';
import upliftaid from '../assets/images/upliftaid.png';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sticky top-0 z-50">
      {/* Top Bar */}
 

      {/* Navbar */}
      <div className="sticky top-0 z-50">
      <div className="bg-white shadow-sm px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center space-x-1">
            <img src={upliftaid} alt="upliftaid Logo" className=" h-[70px]" />
        
        </div>
        <nav className="hidden md:flex space-x-8 h-[70px] p-[15px] text-[#000000]">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Causes</a>
          <a href="#">Events</a>
          <a href="#">Portfolio</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <button
          className="bg-[#ffb600] hover:bg-[#ffb600] text-black font-[14px] py-2 px-4"
          onClick={() => dispatch(toggleDonateModal())}
        >
          Donate
        </button>
        </nav>
        
      </div>
      </div>
    </div>
  );
};

export default Navbar;
