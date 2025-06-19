import logo2 from "../assets/logo1-removebg-preview.png";
import { Link, NavLink } from "react-router-dom";
import { FaLinkedinIn, FaYoutube, FaGoogle, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialLinksDetails = [
    { image: FaFacebookF, url: "/" },
    { image: FaXTwitter, url: "/" },
    { image: FaGoogle, url: "/" },
    { image: FaLinkedinIn, url: "/" },
    { image: FaYoutube, url: "/" },
  ];

  return (
    <div className="w-full mt-10">
      <div className="bg-[#00733C] text-white p-4 lg:px-20">
        <div className="w-[90%] mx-auto grid gap-4">

          {/* Top Row */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Link to="/" className="h-16 w-16">
              <img src={logo2} alt="Uplift Logo" />
            </Link>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <h1 className="text-[28px]">We Need Your Help</h1>
              <div className="w-32 h-10 flex items-center justify-center bg-[#FFB204] hover:bg-[#E69F00] text-black rounded hover:text-white">
                <NavLink to="/">Donate Now</NavLink>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="bg-[#ccc]/70 w-full h-[0.8px]" />

          {/* Content Grid */}
          <div className="p-2 grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">

            {/* Social */}
            <div className="grid gap-4">
              <h1 className="font-bold">Spread The Word</h1>
              <div className="flex gap-2">
                {socialLinksDetails.map((link, index) => (
                  <Link
                    key={index}
                    to={link.url}
                    className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-[#ffb600]"
                  >
                    <link.image />
                  </Link>
                ))}
              </div>
            </div>

            {/* Useful Info */}
            <div>
              <h1 className="font-bold">Useful Info</h1>
              <div className="flex flex-col mt-4 gap-2 text-[14px]">
                <Link to="#">Annual Reports</Link>
                <Link to="#">Our Approach</Link>
                <Link to="#">Statistics</Link>
                <Link to="#">Stories from our work</Link>
                <Link to="#">Why WaterAid?</Link>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h1 className="font-bold">Useful Links</h1>
              <div className="flex flex-col mt-4 gap-2 text-[14px]">
                <Link to="#">Careers</Link>
                <Link to="#">Contact Us</Link>
                <Link to="#">Donate</Link>
                <Link to="#">Medical Resources</Link>
                <Link to="#">Site Map</Link>
              </div>
            </div>

            {/* Stay Informed */}
            <div className="grid gap-4">
              <h1 className="font-bold">Stay Informed</h1>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-10 bg-white p-4 text-black outline-none"
              />
              <Link to="#" className="w-25 h-10 bg-[#FFB204] hover:bg-[#E69F00] rounded hover:text-white text-black flex items-center justify-center">
                Submit
              </Link>
            </div>
          </div>

          {/* Address */}
          <p className="text-[10px]">
            uplift.com, 233 Test, Test 2705, Test City, NY, 10279, Test. Tel: (+91) 1234567890
          </p>

          {/* Divider */}
          <div className="bg-[#ccc]/70 w-full h-[0.8px]" />

          {/* Bottom Row */}
          <div className="flex justify-between flex-col md:flex-row">
            <div className="grid gap-3">
              <p className="text-[12px]">uplift.com is a Welfare Organization.</p>
              <p className="text-[12px]">© Copyright 2025 uplift.com</p>
            </div>
            <div className="text-[12px] flex gap-4 mt-4 md:mt-0">
              <Link to="#">Contact us</Link>
              <div className="w-[1px] h-4 bg-white" />
              <Link to="#">FAQs</Link>
              <div className="w-[1px] h-4 bg-white" />
              <Link to="#">Privacy Policy</Link>
              <div className="w-[1px] h-4 bg-white" />
              <Link to="#">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
