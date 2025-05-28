import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import upliftaid from '../assets/images/logo1.png'; // adjust path as needed

const Footer = () => {
  return (
    <footer className="bg-[#00733C] text-white px-6  pb-6">
         
    <header className=" py-4  flex flex-col md:flex-row items-center justify-between border-b border-white/30">
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold">
<img src={upliftaid} alt="Charity Logo" className="h-[70px]" />
      </div>

      {/* Message and Button */}
      <div className="flex items-center gap-6 mt-4 md:mt-0">
        <h1 className="text-[40px] h-[70px]  font-['lora'] font-bold">We Need Your Help</h1>
        <button className="bg-[#ffb600] hover:bg-[#ffb600] h-[40px] w-[117px]  text-[14px] text-black font-semibold py-2 px-4">
          Donate Now
        </button>
      </div>
    </header>
      <div className="flex flex-wrap justify-between gap-10  pb-10">
        {/* Spread The Word */}
        <div className="p-5">
          <h2 className="text-[28px] font-['serif'] font-bold h-[28px] mb-4 ">Spread The Word</h2>
          <div className="flex pt-[15px] gap-4">
            {[FaFacebookF, FaTwitter, FaPinterestP, FaGooglePlusG, FaLinkedinIn].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-sky-500 transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Useful Info */}
        <div className='p-5'>
          <h2 className="text-[28px] font-['lora'] font-bold mb-4">Useful Info</h2>
          <ul className="space-y-2 text-[17.92px]">
            <li><a href="#">Annual reports</a></li>
            <li><a href="#">Our approach</a></li>
            <li><a href="#">Statistics</a></li>
            <li><a href="#">Stories from our work</a></li>
            <li><a href="#">Why WaterAid?</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className='p-5'>
          <h2 className="text-[28px] font-['lora'] font-bold mb-4">Useful Links</h2>
          <ul className="space-y-2 text-[17.92px]">
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
      <div className=" text-white text-sm ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <p>
          zozothemes.com, 233 Test, Test 2705, Test City, NY, 10279, Test. Tel: (012) 345 - 6789
        </p>
        
      </div>

      <hr className="border-white/40 mb-4" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div><p>© 2025 zozothemes.com</p>
        <p>zozothemes.com is a Creative Agency.</p></div>
        <div className="flex items-center gap-4 mt-2 md:mt-0 text-sm">
          <a href="#" className="hover:underline">Contact us</a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:underline">FAQs</a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:underline">Privacy policy</a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:underline">Terms & conditions</a>
        </div>
      </div>
    </div>
      {/* Bottom Line */}

    </footer>
  );
};

export default Footer;
