import { useEffect, useState } from "react";
import MainEventsSection from "../../components/EventPage/MainEventsSection";
import TagsSection from "../../components/EventPage/TagsSection";
import EventCategory from "../../components/EventPage/EventCategory";
import events from "../../constants/Event/events";

export default function EventPage() {
  const [selectedEvent, setSelectedEvent] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const [selectedTags, setSelectedTags] = useState([]);

  // Filter logic in one place
  useEffect(() => {
    let filtered = events;

    if (selectedCategory !== "All Category") {
      filtered = filtered.filter(e => e.category === selectedCategory);
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter(e =>
        selectedTags.every(tag => e.tags.includes(tag))
      );
    }

    setSelectedEvent(filtered);
  }, [selectedCategory, selectedTags]);

  return (
    <div className="font-[Poppins] ">
      <section className="flex-1 overflow-auto flex flex-col items-center justify-center pt-[70px] bg-white mb-12">
        <div className="text-[42px] w-full flex  bg-[#F2F2F2] p-8">
          <div className="px-25">
            <h1 className="text-start">Events</h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse lg:px-20 lg:gap-10">
          <aside className="flex flex-1/4 flex-col gap-10 px-5 pb-5 lg:py-20">
            <EventCategory
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <TagsSection
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
            />
          </aside>
          <div className="grid w-full sm:px-8  py-20 gap-4">
            <MainEventsSection selectedEvent={selectedEvent} />
          </div>
        </div>
      </section>
    </div>
  );
}
