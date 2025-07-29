import events from "../constants/BlogDetailsPage/events";
import UpcomingEventsSection from "../components/BlogDetailsPage/UpcomingEventsSection";
import BlogCategories from "../components/BlogDetailsPage/BlogCategories";
import PopularPosts from "../components/BlogDetailsPage/PopularPosts";
import ArchivesDate from "../components/BlogDetailsPage/ArchivesDate";
import TagsSection from "../components/BlogDetailsPage/TagsSection";
import BlogDetail from "../components/BlogDetailsPage/BlogDetails";

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
            <aside className="flex flex-1/4 flex-col gap-10 px-5 pb-5 lg:py-20">
              <UpcomingEventsSection upcomingEvents={upcomingEvents} />
              <BlogCategories />
              <PopularPosts />
              <ArchivesDate />
              <TagsSection />
            </aside>
        </div>
      </section>
    </div>
        </>
  );
}
