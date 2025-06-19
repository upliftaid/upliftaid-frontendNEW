import Navbar from "../layout/Navbar";
import SectionCarousel from "../components/SectionCarousel";
import { NavLink } from "react-router-dom";
import { FiRefreshCcw } from "react-icons/fi";
import { TbSettingsCog } from "react-icons/tb";
import { CgDropInvert } from "react-icons/cg";
import PriceCard from "../components/PriceCard";
import News from "../components/News";
import Footer from "../layout/Footer";
import Gallery from "../components/Gallery";
import StatsCard from "../components/StatsCard";
import MobileNavbar from "../layout/MobileNavBar";  
import HeaderCarousel from "../components/HeaderCarousel";
import AdditionalInfo from "../components/AdditionalInfo";

const HomePage = () => {

  return (
    <div className="">
      <Navbar />
      <MobileNavbar />

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
          <div className="lg:w-[820px] lg:h-[124px] w-full flex px-4 justify-center items-center gap-4">
            <div className="bg-[#00733C] w-2 h-70 md:h-30 lg:hidden block"></div>
            <p className="lg:mt-7 text-justify">
Upliftaid is a nonprofit dedicated to protecting lives, empowering communities, and creating equal opportunities through action in child welfare, education, healthcare, environment, human rights, and more. We work to build a just, inclusive, and compassionate world for all.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start md:gap-6 gap-10 px-4 md:px-8 mt-10 w-full">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 w-full md:w-1/3 max-w-[380px]">
            <div className="h-[195px] md:h-[160px] lg:h-[215px]">
              <img
                src="https://zozothemes.com/html/the-charity/img/sections/charity-1.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid gap-3 px-2">
              <h1 className="text-[24px]">Child Welfare and Protection</h1>
              <p className="text-justify text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas dapibus facilisis cvallis.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 w-full md:w-1/3 max-w-[380px]">
            <div className="h-[195px] md:h-[160px] lg:h-[215px]">
              <img
                src="https://zozothemes.com/html/the-charity/img/sections/charity-2.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid gap-3 px-2">
              <h1 className="text-[24px]">Environmental Conservation and Climate Action</h1>
              <p className="text-justify text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas dapibus facilisis cvallis.
              </p>
            </div>
          </div>

                    <div className="flex flex-col gap-4 w-full md:w-1/3 max-w-[380px]">
            <div className="h-[195px] md:h-[160px] lg:h-[215px]">
              <img
                src="https://zozothemes.com/html/the-charity/img/sections/charity-2.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid gap-3 px-2">
              <h1 className="text-[24px]">Environmental Conservation and Climate Action</h1>
              <p className="text-justify text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas dapibus facilisis cvallis.
              </p>
            </div>
          </div>

                    <div className="flex flex-col gap-4 w-full md:w-1/3 max-w-[380px]">
            <div className="h-[195px] md:h-[160px] lg:h-[215px]">
              <img
                src="https://zozothemes.com/html/the-charity/img/sections/charity-2.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid gap-3 px-2">
              <h1 className="text-[24px]">Environmental Conservation and Climate Action</h1>
              <p className="text-justify text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas dapibus facilisis cvallis.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-4 w-full md:w-1/3 max-w-[380px]">
            <div className="h-[195px] md:h-[160px] lg:h-[215px]">
              <img
                src="https://zozothemes.com/html/the-charity/img/sections/charity-3.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid gap-3 px-2">
              <h1 className="text-[24px]">Fund Raising</h1>
              <p className="text-justify text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas dapibus facilisis cvallis.
              </p>
            </div>
          </div>
        </div>

        {/* who we are */}

        <div className="flex flex-col lg:flex-row lg:w-full mt-10 min-w-[320px]">
          {/* left side */}
          <div className="lg:w-[50%] h-[500px] bg-[#e1e1e1]/40">
            <SectionCarousel />
          </div>

          {/* right side */}
          <div className="lg:w-[50%] h-[500px]">
            <img
              src="https://zozothemes.com/html/the-charity/img/sections/bg/full-img17.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="lg:w-full bg-[#00733C] md:h-40 h-90 mt-2 flex lg:flex-row flex-col gap-4 items-center justify-evenly min-w-[320px]">
          <h1 className="text-[32px] text-white hidden md:block">
            Let’s Stop This Hunger and Fullfill Their Happiness!{" "}
          </h1>
          <div className="text-[32px] text-white flex flex-col items-center justify-center md:hidden">
            <h1>LET'S STOP THIS</h1>
            <h1>HUNGER AND</h1>
            <h1>FULLFILL THEIR</h1>
            <h1>HAPPINESS!</h1>
          </div>
          <div className="bg-[#FFB204] hover:bg-[#E69F00] text-black rounded hover:text-white w-[192px] h-14  flex items-center justify-center text-[18px]">
            <NavLink to="/" className="">
              Donate Now!!
            </NavLink>
          </div>
        </div>

        {/* Donate through mobile */}

        <div className="lg:w-full flex flex-col lg:flex-row gap-20 mt-5 md:p-4 min-w-[320px]">
          {/* left */}
          <div className="md:w-[40%] lg:ml-40">
            <div className="w-[280px] h-[454px] mx-auto md:flex md:items-center md:justify-center">
              <img
                src="https://zozothemes.com/html/the-charity/img/sections/iphone-img.png"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>

          {/* right */}
          <div className="">
            <div className="w-full grid p-6 gap-8">
              <div className="grid">
                <h1 className="text-[32px]">DONATE THROUGH MOBILE APP</h1>
                <div className="bg-[#00733C] w-16 h-[2.5px]"></div>
              </div>
              <div className="lg:w-[840px] grid gap-4 text-[14px]">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum nec odio ipsum. Suspendisse cursus malesuada
                  facilisis. Nunc consectetur odio sed dolor tincidunt
                  porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Vestibulum nec odio ipsum. Suspendisse cursus malesuada
                  facilisis. Nunc consectetur odio sed dolor tincidunt porttitor
                  consectetur adipiscing elit. Vestibulum nec odio ipsum.
                  Suspendisse cursus malesuada facilisis. porttitor
                  consecteturadipiscing elit. Vestibulum nec odio ipsum.
                  Suspendisse cursus malesuada facilisis.
                </p>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum nec odio ipsum. Suspendisse cursus malesuada
                  facilisis. Nunc consectetur odio sed dolor tincidunt
                  porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mt-4">
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <FiRefreshCcw color="#00733C" size={20} />
                    <p>Select</p>
                  </div>
                  <p className="text-[14px]">
                    Lorem ipsum dolor sit, amet consectetur adipisic
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <TbSettingsCog color="#00733C" size={20} />
                    <p>Donate</p>
                  </div>
                  <p className="text-[14px]">
                    Lorem ipsum dolor sit, amet consectetur adipisic
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <CgDropInvert color="#00733C" size={20} />
                    <p>Thanks</p>
                  </div>
                  <p className="text-[14px]">
                    Lorem ipsum dolor sit, amet consectetur adipisic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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

        <AdditionalInfo/>
        
      </section>

      <Footer />

    

    </div>
  );
};

export default HomePage;
