// merged my lokesh

import SectionCarousel from "../components/Home2/SectionCarousel";
import { NavLink } from "react-router-dom";
import PriceCard from "../components/Home2/PriceCard";
import News from "../components/Home2/News";
import Gallery from "../components/Home2/Gallery";
import StatsCard from "../components/Home2/StatsCard";
import HeaderCarousel from "../components/Home2/HeaderCarousel";
import AdditionalInfo from "../components/Home2/AdditionalInfo";
import AboutUsCards from "../components/Home2/AboutUsCards";
import EventsSlider from "../components/Home2/EventsSlider";
import CausesSlider from "../components/Home2/CausesSlider";

const HomePage = () => {
  return (
    <div className="">

      {/* carousel */}

      <HeaderCarousel />

      <section className="grid">
        {/* About Us */}

        <div className="flex flex-col lg:flex-row md:justify-center lg:w-full gap-10 px-4 lg:gap-20 lg:items-center mt-10 min-w-[320px] ">
          <div className="grid gap-1 px-4">
            <h1 className="text-[42px]">About Us</h1>
            <div className="bg-[#00733C] w-16 h-[2.5px]"></div>
          </div>
          <div className="bg-[#00733C] w-1 h-20 hidden lg:block"></div>
          <div className="lg:w-[820px] lg:h-[124px] min-w-[250px] flex px-4 justify-center items-center gap-4">
            <div className="bg-[#00733C] w-2 h-70 md:h-30 lg:hidden block"></div>
            <p className="text-justify">
              Upliftaid is a nonprofit dedicated to protecting lives, empowering
              communities, and creating equal opportunities through action in
              child welfare, education, healthcare, environment, human rights,
              and more. We work to build a just, inclusive, and compassionate
              world for all.
            </p>
          </div>
        </div>

        <AboutUsCards />

        {/* who we are */}

        <div className="flex flex-col lg:flex-row lg:w-full mt-10 min-w-[320px]">
          {/* left side */}
          <div className="lg:w-[50%] bg-[#e1e1e1]/40">
            <SectionCarousel />
          </div>

          {/* right side */}
          <div className="lg:w-[50%]">
            <img
              src="https://zozothemes.com/html/the-charity/img/sections/bg/full-img17.jpg"
              alt=""
              className="w-full h-full md:object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:w-full mt-10 min-w-[320px] bg-[#f5f5f5]">
          {/* left side */}
          <div className="lg:w-[50%] h-[500px] bg-white">
            <EventsSlider />
          </div>

          {/* vertical divider on large screens */}
          <div className="hidden lg:block w-[1px] bg-gray-300" />

          {/* right side */}
          <div className="lg:w-[50%] h-[500px] bg-[#f0f0f0]">
            <CausesSlider />
          </div>
        </div>

        {/* <CausesEventsSlider /> */}

        {/* Donate through mobile */}

        <div className=""></div>

        <StatsCard />

        <PriceCard />

        <Gallery />

        <div className="bg-[#00733C] lg:w-full lg:h-30 h-66 flex lg:flex-row flex-col items-center justify-evenly md:p-4 gap-4 min-w-[320px]">
          <h1 className="text-[32px] text-white hidden lg:block">
            WE NEED YOUR HELP
          </h1>
          <div className="grid place-items-center lg:hidden">
            <h1 className="text-[32px] text-white">WE NEED YOUR</h1>
            <h1 className="text-[32px] text-white">HELP</h1>
          </div>
          <div className="bg-[#FFB204] hover:bg-[#E69F00] text-black rounded hover:text-white w-[192px] h-14 flex items-center justify-center text-[18px]">
            <NavLink to="/">Donate Now!!</NavLink>
          </div>
        </div>

        <News />

        <AdditionalInfo />
      </section>
    </div>
  );
};

export default HomePage;
