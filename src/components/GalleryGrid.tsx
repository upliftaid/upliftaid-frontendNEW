import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface ImageProps {
  src: string;
  alt: string;
}

const GalleryGrid: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery images 
  const images: ImageProps[] = [
    { 
      src: "https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg", 
      alt: "Children playing with water from a pipe" 
    },
    { 
      src: "https://images.pexels.com/photos/36478/pexels-photo-36478.jpeg", 
      alt: "Dandelion seeds blowing in sunset" 
    },
    { 
      src: "https://images.pexels.com/photos/2659475/pexels-photo-2659475.jpeg", 
      alt: "Child sitting near doorway" 
    },
    { 
      src: "https://images.pexels.com/photos/7110206/pexels-photo-7110206.jpeg", 
      alt: "Group of children smiling" 
    },
    { 
      src: "https://images.pexels.com/photos/3933881/pexels-photo-3933881.jpeg", 
      alt: "Children playing with water splashing" 
    },
    { 
      src: "https://images.pexels.com/photos/1486598/pexels-photo-1486598.jpeg", 
      alt: "Dandelion seeds at sunset" 
    },
    { 
      src: "https://images.pexels.com/photos/3933881/pexels-photo-3933881.jpeg", 
      alt: "Children playing with water" 
    },
    { 
      src: "https://images.pexels.com/photos/36478/pexels-photo-36478.jpeg", 
      alt: "Dandelion at sunset" 
    },
    { 
      src: "https://images.pexels.com/photos/2659475/pexels-photo-2659475.jpeg", 
      alt: "Child sitting in doorway" 
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden h-64 rounded-lg shadow-md group cursor-pointer bg-gray-200"
              onClick={() => openLightbox(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Search className="h-6 w-6 text-[#1D6F6F]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button 
              className="absolute -top-12 right-0 text-white text-3xl"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;