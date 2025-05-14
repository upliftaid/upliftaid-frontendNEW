import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/donate', label: 'Donate' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/blog', label: 'Blog' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/career', label: 'Career' },
];

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='bg-[#0f5253] w-full h-[101px] p-8 flex justify-between items-center fixed z-50 top-0 lg:hidden'>
        <div className='w-[70px] h-[70px]'>
          <img src={logo} alt='logo' />
        </div>
        <div
          className='text-white flex items-center gap-2 cursor-pointer'
          onClick={() => {
            setIsOpen(prev => !prev);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <GiHamburgerMenu size={25} />
          <p className='text-xl'>MENU</p>
        </div>
      </nav>

      {isOpen && (
        <div className='overflow-hidden bg-[#0f5253] w-full px-6 py-4 mt-[101px] flex flex-col space-y-4 text-white text-lg lg:hidden transition-all duration-300 ease-in-out'>
          {navLinks.map(({ path, label }) => (
            <NavLink key={path} to={path} onClick={() => setIsOpen(false)}>
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default MobileNavBar;
