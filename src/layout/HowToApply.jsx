import React from "react";
import {
  FaMoneyBillAlt,
  FaCheckCircle,
  FaFileAlt,
  FaUser,
} from "react-icons/fa";

const centerList = "flex flex-col items-center w-72 justify-center gap-4";

export default function HowToApply() {
  return (
    <div className="w-full sm:h-[29rem] min-h-fit bg-fixed bg-no-repeat bg-cover bg-[url(https://zozothemes.com/html/the-charity/img/sections/slider/charity-slide2.jpg)]">
      <div className="bg-black/70 sm:h-[29rem] py-10 min-h-fit flex flex-col gap-20 items-center justify-center">
        <h1 className="text-white text-3xl font-bold relative inline-block after:content-[''] after:block after:h-[3px] after:bg-[#FFB204] after:w-1/6 after:mx-auto after:mt-4">
          HOW TO APPLY
        </h1>
        <div className="flex md:flex-row flex-col gap-5 text-white">
          <div className={centerList}>
            <FaUser color="#FFB204" className="h-12 w-10" />
            <span className="text-2xl font-medium">Registration</span>
            <p className="text-center text-[0.8rem]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the text.
            </p>
          </div>
          <div className={centerList}>
            <FaFileAlt color="#FFB204" className="h-12 w-10" />
            <span className="text-2xl font-medium">Check our program</span>
            <p className="text-center text-[0.8rem]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the text.
            </p>
          </div>
          <div className={centerList}>
            <FaMoneyBillAlt color="#FFB204" className="h-12 w-10" />
            <span className="text-2xl font-medium">Make donation</span>
            <p className="text-center text-[0.8rem]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the text.
            </p>
          </div>
          <div className={centerList}>
            <FaCheckCircle color="#FFB204" className="h-12 w-10" />
            <span className="text-2xl font-medium">You are volunteer!</span>
            <p className="text-center text-[0.8rem]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the text.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
