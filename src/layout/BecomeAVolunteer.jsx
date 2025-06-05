import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const inputStyle =
  "h-10 w-full bg-white p-2 border border-[#E1E1E1] rounded-sm outline-none text-gray-600 font-semibold placeholder:text-[0.7rem]";

export default function BecomeAVolunteer() {
  return (
    <div className="w-full flex sm:flex-row flex-col gap-7 pb-21 sm:px-12 px-2 py-20">
      <div className="flex-1 flex-col gap-4 flex">
        <img
          src="https://zozothemes.com/html/the-charity/img/sections/team/featured-volunteers.jpg"
          alt="volunteer"
        />
        <p className="text-[0.8rem] font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="flex-1 flex flex-col items-start gap-5">
        <h1 className="font-bold text-2xl">BECOME A VOLUNTEER</h1>
        <input type="text" placeholder="Full Name" className={inputStyle} />
        <input type="text" placeholder="Email" className={inputStyle} />
        <input type="text" placeholder="Phone" className={inputStyle} />
        <input
          type="text"
          placeholder="Why you join volunteer"
          className={`${inputStyle} h-20`}
        />
        <button className="px-6 flex items-center transition-colors duration-400 hover:bg-[#FFB204] hover:text-[#0A0001] cursor-pointer justify-center gap-2 py-3 bg-[#00733C] text-sm text-white">
          JOIN US
          <FaPaperPlane className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
