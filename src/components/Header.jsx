import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative lg:w-full mt-10 min-w-[320px]">
      {/* Fixed background image */}
      <div
        className="absolute inset-0 h-full w-full bg-[url('https://zozothemes.com/html/the-charity/img/sections/bg/about-header-bg.jpg')] bg-fixed -z-10 bg-top"
        aria-hidden="true"
      ></div>

      {/* Content wrapper with overlay */}
      <div className="relative bg-white/70 h-60 md:mt-10 lg:mt-0 flex justify-center">
        <div className="pt-20 lg:px-40 md:px-16 px-5">
          <h1 className="font-semibold text-[42px]">What We Do</h1>
          <nav className="flex gap-4 justify-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#FFB204]" : "text-gray-700"
              }
            >
              About Us
            </NavLink>
            /
            <NavLink
              to="/pages"
              className={({ isActive }) =>
                isActive ? "text-[#FFB204]" : "text-gray-700"
              }
            >
              What we do
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
