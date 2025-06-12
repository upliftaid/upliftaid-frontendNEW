import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const HeaderCarousel = () => {
  const sliderDetails = [
    {
      image:
        "https://zozothemes.com/html/the-charity/img/sections/slider/charity-slide19.jpg",
      heading: "SAVE CHILDREN",
      line1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      line2: "Tempora commodi repellat nisi expedita.",
    },
    {
      image:
        "https://zozothemes.com/html/the-charity/img/sections/slider/charity-slide18.jpg",
      heading: "I NEED YOUR HELP",
      line1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      line2: "Tempora commodi repellat nisi expedita.",
    },
    {
      image:
        "https://zozothemes.com/html/the-charity/img/sections/slider/charity-slide17.jpg",
      heading: "KINDNESS & HUMANITY",
      line1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      line2: "Tempora commodi repellat nisi expedita.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const slide = sliderDetails[activeIndex];

  // Custom animation for each slide
  const getVariants = (index) => {
    if (index === 1) {
      return {
        initial: { x: "-100%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: "100%", opacity: 0 },
      };
    } else if (index === 2) {
      return {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "-100%", opacity: 0 },
      };
    } else {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      };
    }
  };

  return (
    <div className="relative lg:mt-16 w-full overflow-hidden h-[620px]">
      {/* Animated Carousel Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={slide.image}
          src={slide.image}
          alt={`Charity Slide ${activeIndex + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          variants={getVariants(activeIndex)}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Overlay Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center max-w-[800px] px-4 mt-20 z-10">
        <h1 className="text-4xl md:text-6xl font-bold">{slide.heading}</h1>
        <p className="mt-4 text-lg md:text-xl">{slide.line1}</p>
        <p className="text-lg md:text-xl">{slide.line2}</p>
        <NavLink
          to="/"
          className="inline-block mt-8 bg-[#FFB204] hover:bg-[#E69F00] text-black rounded hover:text-white font-semibold py-3 px-6 transition duration-300"
        >
          Donate Now
        </NavLink>

        {/* Scroll Down Indicator for First Slide */}
        {activeIndex === 0 && (
          <div className="mt-10 flex flex-col items-center gap-2 cursor-pointer">
            <div className="w-10 h-14 rounded-4xl border flex items-center justify-center">
              <motion.div
                className="w-3 h-3 bg-white rounded-full"
                animate={{ y: [0, -8, 0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            <p className="text-sm">Scroll Down</p>
          </div>
        )}
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2 space-y-3 z-20">
        {sliderDetails.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center cursor-pointer ${
              activeIndex === index
                ? "bg-black/50 border-white"
                : "bg-[#ccc]/70 border-none"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                activeIndex === index ? "bg-white" : ""
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderCarousel;
