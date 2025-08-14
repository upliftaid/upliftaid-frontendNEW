// import React, { useState, useRef, useEffect } from "react";
// import { IoIosSearch } from "react-icons/io";

// const ProductFilter = ({ onFilterChange, onSearch }) => {
//   const [filters, setFilters] = useState({});
//   const [searchQuery, setSearchQuery] = useState("");
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const containerRef = useRef(null);

//   const options = {
//     type: ["Clothing", "Accessories", "Decor", "Bags"],
//     madeBy: ["Women Group", "Local Shop", "Tribal Artisan"],
//     price: ["300", "1000", "2000"],
//   };

//   const formatLabel = (key) =>
//     key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (containerRef.current && !containerRef.current.contains(event.target)) {
//         setOpenDropdown(null);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const toggleDropdown = (key) => {
//     setOpenDropdown((prev) => (prev === key ? null : key));
//   };

//   const handleOptionToggle = (section, value) => {
//     setFilters((prev) => {
//       const sectionValues = prev[section] || [];
//       const updated = sectionValues.includes(value)
//         ? sectionValues.filter((v) => v !== value)
//         : [...sectionValues, value];

//       const newFilters = { ...prev, [section]: updated };
//       onFilterChange?.(newFilters);
//       return newFilters;
//     });
//   };

//   const removeChip = (section, value) => {
//     setFilters((prev) => {
//       const updated = (prev[section] || []).filter((v) => v !== value);
//       const newFilters = { ...prev, [section]: updated };
//       onFilterChange?.(newFilters);
//       return newFilters;
//     });
//   };

//   const getDisplayText = (key) => {
//     const selected = filters[key] || [];
//     return selected.length === 0 ? `Select ${formatLabel(key)}` : selected.join(", ");
//   };

//   const handleSearch = () => {
//     onSearch?.(searchQuery);
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-4 bg-white p-4 rounded-md shadow-md max-w-full relative"
//     >
//       {/* Filter Dropdowns */}
//       <div className="flex flex-wrap gap-6">
//         {Object.entries(options).map(([key, values]) => (
//           <div key={key} className="relative w-48">
//             <button
//               onClick={() => toggleDropdown(key)}
//               className="w-full border border-gray-300 rounded-md px-3 py-2 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               type="button"
//             >
//               <span className="truncate">{getDisplayText(key)}</span>
//               <svg
//                 className={`w-5 h-5 ml-2 transition-transform ${
//                   openDropdown === key ? "rotate-180" : ""
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>

//             {openDropdown === key && (
//               <ul className="absolute z-50 mt-1 max-h-48 w-full overflow-auto rounded-md border border-gray-300 bg-white shadow-lg">
//                 {values.map((option) => (
//                   <li
//                     key={option}
//                     className="flex items-center px-3 py-2 cursor-pointer hover:bg-yellow-100"
//                     onClick={() => handleOptionToggle(key, option)}
//                   >
//                     <input
//                       type="checkbox"
//                       checked={(filters[key] || []).includes(option)}
//                       readOnly
//                       className="mr-2 cursor-pointer"
//                     />
//                     <span>{option}</span>
//                   </li>
//                 ))}
//               </ul>
//             )}

//             <div className="flex flex-wrap gap-2 mt-2 min-h-[2.5rem]">
//               {(filters[key] || []).map((selectedOption) => (
//                 <div
//                   key={selectedOption}
//                   className="flex items-center bg-yellow-400 text-black px-3 py-1 rounded-full text-sm"
//                 >
//                   <span>{selectedOption}</span>
//                   <button
//                     onClick={() => removeChip(key, selectedOption)}
//                     className="ml-2 focus:outline-none hover:text-red-700 font-bold"
//                     aria-label={`Remove ${selectedOption}`}
//                     type="button"
//                   >
//                     &times;
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Search Bar */}
//       <div className="flex gap-4 items-center mt-4 lg:mt-0 lg:w-[300px] w-full">
//         <div className="flex border rounded w-full h-10 items-center px-3">
//           <IoIosSearch size={20} className="text-gray-500" />
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search Product"
//             className="w-full h-full outline-none px-2"
//           />
//         </div>
//         <button
//           onClick={handleSearch}
//           className="h-10 px-4 border rounded-md cursor-pointer hover:bg-[#00733C] hover:text-white transition"
//         >
//           Search
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductFilter;
