import { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { AiOutlinePauseCircle } from "react-icons/ai";
import PlayVideo from "./PlayVideo";
import { motion, AnimatePresence } from "framer-motion";
import InfoDetails from "../../constants/Home2/InfoDetails";
import { NavLink } from "react-router-dom";

const AdditionalInfo = () => {
  const [play, setPlay] = useState(false);
  const [openIndex, setOpenIndex] = useState(0); // Track open index

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="relative lg:w-full mt-10 min-w-[320px]">
        {/* Fixed background image */}
        <div
          className="absolute inset-0 h-full min-w-[320px]  md:w-full bg-[url('https://zozothemes.com/html/the-charity/img/sections/bg/water-full-bg.jpg')] md:bg-fixed bg-cover bg-center -z-10"
          aria-hidden="true"
        >
          <div className="bg-black/80 h-full w-full"></div>
        </div>

        {/* Content wrapper with overlay */}
        <div className="relative">
          <div className="flex w-full flex-col md:flex-row">
            {/* left side */}
            <div className="md:w-[50%] flex items-center justify-center md:h-[645px] lg:h-[500px] bg-[#e1e1e1]/20 h-[300px]">
              <div
                className="flex flex-col justify-center items-center md:mt-50 mt-25 text-[#00733C]"
                onClick={() => setPlay(true)}
              >
                {play ? (
                  <>
                    <AiOutlinePauseCircle
                      size={80}
                      className="cursor-pointer"
                    />{" "}
                    <p>Pause Video</p>
                  </>
                ) : (
                  <>
                    <FaCirclePlay size={80} className="cursor-pointer" />{" "}
                    <p className="text-white">Play Video</p>
                  </>
                )}
              </div>
            </div>

            {/* right side */}
            <div className="md:w-[50%] lg:h-[500px] overflow-hidden bg-[#f7f7f7] p-6 px-10 py-10">
              <div className="grid gap-1 !my-10">
                <h1 className="text-[40px] font-[400]">ADDITIONAL INFO</h1>
                <div className="bg-[#00733C] w-16 h-[2.5px]"></div>
              </div>

              <div className="mt-10 grid gap-4">
                {InfoDetails.map((data, index) => (
                  <div key={index} className="grid gap-2">
                    <h1
                      className="font-semibold cursor-pointer"
                      onClick={() => toggleIndex(index)}
                    >
                      {data.heading}
                    </h1>
                    <div className="w-full h-[0.5px] bg-[#ccc]" />

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.p
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="text-[14px] mt-2 text-gray-500 duration-300"
                        >
                          {data.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-6">
                <div className="group hover:bg-[#E69F00] cursor-pointer !mt-10   px-5 !py-5 w-full h-10 bg-[#FFB204] flex items-center justify-center rounded-lg">
                  <NavLink
                    to="/about-us/faq"
                    className="text-black group-hover:text-white font-semibold"
                  >
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {play && <PlayVideo close={() => setPlay(false)} />}
    </>
  );
};

export default AdditionalInfo;
