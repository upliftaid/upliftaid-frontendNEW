     
     import {
      FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaYoutube,
      FaGlobe, FaLinkedinIn, FaGithub, FaRss, FaGooglePlusG,
      FaHandshake
    } from 'react-icons/fa';
   
   const Topbar = () => {
  return (
   
   <div className="bg-white h-[43px] text-[#00733C] text-sm px-4 py-2 flex justify-between items-center">
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
  ) }
  export default Topbar;