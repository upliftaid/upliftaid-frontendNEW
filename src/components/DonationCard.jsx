// src/components/DonationCard.jsx
import React from "react";

const DonationCard = ({ title, raised, goal, description, image }) => (
  <div className="flex flex-col md:flex-row mb-10">
    <img src={image} alt={title} className="w-full md:w-1/3 h-auto object-cover rounded-lg" />
    <div className="md:ml-6 mt-4 md:mt-0">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-700">
        <strong>Raised:</strong> ${raised} &nbsp;&nbsp;
        <strong className="text-sky-600">Goal:</strong> ${goal}
      </p>
      <p className="mt-2 text-gray-600">{description}</p>
      <button className="mt-4 bg-sky-500 text-white px-5 py-2 rounded hover:bg-sky-600">Donate Now</button>
    </div>
  </div>
);

export default DonationCard;
