import events from "../constants/Event/events";
import UpcomingEventsSection from "../components/EventPage/UpcomingEventsSection";
import BlogCategories from "../components/EventPage/BlogCategories";
import PopularPosts from "../components/EventPage/PopularPosts";
import ArchivesDate from "../components/EventPage/ArchivesDate";
import TagsSection from "../components/EventPage/TagsSection";
import BlogDetail from "../components/BlogDetails";

export default function BlogDetailPage() {

  // Filter upcoming events for sidebar
  const upcomingEvents = events.filter((event) => event.status === "Upcoming");

  return (
    <>

    <div className="font-[Poppins]">
      <section className="flex-1 overflow-auto pt-[70px] bg-white mb-12">
        <div className="text-[42px] bg-[#F2F2F2] p-8">
          <h1 className="text-center">Blog</h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:px-20 lg:gap-10">
            <BlogDetail />
            <aside className="flex !w-full flex-1/4 flex-col gap-10 px-5 pb-5 lg:py-20">
              {/* <UpcomingEventsSection upcomingEvents={upcomingEvents} /> */}
              <PopularPosts />
              <BlogCategories />
              <ArchivesDate />
              <TagsSection />
            </aside>
        </div>
      </section>
    </div>
        </>
  );
}
