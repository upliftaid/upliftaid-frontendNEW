import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import popular from "../constants/popularPost";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function PopularPosts() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.3, delay: 0.5 }}
    >
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
    </motion.div>
  );
}
