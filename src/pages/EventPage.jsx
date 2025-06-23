import { useState } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import MobileNavBar from "../layout/MobileNavBar";
import events from "../constants/events";
import MainEventsSection from "../components/MainEventsSection";
import UpcomingEventsSection from "../components/UpcomingEventsSection";
import BlogCategories from "../components/BlogCategories";
import PopularPosts from "../components/PopularPosts";
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
    <div className="font-[Poppins]">
      <Navbar />
      <MobileNavBar />
      <section className="flex-1 overflow-auto pt-[70px] bg-white mb-12">
        <div className="text-[42px] lg:px-10 px-5 py-5 bg-[#F2F2F2]">
          <h1>Events</h1>
        </div>
        <div className="">
          <div className="grid w-full sm:px-8 px-2 py-20  gap-4">
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
          </div>
            <aside className="flex-1/5 flex flex-col gap-10 px-5">
              <UpcomingEventsSection upcomingEvents={upcomingEvents} />
              <BlogCategories />
              <PopularPosts />
              <ArchivesDate />
              <TagsSection />
            </aside>
        </div>
      </section>
      <Footer />
    </div>
  );
}
