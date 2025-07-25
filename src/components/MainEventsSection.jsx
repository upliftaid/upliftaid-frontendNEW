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
    <div className="w-full px-4 sm:px-6 lg:px-8">
      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, transform: "translateX(-100%)" }}
        animate={{ opacity: 1, transform: "translateX(0%)" }}
        transition={{ duration: 1.3 }}
        className="flex flex-wrap gap-4 mb-8 border-b border-gray-200"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-t ${
              activeTab === tab
                ? "text-[#FFB204] border border-b-0 border-gray-200 bg-white"
                : "text-gray-500 hover:text-gray-700 hover:bg-[#FFB204] hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Events Grid */}
      <div
        key={activeTab}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 py-4 justify-items-center"
      >
        {filteredEvents.map((event, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            key={index}
            className="flex flex-col items-start w-full max-w-xs gap-2"
          >
            <div className="w-full h-44 overflow-hidden mb-4">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h2
              className="text-lg font-semibold cursor-pointer hover:text-[#FFB204] mb-2 px-2 text-start"
              onClick={() => onEventClick(event)}
            >
              {event.title}
            </h2>

            <p className="text-gray-600 text-[14px] text-start text-justify mb-3 px-2">
              {event.description}
            </p>

            <div className="flex items-center text-sm text-gray-500 gap-4 flex-wrap px-2">
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
