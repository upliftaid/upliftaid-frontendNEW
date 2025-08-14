// import React from "react";
// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";
// import events from "../../constants/Event/events";


// export default function EventModel({selectedEvent }) {
//   console.log(selectedEvent)
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1.3, delay: 0.5 }}
//       className="flex-3/4 rounded-2xl flex flex-col overflow-hidden gap-5 shadow-2xl sm:px-10 px-2 py-2"
//     >
//       <motion.button
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1.3, delay: 0.5 }}
//         className="mb-8 px-6 w-52 py-2 bg-gradient-to-r from-[#FFB204] to-[#FFD580] text-white font-semibold rounded-full shadow hover:from-[#E69F00] hover:to-[#FFB204] transition-colors duration-200"
//         // onClick={() => setSelectedEvent(null)}
//       >
//         &larr; Back to Events
//       </motion.button>
//       <motion.h2
//         initial={{ opacity: 0, transform: "translateX(-100%)" }}
//         animate={{ opacity: 1, transform: "translateX(0%)" }}
//         transition={{ duration: 1.3, delay: 0.5 }}
//         className="text-4xl font-extrabold mb-6 text-[#00733C] drop-shadow"
//       >
//         {selectedEvent.title}
//       </motion.h2>
//       <motion.img
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1.3, delay: 0.5 }}
//         src={selectedEvent.image}
//         alt={selectedEvent.title}
//         className="w-full h-96 object-cover rounded-xl mb-8 border border-gray-200 shadow"
//       />
//       <div className="flex items-center text-base text-gray-600 gap-8 mb-6">
//         <motion.span
//           initial={{ opacity: 0, transform: "translateX(-100%)" }}
//           animate={{ opacity: 1, transform: "translateX(0%)" }}
//           transition={{ duration: 1.3, delay: 0.5 }}
//           className="flex items-center gap-2"
//         >
//           <span role="img" aria-label="calendar">
//             📅
//           </span>x
//           <span className="font-medium">{selectedEvent.date}</span>
//         </motion.span>
//         <motion.span
//           initial={{ opacity: 0, transform: "translateX(100%)" }}
//           animate={{ opacity: 1, transform: "translateX(0%)" }}
//           transition={{ duration: 1.3, delay: 0.5 }}
//           className="flex text-[14px] items-center gap-2"
//         >
//           <span role="img" aria-label="place">
//             📍
//           </span>
//           <span className="font-medium">PLACE:</span> {selectedEvent.place}
//         </motion.span>
//       </div>
//       <motion.h3
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.3, delay: 0.5 }}
//         className="text-2xl font-bold mb-3 text-[#FFB204] border-l-4 border-[#FFB204] pl-3"
//       >
//         Event Description
//       </motion.h3>
//       <p className="text-gray-700 mb-8 text-lg leading-relaxed">
//         {selectedEvent.description}
//       </p>
//       <motion.h3
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.3, delay: 0.5 }}
//         className="text-2xl font-bold mb-3 text-[#FFB204] border-l-4 border-[#FFB204] pl-3"
//       >
//         Event Content
//       </motion.h3>
//       <ul className="list-disc pl-8 text-gray-700 mb-10 space-y-2 text-base">
//         <li>
//           The auction will be started in the morning of Thursday, April 18, 2019
//           at Center Hotel.
//         </li>
//         <li>
//           There are over 100 featured pictures that will be auctioned in this
//           charity event.
//         </li>
//         <li>Expected the starting price of photograph is 20,000$.</li>
//         <li>The winner is the bidder offering the highest price.</li>
//         <li>
//           Of bidder leaves an item can contribute any fund by our charity box.
//         </li>
//         <li>
//           All money raised in this charity event will be donated to people that
//           our volunteer photographers visit.
//         </li>
//         <li>
//           Any philanthropist, nonprofit organization, NGO want to donate or ask
//           any question, let contact with our staff.
//         </li>
//       </ul>
//       <motion.h3
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1.3, delay: 0.5 }}
//         className="text-2xl font-bold mb-3 text-[#FFB204] border-l-4 border-[#FFB204] pl-3"
//       >
//         Register Now
//       </motion.h3>
//       <form className="grid gap-5 max-w-xl mt-4">
//         <input
//           type="text"
//           placeholder="Full Name"
//           className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB204] transition"
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB204] transition"
//         />
//         <input
//           type="text"
//           placeholder="Phone"
//           className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB204] transition"
//         />
//         <textarea
//           placeholder="Message"
//           className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB204] transition"
//           rows={3}
//         ></textarea>
//         <button
//           type="submit"
//           className="bg-gradient-to-r from-[#FFB204] to-[#FFD580] text-white font-semibold px-6 py-2 rounded-full shadow hover:from-[#E69F00] hover:to-[#FFB204] transition-colors duration-200"
//         >
//           Submit
//         </button>
//       </form>
//     </motion.div>
//   );
// }
