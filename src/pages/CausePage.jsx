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
    <div className="bg-gray-100 min-h-screen px-8 pt-32 pb-8 font-[Poppins] text-[14px] ">
      <h1 className="text-4xl font-medium mb-10 text-left">Causes</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          {causes.map((cause, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4 flex gap-6">
              <img
                src={cause.image}
                alt={cause.title}
                className="w-64 h-48 object-cover rounded"
              />
              <div>
                <h2 className="text-xl font-medium mb-2">{cause.title}</h2>
                <p className="text-sm mb-1">
                  <span className="font-medium">Raised:</span> ${cause.raised} &nbsp;
                  <span className="text-blue-500 font-medium">Goal:</span> ${cause.goal}
                </p>
                <p className="text-gray-600 text-sm mb-4">{cause.description}</p>
                <button className="bg-[#00733C] hover:bg-green-800 text-white px-4 py-2 rounded text-sm font-medium">
                  Donate Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="text-lg font-medium mb-4 border-b pb-2">Category</h3>
            <ul className="space-y-2 text-gray-700">
              {categories.map((cat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaChevronRight className="text-xs" /> {cat}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 border-b pb-2">Latest Causes</h3>
            <ul className="space-y-4">
              {latestCauses.map((cause, i) => (
                <li key={i} className="flex gap-3">
                  <img
                    src={cause.image}
                    alt="thumb"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm font-normal text-gray-800 leading-snug">
                      {cause.title}
                    </p>
                    <p className="flex items-center text-xs text-gray-500 mt-1">
                      <FaCalendarAlt className="mr-1 text-sm" /> {cause.date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 border-b pb-2">Gallery</h3>
            <img
              src={galleryImages[currentImage]}
              alt="Gallery Preview"
              className="rounded w-full object-cover transition-all duration-700 ease-in-out"
            />
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 border-b pb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#00733C] text-white text-xs px-3 py-1 rounded"
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