import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { PiXLogoBold } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const socialLinksDetails = [
    {
      image: FaFacebookF,
      url: "https://facebook.com/upliftaidfoundation",
    },
    {
      image: PiXLogoBold,
      url: "https://x.com/Upliftaid",
    },
    {
      image: FaGoogle,
      url: "https://g.co/kgs/xVrf1sH",
    },
    {
      image: FaLinkedinIn,
      url: "https://www.linkedin.com/company/upliftaidfoundation/",
    },
    {
      image: FaYoutube,
      url: "https://youtube.com/@upliftaidfoundation",
    },
    {
      image : FaInstagram,
      url : "https://www.instagram.com/upliftaidfoundation"
    }
  ];

  return (
    <div className="w-full mt-10">
      <div className="bg-[#00733C] text-white p-4 lg:px-20">
        <div className="w-[90%] mx-auto grid gap-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Link to="/" className="h-16 w-16">
              <img src={logo} alt="" />
            </Link>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <h1 className="text-[28px]">We Need Your Help</h1>
              <div className="w-32 h-10 flex items-center justify-center bg-[#FFB204] hover:bg-[#E69F00] text-black rounded hover:text-white">
                <NavLink to="/contact">
                  Donate Now
                </NavLink>
              </div>
            </div>
          </div>
          <div className="bg-[#ccc]/70 w-full h-[0.8px]" />
          <div className="p-2 grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            <div className="grid gap-4 md:mb-30 h-fit">
              <h1 className="font-bold">Spread The World</h1>
              <div className="flex gap-2">
                {socialLinksDetails.map((link, index) => {
                  return (
                    <div key={index + link.url}>
                      <Link
                        to={link.url}
                        className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-[#ffb600]"
                      >
                        <link.image />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h1 className="font-bold">Useful Info</h1>
              <div className="flex flex-col mt-4 gap-2 text-[14px]">
                <Link to='/about-us/be-a-volunteer' className="hover:text-[#FFB204]">Be a Volunteer</Link>
                <Link to='/about-us' className="hover:text-[#FFB204]">About Us</Link>
                <Link to='/' className="hover:text-[#FFB204]">Our Campaigns</Link>
                <Link to='/events' className="hover:text-[#FFB204]">Events</Link>
                <Link to='/' className="hover:text-[#FFB204]">Stories from our work</Link>
              </div>
            </div>
            <div>
              <h1 className="font-bold">Useful links</h1>
              <div className="flex flex-col mt-4 gap-2 text-[14px]">
                <Link to='/career' className="hover:text-[#FFB204]">Carrers</Link>
                <Link to='/contact' className="hover:text-[#FFB204]">Contact Us</Link>
                <Link to='/contact' className="hover:text-[#FFB204]">Donate</Link>
                <Link to='/' className="hover:text-[#FFB204]">Medical resources</Link>
                <Link to='/' className="hover:text-[#FFB204]">Site map</Link>
              </div>
            </div>
            <div className="grid gap-4 md:gap-0">
              <h1 className="font-bold">Stayed Informed</h1>
              <input
                type="text"
                placeholder="Email Address"
                className="w-full h-10 bg-white p-4 text-black outline-none"
              />
              <Link className="w-25 h-10 bg-[#FFB204] hover:bg-[#E69F00] rounded hover:text-white text-black flex items-center justify-center">
                Submit
              </Link>
            </div>
          </div>

          <p className="text-[10px]">
            upliftaid.org, Ghazibad, UttarPradesh, India, 201001.
            Email : hello@upliftaid.org
          </p>
          <div className="bg-[#ccc]/70 w-full h-[0.8px]" />
          <div className="flex justify-between flex-col md:flex-row">
            <div className="grid gap-3">
              <p className="text-[12px]">
                upliftaid.org is a Welfare Organizaton.
              </p>
              <p className="text-[12px]">© Copyright 2025 upliftaid.org</p>
            </div>
            <div className="text-[12px] flex gap-4 mt-4">
              <Link to='/contact' className="hover:text-[#FFB204]">Contact us</Link>
              <div className="w-[1px] h-4 bg-white" />
              <Link to='/about-us/faq' className="hover:text-[#FFB204]">FAQS</Link>
              <div className="w-[1px] h-4 bg-white" />
              <Link to='/' className="hover:text-[#FFB204]">Privacy Policy</Link>
              <div className="w-[1px] h-4 bg-white" />
              <Link to='/' className="hover:text-[#FFB204]">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;