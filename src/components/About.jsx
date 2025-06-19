import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative lg:w-full mt-10 min-w-[320px]">
      {/* Fixed background image */}
      <div
        className="absolute inset-0 h-full w-full bg-[url('https://zozothemes.com/html/the-charity/img/sections/bg/about-header-bg.jpg')] bg-fixed bg-top -z-10"
        aria-hidden="true"
      ></div>

      {/* Content wrapper with overlay */}
      <div className="relative bg-white/10 h-60 md:mt-10 lg:mt-0 flex justify-center">
        <div className="pt-20 lg:px-40 md:px-16 px-5">
          <h1 className="font-semibold text-[42px]">About Us</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;