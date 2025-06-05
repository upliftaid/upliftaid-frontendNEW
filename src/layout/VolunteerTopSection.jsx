import React from "react";

export default function VolunteerTopSection() {
  return (
    <div className="w-full h-[13.5rem] flex-col gap-5 bg-white/80 flex items-center justify-center">
      <span className="text-4xl font-bold">Be A Volunteer</span>
      <div className="flex gap-2 text-[0.7rem] font-medium">
        <span className="text-gray-800">About us</span>
        <span className="text-gray-500">/</span>
        <span className="text-[#FFB204]">Be a volunteer</span>
      </div>
    </div>
  );
}
