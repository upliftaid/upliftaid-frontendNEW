import { motion } from "framer-motion";
import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Bookmark, Box, User } from 'lucide-react';
import events from "../../constants/Event/events";
import { useState } from "react";

export default function MainEventsSection({onEventClick}) {
    const [activeTab, setActiveTab] = useState("Happening");
    const filteredEvents = events.filter((event) => event.status === activeTab);
    const tabs = ["Happening", "Upcoming", "Expired"];

    
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, transform: "translateX(-100%)" }}
        animate={{ opacity: 1, transform: "translateX(0%)" }}
        transition={{ duration: 1.3 }}
        className="flex flex-wrap gap-4 max-[750px]:!justify-center !mb-15 border-b border-gray-200"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`max-[445px]:pl-0 max-[445px]:pr-2 px-4 flex items-center cursor-pointer py-2 text-sm font-medium transition-colors  rounded-t ${
              activeTab === tab
                ? "text-[#FFB204] border border-b-0 !pb-2 scale-104 relative z-10 duration-500 border-gray-200 bg-white"
                : "text-gray-500  hover:bg-[#FFB204] hover:text-white duration-500"
            }`}
          >
            {
              tab === "Happening" && <Bookmark className="h-4 " />
            }
            {
              tab === "Upcoming" && <Box className="h-4 " />
            }
            {
              tab === "Expired" && <User className="h-4 "/>
            }
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Events Grid */}
      <div
        key={activeTab}
        className="grid grid-cols-1 min-[600px]:grid-cols-2  min-[1150px]:grid-cols-3 gap-x-6 gap-y-10 py-4 justify-items-center"
      >
        {filteredEvents.map((event, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            key={index}
            className="group flex cursor-pointer flex-col items-start w-full max-w-xs gap-2 border-b !pb-10 border-gray-800 border-dotted"
          >
            <div className="w-full h-44 overflow-hidden mb-4 ">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 duration-300 "
              />
            </div>

            <h2
              className="text-xl font-semibold cursor-pointer group-hover:text-[#FFB204] !my-4  duration-300 text-start"
              onClick={() => onEventClick(event)}
            >
              {event.title}
            </h2>

            <p className="text-gray-500 text-[14px] text-start mb-3 ">
              {event.description}
            </p>

            <div className="flex items-center text-[11px] !mt-2 text-gray-400 gap-4 flex-wrap ">
              <span className="flex items-center gap-1">
                <FaRegCalendarAlt color="#FFB204" /> {event.date}
              </span>
              <span className="flex items-center gap-1 text-xs">
                <FaMapMarkerAlt color="#FFB204" /> PLACE: {event.place}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
