// src/components/Header.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleDonateModal } from '../redux/uiSlice';
import {
  FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaYoutube,
  FaGlobe, FaLinkedinIn, FaGithub, FaRss, FaGooglePlusG,
  FaHandshake
} from 'react-icons/fa';
import charity from '../assets/images/charity.png';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-[#00ADEF] h-[43px] text-white text-sm px-4 py-2 flex justify-between items-center">
        <div className="space-x-4 h-[24]">
          <span><FaPhone className="inline" /> +123 456 7890</span>
          <span><FaEnvelope className="inline ml-2" /> info@zozothemes.com</span>
        </div>
        <div className="space-x-3 flex h-[24]">
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaGlobe />
          <FaLinkedinIn />
          <FaGithub />
          <FaRss />
          <FaGooglePlusG />
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-white shadow-sm px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center space-x-1">
            <img src={charity} alt="Charity Logo" className=" h-[70px]" />
        
        </div>
        <nav className="hidden md:flex space-x-8 h-[70px] p-[15px] text-gray-700">
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
  );
};

export default Navbar;
