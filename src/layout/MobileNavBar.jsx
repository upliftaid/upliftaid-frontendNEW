import logo from "../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import logo2 from "../assets/logo1-removebg-preview.png";

const MobileNavbar = () => {
  return (
    <div className="md:hidden flex items-center justify-between p-4 w-full h-[70px] fixed top-0 z-99 bg-[#00733C]">
      <div className="h-16 w-16">
        <img src={logo2} alt="logo" />
      </div>

      <div>
        <GiHamburgerMenu size={30} color="#FFB204" />
      </div>
    </div>
  );
};

export default MobileNavbar;
