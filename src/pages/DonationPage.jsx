import React, { useState, useEffect } from "react";
import DonateDetails from "../constants/DonationDetails";
import { useSelector, useDispatch } from "react-redux";
import { clearSelectedPlan } from "../redux/donationSlice";

const DonationPage = () => {
  const [selectedCause, setSelectedCause] = useState("");
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const [causeError, setCauseError] = useState(false);
  const [donationError, setDonationError] = useState(false);

  const causes = [
    "Education for Underprivileged",
    "Healthcare Support",
    "Women Empowerment",
    "Environmental Protection",
  ];

  const predefinedAmounts = [500, 1000, 2500, 5000];

  const selectedPlanFromRedux = useSelector(
    (state) => state.donation.selectedPlan
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedPlanFromRedux) {
      setSelectedPlan(selectedPlanFromRedux);
      setAmount("");
      setCustomAmount("");
    }

    return () => {
      dispatch(clearSelectedPlan());
    };
  }, [selectedPlanFromRedux, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isCauseSelected = selectedCause.trim() !== "";
    const isDonationChosen =
      customAmount.trim() !== "" || amount !== "" || selectedPlan !== null;

    // Set error flags
    setCauseError(!isCauseSelected);
    setDonationError(!isDonationChosen);

    if (!isCauseSelected || !isDonationChosen) {
      alert("Please fill in the required fields before donating.");
      return;
    }

    const donationData = {
      cause: selectedCause,
      amount:
        customAmount || amount || (selectedPlan ? selectedPlan.price : null),
      plan: selectedPlan?.heading || null,
    };

    console.log("Submitting donation:", donationData);
    // Payment gateway integration here
  };

  return (
    <div className="py-15">
      <div className="min-h-screen bg-gray-50 p-4 md:p-10">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#00733C]">
            Support a Cause
          </h2>

          {/* Cause Selection */}
          <div className="mb-6">
            <label className="block mb-2 text-gray-700 font-medium">
              Select a Cause
            </label>
            <select
              className={`w-full border p-3 rounded-md ${
                causeError ? "border-red-500" : "border-gray-300"
              }`}
              value={selectedCause}
              onChange={(e) => {
                setSelectedCause(e.target.value);
                setCauseError(false); // Clear error on change
              }}
            >
              <option value="">-- Choose a cause --</option>
              {causes.map((cause, index) => (
                <option
                  key={index}
                  value={cause}
                >
                  {cause}
                </option>
              ))}
            </select>
          </div>

          {/* One-Time Donation */}
          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-2">
              Choose a One-Time Donation
            </label>
            <div
              className={`flex flex-wrap gap-3 ${
                donationError ? "border border-red-500 p-2 rounded-md" : ""
              }`}
            >
              {predefinedAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => {
                    setAmount(amt);
                    setCustomAmount("");
                    setSelectedPlan(null);
                    setDonationError(false);
                  }}
                  className={`px-4 py-2 rounded-md border transition ${
                    amount === amt
                      ? "bg-[#00733C] text-white"
                      : "bg-white text-[#00733C] border-[#00733C]"
                  }`}
                >
                  ₹{amt}
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="mt-4">
              <input
                type="number"
                placeholder="Or enter custom amount"
                className={`w-full border p-3 rounded-md mt-4 ${
                  donationError && !customAmount
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setAmount("");
                  setSelectedPlan(null);
                  setDonationError(false);
                }}
              />
            </div>
          </div>

          {/* Subscription Plans */}
          <div className="mb-8 ml-4">
            {" "}
            {/* Added ml-4 for left margin */}
            <h3 className="text-xl font-semibold text-[#00733C] mb-4">
              Or Choose a Subscription Plan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {DonateDetails.map((plan, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setSelectedPlan(plan);
                    setAmount("");
                    setCustomAmount("");
                  }}
                  className={`border rounded-lg p-5 shadow-md cursor-pointer transition-all hover:shadow-xl ${
                    selectedPlan?.heading === plan.heading
                      ? "border-[#00733C] ring-2 ring-yellow-400"
                      : "border-gray-200"
                  }`}
                >
                  <div className="text-center font-bold text-lg text-[#00733C] mb-2">
                    {plan.heading}
                  </div>
                  <div className="text-center text-2xl font-semibold text-yellow-500 mb-4">
                    ₹{plan.price}/mo
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1 text-center">
                    {plan.products.map((product, pIdx) => (
                      <li
                        key={pIdx}
                        className={
                          product.enabled ? "" : "line-through text-gray-400"
                        }
                      >
                        {product.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-[#00733C] text-white px-6 py-3 rounded-md hover:bg-green-700 transition text-lg font-semibold"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
