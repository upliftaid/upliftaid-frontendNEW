// import React, { useState, useRef } from "react";
// import ProductCardDetails from "../../constants/product/ProductCardDetails";
// import { useNavigate } from "react-router-dom";
// import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

// const ProductCard = () => {
//   const [counts, setCounts] = useState({});
//   const navigate = useNavigate();
//   const scrollRefs = useRef([]);

//   const handleAdd = (index) => {
//     setCounts((prev) => ({ ...prev, [index]: 1 }));
//   };

//   const increment = (index) => {
//     setCounts((prev) => ({ ...prev, [index]: (prev[index] || 0) + 1 }));
//   };

//   const decrement = (index) => {
//     setCounts((prev) => {
//       const newCount = (prev[index] || 0) - 1;
//       if (newCount <= 0) {
//         const { [index]: _, ...rest } = prev;
//         return rest;
//       }
//       return { ...prev, [index]: newCount };
//     });
//   };

//   const redirectToProductDetailPage = () => {
//     navigate("/product-detail");
//   };

//   const scroll = (index, direction) => {
//     const container = scrollRefs.current[index];
//     if (container) {
//       const scrollAmount = 300;
//       container.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="p-6 overflow-x-hidden">
//       {ProductCardDetails.map((section, secIndex) => (
//         <div key={secIndex} className="mb-10">
//           <h2 className="text-2xl font-bold mb-4">{section.category}</h2>

//           <div className="relative w-full">
//             <div
//               ref={(el) => (scrollRefs.current[secIndex] = el)}
//               className="flex gap-6 pb-2 overflow-x-auto scroll-smooth hide-scrollbar"
//               style={{
//                 marginLeft: "-40px",
//                 marginRight: "-40px",
//                 paddingLeft: "40px",
//                 paddingRight: "40px",
//               }}
//             >
//               {section.products.map((product, index) => {
//                 const countKey = `${secIndex}-${index}`;
//                 const count = counts[countKey] || 0;

//                 return (
//                   <div
//                     key={index}
//                     className="min-w-[240px] h-80 bg-white rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
//                   >
//                     <div
//                       className="w-full h-48"
//                       onClick={redirectToProductDetailPage}
//                     >
//                       <img
//                         src={product.image}
//                         alt={product.title}
//                         className="w-full h-full object-scale-down"
//                       />
//                     </div>
//                     <div className="p-4 grid gap-1">
//                       <h1 className="font-semibold">{product.title}</h1>
//                       <p className="text-gray-500">Size: {product.size}</p>
//                       <div className="flex items-center justify-between mt-2">
//                         <p className="font-semibold">₹{product.price}</p>
//                         {count === 0 ? (
//                           <button
//                             onClick={() => handleAdd(countKey)}
//                             className="border px-3 py-1 cursor-pointer border-[#FFB204] hover:bg-[#FFB204] rounded hover:text-white"
//                           >
//                             Add
//                           </button>
//                         ) : (
//                           <div className="flex items-center gap-2">
//                             <button
//                               onClick={() => decrement(countKey)}
//                               className="w-8 h-8 flex items-center justify-center border border-[#FFB204] text-[#FFB204] rounded hover:bg-[#FFB204] hover:text-white"
//                             >
//                               −
//                             </button>
//                             <span className="font-medium">{count}</span>
//                             <button
//                               onClick={() => increment(countKey)}
//                               className="w-8 h-8 flex items-center justify-center border border-[#FFB204] text-[#FFB204] rounded hover:bg-[#FFB204] hover:text-white"
//                             >
//                               +
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             <button
//               className="absolute -left-5 w-12 h-12 top-35 transform -translate-y-1/2 z-10 bg-white rounded-full shadow p-3 hover:bg-[#FFB204] cursor-pointer md:block hidden"
//               onClick={() => scroll(secIndex, "left")}
//               aria-label="Scroll Left"
//             >
//               <MdOutlineKeyboardArrowLeft size={24} />
//             </button>

//             <button
//               className="absolute -right-5 w-12 h-12 top-35 transform -translate-y-1/2 z-10 bg-white rounded-full shadow p-3 hover:bg-[#FFB204] cursor-pointer md:block hidden"
//               onClick={() => scroll(secIndex, "right")}
//               aria-label="Scroll Right"
//             >
//               <MdOutlineKeyboardArrowRight size={24} />
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductCard;
