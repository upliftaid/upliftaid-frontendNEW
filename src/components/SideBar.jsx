import { FaCamera, FaUser } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineAutoGraph } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const SideBar = () => {
  const linkStyle = (id) =>
    `flex gap-4 items-center justify-center w-64 p-2 cursor-pointer rounded font-semibold 
     bg-[#FFB204] hover:bg-[#E69F00] hover:text-white`;

  return (
    <div className="grid gap-4 rounded shadow-md p-4">
      {/* Profile Picture */}
      <div className="flex items-center justify-center">
        <div className="w-36 h-36 rounded-full relative">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ZDOP9f31uu5iNS-70C01EsQ3iEeUBbMA9g&s" 
            alt="profile_pic" 
            className="w-full h-full object-scale-down rounded-full"
          />
          <label htmlFor="profile-upload" className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center absolute bottom-[5px] right-[2px] cursor-pointer">
            <FaCamera />
            <input type="file" id="profile-upload" className="hidden" />
          </label>
        </div>
      </div>

      {/* Profile Info */}
      <div className="grid gap-1 place-items-center">
        <h1 className="font-semibold text-[24px]">Sarah Jonhson</h1>
        <p>sarah.jhonson@email.com</p>
        <p>Active Volunteer</p>
        <div className="p-2 px-4 bg-green-100 text-green-800 rounded-4xl text-[14px] flex items-center gap-2 justify-center mt-2">
          <FaStar />
          <p className="font-semibold">Top Contributor</p>
        </div>
      </div>

      <hr className="text-gray-200 rounded" />

      {/* Membership Info */}
      <div className="flex justify-between font-semibold">
        <p className="text-gray-500">Member since</p>
        <p>Jan 2025</p>
      </div>

      {/* Navigation Links */}
      <div className="grid gap-4 mt-3">
        <a href="#profile" className={linkStyle('profile')}>
          <FaUser />
          <p>Profile</p>
        </a>

        <a href="#activity" className={linkStyle('activity')}>
          <MdOutlineAutoGraph size={20} />
          <p>Activity</p>
        </a>

        <a href="#setting" className={linkStyle('setting')}>
          <IoMdSettings size={20} />
          <p>Settings</p>
        </a>

        <button className={linkStyle('logout')}>
          <IoMdSettings size={20} />
          <p>Logout</p>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
