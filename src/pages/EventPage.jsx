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
import EventModel from "../components/EventModel";
import ArchivesDate from "../components/ArchivesDate";
import TagsSection from "../components/TagsSection";

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
      <section className="flex-1 overflow-auto pt-[70px] bg-white mb-12">
        <motion.h1
          initial={{ opacity: 0, transform: "translateY(-100%)" }}
          whileInView={{ opacity: 1, transform: "translateY(0%)" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl h-28 p-8 bg-[#F2F2F2]"
        >
          Events
        </motion.h1>
        <main className="flex flex-col md:flex-row w-full sm:px-8 px-2 py-20  gap-4">
          {!selectedEvent ? (
            <MainEventsSection
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              filteredEvents={filteredEvents}
              tabs={tabs}
              onEventClick={setSelectedEvent}
            />
          ) : (
            <EventModel
              setSelectedEvent={setSelectedEvent}
              selectedEvent={selectedEvent}
            />
          )}
          <aside className="flex-1/5 flex flex-col gap-10">
            <UpcomingEventsSection upcomingEvents={upcomingEvents} />
            <BlogCategories />
            <PopularPosts />
            <ArchivesDate />
            <TagsSection />
          </aside>
        </main>
      </section>
      <Footer />
    </div>
  );
}
