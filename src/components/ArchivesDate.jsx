import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ArchivesDate() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.3, delay: 0.5 }}
    >
      <h2 className="text-xl font-bold pb-4">Archives</h2>
      <ul className="flex flex-col gap-4 text-sm text-gray-500">
        <li>August 2014</li>
        <li>September 2014</li>
        <li>October 2014</li>
        <li>November 2014</li>
        <li>December 2014</li>
      </ul>
    </motion.div>
  );
}
