import logo2 from "../assets/logo1-removebg-preview.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navlinks = [
    { url: "/", name: "Home" },
    { url: "/about", name: "About Us" },
    { url: "/causes", name: "Causes" },
    { url: "/events", name: "Events" },
    { url: "/portfolio", name: "Portfolio" },
    { url: "/blog", name: "Blog" },
    { url: "/contact", name: "Contact" },
  ];

  return (
    <>
      {/* Top Fixed Navbar */}
      <div className="md:hidden flex items-center justify-between p-4 w-full h-[70px] fixed top-0 z-[99] bg-[#00733C]">
        <Link to="/" className="h-16 w-16">
          <img src={logo2} alt="logo" className="h-full w-full object-contain" />
        </Link>

        <button onClick={() => setIsOpen(prev => !prev)} aria-label="Toggle Menu">
          {isOpen ? (
            <RxCross2 size={30} color="#FFB204" />
          ) : (
            <GiHamburgerMenu size={30} color="#FFB204" />
          )}
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden bg-[#00733C] fixed top-[70px] left-0 right-0 z-[98] md:hidden ${
          isOpen ? "max-h-[500px] py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col">
          {navlinks.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              className="text-white py-3 px-4 hover:text-[#FFB204] transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileNavbar;
