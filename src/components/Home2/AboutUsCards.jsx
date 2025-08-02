import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import AboutUsCardDetails from "../../constants/Home2/AboutUsCardDetails";

const AboutUsCards = () => {
  return (
    <section className="w-full p-4 overflow-hidden grid place-items-center justify-center  !mb-20">
      <div className="w-[90%] md:mx-auto grid gap-8">
        {/* Render arrows on last visible card */}
        <div className="-mb-10 ml-auto mr-9  w-full !flex translate-y-40 z-10 relative !justify-between md:block ">
          <button className="swiper-button-next-custom -translate-x-10 text-[#FFB204] !m-2 cursor-pointer rounded-full font-bold text-4xl hover:scale-130 hover:-translate-x-11 duration-300 px-2">
            ‹
          </button>
          <button className="swiper-button-prev-custom translate-x-10 text-[#FFB204] !m-2 cursor-pointer  rounded-full font-bold hover:scale-130 text-4xl hover:translate-x-11 duration-300 px-2  ">
            ›
          </button>
        </div>

        <div className="overflow-hidden ">
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
            {AboutUsCardDetails.map((card, index) => (
              <SwiperSlide key={index + card.heading}>
                <div className="relative w-full grid gap-2">
                  <div className="w-full h-full overflow-hidden">
                    {/* <img
                      src={card.image}
                      alt=""
                      className="w-full h-full object-cover"
                    /> */}
                    <div className={`w-full h-[200px] bg-cover `} style={{ backgroundImage: `url(${card.image})` }}></div>
                  </div>
                  <h1 className="font-[400] text-[22px]">{card.heading}</h1>
                  <p className="text-[14px] line-clamp-2 text-gray-500">{card.description}</p>
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
