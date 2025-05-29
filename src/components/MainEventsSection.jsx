import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function MainEventsSection({
  activeTab,
  setActiveTab,
  filteredEvents,
  tabs,
  onEventClick,
}) {
  return (
    <div className="flex-3/4">
      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, transform: "translateX(-100%)" }}
        animate={{ opacity: 1, transform: "translateX(0%)" }}
        transition={{ duration: 1.3 }}
        className="flex gap-4 mb-8 border-b border-gray-200"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 text-sm font-medium transition-colors cursor-pointer duration-200 ${
              activeTab === tab
                ? "text-[#FFB204] border-b-none border-t border-l border-r border-gray-200"
                : "text-gray-500 hover:text-gray-700 hover:bg-[#FFB204]"
            }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>
      <div key={activeTab} className="grid grid-cols-3 gap-x-4 gap-y-12 py-4">
        {filteredEvents.map((event, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.4 }}
            key={index}
            className="flex flex-col gap-4"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-[270px] h-[170px] object-cover rounded"
            />
            <h2
              className="text-2xl font-semibold cursor-pointer hover:text-[#FFB204] mt-4 mb-2"
              onClick={() => onEventClick(event)}
            >
              {event.title}
            </h2>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <div className="flex items-center text-sm text-gray-500 gap-6">
              <span className="flex items-center gap-1">
                <FaRegCalendarAlt color="#FFB204" /> {event.date}
              </span>
              <span className="flex text-[12px] items-center gap-1">
                <FaMapMarkerAlt color="#FFB204" /> PLACE : {event.place}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
