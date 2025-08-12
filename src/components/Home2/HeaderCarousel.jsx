import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const HeaderCarousel = () => {
  const sliderDetails = [
    {
      image:
        "/charity-slide19.jpg",
      heading: "SAVE CHILDREN",
      line1: "Every child deserves safety, love, and opportunity.",
      line2:
        "We fight to protect their rights, health, and future—every step counts.",
    },
    {
      image:
        "/charity-slide18.jpg",
      heading: "I NEED YOUR HELP",
      line1: "I need your help—not just to survive, but to dream, to hope,",
      line2: "and to feel the warmth of humanity again.",
    },
    {
      image:
        "/charity-slide17.jpg",
      heading: "KINDNESS & HUMANITY",
      line1: "Kindness is not a sign of weakness; it is the strongest,",
      line2: "most profound expression of true humanity and inner strength",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const slide = sliderDetails[activeIndex];
  const [opacity, setOpacity] = useState("opacity-100");

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

  const changeActiveIndex = useCallback((index) => {
    setOpacity("opacity-0 scale-70");
    setTimeout(() => {
      setActiveIndex(index);
      
    },200)
    setTimeout(() => {
      setOpacity("opacity-100");
    },1500)
  },[activeIndex,opacity])

  return (
    <div className="relative lg:mt-16 w-full sc overflow-hidden h-[90vh]">
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
      <div className={`${opacity} duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full text-white text-center max-w-[800px] px-4  z-10`}>
        <div className="flex flex-col items-center justify-between h-full w-full min-[500px]:p-20 p-5">
          <div className=" h-full flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl !mb-10 font-bold">{slide.heading}</h1>
            <p className="mt-4 text-lg md:text-xl">{slide.line1}</p>
            <p className="text-lg md:text-xl !mb-10">{slide.line2}</p>
            <NavLink
              to="/donate"
              className="inline-block mt-8  bg-[#FFB204] hover:bg-[#fdbf30] text-black rounded hover:text-white font-semibold py-3 px-6 transition duration-300"
            >
              Donate Now
            </NavLink>
          </div>

          {/* Scroll Down Indicator for First Slide */}
          {activeIndex === 0 && (
            <div className="mt-10 flex flex-col items-center gap-2 cursor-pointer">
              <div className="w-8 h-14 rounded-4xl border flex items-center justify-center">
                <motion.div
                  className="w-2 h-2 bg-white rounded-full "
                  animate={{ y: [ -8,4, 4,], opacity: [1,1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
              <p className="text-sm">Scroll Down</p>
            </div>
          )}
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2 space-y-3 z-20">
        {sliderDetails.map((_, index) => (
          <div
            key={index}
            onClick={() => changeActiveIndex(index)}
            className={`w-4 h-4 rounded-full border-2 flex !m-1 items-center  duration-300 hover:bg-black/50 justify-center cursor-pointer ${
              activeIndex === index
                ? "bg-black/50 border-white"
                : "bg-[#ccc]/70 border-none"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full hover:bg-white ${
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
