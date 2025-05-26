import React from "react";
import StatsCardDetails from "../constants/StatsCardDetails";

const StatsCard = () => {
  return (
    <div className="relative lg:w-full mt-10 min-w-[320px]">
      {/* Fixed background image */}
      <div
        className="absolute inset-0 h-full w-full bg-[url('https://zozothemes.com/html/the-charity/img/sections/bg/childrens.jpg')] lg:bg-fixed bg-cover bg-top-center -z-10"
        aria-hidden="true"
      ></div>

      {/* Content wrapper with overlay */}
      <div className="relative bg-black/70 md:py-16 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
          {StatsCardDetails.map((card, index) => {
            return (
              <div key={index} className="flex flex-col items-center">
                <card.image size={90} />
                <h1 className="text-4xl font-bold mt-4">{card.no}</h1>
                <div className="bg-[#00adef] w-16 h-[2.5px] my-2" />
                <p className="text-lg">{card.heading}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
