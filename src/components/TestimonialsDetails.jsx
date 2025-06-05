import React from "react";
import { testimonials } from "../constants/testimonials";

export default function TestimonialsDetails() {
  return (
    <div className="w-full overflow-x-auto hide-scrollbar">
      <div className="flex gap-20 min-w-fit px-23.5">
        {testimonials.map((t) => (
          <div
            className="flex relative flex-col h-[12rem] rounded-md w-80 bg-[#f0f0f0] gap-3 pl-15 pt-5"
            key={t.id}
          >
            <p className="text-[0.7rem] font-medium text-gray-800">
              {t.testimonial}
            </p>
            <span className="text-sm uppercase font-bold text-[#FFB204]">
              {t.name}
            </span>
            <span className="text-[0.8rem] italic text-gray-500">{t.role}</span>
            <img
              src={t.image}
              alt={t.name}
              className="h-20 w-20 absolute -left-7 top-22 border-4 border-white rounded-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
