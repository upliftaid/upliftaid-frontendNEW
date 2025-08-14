import { useMemo } from "react";
import events from "../../constants/Event/events";

export default function EventCategory({ selectedCategory, setSelectedCategory }) {
  const allCategories = useMemo(() => {
    const categories = [...new Set(events.map(event => event.category))].sort();
    return ["All Category", ...categories];
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold pb-4">Category</h1>
      <div className="flex flex-wrap gap-1">
        {allCategories.map((category, index) => (
          <span
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`${
              selectedCategory === category ? "bg-[#FFB204]" : "bg-[#00733C]"
            } text-white text-xs px-3 py-1 hover:bg-[#FFB204] duration-300 cursor-pointer rounded`}
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}
