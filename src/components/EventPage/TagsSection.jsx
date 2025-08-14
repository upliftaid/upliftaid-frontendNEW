import { useMemo } from "react";
import events from "../../constants/Event/events";

export default function TagsSection({ selectedTags, setSelectedTags }) {
  const allTags = useMemo(() => {
    const tags = events.flatMap(event => event.tags);
    return [...new Set(tags)].sort();
  }, []);

  const handleTagClick = (clickedTag) => {
    if (selectedTags.includes(clickedTag)) {
      setSelectedTags(selectedTags.filter(tag => tag !== clickedTag));
    } else {
      setSelectedTags([...selectedTags, clickedTag]);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold pb-4">Tags</h1>
      <div className="flex flex-wrap gap-1">
        {allTags.map((tag, index) => (
          <span
            key={index}
            onClick={() => handleTagClick(tag)}
            className={`${
              selectedTags.includes(tag) ? "bg-[#FFB204]" : "bg-[#00733C]"
            } text-white text-xs px-3 py-1 hover:bg-[#FFB204] duration-300 cursor-pointer rounded`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
