import logo from "../assets/images/logo.png";
import logo1 from "../assets/images/logo2-removebg-preview.png";
// import logo2 from '../assets/images/logo1-removebg-preview.png'
import { NavLink } from "react-router-dom";
import logo2 from "../assets/logo1-removebg-preview.png";

const Navbar = () => {
  const navlinklist = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" },
    { name: "Causes", url: "/causes" },
    { name: "Events", url: "/events" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Blog", url: "/blog" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <header className="bg-[#00733C] text-white w-full h-[70px] md:h-[140px] lg:h-[70px] md:flex md:flex-col lg:flex-row items-center justify-between px-40 fixed top-0 z-99 hidden">
      <div className="w-16 h-16">
        <img src={logo2} alt="" />
      </div>
      <nav className="flex gap-8 md:mb-4 lg:mb-0 text-[14px] font-sans">
        {navlinklist.map((item, index) => {
          return (
            <div
              className="flex items-center justify-center"
              key={index + item.name}
            >
              <NavLink
                to={item.url}
                className="hover:text-[#FFB204] whitespace-nowrap"
              >
                {item.name}
              </NavLink>
            </div>
          );
        })}
        <div className="hover:bg-[#E69F00] w-19 h-10 bg-[#FFB204] flex items-center justify-center rounded">
          <NavLink to="/" className="text-black hover:text-white font-semibold">
            Donate
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
