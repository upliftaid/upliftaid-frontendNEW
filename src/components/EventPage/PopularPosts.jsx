import { FaRegCalendarAlt } from "react-icons/fa";
import popular from "../../constants/Event/popularPost";

export default function PopularPosts() {
  return (
    <div>
      <h2 className="text-xl font-bold pb-4">Popular Posts</h2>
      <div className="flex flex-col gap-4">
        {popular.map((popular, index) => (
          <div className="flex gap-2" key={index}>
            <img
              src={popular.image}
              alt="Popular Post"
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex flex-col gap-2">
              <p className="text-sm leading-tight">{popular.description}</p>
              <div className="flex items-center gap-2 text-gray-500 text-xs mt-2">
                <FaRegCalendarAlt className="mr-1" color="#FFB204" />
                {popular.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
