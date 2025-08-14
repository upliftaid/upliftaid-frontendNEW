// import React, { useState } from "react";
// import ReviewModal from "./ReviewModal";
// import UserReviewDetails from "../../constants/product/UserReviewsDetails"; // renamed to avoid name conflict

// const StarRating = ({ rating }) => (
//   <div className="flex space-x-1 text-yellow-400">
//     {[...Array(5)].map((_, i) => (
//       <svg
//         key={i}
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-4 h-4"
//         fill={i < rating ? "#FACC15" : "none"}
//         viewBox="0 0 24 24"
//         stroke="#FACC15"
//         strokeWidth={1.5}
//       >
//         <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
//       </svg>
//     ))}
//   </div>
// );

// const UserReviews = () => {
//   const [reviews, setReviews] = useState(UserReviewDetails);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleAddReview = (newReview) => {
//     setReviews([
//       {
//         ...newReview,
//         id: Date.now(),
//         images: newReview.images.split(",").map((img) => img.trim()),
//       },
//       ...reviews,
//     ]);
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="mt-12 space-y-6 p-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold">Customer Reviews</h2>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="hover:bg-[#E69F00] bg-[#FFB204] hover:text-white cursor-pointer font-medium px-5 py-2 rounded shadow-md"
//         >
//           Add Review
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {reviews.map((review) => (
//           <div
//             key={review.id}
//             className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm space-y-4"
//           >
//             <div className="flex items-center gap-4">
//               <img
//                 src={review.profilePic}
//                 alt={review.name}
//                 className="w-14 h-14 rounded-full object-cover border"
//               />
//               <div>
//                 <p className="font-semibold text-gray-800">{review.name}</p>
//                 <StarRating rating={review.rating} />
//               </div>
//             </div>

//             <p className="text-gray-600">{review.comment}</p>

//             {review.images.length > 0 && (
//               <div className="flex gap-3 flex-wrap">
//                 {review.images.map((img, idx) => (
//                   <img
//                     key={idx}
//                     src={img}
//                     alt={`Review image ${idx + 1}`}
//                     className="w-16 h-16 object-cover rounded border border-gray-300"
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src =
//                         "https://via.placeholder.com/100?text=No+Image";
//                     }}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {isModalOpen && (
//         <ReviewModal
//           onClose={() => setIsModalOpen(false)}
//           onSubmit={handleAddReview}
//         />
//       )}
//     </div>
//   );
// };

// export default UserReviews;
