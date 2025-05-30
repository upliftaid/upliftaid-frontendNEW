import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import upliftaid from '../assets/images/logo1.png'; // update path if needed

const Footer = () => {
  return (
    <footer className="bg-[#00733C] text-white px-4 lg:px-20 py-8">
      {/* Top Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center border-b border-white/40 pb-6 gap-6">
        <img src={upliftaid} alt="Logo" className="h-[70px]" />

        <div className="text-center lg:text-right">
          <h2 className="text-[28px] lg:text-[36px] font-bold font-['Lora'] mb-2">We Need Your Help</h2>
          <button className="bg-[#ffb600] text-black font-semibold px-6 py-2 text-sm hover:bg-yellow-400 transition">
            Donate Now
          </button>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
        {/* Spread the Word */}
        <div>
          <h3 className="text-[22px] font-bold font-['Lora'] mb-4">Spread The Word</h3>
          <div className="flex gap-3">
            {[FaFacebookF, FaTwitter, FaPinterestP, FaGooglePlusG, FaLinkedinIn].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-sky-600 transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Useful Info */}
        <div>
          <h3 className="text-[22px] font-bold font-['Lora'] mb-4">Useful Info</h3>
          <ul className="space-y-2 text-sm lg:text-base">
            <li><a href="#">Annual reports</a></li>
            <li><a href="#">Our approach</a></li>
            <li><a href="#">Statistics</a></li>
            <li><a href="#">Stories from our work</a></li>
            <li><a href="#">Why WaterAid?</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-[22px] font-bold font-['Lora'] mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm lg:text-base">
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Media resources</a></li>
            <li><a href="#">Publications</a></li>
            <li><a href="#">Site map</a></li>
          </ul>
        </div>

        {/* Stay Informed */}
        <div className="text-white p-5">
      <h2 className="text-[28px] font-bold font-['lora'] mb-4">Stay Informed</h2>
      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-3 mb-4 bg-[white] text-gray-700  focus:outline-none"
      />
      <button className="bg-cyan-900 hover:bg-cyan-800 text-white font-semibold px-6 py-2 ">
        Submit
      </button>
    </div>
      </div>

      {/* Bottom Info */}
      <div className="text-sm text-white border-t border-white/40 pt-6">
        <p className="mb-4">
          zozothemes.com, 233 Test, Test 2705, Test City, NY, 10279, Test. Tel: (012) 345 - 6789
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2">
          <p>© 2025 zozothemes.com | zozothemes.com is a Creative Agency.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="hover:underline">Contact us</a>
            <span>|</span>
            <a href="#" className="hover:underline">FAQs</a>
            <span>|</span>
            <a href="#" className="hover:underline">Privacy policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Terms & conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
