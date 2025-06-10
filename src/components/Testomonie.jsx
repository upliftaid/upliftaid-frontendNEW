import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonie = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentLogoSlide, setCurrentLogoSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ducimus eveniet distinctio amet quaerat maxime fugit nesciunt sunt ut quasi nulla.",
      name: "JOHN DEO",
      position: "CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ducimus eveniet distinctio amet quaerat maxime fugit nesciunt sunt ut quasi nulla.",
      name: "JOHN DEO",
      position: "CEO",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ducimus eveniet distinctio amet quaerat maxime fugit nesciunt sunt ut quasi nulla.",
      name: "JOHN DEO",
      position: "CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ducimus eveniet distinctio amet quaerat maxime fugit nesciunt sunt ut quasi nulla.",
      name: "JOHN DEO",
      position: "CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ducimus eveniet distinctio amet quaerat maxime fugit nesciunt sunt ut quasi nulla.",
      name: "JOHN DEO",
      position: "CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const logos = [
    { id: 1, image: "https://zozothemes.com/html/the-charity/img/sections/clients/client-1.png" },
    { id: 2, image: "https://zozothemes.com/html/the-charity/img/sections/clients/client-2.png" },
    { id: 3, image: "https://zozothemes.com/html/the-charity/img/sections/clients/client-3.png" },
    { id: 4, image: "https://zozothemes.com/html/the-charity/img/sections/clients/client-4.png" },
    { id: 5, image: "https://zozothemes.com/html/the-charity/img/sections/clients/client-5.png" },
    { id: 6, image: "https://zozothemes.com/html/the-charity/img/sections/clients/client-6.png" },
    { id: 7, image: "https://zozothemes.com/html/the-charity/img/sections/clients/client-1.png" },
  ];

  const testimonialPages = Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, i) =>
    testimonials.slice(i * 3, i * 3 + 3)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonialPages.length);
      setCurrentLogoSlide((prev) => (prev + 1) % Math.ceil(logos.length / 6));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonialPages.length, logos.length]);

  const getSlideOffset = () => -currentSlide * 100;
  const getLogoSlideOffset = () => -currentLogoSlide * 100;

  return (
    <div className="relative">
      {/* Testimonials Section */}
      <div
        className="relative py-10 px-4 bg-cover bg-center bg-no-repeat min-h-[400px]"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=600&fit=crop')"
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">TESTIMONIALS</h2>
            <div className="w-16 h-1 bg-[#00733C] mx-auto mt-2"></div>
          </div>

          {/* Testimonials Slider */}
          <div className="relative overflow-hidden mb-10">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${getSlideOffset()}%)` }}
            >
              {testimonialPages.map((group, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0 flex flex-wrap justify-center gap-6">
                  {group.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] bg-white rounded-lg p-6 shadow-md"
                    >
                      <p className="text-gray-700 mb-4 text-sm">{testimonial.text}</p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="text-green-600 text-sm font-bold">{testimonial.name}</h4>
                          <p className="text-gray-500 text-xs">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2">
            {testimonialPages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-2 rounded transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-[#00733C] scale-125'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${getLogoSlideOffset()}%)` }}
            >
              {Array.from({ length: Math.ceil(logos.length / 6) }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {logos.slice(slideIndex * 6, (slideIndex + 1) * 6).map((logo) => (
                      <div
                        key={logo.id}
                        className="flex items-center justify-center hover:shadow-md transition-shadow duration-300"
                      >
                        <img src={logo.image} alt="Logo" className="h-12 object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonie;
