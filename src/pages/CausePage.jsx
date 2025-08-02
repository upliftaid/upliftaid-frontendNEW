import React, { useState, useEffect } from "react";
import { FaChevronRight, FaCalendarAlt } from "react-icons/fa";
import "@fontsource/poppins";


import causeImage1 from "../assets/causes-1.jpg";
import causeImage2 from "../assets/causes-2.jpg";
import causeImage3 from "../assets/causes-3.jpg";

const causes = [
  {
    title: "Charity For Education",
    image: causeImage1,
    raised: 1890,
    goal: 2500,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Donate Clothes",
    image: causeImage2,
    raised: 1890,
    goal: 2500,
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Arrange Food",
    image: causeImage3,
    raised: 1890,
    goal: 2500,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Adopt Child",
    image: causeImage2,
    raised: 1890,
    goal: 2500,
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Become Volunteer",
    image: causeImage1,
    raised: 1890,
    goal: 2500,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const galleryImages = [causeImage1, causeImage2, causeImage3];

const categories = ["Charity", "Child", "Education", "Food", "Water"];

const latestCauses = [
  {
    title: "The standard chunk of Lorem Ipsum used since.",
    image: causeImage3,
    date: "03.11.2014",
  },
  {
    title: "The standard chunk of Lorem Ipsum used since.",
    image: causeImage2,
    date: "03.11.2014",
  },
  {
    title: "The standard chunk of Lorem Ipsum used since.",
    image: causeImage1,
    date: "03.11.2014",
  },
];

const tags = ["Charity", "Child", "Education", "Food", "Homeless", "Hungry", "Water"];

const CausesPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white min-h-screen w-full flex flex-col items-center justify-center !mt-18 font-[Poppins] text-[14px] ">
      <div className="text-4xl font-medium mb-10 !h-[120px] w-full flex items-center justify-center text-left bg-[#f2f2f2]">
        <p className="p-4 w-[80%]">Causes</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 min-[730px]:w-[80%] w-[95%] gap-10 !mt-20">
        <div className="lg:col-span-2 space-y-10">
          {causes.map((cause, idx) => (
            <div key={idx}>
              <div  className=" flex max-[550px]:flex-col gap-6 h-full !my-10">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-64 h-48 object-cover rounded max-[550px]:w-full"
                />
                <div className="!h-full flex flex-col justify-between items-start">
                  <h2 className="text-3xl font-medium !mb-5">{cause.title}</h2>
                  <p className="text-sm   !mb-2">
                    <span className="font-medium">Raised:</span> ${cause.raised} &nbsp;
                    <span className="text-[#FFB204] font-medium !ml-5">Goal: ${cause.goal}</span> 
                  </p>
                  <p className="text-gray-400 text-sm !mb-4 ">{cause.description}</p>
                  <button className="bg-[#00733C] hover:bg-[#FFB204] duration-300 cursor-pointer text-white px-4 py-2 rounded text-sm font-medium">
                    Donate Now
                  </button>
                </div>
              </div>
              <div className="w-full border-t-[1px] border-dotted border-gray-400" />
            </div>
          ))}
        </div>

        <div className="space-y-10 !mt-10">
          <div>
            <h3 className="text-xl font-semibold mb-4  pb-2">Category</h3>
            <ul className="space-y-2 text-gray-700">
              {categories.map((cat, i) => (
                <li key={i} className="flex items-center !my-5 text-gray-400 hover:text-black  duration-300 cursor-pointer gap-2">
                  <FaChevronRight className="text-xs" /> {cat}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 !mt-7 pb-2">Latest Causes</h3>
            <ul className="space-y-4">
              {latestCauses.map((cause, i) => (
                <li key={i} className="flex gap-3 !my-7">
                  <img
                    src={cause.image}
                    alt="thumb"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm !font-light text-gray-400 !mb-2 hover:text-gray-800  duration-300 cursor-pointer leading-snug">
                      {cause.title}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <FaCalendarAlt className="mr-1 text-sm text-[#fccc5b]" /> 
                      <p className="!ml-2">{cause.date}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="!mb-10">
            <h3 className="text-xl font-semibold mb-4  pb-2">Gallery</h3>
            {/* <img
              src={galleryImages[currentImage]}
              alt="Gallery Preview"
              className="rounded w-full object-cover transition-all duration-700 ease-in-out"
            /> */}
            <div 
            style={{backgroundImage: `url(${galleryImages[currentImage]})`}}
              className={`w-full h-[300px] duration-1000 ease-in-out bg-cover bg-center rounded-xl !mt-5`}></div>
          </div>

          <div className="!mb-20">
            <h3 className="text-xl font-semibold mb-4 pb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#00733C] text-white text-xs px-3 py-1 hover:bg-[#FFB204] duration-300 cursor-default rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CausesPage;