import React from "react";
import StatsCardDetails from "../../constants/Home2/StatsCardDetails";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const StatsCard = () => {
  return (
    <div className="relative lg:w-full mt-10  min-w-[320px]">
      {/* Fixed background image */}
      <div
        className="absolute inset-0 h-full w-full bg-[url('https://zozothemes.com/html/the-charity/img/sections/bg/childrens.jpg')] lg:bg-fixed bg-cover bg-top-center -z-10"
        aria-hidden="true"
      ></div>

      {/* Content wrapper with overlay */}
      <div className="relative flex !pb-20 bg-black/70 md:py-16 md:px-8">
        {/* Header with navigation buttons */}
          <button className="swiper-button-prev-custom text-[#FFB204] hover:scale-120 hover:-translate-x-1 duration-300 font-bold text-3xl px-3 cursor-pointer select-none">
            ‹
          </button>
          

        <Swiper
          spaceBetween={20}
          loop={true}
          // autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {StatsCardDetails.map((card, index) => (
            <SwiperSlide key={index + card.heading}>
              <div className="flex flex-col items-center text-white text-center px-4">
                <card.image size={90} />
                <h1 className="text-4xl font-bold mt-4">{card.no}</h1>
                <div className="bg-[#FFB204] w-16 h-[2.5px] my-2" />
                <p className="text-lg">{card.heading}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-next-custom text-[#FFB204] hover:scale-120 hover:translate-x-1 duration-300 font-bold text-3xl px-3 cursor-pointer select-none">
            ›
          </button>
      </div>
    </div>
  );
};

export default StatsCard;
