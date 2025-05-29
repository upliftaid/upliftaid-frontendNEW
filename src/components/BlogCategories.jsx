import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function BlogCategories() {
  const categories = [
    "Awareness",
    "Blog",
    "Education",
    "Food",
    "Gallery",
    "Health",
    "Lifesaving",
    "Water",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.3, delay: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-4">Blog Categories</h2>
      <ul className="text-gray-700 text-base cursor-pointer space-y-2 py-4">
        {categories.map((category, index) => (
          <li key={index} className="flex items-center gap-2">
            <span>&#8250;</span> {category}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
