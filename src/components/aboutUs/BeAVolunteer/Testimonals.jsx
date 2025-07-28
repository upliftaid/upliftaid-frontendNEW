import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TestimonalsDetails from "../../../constants/aboutUs/BeVolunteer/TestimonalsDetails";

const Testimonials = () => {
  return (
    <div className="relative mt-10 min-w-[320px] h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-[url('https://zozothemes.com/html/the-charity/img/sections/bg/bg-12.jpg')] bg-cover lg:bg-fixed -z-10"></div>

      {/* Overlay and Content */}
      <div className="relative bg-black/70 h-full p-4 mx-auto md:py-16 md:px-8 ">
        <div className="grid gap-10">
          {/* Title */}
          <div className="grid gap-1 text-center">
            <h1 className="text-[36px] text-white">Testimonials</h1>
            <div className="bg-[#00733C] w-16 h-[2.5px] mx-auto"></div>
          </div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay, Pagination]} // Removed Navigation
            spaceBetween={30}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full px-6 !pb-10" // Adds spacing for bullets
          >
            {TestimonalsDetails.map((data, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="max-h-[350px] min-w-[250px] md:w-[300px] lg:w-[380px] lg:h-[250px] bg-[#F7F7F7] relative rounded-sm lg:px-15 lg:py-6 p-8 mx-10 ">
                  <div className="w-18 h-18 rounded-full bg-white absolute top-63 md:top-42 lg:top-40 -left-10">
                    <img
                      src={data.image}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="grid gap-4 ml-6 md:ml-0 md:h-40 lg:w-76 md:w-60 min-w-45 h-60">
                    <p className="text-[14px] text-justify">
                      {data.description}
                    </p>
                  </div>
                  <div className="ml-6">
                      <h1 className="text-[12px] text-[#00733C] font-bold">
                        {data.name}
                      </h1>
                      <p className="text-[12px] italic text-[#7F7F7F]">
                        {data.post}
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