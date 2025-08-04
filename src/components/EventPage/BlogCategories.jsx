import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

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
      <h3 className="font-semibold  text-xl">Blog Categories</h3>
      <ul className="flex flex-col gap-2"> {/* Space between each category block */}
        {categories.map((cat, i) => (
          <li key={i}>
            <div className="flex flex-col gap-2"> {/* Space between button and dropdown */}
              <button
                onClick={()  => toggleDropdown(i)}
                className={`${openCategory === i ? " text-black" : "text-[#7f7f7f]"} flex items-center justify-between !my-2 hover:text-black duration-300 w-full text-left  text-[14px] cursor-pointer`}
              >
                <span className="flex items-center gap-2 ">
                  <FaAngleRight className={`${openCategory === i ? "rotate-90" : ""} duration-300`}/>
                  {cat}
                </span>
              </button>

              {/* {openCategory === i && (
                <ul className="ml-6 text-sm text-gray-500 flex flex-col gap-2">
                  {categoryDropdowns[cat].map((item, j) => (
                    <li key={j} className="pl-4">- {item}</li>
                  ))}
                </ul>
              )} */}
              <ul
                className={`
                  overflow-hidden 
                  transition-all duration-500 ease-in-out 
                  ml-6 text-sm text-gray-500 flex flex-col gap-2
                  ${openCategory === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}
              >
                {categoryDropdowns[cat].map((item, j) => (
                  <li key={j} className="pl-4">- {item}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
