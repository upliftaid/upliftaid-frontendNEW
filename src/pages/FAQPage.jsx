import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import MobileNavbar from "../layout/MobileNavBar";
import Header from "../components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HelpingMessage from "../components/HelpingMessage";
import GeneralQuestions from "../components/GeneralQuestions";
import GeneralQuestionsData1 from "../constants/GeneralQuestionsData1";
import GeneralQuestionsData2 from "../constants/GeneralQuestionsData2";

const FAQPage = () => {
  return (
    <div className="font-[Poppins]">
      <Navbar />

      <MobileNavbar />

      <section className="grid gap-8">
        {/* Header */}
        <Header />

        <p className="text-center lg:w-[642px] lg:h-18 text-[14px] mx-auto px-4">
          Below are some frequently asked questions about UpliftAid and our
          programs. If you need personalized assistance or don’t find your
          question here, please visit our community forums. You can also review
          our Terms of Service and Support Policy for more information.
        </p>

        <div className="w-full lg:px-24 flex flex-col md:flex-row gap-8 items-start">
          {/* Left Column */}
          <div className="flex-1 h-full p-4 flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-1 px-4">
              <h1 className="text-[28px]">GENERAL QUESTIONS</h1>
              <div className="bg-[#00733C] w-16 h-[2.5px]" />
            </div>
            <GeneralQuestions accordinData={GeneralQuestionsData1} />
          </div>

          {/* Right Column */}
          <div className="flex-1 h-full p-4 flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-1 px-4 ">
              <h1 className="text-[28px]">GENERAL QUESTIONS</h1>
              <div className="bg-[#00733C] w-16 h-[2.5px]" />
            </div>
            <GeneralQuestions accordinData={GeneralQuestionsData2} />
          </div>
        </div>

        <HelpingMessage />
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
