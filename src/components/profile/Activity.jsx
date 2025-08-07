import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaClock, FaCalendar } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { PiUsersThree } from "react-icons/pi";

// Static activity list
const ActivityDetails = [
  {
    type: "donation",
    iconColor: "green-500",
    icon: FaHandHoldingHeart,
    heading: "Donated ₹1500 to Clean Water Project",
    date: "March 15, 2025",
    amount: "₹1500",
  },
  {
    type: "volunteer",
    iconColor: "blue-500",
    icon: PiUsersThree,
    heading: "Volunteered at Food Distribution Event",
    date: "March 10, 2025",
    amount: "6 hrs",
  },
  {
    type: "donation",
    iconColor: "green-500",
    icon: FaHandHoldingHeart,
    heading: "Donated ₹950 to Animal Shelter",
    date: "Feb 20, 2025",
    amount: "₹950",
  },
];

const filters = ["all", "donation", "volunteer"];

const Activity = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredActivities =
    selectedFilter === "all"
      ? ActivityDetails
      : ActivityDetails.filter((a) => a.type === selectedFilter);

  return (
    <div className="w-full shadow-md rounded bg-white p-4 grid gap-6">
      {/* Contribution Summary */}
      <div className="grid gap-4">
        <h1 className="font-semibold text-xl md:text-2xl">
          Your Contributions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Card 1 */}
          <div className="flex bg-blue-500 px-4 py-3 items-center text-white justify-between rounded hover:scale-[1.02] transition">
            <div>
              <p className="text-gray-200 lg:text-lg">Total Donations</p>
              <p className="font-bold md:text-xl text-sm">₹2450</p>
            </div>
            <div className="transform hover:scale-125 transition">
              <CiHeart size={25} />
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex bg-green-500 px-4 py-3 items-center text-white justify-between rounded hover:scale-[1.02] transition">
            <div>
              <p className="text-gray-200 lg:text-lg">Volunteer Hours</p>
              <p className="font-bold md:text-xl text-sm">124</p>
            </div>
            <div className="transform hover:scale-125 transition">
              <FaClock size={25} />
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex bg-red-600 px-4 py-3 items-center text-white justify-between rounded hover:scale-[1.02] transition">
            <div>
              <p className="text-gray-200 md:text-lg">Events Attended</p>
              <p className="font-bold md:text-xl text-sm">8</p>
            </div>
            <div className="transform hover:scale-125 transition">
              <FaCalendar size={25} />
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex bg-yellow-500 px-4 py-3 items-center text-white justify-between rounded hover:scale-[1.02] transition">
            <div>
              <p className="text-gray-200 md:text-lg">Repeated Donation</p>
              <p className="font-bold md:text-xl text-sm">₹2450</p>
            </div>
            <div className="transform hover:scale-125 transition">
              <CiHeart size={30} />
            </div>
          </div>
        </div>
      </div>

      <hr className="text-gray-200 rounded" />

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedFilter === filter
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="grid gap-4">
        <h1 className="font-semibold text-xl md:text-2xl">Recent Activity</h1>
        <div className="grid gap-4">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div
                  className="p-4 border border-gray-200 rounded-md flex gap-5 items-center justify-between hover:shadow-sm transition"
                  key={activity.heading + index}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-${activity.iconColor} text-white flex items-center justify-center transform hover:scale-110 transition`}
                    >
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">{activity.heading}</p>
                      <p className="text-sm text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                  <p
                    className={`font-semibold text-lg text-${activity.iconColor}`}
                  >
                    {activity.amount}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 italic mt-4">No activities found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Activity;
