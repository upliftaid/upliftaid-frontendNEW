import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import MobileNavbar from "../layout/MobileNavBar";
import SideBar from "../components/SideBar";
import PersonalInfo from "../components/PersonalInfo";
import Activity from "../components/Activity";
import Settings from "../components/Seetings";

const ProfilePage = () => {
  return (
    <div className="">
      <Navbar />
      <MobileNavbar />

      <div className="flex md:flex-row flex-col p-4 mt-18 gap-4 h-[calc(100vh-80px)] overflow-hidden">
        {/* Fixed left side menu */}
        <div className="lg:w-[20%] sticky top-20 self-start">
          <SideBar />
        </div>

        {/* Scrollable right side content */}
        <div className="lg:w-[80%] overflow-y-auto scroll-smooth pr-4" style={{ maxHeight: 'calc(100vh - 100px)' }}>
          <div id="profile" className="mb-8">
            <PersonalInfo />
          </div>

          <div id="activity" className="mb-8">
            <Activity />
          </div>

          <div id="setting" className="mb-8">
            <Settings />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;
