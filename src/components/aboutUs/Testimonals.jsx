import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TestimonalsDetails from "../../constants/aboutUs/TestimonalsDetails";

const Testimonials = () => {
  return (
    <div className="relative mt-10 min-w-[320px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-[url('https://zozothemes.com/html/the-charity/img/sections/bg/bg-12.jpg')] bg-cover bg-center bg-fixed -z-10" />

      {/* Overlay and Content */}
      <div className="relative bg-black/70 w-full py-12 px-4 md:py-16 md:px-8">
        <div className="grid gap-10 max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl text-white font-semibold">
              Testimonials
            </h1>
            <div className="bg-[#00733C] w-16 h-[2.5px] mx-auto mt-2" />
          </div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="w-full px-2 sm:px-4 !pb-12"
          >
            {TestimonalsDetails.map((data, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center"
              >
                <div className="relative bg-[#F7F7F7] rounded-md shadow-lg pt-8 pb-6 px-4 sm:px-6 w-full max-w-sm text-center min-h-[320px] sm:min-h-[360px] flex flex-col">
                  {/* Avatar Image */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white overflow-hidden shadow-lg border-4 border-white">
                      <img
                        src={data.image}
                        alt={data.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Name & Post */}
                  <div className="mb-4">
                    <h1 className="text-sm sm:text-base font-bold text-[#00733C]">
                      {data.name}
                    </h1>
                    <p className="text-xs sm:text-sm italic text-gray-500">
                      {data.post}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="px-1 sm:px-2 flex-1 flex items-center">
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-center">
                      {data.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
