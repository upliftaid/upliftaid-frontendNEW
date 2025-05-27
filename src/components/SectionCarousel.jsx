import { useState, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProgressBars from "../components/ProgressBars";

const RectangularDot = ({ active, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="carousel navigation dot"
      className={`
        w-6 h-2 border-0 cursor-pointer
        transition-colors duration-300
        ${active ? "bg-black" : "bg-gray-500"}
      `}
    />
  );
};

const SectionCarousel = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    carouselRef.current.moveTo(index);
  };

  return (
    <div className="p-6 md:px-16">
      {/* Header */}
      <div className="grid gap-1 mt-4">
        <h1 className="text-[28px]">WHO WE ARE</h1>
        <div className="bg-[#00733C] w-16 h-[2.5px]" />
      </div>

      {/* Carousel Content */}
      <Carousel
        ref={carouselRef}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        useKeyboardArrows
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showArrows={false}
        swipeable
        onChange={(index) => setCurrentSlide(index)}
      >
        {/* Slide 1: Progress Bar */}
        <div>
          <ProgressBars />
        </div>

        {/* Slide 2: Description */}
        <div className="h-[203px] mt-10 grid">
          <h1 className="text-3xl flex flex-start">Our history</h1>
          <p className="text-justify text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, in
            molestias voluptates tenetur facilis ab quas maxime eius id quae
            repudiandae modi explicabo animi natus placeat quo tempora
            exercitationem reiciendis!
          </p>
          <p className="text-justify text-[14px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, a
            fugiat consectetur quos quae quam quasi velit eos quisquam
            obcaecati.
          </p>
        </div>

        {/* Slide 3: Description */}
        <div className="h-[203px] mt-10 grid">
          <h1 className="text-3xl flex flex-start">Our history</h1>
          <p className="text-justify text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, in
            molestias voluptates tenetur facilis ab quas maxime eius id quae
            repudiandae modi explicabo animi natus placeat quo tempora
            exercitationem reiciendis!
          </p>
          <p className="text-justify text-[14px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, a
            fugiat consectetur quos quae quam quasi velit eos quisquam
            obcaecati.
          </p>
        </div>
      </Carousel>

      {/* Sticky Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {[0, 1, 2].map((i) => (
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

export default SectionCarousel;
