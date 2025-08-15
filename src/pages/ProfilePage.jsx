import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import MobileNavbar from "../layout/MobileNavBar";
import PersonalInfo from "../components/profile/PersonalInfo";
import Activity from "../components/profile/Activity";
import Settings from "../components/profile/Seetings";
import TopBar from "../components/profile/TopBar";
import PastDonations from "../components/profile/PastDonations";
import ApplicationStatus from "../components/profile/ApplicationStatus";

const ProfilePage = () => {
  return (
    <div className="">
      <div className="grid md:p-4 !mt-15 gap-4">
        <TopBar />
        <PersonalInfo />
        <Activity />
        <PastDonations />
        <ApplicationStatus />
        <Settings />
      </div>
    </div>
  );
};

export default ProfilePage;
