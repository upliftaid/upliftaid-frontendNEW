import React from "react";
import TestimonialsDetails from "../components/";

export default function Testimonials() {
  return (
    <div className="w-full sm:h-[35rem] min-h-fit mt-20 mb-0 bg-fixed bg-no-repeat bg-cover bg-[url(https://zozothemes.com/html/the-charity/img/sections/bg/bg-12.jpg)]">
      <div className="bg-black/30 sm:h-[35rem] min-h-fit py-10 md:py-0 flex flex-col gap-20 items-center justify-center">
        <h1 className="text-white text-3xl font-bold relative inline-block after:content-[''] after:block after:h-[3px] after:bg-[#FFB204] after:w-1/6 after:mx-auto after:mt-4">
          Testimonials
        </h1>
        <TestimonialsDetails />
      </div>
    </div>
  );
}
