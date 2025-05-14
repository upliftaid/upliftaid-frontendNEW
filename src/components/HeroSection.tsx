import React from 'react';

interface HeroSectionProps {
  title: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, backgroundImage }) => {
  return (
    <div className="relative pt-16 h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})`, 
          filter: 'brightness(0.7)'
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative h-full flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;