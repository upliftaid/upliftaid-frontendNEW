import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

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
    <header className="bg-white w-full h-[70px] md:h-[140px] lg:h-[70px] md:flex md:flex-col lg:flex-row items-center justify-between px-40 fixed top-0 z-99 hidden">
      <div>
        <img src={logo} alt="" />
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
                className="hover:text-[#00adef] whitespace-nowrap"
              >
                {item.name}
              </NavLink>
            </div>
          );
        })}
        <div className="hover:bg-[#00adef] w-19 h-10 bg-[#ffb600] flex items-center justify-center hover:text-white">
          <NavLink to="/" className="">
            Donate
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
