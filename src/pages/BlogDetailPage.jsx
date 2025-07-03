import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import MobileNavBar from "../layout/MobileNavBar";
import events from "../constants/events";
import UpcomingEventsSection from "../components/UpcomingEventsSection";
import BlogCategories from "../components/BlogCategories";
import PopularPosts from "../components/PopularPosts";
import ArchivesDate from "../components/ArchivesDate";
import TagsSection from "../components/TagsSection";
import BlogDetail from "../components/BlogDetails";

export default function EventPage() {

  // Filter upcoming events for sidebar
  const upcomingEvents = events.filter((event) => event.status === "Upcoming");

  return (
    <>

    <div className="font-[Poppins]">
      <Navbar />
      <MobileNavBar />
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
      <Footer />
    </div>
        </>
  );
}
