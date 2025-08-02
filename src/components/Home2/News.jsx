import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import NewsDetails from "../../constants/Home2/NewsDetails";

const News = () => {
  return (
    <section className="md:mt-20 w-full p-4 !mb-25 !mt-10 overflow-hidden grid place-items-center justify-center">
      <div className="w-[90%] md:mx-auto grid gap-8">
        <div className="grid gap-1">
          <h1 className="!text-[40px] !font-[400]">NEWS</h1>
          <div className="bg-[#00733C] w-16 h-[2.5px]"></div>
        </div>

        {/* Render arrows on last visible card */}
        <div className="-mb-10 ml-auto mr-9 w-full !flex translate-y-40 z-10 relative !justify-between md:block ">
          <button className="swiper-button-next-custom -translate-x-10 text-[#FFB204] !m-2 cursor-pointer rounded-full font-bold text-4xl px-2 hover:scale-130 hover:-translate-x-11 duration-300">
            ‹
          </button>
          <button className="swiper-button-prev-custom translate-x-10 text-[#FFB204] !m-2  cursor-pointer rounded-full font-bold text-4xl px-2 hover:scale-130 hover:translate-x-11 duration-300">
            ›
          </button>
        </div>

        <div className="overflow-hidden">
          <Swiper
            spaceBetween={20}
            autoplay={false}
            speed={500}
            loop={true}
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
                   slidesPerView: 2,
                 },
                 1024: {
                   slidesPerView: 3,
                 },
                 1280: {
                   slidesPerView: 4,
                 },
            }}
          >
            {NewsDetails.map((news, index) => (
              <SwiperSlide key={index + news.heading}>
                <div className="relative w-full grid gap-2">
                  <div className="w-full h-full overflow-hidden">
                    {/* <img
                      src={news.imageUrl}
                      alt=""
                      className="w-full h-full object-cover"
                    /> */}
                    <div className={`w-full h-[200px] bg-cover `} style={{ backgroundImage: `url(${news.imageUrl})` }}></div>
                  </div>
                  <h1 className="font-[400] text-[22px]">{news.heading}</h1>
                  <p className="text-[14px] line-clamp-2 text-gray-500">{news.description}</p>
                  <div className="flex gap-2 items-center">
                    <FaCalendarAlt color="#fccc5b" />
                    <p className="text-[12px] text-gray-400">{news.date}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default News;
