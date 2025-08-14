// import React, { useState } from "react";
// import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
// import logo from "../../assets/logo.png";


// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#00733C] via-white to-[#00b894] overflow-hidden">
//       <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px] z-0"></div>
//       <div className="backdrop-blur-lg bg-white/30 border border-white/40 shadow-xl rounded-2xl p-8 w-full max-w-md animate-fade-in-up">
//       <div className="flex justify-center mb-6">
//         <img
//              src={logo}
//               alt="Upliftaid Logo"
//              className="w-24 h-24 rounded-full shadow-lg object-contain"
//         />

//       </div>

//       <h2 className="text-3xl font-bold text-center text-green-800 mb-6 tracking-tight">
//         {isLogin ? "Welcome Back" : "Join Upliftaid"}
//       </h2>

//       <form className="space-y-4">
//         {!isLogin && (
//           <div className="relative">
//             <FaUserAlt className="absolute top-3 left-3 text-green-800" />
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full pl-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
//             />
//           </div>
//         )}
//         <div className="relative">
//           <FaEnvelope className="absolute top-3 left-3 text-green-800" />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full pl-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
//           />
//         </div>
//         <div className="relative">
//           <FaLock className="absolute top-3 left-3 text-green-800" />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full pl-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-transform transform hover:scale-105 duration-200 shadow-md"
//         >
//           {isLogin ? "Login" : "Sign Up"}
//         </button>
//       </form>

//       <p className="text-center mt-4 text-sm text-green-900">
//         {isLogin ? "New here?" : "Already a member?"}{" "}
//         <button
//           onClick={() => setIsLogin(!isLogin)}
//           className="underline font-semibold hover:text-green-700"
//         >
//           {isLogin ? "Create an account" : "Login"}
//         </button>
//       </p>
//     </div>
//     </div>
//   );
// };

// export default AuthPage;
