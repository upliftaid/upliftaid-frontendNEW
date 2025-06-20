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
Thank you for your interest in volunteering with us! By filling out this form, you’re taking the first step toward making a real impact in the community. Whether you’re looking to give back, gain experience, or connect with others, we have a place for you. Please provide your details below, and our team will reach out with next steps and opportunities that match your skills and interests.
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
