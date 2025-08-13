import React from "react";
import { FaGift, FaCalendarAlt, FaDollarSign } from "react-icons/fa";
import DonateDetails from "../../constants/DonationDetails";

const pastDonations = [
  {
    amount: "₹1500",
    date: "March 15, 2025",
    cause: "Clean Water Project",
  },
  {
    amount: "₹950",
    date: "Feb 20, 2025",
    cause: "Animal Shelter",
  },
  {
    amount: "₹2000",
    date: "Jan 10, 2025",
    cause: "Medical Fund for Children",
  },
];

const PastDonations = () => {
  const userSubscription = "GOLD";
  const userSubscriptionData = DonateDetails.find(
    (plan) => plan.heading === userSubscription
  );

  return (
    <div className="w-full shadow-md rounded bg-white p-6 md:p-8 grid gap-8">
      {/* Past Donations */}
      <div>
        <h2 className="font-semibold text-xl md:text-2xl mb-6">
          Past Donations
        </h2>
        {pastDonations.length > 0 ? (
          <div className="space-y-6">
            {pastDonations.map((donation, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-6"
              >
                <div className="flex items-center gap-4">
                  <FaGift
                    size={24}
                    className="text-green-500"
                  />
                  <div>
                    <p className="font-semibold">{donation.cause}</p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <FaCalendarAlt size={16} />
                      {donation.date}
                    </p>
                  </div>
                </div>
                <p className="font-semibold text-lg text-green-500 flex-shrink-0">
                  {donation.amount}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="italic text-gray-500">No past donations found.</p>
        )}
      </div>

      {/* Subscription Plan */}
      <div>
        <h2 className="font-semibold text-xl md:text-2xl mb-6">
          Your Subscription Plan
        </h2>
        {userSubscription ? (
          <div className="p-4 border border-gray-200 rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
              <h3 className="text-lg font-semibold">
                {userSubscriptionData.heading} Plan
              </h3>
              <p className="text-sm text-gray-500 mt-1 sm:mt-0">
                Price: ₹{userSubscriptionData.price} per month
              </p>
            </div>
            <div className="flex gap-2 flex-wrap mt-3 sm:mt-0">
              <p className="font-semibold">Eligible Products:</p>
              {userSubscriptionData.products
                .filter((product) => product.enabled)
                .map((product, index) => (
                  <span
                    key={index}
                    className="text-xs bg-blue-100 text-blue-600 rounded-full px-2 py-1 mb-2 sm:mb-0"
                  >
                    {product.name}
                  </span>
                ))}
            </div>
          </div>
        ) : (
          <p className="italic text-gray-500">
            You are not subscribed to any plan.
          </p>
        )}
      </div>
    </div>
  );
};

export default PastDonations;
