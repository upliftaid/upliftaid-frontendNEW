import React, { useState, useEffect } from 'react';
import { tabs, missionBox1, missionBox2, missionBox3 } from '../constants/data';
import { motion, AnimatePresence } from "framer-motion";
import WhyChooseUsDescriptionDetails from "../constants/WhyChooseUsDescriptionDetails";
import ProgressBars from './ProgressBars';

const WhoWeAre = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (tabs[activeTab].contentType === 'skills') {
      const timer = setTimeout(() => setAnimate(true), 100);
      return () => {
        clearTimeout(timer);
        setAnimate(false);
      };
    } else {
      setAnimate(false);
    }
  }, [activeTab]);

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        {tabs[activeTab].title.toUpperCase()}
      </h2>
      <div className="h-1 w-16 bg-[#00733C] mx-auto mb-8"></div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto bg-white border rounded-md overflow-hidden mb-8 flex flex-col sm:flex-row">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`w-full sm:w-1/3 py-3 font-semibold text-sm sm:text-base ${activeTab === index
              ? 'bg-[#00733C] text-white'
              : 'bg-white text-gray-700 hover:bg-[#00733C]/80 hover:text-white'
              } border-b sm:border-b-0 sm:border-r last:border-none transition-all`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* About Us Cards */}
      {tabs[activeTab].contentType === 'cards' && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-4">
          {tabs[activeTab].content.map((item, idx) => (
            <div
              key={idx}
              className="card-hover fade-in-up bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="icon-hover rounded-full p-4 mb-4 text-[#00733C]">
                {item.icon}
              </div>
              <h4 className="text-base sm:text-lg font-bold mb-2">{item.heading}</h4>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      )}

      {/* Our Mission Section */}
      {tabs[activeTab].contentType === 'customMission' && (
        <div className="py-10 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[missionBox1, missionBox2, missionBox3].map((boxMissions, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-7 space-y-10">
                {boxMissions.map((mission) => (
                  <div key={mission.id} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg shadow flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                      {mission.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="text-lg font-semibold text-gray-800 group-hover:text-[#00733C] transition-colors duration-300">
                        {mission.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{mission.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Why Choose Us + Fundraisers Section */}
      {tabs[activeTab].contentType === 'whyChooseUs' && (
        <div className="flex flex-col md:flex-row lg:w-full lg:mt-10 min-w-[320px] text-start">
          {/* Left: Why Choose Us */}
          <div className="md:w-[50%] md:h-[500px] p-4 md:p-12 lg:px-25">
            <div className="grid gap-1 mt-4">
              <h1 className="text-[28px]">Why Choose Us</h1>
              <div className="bg-[#00733C] w-16 h-[2.5px]" />
            </div>
            <div className="grid mt-10 gap-4">
              {WhyChooseUsDescriptionDetails.map((data, index) => (
                <div key={index} className="grid gap-2">
                  <h1
                    className="font-semibold cursor-pointer"
                    onClick={() => toggleIndex(index)}
                  >
                    {data.heading}
                  </h1>
                  <div className="w-[90%] h-[0.5px] bg-[#e9e7e7]" />
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="text-[14px] mt-2"
                      >
                        {data.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Fundraisers */}
          <div className="md:w-[50%] md:h-[500px] md:py-5">
            <div className="p-6 md:px-16">
              <div className="grid gap-1 mt-4">
                <h1 className="text-[28px]">Our Fundraisers</h1>
                <div className="bg-[#00733C] w-16 h-[2.5px]" />
              </div>
              <div>
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
