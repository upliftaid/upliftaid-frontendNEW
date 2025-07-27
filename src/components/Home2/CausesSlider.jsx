import { useState, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import { FaCalendarAlt } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const RectangularDot = ({ active, onClick }) => (
  <button
    onClick={onClick}
    type="button"
    aria-label="carousel navigation dot"
    className={`w-6 h-2 border-0 cursor-pointer transition-colors duration-300 rounded-sm ${
      active ? "bg-[#00733C]" : "bg-gray-400"
    }`}
  />
);

const CausesSlider = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    carouselRef.current.moveTo(index);
  };

  const CausesDetails = [
    {
      image:
        "https://zozothemes.com/html/the-charity/img/sections/blog/news-1.jpg",
      heading: "Educate Kids",
      description:
        "Support child education through local programs and school supplies.",
    },
    {
      image:
        "https://zozothemes.com/html/the-charity/img/sections/blog/news-2.jpg",
      heading: "Donate Clothes",
      description: "Help those in need by donating clean, gently used clothes.",
    },
    {
      image:
        "https://zozothemes.com/html/the-charity/img/sections/blog/news-3.jpg",
      heading: "Feed the Hungry",
      description:
        "Join our weekly food drive to fight hunger in underserved areas.",
    },
    {
      image:
        "https://zozothemes.com/html/the-charity/img/sections/blog/news-4.jpg",
      heading: "Tree Plantation",
      description:
        "Contribute to a greener tomorrow by volunteering for tree planting.",
    },
  ];

  // Grouping: 1 card per slide on mobile, 2 cards per slide on md+
  const getSlides = () => {
    const isMobile = window.innerWidth < 768;
    const groupSize = isMobile ? 1 : 2;
    const slides = [];

    for (let i = 0; i < CausesDetails.length; i += groupSize) {
      slides.push(CausesDetails.slice(i, i + groupSize));
    }

    return slides;
  };

  const [slides, setSlides] = useState(getSlides());

  // Recalculate slide groups on resize
  useState(() => {
    const handleResize = () => {
      setSlides(getSlides());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-6 md:px-16">
      {/* Header */}
      <div className="grid gap-1 mt-4">
        <h1 className="text-[28px]">CAUSES</h1>
        <div className="bg-[#00733C] w-16 h-[2.5px]" />
      </div>

      {/* Carousel */}
      <Carousel
        ref={carouselRef}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        useKeyboardArrows
        autoPlay={true}
        interval={4000}
        infiniteLoop={true}
        showArrows={false}
        swipeable
        onChange={(index) => setCurrentSlide(index)}
      >
        {slides.map((group, slideIndex) => (
          <div
            key={slideIndex}
            className="flex flex-col md:flex-row justify-center items-center gap-6 py-6"
          >
            {group.map((cause, idx) => (
              <div key={idx} className="w-[280px] overflow-hidden p-3">
                <div className="h-[150px] overflow-hidden">
                  <img
                    src={cause.image}
                    alt={cause.heading}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="mt-3 text-lg font-semibold text-start">
                  {cause.heading}
                </h2>
                <p className="text-sm text-gray-700 mt-2 line-clamp-2 text-start">
                  {cause.description}
                </p>
              </div>
            ))}
          </div>
        ))}
      </Carousel>

      {/* Dot Navigation */}
      <div className="flex justify-center gap-2 mt-9">
        {slides.map((_, i) => (
          <RectangularDot
            key={i}
            active={currentSlide === i}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default CausesSlider;
