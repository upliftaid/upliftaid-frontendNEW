import { FaCamera } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="flex gap-6 md:flex-row flex-col rounded shadow-md p-4 items-center min-w-[320px]">
      {/* Profile Picture */}
      <div className="flex items-center justify-center">
        <div className="w-36 h-36 rounded-full relative group">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ZDOP9f31uu5iNS-70C01EsQ3iEeUBbMA9g&s"
            alt="profile_pic"
            className="w-full h-full object-scale-down rounded-full"
          />
          <label
            htmlFor="profile-upload"
            className="w-10 h-10 bg-black/70 text-white rounded-full flex items-center justify-center absolute bottom-[5px] right-[2px] cursor-pointer transition-transform group-hover:scale-110"
            title="Change Profile Picture"
          >
            <FaCamera />
            <input
              type="file"
              id="profile-upload"
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Profile Info */}
      <div className="grid gap-1 place-items-center md:place-items-start">
        <h1 className="font-semibold text-[32px]">Sarah Jonhson</h1>
        <p>sarah.jhonson@email.com</p>
        <div className="grid md:grid-cols-2 items-center gap-4">
          <div className="p-2 px-4 bg-green-100 text-green-800 rounded-4xl text-[14px] flex items-center gap-2 justify-center mt-2">
            <GoDotFill size={20} />
            <p className="font-semibold">Active Volunteer</p>
          </div>
          <div className="p-2 px-4 bg-green-100 text-green-800 rounded-4xl text-[14px] flex items-center gap-2 justify-center mt-2">
            <FaStar />
            <p className="font-semibold">Top Contributor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
