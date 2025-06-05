import React, { useState, useEffect } from 'react';
import { tabs, missionBox1, missionBox2, missionBox3 } from '../constants/data';




const WhoWeAre = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [animate, setAnimate] = useState(false);

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





      {/* Our Mission Section (Custom Layout) */}
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
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-800 group-hover:text-[#00733C] transition-colors duration-300 text-left">
                  {mission.title}
                </h4>
                <p className="text-gray-600 text-sm text-left">{mission.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
)}


      {/* Skills Section */}
      {tabs[activeTab].contentType === 'skills' && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-6 text-left">
          {/* Left Column */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 border-b-4 border-green-700 inline-block">
              {tabs[activeTab].content.left.heading}
            </h3>
            {tabs[activeTab].content.left.points.map((point, idx) => (
              <div key={idx} className="mb-6">
                <h4 className="font-semibold text-base">{point.title}</h4>
                {point.desc && (
                  <p className="text-gray-600 mt-2 text-sm">{point.desc}</p>
                )}
                <hr className="mt-2" />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 border-b-4 border-green-700 inline-block">
              {tabs[activeTab].content.right.heading}
            </h3>
            {tabs[activeTab].content.right.skills.map((skill, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between text-sm font-medium">
                  <span>{skill.label}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="w-full h-3 bg-gray-800 rounded-full mt-1">
                  <div
                    className="h-3 bg-[#00733C] rounded-full transition-all duration-1000 ease-in-out"
                    style={{ width: animate ? `${skill.value}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default WhoWeAre;
