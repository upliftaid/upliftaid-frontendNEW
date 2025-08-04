import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const GeneralQuestions = ({ accordinData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md overflow-hidden">
      {accordinData.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-b last:border-b-0"
          >
            {/* Accordion Header */}
            <div
              className="flex justify-between items-center cursor-pointer py-4 px-2 sm:px-4 text-[#333] hover:bg-gray-50 transition-colors"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-sm sm:text-base font-medium w-11/12 truncate">
                {item.heading}
              </h2>
              <div className="text-[#00733C] flex-shrink-0">
                {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
              </div>
            </div>

            {/* Accordion Body */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-2 sm:px-4 pb-4 text-gray-600 text-sm leading-relaxed">
                {item.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GeneralQuestions;
