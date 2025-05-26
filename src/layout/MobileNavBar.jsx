import logo from "../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileNavbar = () => {
  return (
    <div className="md:hidden flex items-center justify-between p-4 w-full h-[70px] fixed top-0 z-99 bg-white">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <div>
        <GiHamburgerMenu size={30} color="#00adef" />
      </div>
    </div>
  );
};

export default MobileNavbar;
