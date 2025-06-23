import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhyChooseUsDescriptionDetails from "../constants/WhyChooseUsDescriptionDetails";

const WhyChooseUsDescription = () => {
  const [openIndex, setOpenIndex] = useState(0); // Track open index

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid mt-10 gap-4">
      {WhyChooseUsDescriptionDetails.map((data, index) => (
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
                className="text-[14px] mt-2"
              >
                {data.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default WhyChooseUsDescription;
