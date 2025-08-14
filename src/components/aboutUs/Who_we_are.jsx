import { useRef, useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import {
  tabs,
  missionBox1,
  missionBox2,
  missionBox3,
} from "../../constants/aboutUs/data";
import { motion, AnimatePresence } from "framer-motion";
import WhyChooseUsDescriptionDetails from "../../constants/aboutUs/WhyChooseUsDescriptionDetails";
import ProgressBars from "./ProgressBars";

const WhoWeAre = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (tabs[activeTab].contentType === "skills") {
      const timer = setTimeout(() => setAnimate(true), 100);
      return () => {
        clearTimeout(timer);
        setAnimate(false);
      };
    } else {
      setAnimate(false);
    }
  }, [activeTab]);

  const headingRef = useRef(null);
  const [headingWidth, setHeadingWidth] = useState(0);

  useEffect(() => {
    if (headingRef.current) {
      setHeadingWidth(headingRef.current.offsetWidth);
    }
  }, [tabs, activeTab]);

  return (
    <section className="bg-gray-100 py-4 px-4 sm:px-6 lg:px-8 w-full">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center mb-10 text-center w-full mx-auto px-4 py-3">
        <h2
          ref={headingRef}
          className="text-2xl sm:text-3xl font-semibold mb-4 my-2 capitalize"
        >
          {tabs[activeTab].title}
        </h2>
        <div
          className="h-1 bg-[#00733C] mx-auto transition-all duration-300"
          style={{ width: `${headingWidth}px` }}
        />
      </div>

      {/* Tabs */}
      <div className="flex justify-center w-full my-4 mb-4">
        <div className="w-full max-w-4xl mx-auto bg-white border rounded-md overflow-hidden mb-8 flex flex-col sm:flex-row">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-full sm:w-1/3 py-3 font-semibold text-sm sm:text-base ${
                activeTab === index
                  ? "bg-[#00733C] text-white"
                  : "bg-white text-gray-700 hover:bg-[#00733C]/80 hover:text-white"
              } border-b sm:border-b-0 sm:border-r last:border-none transition-all`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Section */}
      <div className="my-5 gap-y-5">
        {tabs[activeTab].contentType === "cards" && (
          <div className="w-full max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
            {tabs[activeTab].content.map((item, idx) => (
              <div
                key={idx}
                className="card-hover fade-in-up bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="icon-hover rounded-full p-4 mb-4 text-[#00733C]">
                  {item.icon}
                </div>
                <h4 className="text-base sm:text-lg font-bold mb-2">
                  {item.heading}
                </h4>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Our Mission Section */}
      {tabs[activeTab].contentType === "customMission" && (
        <div className="py-10 px-4 bg-gray-100">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {[missionBox1, missionBox2, missionBox3].map(
              (boxMissions, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-7 space-y-10"
                >
                  {boxMissions.map((mission) => (
                    <div
                      key={mission.id}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg shadow flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                        {mission.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="text-lg font-semibold text-gray-800 group-hover:text-[#00733C] transition-colors duration-300">
                          {mission.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {mission.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      )}

      {/* Why Choose Us + Fundraisers */}
      {tabs[activeTab].contentType === "whyChooseUs" && (
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 lg:px-6 py-10 gap-6">
          {/* Left Column - Why Choose Us Accordion */}
          <div className="md:w-1/2">
            <div className="grid gap-1 mt-4">
              <h1 className="text-[28px]">Why Choose Us</h1>
              <div className="bg-[#00733C] w-50 h-[2.5px]" />
            </div>
            <div className="grid mt-6">
              {WhyChooseUsDescriptionDetails.map((data, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="border-b last:border-b-0 py-4 cursor-pointer transition-colors hover:bg-gray-50"
                    onClick={() => toggleIndex(index)}
                  >
                    {/* Header */}
                    <div className="flex justify-between items-center px-2 sm:px-0">
                      <h1 className="font-semibold text-base sm:text-lg text-[#333]">
                        {data.heading}
                      </h1>
                      <div className="text-[#00733C]">
                        {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
                      </div>
                    </div>

                    {/* Body */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "max-h-[500px] opacity-100 mt-3"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm text-gray-600 leading-relaxed px-2 sm:px-0">
                        {data.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Progress Bars */}
          <div className="md:w-1/2">
            <div className="md:px-6">
              <div className="grid gap-1 mt-4">
                <h1 className="text-[28px]">Our Fundraisers</h1>
                <div className="bg-[#00733C] w-52 h-[2.5px]" />
              </div>
              <div className="w-full mt-6">
                <ProgressBars />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhoWeAre;
