import { Link, NavLink } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import logo2 from "../assets/images/logo1-removebg-preview.png";

const Footer = () => {
  const socialLinksDetails = [
    {
      image: FaFacebookF,
      url: "/",
    },
    {
      image: FaTwitter,
      url: "/",
    },
    {
      image: FaGoogle,
      url: "/",
    },
    {
      image: FaLinkedinIn,
      url: "/",
    },
  ];

  return (
    <div className="w-full mt-10">
      <div className="bg-[#00733C] text-white p-4 lg:px-20">
        <div className="w-[90%] mx-auto grid gap-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Link to="/" className="h-16 w-16">
              <img src={logo2} alt="" />
            </Link>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <h1 className="text-[28px]">We Need Your Help</h1>
              <div className="w-32 h-10 flex items-center justify-center bg-[#FFB204] hover:bg-[#E69F00] text-black rounded hover:text-white">
                <NavLink to="/" className="">
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
                <Link>Annual Reports</Link>
                <Link>Our Apporach</Link>
                <Link>Statics</Link>
                <Link>Stories from our work</Link>
                <Link>Why WaterAid?</Link>
              </div>
            </div>
            <div>
              <h1 className="font-bold">Useful links</h1>
              <div className="flex flex-col mt-4 gap-2 text-[14px]">
                <Link>Carrers</Link>
                <Link>Contact Us</Link>
                <Link>Donate</Link>
                <Link>Medical resources</Link>
                <Link>Site map</Link>
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
            zozothemes.com, 233 Test, Test 2705, Test City, NY, 10279, Test.
            Tel: (012) 345 - 6789
          </p>
          <div className="bg-[#ccc]/70 w-full h-[0.8px]" />
          <div className="flex justify-between flex-col md:flex-row">
            <div className="grid gap-3">
              <p className="text-[12px]">
                zozothemes.com is a Creative Agency.
              </p>
              <p className="text-[12px]">© Copyright 2025 zozothemes.com</p>
            </div>
            <div className="text-[12px] flex gap-4 mt-4">
              <Link>Contact us</Link>
              <div className="w-[1px] h-4 bg-white" />
              <Link>FAQS</Link>
              <div className="w-[1px] h-4 bg-white" />
              <Link>Privacy Policy</Link>
              <div className="w-[1px] h-4 bg-white" />
              <Link>Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
