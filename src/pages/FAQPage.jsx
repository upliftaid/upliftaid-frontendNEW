import Header from "../components/aboutUs/FAQ/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HelpingMessage from "../components/aboutUs/FAQ/HelpingMessage";
import GeneralQuestions from "../components/aboutUs/FAQ/GeneralQuestions";
import GeneralQuestionsData1 from "../constants/aboutUs/FAQ/GeneralQuestionsData1";
import GeneralQuestionsData2 from "../constants/aboutUs/FAQ/GeneralQuestionsData2";

const FAQPage = () => {
  return (
    <div className="font-[Poppins] w-full overflow-x-hidden">
      <section className="flex flex-col gap-10">
        {/* Header */}
        <Header />

        {/* Intro Paragraph */}
        <p className="text-center max-w-3xl text-sm sm:text-base mx-auto text-gray-700 leading-relaxed">
          Below are some frequently asked questions about UpliftAid and our
          programs. If you need personalized assistance or don’t find your
          question here, please visit our community forums. You can also review
          our Terms of Service and Support Policy for more information.
        </p>

        {/* FAQ Columns */}
        <div className="w-full flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column */}
          <div className="flex-1 min-w-0 w-full h-full p-2 sm:p-4 flex flex-col gap-6">
            <div className="px-2 sm:px-4">
              <h1 className="text-2xl sm:text-3xl font-semibold mb-1 text-gray-800">
                GENERAL QUESTIONS
              </h1>
              <div className="bg-[#00733C] w-16 h-[2.5px]" />
            </div>
            <GeneralQuestions accordinData={GeneralQuestionsData1} />
          </div>

          {/* Right Column */}
          <div className="flex-1 min-w-0 w-full h-full p-2 sm:p-4 flex flex-col gap-6">
            <div className="px-2 sm:px-4">
              <h1 className="text-2xl sm:text-3xl font-semibold mb-1 text-gray-800">
                GENERAL QUESTIONS
              </h1>
              <div className="bg-[#00733C] w-16 h-[2.5px]" />
            </div>
            <GeneralQuestions accordinData={GeneralQuestionsData2} />
          </div>
        </div>

        {/* Helping Message */}
        <HelpingMessage />
      </section>
    </div>
  );
};

export default FAQPage;
