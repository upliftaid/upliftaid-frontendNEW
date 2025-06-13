import React from 'react';

const About = () => {
  return (
    <div
      className="relative w-full h-[220px] sm:h-[250px] md:h-[300px] flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Background Image Layer with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/9037596/pexels-photo-9037596.jpeg?auto=compress&cs=tinysrgb&w=600')`,
          opacity: 0.5,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black font-serif">
          Our Story
        </h1>
        <div className="mt-2 text-gray-800 text-sm sm:text-base space-x-2 font-serif">
          <span>About Us</span>
          <span>/</span>
          <span className="text-[#00733C]">Our Story</span>
        </div>
      </div>
    </div>
  );
};

export default About;
