import React from 'react';
import logoStrip from '../assets/images/logoStrip.png'; // adjust path as needed

const LogoStrip = () => {
  return (
    <div className='pt-12'>
        <div className="bg-[#f7f7f7] py-8">
      <div className="max-w-7xl mx-auto px-4 flex justify-center">
        <img src={logoStrip} alt="Client Logos" className="w-full max-w-6xl object-contain opacity-50" />
      </div>
    </div>
    </div>
  );
};

export default LogoStrip;
