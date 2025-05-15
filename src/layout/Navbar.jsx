import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-teal-800 text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <img src="../assets/images/logo.png" alt="Logo" className="h-10 mr-4" />
      </div>
      <ul className="flex space-x-6">
        {["Home", "How It Works", "Donate", "Gallery", "Blog", "About", "Contact", "Career"].map((item) => (
          <li key={item} className="hover:underline cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
