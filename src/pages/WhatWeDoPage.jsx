import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import MobileNavbar from "../layout/MobileNavBar";
import Header from "../components/aboutUs/whatWeDo/Header";
import Features from "../components/aboutUs/whatWeDo/Features";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProgressBars from "../components/aboutUs/whatWeDo/ProgressBars";
import WhyChooseUsDescription from "../components/aboutUs/whatWeDo/WhyChooseUsDescription";
import Testimonals from "../components/aboutUs/whatWeDo/Testimonals";
import Volunteers from "../components/aboutUs/whatWeDo/Volunteers";
import HelpingMessage from "../components/aboutUs/whatWeDo/HelpingMessage";

const WhatWeDoPage = () => {
  return (
    <div>
      <Navbar />
      <MobileNavbar />

      <section className="grid">
        {/* Header */}
        <Header />

        {/* Features */}

        <Features />

        {/* why choose us */}

        <div className="flex flex-col md:flex-row lg:w-full lg:mt-10 min-w-[320px]">
          {/* left side */}
          <div className="md:w-[50%] md:h-[500px] p-4 md:p-12 lg:px-25">
            <div className="grid gap-1 mt-4">
              <h1 className="text-[28px]">Why Choose Us</h1>
              <div className="bg-[#00733C] w-16 h-[2.5px]" />
            </div>
            <WhyChooseUsDescription />
          </div>

          {/* right side */}
          <div className="md:w-[50%] md:h-[500px] md:py-5">
            <div className="p-6 md:px-16">
              {/* Header */}
              <div className="grid gap-1 mt-4">
                <h1 className="text-[28px]">Our Fundraisers</h1>
                <div className="bg-[#00733C] w-16 h-[2.5px]" />
              </div>

              <div>
                <ProgressBars />
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <HelpingMessage />
        {/* volunteers */}

        <Volunteers />

        {/* Testimonals */}

        <Testimonals />
      </section>

      <Footer />
    </div>
  );
};

export default WhatWeDoPage;
