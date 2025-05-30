import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function TagsSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.3, delay: 0.5 }}
    >
      <h1 className="text-xl font-bold pb-4">Tags</h1>
      <div className="flex flex-wrap gap-1">
        <span className="tags">Charity</span>
        <span className="tags">Child</span>
        <span className="tags">Education</span>
        <span className="tags">Food</span>
        <span className="tags">Homeless</span>
        <span className="tags">Hungry</span>
        <span className="tags">Water</span>
      </div>
    </motion.div>
  );
}
