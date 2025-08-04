import AboutUsSection from "../components/aboutUs/ourStory/OurStorySection";
import OurStory from "../components/aboutUs/ourStory/OurStory";
import Who_we_are from "../components/aboutUs/ourStory/Who_we_are";
import Meet_team from "../components/aboutUs/ourStory/Meet_team";
import Testimonials from "../components/aboutUs/ourStory/Testimonals";

const Our_story = () => {
  return (
    <div className="font-[Poppins]">
      <OurStory />
      <AboutUsSection />
      <Who_we_are />
      <Meet_team />
      <Testimonials />
    </div>
  );
};

export default Our_story;
