import React from 'react';
import HeroSection from '../components/HeroSection';
import GalleryGrid from '../components/GalleryGrid';

const Gallery: React.FC = () => {
  const heroImage = "https://images.pexels.com/photos/5138168/pexels-photo-5138168.jpeg";

  return (
    <div>
      <HeroSection 
        title="Our Gallery" 
        backgroundImage={heroImage} 
      />
      <GalleryGrid />
    </div>
  );
};

export default Gallery;