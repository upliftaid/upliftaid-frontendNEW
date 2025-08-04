import { FaRegCalendarAlt } from "react-icons/fa";
import events from "../../constants/Event/events";

export default function UpcomingEventsSection() {
    const upcomingEvents = events.filter((event) => event.status === "Upcoming");
  return (
    <div>
      <h2 className=" pb-4 text-xl font-semibold ">Upcoming Events</h2>
      {upcomingEvents.map((event, index) => (
        <div className="flex gap-2 py-2" key={index}>
          <img
            src={event.image}
            alt={event.title}
            className="w-20 h-20 object-cover rounded mr-3"
          />
          <div className="flex flex-col gap-2">
            <p className="font-medium text-sm leading-tight my-5 text-gray-500">{event.title}</p>
            <div className="flex items-center  text-xs ">
              <FaRegCalendarAlt className="!mr-2 " color="#FFB204" /> 
              <p className="text-gray-400"> {event.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
