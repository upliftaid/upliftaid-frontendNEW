import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import AboutUsCardDetails from '../constants/AboutUsCardDetails'

const AboutUsCards = () => {
  return (
    <section className="w-full p-4 overflow-hidden grid place-items-center justify-center">
      <div className="w-[90%] md:mx-auto grid gap-8">

        {/* Render arrows on last visible card */}
        <div className="-mb-10 ml-auto mr-9 md:block hidden">
          <button className="swiper-button-prev-custom text-[#FFB204] font-bold text-xl px-2">
            ‹
          </button>
          <button className="swiper-button-next-custom text-[#FFB204] font-bold text-xl px-2">
            ›
          </button>
        </div>

        <div className="overflow-hidden">
          <Swiper
            spaceBetween={20}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
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
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {AboutUsCardDetails.map((card, index) => (
              <SwiperSlide key={index + card.heading}>
                <div className="relative w-[280px] grid gap-2">
                  <div className="w-full h-[160px] overflow-hidden">
                    <img
                      src={card.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="font-medium text-[18px]">{card.heading}</h1>
                  <p className="text-[14px] line-clamp-2">{card.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AboutUsCards;
