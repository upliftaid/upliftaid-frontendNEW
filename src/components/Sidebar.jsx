// src/components/Sidebar.jsx
import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const categories = useSelector(state => state.donation.categories);

  return (
    <div className="md:w-1/3 md:pl-10">
      <h3 className="text-xl font-bold mb-4">Category</h3>
      <ul className="space-y-2">
        {categories.map(cat => (
          <li key={cat} className="text-gray-700 hover:text-blue-500 cursor-pointer">
            &rsaquo; {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
