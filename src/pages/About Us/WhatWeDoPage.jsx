import Header from "../../components/aboutUs/whatWeDo/Header";
import Features from "../../components/aboutUs/whatWeDo/Features";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProgressBars from "../../components/aboutUs/whatWeDo/ProgressBars";
import WhyChooseUsDescription from "../../components/aboutUs/whatWeDo/WhyChooseUsDescription";
import Testimonals from "../../components/aboutUs/whatWeDo/Testimonals";
import Volunteers from "../../components/aboutUs/whatWeDo/Volunteers";
import HelpingMessage from "../../components/aboutUs/whatWeDo/HelpingMessage";

const WhatWeDoPage = () => {
  return (
    <div className="overflow-x-hidden min-w-[320px]">
      <section className="grid gap-x-12">
        <Header />
        <Features />

        {/* Why Choose Us and Fundraisers */}
        <div className="flex flex-col md:flex-row lg:w-full px-4 sm:px-6 sm:py-8 md:px-12 md:py-10 lg:px-20 lg:py-16">
          {/* Left side */}
          <div className="md:w-1/2 px-8">
            <div className="grid gap-3">
              <h1 className="text-[24px] sm:text-[28px] font-semibold">
                Why Choose Us
              </h1>
              <div className="bg-[#00733C] w-16 h-[2.5px]" />
            </div>
            <WhyChooseUsDescription />
          </div>

          {/* Right side */}
          <div className="md:w-1/2 px-8">
            <div className="grid gap-3">
              <h1 className="text-[24px] sm:text-[28px] font-semibold">
                Our Fundraisers
              </h1>
              <div className="bg-[#00733C] w-16 h-[2.5px]" />
            </div>
            <div className="mt-4">
              <ProgressBars />
            </div>
          </div>
        </div>

        <HelpingMessage />
        <Volunteers />
        <Testimonals />
      </section>
    </div>
  );
};

export default WhatWeDoPage;
