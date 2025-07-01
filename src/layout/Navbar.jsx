import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
const navlinklist = [
  { name: "Home", url: "/" },
  {
    name: "About Us",
    url: "/about-us",
    hasSubmenu: true,
    submenu: [
      { name: "Our Story", url: "/about-us/our-story" },
      { name: "What we do", url: "/about-us/what-we-do" },
      { name: "Be a Volunteer", url: "/about-us/be-a-volunteer" },
      { name: "FAQ", url: "/about-us/faq" },
      { name: "Testimonals", url: "/about-us/testimonals" },
    ],
  },
  { name: "Causes", url: "/causes" },
  { name: "Events", url: "/events" },
  { name: "Portfolio", url: "/portfolio" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
  { name: "Products", url: "/product" },
  { name: "Career", url: "/career" },
  { name: "Profile", url: "/profile" },
];


  return (
    <header className="bg-[#00733C] text-white w-full h-[70px] md:h-[140px] lg:h-[70px] lg:flex lg:flex-row items-center justify-between px-30 fixed top-0 z-99 hidden">
      <Link to='/' className="w-16 h-16">
        <img src={logo} alt="logo" />
      </Link>
      <nav className="flex gap-8 lg:mb-0 text-[14px] font-[Poppins]">
        {navlinklist.map((item, index) => (
          <div key={index + item.name} className="relative group items-center flex">
            <NavLink
              to={item.url}
              className="hover:text-[#FFB204] whitespace-nowrap block"
            >
              {item.name}
            </NavLink>

            {/* Submenu */}
            {item.hasSubmenu && (
              <div className="absolute top-full left-0 mt-4 bg-[#00733C] shadow-lg rounded-md w-40 z-50 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200">
                {item.submenu.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.url}
                    className="block px-4 py-1.5 hover:text-[#FFB204] transition"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="hover:bg-[#E69F00] w-14 h-10 bg-[#FFB204] flex items-center justify-center rounded">
          <NavLink to="/cart" className="text-black hover:text-white font-semibold animate-bounce transition-ease-3000">
            <FaCartShopping size={30}/>
          </NavLink>
        </div>
        <div className="hover:bg-[#E69F00] w-19 h-10 bg-[#FFB204] flex items-center justify-center rounded">
          <NavLink to="/contact" className="text-black hover:text-white font-semibold">
            Donate
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;