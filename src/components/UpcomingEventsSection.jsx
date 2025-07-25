import { FaRegCalendarAlt } from "react-icons/fa";

export default function UpcomingEventsSection({ upcomingEvents }) {
  return (
    <div>
      <h2 className="text-xl pb-4 font-bold">Upcoming Events</h2>
      {upcomingEvents.map((event, index) => (
        <div className="flex gap-2 py-2" key={index}>
          <img
            src={event.image}
            alt={event.title}
            className="w-16 h-16 object-cover rounded mr-3"
          />
          <div className="flex flex-col gap-2">
            <p className="font-medium text-sm leading-tight">{event.title}</p>
            <div className="flex items-center text-gray-500 text-xs mt-2">
              <FaRegCalendarAlt className="mr-1" color="#FFB204" /> {event.date}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
