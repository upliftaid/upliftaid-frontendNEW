import React from "react";

export default function TeamsContainer({ teams }) {
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <img src={teams.image} alt="" />
      <span className="text-md font-bold relative inline-block after:content-[''] after:block after:h-[3px] after:bg-[#FFB204] after:w-1/3 after:mx-auto after:mt-2">
        {teams.name}
      </span>
      <span className="text-[0.8rem] font-medium text-gray-600">
        {teams.role}
      </span>
      <p className="text-center text-[0.8rem]">{teams.description}</p>
      <div className="flex gap-5">
        {teams.socialIcons.map((icon, index) => (
          <a
            key={index}
            href="#"
            className="text-black hover:text-[#FFB204] transition-colors duration-300"
            onClick={(e) => e.preventDefault()}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}
