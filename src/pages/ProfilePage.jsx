import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import MobileNavbar from "../layout/MobileNavBar";
import PersonalInfo from "../components/PersonalInfo";
import Activity from "../components/Activity";
import Settings from "../components/Seetings";
import TopBar from '../components/TopBar'

const ProfilePage = () => {
  return (
    <div className="">
      <Navbar />
      <MobileNavbar />

      <div className="grid md:p-4 mt-18 gap-4">
          <TopBar />
            <PersonalInfo />
            <Activity />
            <Settings />
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;
