import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const navlinks = [
    { url: "/", name: "Home" },
    { url: "/about", name: "About Us", hasSubmenu: true },
    { url: "/causes", name: "Causes" },
    { url: "/events", name: "Events" },
    { url: "/portfolio", name: "Portfolio" },
    { url: "/blog", name: "Blog" },
    { url: "/contact", name: "Contact" },
    { name: "Products", url: "/product" },
    { name: "Career", url: "/career" },
  ];

  const submenuLinks = [
    { url: "/about/our-story", name: "Our Story" },
    { url: "/about/what-we-do", name: "What we do" },
    { url: "/about/be-a-volunteer", name: "Be a Volunteer" },
    { url: "/about/faq", name: "FAQ" },
    { url: "/about/testimonals", name: "Testimonals" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <div className="lg:hidden flex items-center justify-between p-4 w-full h-[70px] fixed top-0 z-[99] bg-[#00733C]">
        <Link to="/" className="h-16 w-16">
          <img src={logo} alt="logo" className="h-full w-full object-contain" />
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
        className={`transition-max-height duration-300 ease-in-out overflow-hidden bg-[#00733C] fixed top-[70px] left-0 right-0 z-[98] lg:hidden ${
          isOpen ? "max-h-[90vh] overflow-y-auto py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col">
          {navlinks.map((link, index) => (
            <div key={index} className="relative mb-1">
              {link.hasSubmenu ? (
                <>
                  <button
                    onClick={() => setIsSubmenuOpen(prev => !prev)}
                    className="text-white py-2 px-4 text-left w-full hover:text-[#FFB204] transition flex justify-between items-center"
                  >
                    {link.name}
                    <span className="ml-auto pr-2 text-[#FFB204]">
                      {isSubmenuOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isSubmenuOpen && (
                    <div className="flex flex-col bg-[#006030]">
                      {submenuLinks.map((sublink, subIndex) => (
                        <Link
                          key={subIndex}
                          to={sublink.url}
                          className="text-white py-1.5 pl-8 pr-4 hover:text-[#FFB204] transition"
                          onClick={() => setIsOpen(false)}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.url}
                  className="text-white py-2 px-4 hover:text-[#FFB204] transition block w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          {/* Cart Button */}
          <div className="mt-4 px-4">
            <NavLink
              to="/cart"
              className="w-full bg-[#FFB204] hover:bg-[#E69F00] text-black hover:text-white font-semibold py-2 rounded transition flex items-center justify-center gap-4"
              onClick={() => setIsOpen(false)}
            >
              Cart
              <FaCartShopping size={25}/>
            </NavLink>
          </div>

          

          {/* Donate Button */}
          <div className="mt-4 px-4">
            <NavLink
              to="/donate"
              className="block w-full text-center bg-[#FFB204] hover:bg-[#E69F00] text-black hover:text-white font-semibold py-2 rounded transition"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileNavbar;