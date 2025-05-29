import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileNavBar from "../components/MobileNavBar";
import events from "../constants/events";
import MainEventsSection from "../components/MainEventsSection";
import UpcomingEventsSection from "../components/UpcomingEventsSection";
import BlogCategories from "../components/BlogCategories";
import PopularPosts from "../components/PopularPosts";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function EventPage() {
  const [activeTab, setActiveTab] = useState("Happening");
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Filter events based on active tab
  const filteredEvents = events.filter((event) => event.status === activeTab);

  // Filter upcoming events for sidebar
  const upcomingEvents = events.filter((event) => event.status === "Upcoming");

  const tabs = ["Happening", "Upcoming", "Expired"];

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <MobileNavBar />
      <main className="flex-1 overflow-auto pt-[70px] bg-white mb-12">
        <motion.h1
          initial={{ opacity: 0, transform: "translateY(-100%)" }}
          whileInView={{ opacity: 1, transform: "translateY(0%)" }}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="text-4xl h-28 p-8 bg-[#F2F2F2]"
        >
          Events
        </motion.h1>
        <div className="flex w-full px-8 pt-20 pb-10 gap-8">
          {!selectedEvent ? (
            <MainEventsSection
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              filteredEvents={filteredEvents}
              tabs={tabs}
              onEventClick={setSelectedEvent}
            />
          ) : (
            <div className="flex-3/4 bg-white rounded-2xl flex flex-col gap-5 shadow-2xl p-10 border border-gray-100">
              <button
                className="mb-8 px-6 w-52 py-2 bg-gradient-to-r from-[#FFB204] to-[#FFD580] text-white font-semibold rounded-full shadow hover:from-[#E69F00] hover:to-[#FFB204] transition-colors duration-200"
                onClick={() => setSelectedEvent(null)}
              >
                &larr; Back to Events
              </button>
              <h2 className="text-4xl font-extrabold mb-6 text-[#00733C] drop-shadow">
                {selectedEvent.title}
              </h2>
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-96 object-cover rounded-xl mb-8 border border-gray-200 shadow"
              />
              <div className="flex items-center text-base text-gray-600 gap-8 mb-6">
                <span className="flex items-center gap-2">
                  <span role="img" aria-label="calendar">
                    📅
                  </span>
                  <span className="font-medium">{selectedEvent.date}</span>
                </span>
                <span className="flex text-[14px] items-center gap-2">
                  <span role="img" aria-label="place">
                    📍
                  </span>
                  <span className="font-medium">PLACE:</span>{" "}
                  {selectedEvent.place}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#FFB204] border-l-4 border-[#FFB204] pl-3">
                Event Description
              </h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                {selectedEvent.description}
              </p>
              <h3 className="text-2xl font-bold mb-3 text-[#FFB204] border-l-4 border-[#FFB204] pl-3">
                Event Content
              </h3>
              <ul className="list-disc pl-8 text-gray-700 mb-10 space-y-2 text-base">
                <li>
                  The auction will be started in the morning of Thursday, April
                  18, 2019 at Center Hotel.
                </li>
                <li>
                  There are over 100 featured pictures that will be auctioned in
                  this charity event.
                </li>
                <li>Expected the starting price of photograph is 20,000$.</li>
                <li>The winner is the bidder offering the highest price.</li>
                <li>
                  Of bidder leaves an item can contribute any fund by our
                  charity box.
                </li>
                <li>
                  All money raised in this charity event will be donated to
                  people that our volunteer photographers visit.
                </li>
                <li>
                  Any philanthropist, nonprofit organization, NGO want to donate
                  or ask any question, let contact with our staff.
                </li>
              </ul>
              <h3 className="text-2xl font-bold mb-3 text-[#FFB204] border-l-4 border-[#FFB204] pl-3">
                Register Now
              </h3>
              <form className="grid gap-5 max-w-xl mt-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB204] transition"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB204] transition"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB204] transition"
                />
                <textarea
                  placeholder="Message"
                  className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB204] transition"
                  rows={3}
                ></textarea>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#FFB204] to-[#FFD580] text-white font-semibold px-6 py-2 rounded-full shadow hover:from-[#E69F00] hover:to-[#FFB204] transition-colors duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
          <aside className="flex-1/6 flex flex-col gap-10">
            <UpcomingEventsSection upcomingEvents={upcomingEvents} />
            <BlogCategories />
            <PopularPosts />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
