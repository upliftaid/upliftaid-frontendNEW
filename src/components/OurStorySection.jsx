import React, { useEffect, useState } from 'react';

const AboutUsSection = () => {
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);

  useEffect(() => {
    const leftTimer = setTimeout(() => setAnimateLeft(true), 200);
    const rightTimer = setTimeout(() => setAnimateRight(true), 600);
    return () => {
      clearTimeout(leftTimer);
      clearTimeout(rightTimer);
    };
  }, []);

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-10">
        
        {/* Left Column - Video Placeholder */}
        <div
          className={`transform transition-opacity transition-transform duration-700 ease-out ${
            animateLeft ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="bg-black w-full h-80 flex items-center justify-center text-white text-center text-xl font-semibold">
            Sorry<br />This video does not exist.
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div
          className={`transform transition-opacity transition-transform duration-700 ease-out ${
            animateRight ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl text-black mb-4">
            VIDEO ABOUT OUR STORY
          </h2>
          <div className="w-10 h-1 bg-[#00AEEF] mb-6"></div>

          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <button className="bg-[#00733C] hover:bg-green-800 text-white px-5 py-3 text-sm">
          LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
