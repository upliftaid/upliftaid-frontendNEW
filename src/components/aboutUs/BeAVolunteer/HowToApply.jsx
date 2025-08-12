import React from "react";
import {
  FaMoneyBillAlt,
  FaCheckCircle,
  FaFileAlt,
  FaUser,
} from "react-icons/fa";

const cardStyles =
  "flex flex-col items-center justify-start px-4 py-6 w-full max-w-xs mx-auto gap-4";

export default function HowToApply() {
  return (
    <div className="w-full sm:h-auto min-h-fit bg-fixed bg-no-repeat bg-cover bg-[url(https://zozothemes.com/html/the-charity/img/sections/slider/charity-slide2.jpg)]">
      <div className="bg-black/70 py-10 min-h-fit flex flex-col gap-16 items-center justify-center">
        <h1 className="text-white text-3xl font-bold relative inline-block after:content-[''] after:block after:h-[3px] after:bg-[#FFB204] after:w-1/6 after:mx-auto after:mt-4">
          HOW TO APPLY
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 px-4 text-white w-full max-w-7xl">
          <div className={cardStyles}>
            <FaUser
              color="#FFB204"
              className="h-12 w-12 mb-2"
            />
            <span className="text-xl font-semibold text-center">
              Registration
            </span>
            <p className="text-center text-sm">
              Start by filling out our Volunteer Registration Form. This helps
              us get to know you and match you with the right opportunities.
            </p>
          </div>
          <div className={cardStyles}>
            <FaFileAlt
              color="#FFB204"
              className="h-12 w-12 mb-2"
            />
            <span className="text-xl font-semibold text-center">
              Check our program
            </span>
            <p className="text-center text-sm">
              Explore the different ways you can make a difference by visiting
              our Programs Page. Learn where your skills and passions are needed
              most.
            </p>
          </div>
          <div className={cardStyles}>
            <FaMoneyBillAlt
              color="#FFB204"
              className="h-12 w-12 mb-2"
            />
            <span className="text-xl font-semibold text-center">
              Make donation
            </span>
            <p className="text-center text-sm">
              Support our mission by making a contribution. Donations help us
              run programs and provide resources to volunteers. Donate Here.
            </p>
          </div>
          <div className={cardStyles}>
            <FaCheckCircle
              color="#FFB204"
              className="h-12 w-12 mb-2"
            />
            <span className="text-xl font-semibold text-center">
              You are volunteer!
            </span>
            <p className="text-center text-sm">
              Once you're registered and have chosen a program, our team will
              contact you with the next steps. Welcome aboard!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
