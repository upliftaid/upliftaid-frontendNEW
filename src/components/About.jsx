import React from 'react';

const About = () => {
  return (
    <div
      className="relative w-full h-[220px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/9037596/pexels-photo-9037596.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      {/* Dark translucent overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          About Us
        </h1>
        <div className="mt-2 text-gray-200 text-sm sm:text-base space-x-2">
          <span>Home</span>
          <span>/</span>
          <span>Pages</span>
          <span>/</span>
          <span className="text-[#00733C]">About us</span>
        </div>
      </div>
    </div>
  );
};

export default About;
