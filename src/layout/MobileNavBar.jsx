import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaCartShopping, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useSelector } from "react-redux";

const SidebarNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const navlinks = [
    { url: "/", name: "Home" },
    { url: "/about-us", name: "About Us", hasSubmenu: true },
    { url: "/causes", name: "Causes" },
    { url: "/events", name: "Events" },
    { url: "/portfolio", name: "Portfolio" },
    { url: "/blog", name: "Blog" },
    { url: "/contact", name: "Contact" },
    { url: "/product", name: "Products" },
    { url: "/career", name: "Career" },
    { url: "/profile", name: "Profile" },
    { url: "/login", name: "Login" },
  ];

  // ✅ Fixed URLs to match App.jsx routes exactly
  const submenuLinks = [
    { url: "/about-us/our-story", name: "Our Story" },
    { url: "/about-us/what-we-do", name: "What we do" },
    { url: "/about-us/be-a-volunteer", name: "Be a Volunteer" },
    { url: "/about-us/faq", name: "FAQ" },
    { url: "/about-us/testimonals", name: "Testimonals" },
  ];

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsSubmenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="min-[1245px]:hidden flex items-center justify-between px-4 w-full h-[70px] fixed top-0 z-[50] bg-[#00733C]">
        <button
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open Sidebar"
        >
          {totalItemsInCart > 0 && (
            <div className="h-4 w-4 bg-white rounded-full text-black text-[10px] flex items-center justify-center absolute top-4 left-8.5">
              <p className="text-[10px] font-black">{totalItemsInCart}</p>
            </div>
          )}
          <GiHamburgerMenu
            size={30}
            color="#FFB204"
          />
        </button>
        <Link
          to="/"
          className="h-14 w-14"
        >
          <img
            src={logo}
            alt="logo"
            className="h-full w-full object-contain"
          />
        </Link>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 backdrop-blur bg-opacity-50 z-[70]"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[300px] bg-[#00733C] z-[99] transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <Link
            to="/"
            onClick={closeSidebar}
          >
            <img
              src={logo}
              alt="logo"
              className="w-12 h-12 object-contain"
            />
          </Link>
          <button
            onClick={closeSidebar}
            aria-label="Close Sidebar"
          >
            <RxCross2
              size={30}
              color="#FFB204"
            />
          </button>
        </div>

        <nav className="flex flex-col text-white font-[Poppins] p-4">
          {navlinks.map((link, index) => (
            <div
              key={index}
              className="mb-1"
            >
              {link.hasSubmenu ? (
                <>
                  <div className="w-full flex justify-between items-center py-2 hover:text-[#FFB204]">
                    <NavLink
                      to={link.url}
                      onClick={closeSidebar}
                      className={({ isActive }) =>
                        `hover:text-[#FFB204] flex-1 transition duration-200 px-2 block py-2 ${
                          isActive ? "text-[#FFB204] font-semibold" : ""
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                    <button onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}>
                      <FaChevronUp
                        className={`text-[#FFB204] ${
                          isSubmenuOpen ? "rotate-180" : "rotate-90"
                        } duration-300 cursor-pointer`}
                      />
                    </button>
                  </div>

                  <div
                    className={`ml-4 bg-[#006030] rounded-md overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                      isSubmenuOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {submenuLinks.map((sublink, subIndex) => (
                      <Link
                        key={subIndex}
                        to={sublink.url}
                        className="block px-3 py-2 text-sm hover:text-[#FFB204] transition-colors duration-300"
                        onClick={closeSidebar}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink
                  to={link.url}
                  className={({ isActive }) =>
                    `hover:text-[#FFB204] transition duration-200 px-2 block py-2 ${
                      isActive ? "text-[#FFB204] font-semibold" : ""
                    }`
                  }
                  onClick={closeSidebar}
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}

          {/* Cart Button */}
          <NavLink
            to="/cart"
            onClick={closeSidebar}
            className="mt-6 bg-[#FFB204] hover:bg-[#E69F00] text-black hover:text-white font-semibold py-2 rounded flex items-center justify-center gap-2"
          >
            {totalItemsInCart > 0 && (
              <div className="h-4 w-4 bg-white rounded-full text-black text-[10px] flex items-center justify-center absolute top-153 right-2">
                <p className="text-[10px] font-black">{totalItemsInCart}</p>
              </div>
            )}
            <FaCartShopping />
            Cart
          </NavLink>

          {/* Donate Button */}
          <NavLink
            to="/donate"
            onClick={closeSidebar}
            className="mt-4 bg-[#FFB204] hover:bg-[#E69F00] text-black hover:text-white text-center font-semibold py-2 rounded"
          >
            Donate
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default SidebarNavbar;
