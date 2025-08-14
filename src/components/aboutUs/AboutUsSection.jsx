import React, { useEffect, useState } from "react";

const AboutUsSection = () => {
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    const leftTimer = setTimeout(() => setAnimateLeft(true), 200);
    const rightTimer = setTimeout(() => setAnimateRight(true), 600);
    return () => {
      clearTimeout(leftTimer);
      clearTimeout(rightTimer);
    };
  }, []);

  return (
    <section className="px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4 md:px-10">
        {/* Left Column */}
        <div
          className={`transform transition duration-700 ease-out my-5 ${
            animateLeft
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl text-black mb-4 relative mt-4">
                More About Us
                <div className="w-50 h-1 bg-[#00733C] mt-2"></div>
              </h2>

              <h3 className="text-[#00733C] text-xl sm:text-2xl font-light leading-snug">
                Together, we uplift lives.
              </h3>

              <p className="text-[#00733C] text-lg my-4">Service Since 2024</p>

              {/* Short Description */}
              <p className="text-gray-800 mb-4 leading-6">
                UpliftiAid is a nonprofit organization committed to uplifting
                vulnerable communities through compassion, action, and
                sustainable change. We work across diverse areas—from child
                welfare and women’s empowerment to education, healthcare, and
                environmental sustainability—believing that lasting impact
                begins with people helping people.
              </p>

              {/* Conditional Full Description */}
              {showFullText && (
                <p className="text-gray-800 mb-4 leading-6 mt-1 transition-all duration-700 ease-in transform opacity-0 translate-y-4 animate-fade-in-up">
                  Our programs are designed to meet urgent needs while building
                  long-term resilience. Whether it's providing school supplies,
                  supporting disaster relief, or empowering women with
                  livelihood skills, UpliftiAid stands at the intersection of
                  care and change. With the support of our volunteers, donors,
                  and partners, we aim to create a world where dignity,
                  opportunity, and hope are accessible to all.
                </p>
              )}
            </div>

            {/* READ MORE button (only if not showing full text) */}
            {!showFullText && (
              <div className="mt-4 my-4">
                <button
                  className="bg-[#00733C] hover:bg-green-800 text-white px-4 py-3 text-sm"
                  onClick={() => setShowFullText(true)}
                >
                  READ MORE
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Image */}
        <div
          className={`transform transition duration-700 ease-out ${
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
