import React, { useEffect, useState } from "react";

const AboutUsSection = () => {
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);

  useEffect(() => {
    const leftTimer = setTimeout(() => setAnimateLeft(true), 200);
    const rightTimer = setTimeout(() => setAnimateRight(true), 600);
    return () => {
      clearTimeout(leftTimer);
      clearTimeout(rightTimer);
    };
  }, []);

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4 md:px-10">
        {/* Left Column */}
        <div
          className={`transform transition-opacity transition-transform duration-700 ease-out ${
            animateLeft
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl text-black mb-6 relative">
            MORE ABOUT US
            <div className="w-10 h-1 bg-[#00733C] mt-2"></div>
          </h2>

          <h3 className="text-[#00733C] text-xl sm:text-2xl font-light leading-snug mb-4">
            Together, we uplift lives.
          </h3>
          <p className="text-[#00733C] text-lg mb-6">Service Since 2024</p>

          <p className="text-gray-800 mb-4">
            UpliftiAid is a nonprofit organization committed to uplifting
            vulnerable communities through compassion, action, and sustainable
            change. We work across diverse areas—from child welfare and women’s
            empowerment to education, healthcare, and environmental
            sustainability—believing that lasting impact begins with people
            helping people.
          </p>
          <p className="text-gray-800 mb-6">
            Our programs are designed to meet urgent needs while building
            long-term resilience. Whether it's providing school supplies,
            supporting disaster relief, or empowering women with livelihood
            skills, UpliftiAid stands at the intersection of care and change.
            With the support of our volunteers, donors, and partners, we aim to
            create a world where dignity, opportunity, and hope are accessible
            to all.
          </p>

          <button className="bg-[#00733C] hover:bg-green-800 text-white px-4 py-3 text-sm">
            READ MORE
          </button>
        </div>

        {/* Right Column - Image */}
        <div
          className={`transform transition-opacity transition-transform duration-700 ease-out ${
            animateRight
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <img
            src="https://zozothemes.com/html/the-charity/img/sections/about/featured-image2.jpg"
            alt="Charity group"
            className="w-full h-auto object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
