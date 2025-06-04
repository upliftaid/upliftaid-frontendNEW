import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const GeneralQuestions = ({ accordinData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="border p-4">
      {accordinData.map((item, index) => (
        <div key={index} className="px-4 py-2">
          <div
            className="flex items-center justify-between cursor-pointer text-[#7C7C7C]"
            onClick={() => toggleAccordion(index)}
          >
            <h1 className="">{item.heading}</h1>
            <FaPlus />
          </div>

          {/* Render hr only if not the last item */}
          {index !== accordinData.length - 1 && <hr className="mt-1" />}

          {openIndex === index && (
            <>
              <div className="w-full h-[1px] bg-gray-100 mt-2 mb-2" />
              <p className="text-[14px] mt-1">{item.description}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default GeneralQuestions;
