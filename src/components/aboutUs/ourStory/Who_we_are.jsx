import React from "react";
import { FaUsers, FaTint, FaChartLine } from "react-icons/fa";

const cardData = [
  {
    icon: <FaUsers size={30} />,
    title: "Who We Are?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <FaTint size={30} />,
    title: "Vision",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <FaChartLine size={30} />,
    title: "Mission",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const WhoWeAre = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 md:px-12 text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center group"
          >
            <div className="bg-[#00733C] text-white rounded-full p-4 mb-4 transition-all duration-300 group-hover:text-green-800 group-hover:bg-white">
              <div className="transition-colors duration-300">
                {card.icon}
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed px-2">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;
