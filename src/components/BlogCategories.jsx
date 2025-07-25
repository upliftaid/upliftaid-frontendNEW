import { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

export default function BlogCategories() {
  const categories = [
    "Awareness",
    "Blog",
    "Education",
    "Food",
    "Gallery",
    "Health",
    "Lifesaving",
    "Water",
  ];

  const categoryDropdowns = {
    Awareness: ["Awareness 1", "Awareness 2", "Awareness 3"],
    Blog: ["Blog Post A", "Blog Post B"],
    Education: ["Course X", "Course Y"],
    Food: ["Recipe 1", "Recipe 2"],
    Gallery: ["Image A", "Image B"],
    Health: ["Health Tip 1", "Health Tip 2"],
    Lifesaving: ["Technique A", "Technique B"],
    Water: ["Info Drop 1", "Info Drop 2"],
  };

  const [openCategory, setOpenCategory] = useState(null);

  const toggleDropdown = (index) => {
    setOpenCategory((prev) => (prev === index ? null : index));
  };

  return (
    <div className="grid gap-2">
      <h3 className="font-bold text-[18px]">Blog Categories</h3>
      <ul className="flex flex-col gap-2"> {/* Space between each category block */}
        {categories.map((cat, i) => (
          <li key={i}>
            <div className="flex flex-col gap-2"> {/* Space between button and dropdown */}
              <button
                onClick={() => toggleDropdown(i)}
                className="flex items-center justify-between w-full text-left text-[#7f7f7f] text-[14px] cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  {openCategory === i ? <FaAngleDown /> : <FaAngleRight />}
                  {cat}
                </span>
              </button>

              {openCategory === i && (
                <ul className="ml-6 text-sm text-gray-500 flex flex-col gap-2">
                  {categoryDropdowns[cat].map((item, j) => (
                    <li key={j} className="pl-4">- {item}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
