import React from "react";
import { team } from "../constants/teamsDetails";
// import TeamsContainer from "../components/Testimonials1";

export default function Teams() {
  return (
    <div className="flex flex-col gap-20 items-center justify-center mt-20">
      <h1 className="text-3xl font-bold relative inline-block after:content-[''] after:block after:h-[3px] after:bg-[#FFB204] after:w-1/6 after:mx-auto after:mt-4">
        MEET THE TEAM
      </h1>
      <div className="flex flex-col md:flex-row gap-5 px-10">
        {team.map((teams) => (
          <TeamsContainer teams={teams} key={teams.id} />
        ))}
      </div>
    </div>
  );
}
