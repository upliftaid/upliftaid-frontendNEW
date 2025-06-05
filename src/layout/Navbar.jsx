import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDonateModal } from '../redux/uiSlice';
import {
  FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaYoutube,
  FaGlobe, FaLinkedinIn, FaGithub, FaRss, FaGooglePlusG,
  FaBars, FaTimes
} from 'react-icons/fa';
import logoe from '../assets/images/logo.png';

const Navbar = () => {
  const dispatch = useDispatch();
  const [isSticky, setIsSticky] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 43);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-[#00733C] h-[43px] text-white text-xs md:text-sm px-4 py-2 flex flex-col md:flex-row justify-between items-center">
        <div className="space-x-2 md:space-x-4 flex items-center">
          <span className="flex items-center gap-1"><FaPhone /> +123 456 7890</span>
          <span className="flex items-center gap-1"><FaEnvelope /> info@zozothemes.com</span>
        </div>
        <div className="space-x-2 mt-1 md:mt-0 flex">
          <FaFacebookF /><FaTwitter /><FaYoutube /><FaGlobe />
          <FaLinkedinIn /><FaGithub /><FaRss /><FaGooglePlusG />
        </div>
      </div>

      {/* Navbar */}
      <div
        className={`bg-white shadow-sm px-4 py-3 flex justify-between items-center z-50 transition-all duration-300 ${
          isSticky ? 'fixed top-0 left-0 right-0' : ''
        }`}
        style={{ height: '70px' }}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logoe} alt="Charity Logo" className="h-[50px]" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center text-gray-700">
          <a href="#" className="hover:text-green-700">Home</a>

          <div
            className="relative"
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
          >
            <button className="hover:text-green-700">About Us</button>
            {isAboutOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md z-50 w-52 rounded-md">
                <a href="#" className="block px-4 py-1 hover:bg-[#00733C]">Our Story</a>
                <a href="#" className="block px-4 py-1 hover:bg-[#00733C]">What we do</a>
                <a href="#" className="block px-4 py-1 hover:bg-[#00733C]">Be a Volunteer</a>
                <a href="#" className="block px-4 py-1 hover:bg-[#00733C]">FAQ</a>
                <a href="#" className="block px-4 py-1 hover:bg-[#00733C]">Testimonials</a>
                <div className="group relative">
                  <a href="#" className="block px-4 py-1 hover:bg-[#00733C]">Gallery ▸</a>
                  <div className="absolute top-0 left-full hidden group-hover:block bg-white shadow-md w-52 rounded-md">
                    <a href="#" className="block px-4 py-1 hover:bg-[#00733C]">Gallery Style One</a>
                    <a href="#" className="block px-4 py-1 hover:bg-[#00733C]">Gallery Style Two</a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-green-700">Causes</a>
          <a href="#" className="hover:text-green-700">Events</a>
          <a href="#" className="hover:text-green-700">Portfolio</a>
          <a href="#" className="hover:text-green-700">Blog</a>
          <a href="#" className="hover:text-green-700">Contact</a>
          <button
            className="bg-[#1c9c54] hover:bg-[#4b7e46] text-black text-sm py-2 px-4 rounded-md"
            onClick={() => dispatch(toggleDonateModal())}
          >
            Donate
          </button>
        </nav>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3">
          <a href="#" className="block">Home</a>
          <div>
            <button
              className="w-full text-left"
              onClick={() => setIsAboutOpen(!isAboutOpen)}
            >
              About Us ▾
            </button>
            {isAboutOpen && (
              <div className="pl-4 mt-2 space-y-1">
                <a href="#" className="block">Our Story</a>
                <a href="#" className="block">What we do</a>
                <a href="#" className="block">Be a Volunteer</a>
                <a href="#" className="block">FAQ</a>
                <a href="#" className="block">Testimonials</a>
                <div>
                  <span className="block font-medium">Gallery ▾</span>
                  <div className="pl-4">
                    <a href="#" className="block">Gallery Style One</a>
                    <a href="#" className="block">Gallery Style Two</a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <a href="#" className="block">Causes</a>
          <a href="#" className="block">Events</a>
          <a href="#" className="block">Portfolio</a>
          <a href="#" className="block">Blog</a>
          <a href="#" className="block">Contact</a>
          <button
            className="bg-[#ffb600] hover:bg-[#e0a800] w-full text-black py-2 rounded-md"
            onClick={() => {
              dispatch(toggleDonateModal());
              setMobileMenuOpen(false);
            }}
          >
            Donate
          </button>
        </div>
      )}

      {/* Sticky Placeholder */}
      {isSticky && <div style={{ height: '70px' }}></div>}
    </div>
  );
};

export default Navbar;
