import { useState } from "react";
import MainEventsSection from "../components/EventPage/MainEventsSection";
import UpcomingEventsSection from "../components/EventPage/UpcomingEventsSection";
import BlogCategories from "../components/EventPage/BlogCategories";
import PopularPosts from "../components/EventPage/PopularPosts";
import EventModel from "../components/EventPage/EventModel";
import ArchivesDate from "../components/EventPage/ArchivesDate";
import TagsSection from "../components/EventPage/TagsSection";

export default function EventPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  

  return (
    <div className="font-[Poppins] ">
      <section className="flex-1 overflow-auto flex flex-col items-center justify-center pt-[70px] bg-white mb-12">
        <div className="text-[42px] w-full flex  bg-[#F2F2F2] p-8">
          <div className="px-25">
            <h1 className="text-start">Events</h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:px-20 lg:gap-10">
          <div className="grid w-full sm:px-8 px-2 py-20 gap-4">
            {!selectedEvent ? (
              <MainEventsSection
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
              <UpcomingEventsSection />
              <BlogCategories />
              <PopularPosts />
              <ArchivesDate />
              <TagsSection />
            </aside>
        </div>
      </section>
    </div>
  );
}
