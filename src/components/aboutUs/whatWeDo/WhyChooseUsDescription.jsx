import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import WhyChooseUsDescriptionDetails from "../../../constants/aboutUS/whatWeDO/WhyChooseUsDescriptionDetails";

const collapseAnimation = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

const WhyChooseUsDescription = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid mt-10 gap-4">
      {WhyChooseUsDescriptionDetails.map((data, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="grid gap-2"
          >
            {/* Heading Row */}
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <h1 className="font-semibold text-[#00733C] text-[16px] md:text-[17px]">
                {data.heading}
              </h1>
              <span className="text-[#00733C]">
                {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
              </span>
            </div>

            <div className="w-full h-[1px] bg-[#ccc]" />

            {/* Animated Description */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div {...collapseAnimation}>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-2">
                    {data.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default WhyChooseUsDescription;
