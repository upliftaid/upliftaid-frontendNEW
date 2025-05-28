import React, { useEffect, useRef } from "react";

// Replace these with your actual image imports
import logo1 from '../assets/images/client1.png';
import logo2 from "../assets/images/client2.png";
import logo3 from "../assets/images/client3.png";
import logo4 from "../assets/images/client4.png";
import logo5 from "../assets/images/client5.png";
import logo6 from "../assets/images/client6.png";
import logo7 from "../assets/images/client6.png";
import logo8 from "../assets/images/client5.png";

const Pagination = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7 ,logo8];
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;
    const scrollStep = 200;

    const interval = setInterval(() => {
      if (container) {
        if (scrollAmount + container.offsetWidth >= container.scrollWidth) {
          scrollAmount = 0;
        } else {
          scrollAmount += scrollStep;
        }

        container.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center h-[139px]">
      <div
        ref={scrollRef}
        className="w-full  overflow-x-auto scrollbar-hide"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE
        }}
      >
        <div className="flex gap-20 whitespace-nowrap opacity-60">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-[99px] inline-block"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
