import React from 'react';
import { FaUsers, FaTint, FaChartLine } from 'react-icons/fa';

const cardData = [
  {
    icon: <FaUsers size={30} />,
    title: 'Who We Are?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    icon: <FaTint size={30} />,
    title: 'Vision',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    icon: <FaChartLine size={30} />,
    title: 'Mission',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];

const WhoWeAre = () => {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {cardData.map((card, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="bg-[#00733C] text-white rounded-full p-4 mb-4">
              {card.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
            <p className="text-gray-600 text-sm">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;
