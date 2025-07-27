import { useState } from "react";
import Footer from "../layout/Footer";
import events from "../constants/Event/events";
import MainEventsSection from "../components/EventPage/MainEventsSection";
import UpcomingEventsSection from "../components/EventPage/UpcomingEventsSection";
import BlogCategories from "../components/EventPage/BlogCategories";
import PopularPosts from "../components/EventPage/PopularPosts";
import EventModel from "../components/EventPage/EventModel";
import ArchivesDate from "../components/EventPage/ArchivesDate";
import TagsSection from "../components/EventPage/TagsSection";

export default function EventPage() {
  const [activeTab, setActiveTab] = useState("Happening");
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Filter events based on active tab
  const filteredEvents = events.filter((event) => event.status === activeTab);

  // Filter upcoming events for sidebar
  const upcomingEvents = events.filter((event) => event.status === "Upcoming");

  const tabs = ["Happening", "Upcoming", "Expired"];

  return (
    <div className="font-[Poppins] ">
 
      <section className="flex-1 overflow-auto pt-[70px] bg-white mb-12">
        <div className="text-[42px] bg-[#F2F2F2] p-8">
          <h1 className="text-center">Events</h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:px-20 lg:gap-10">
          <div className="grid w-full sm:px-8 px-2 py-20 gap-4">
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
            <aside className="flex flex-1/4 flex-col gap-10 px-5 pb-5 lg:py-20">
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
