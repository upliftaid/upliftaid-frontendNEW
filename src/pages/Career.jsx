import React from "react";
import teamImage from "../assets/images/hands.jpg"; // put your image in src/assets

const Career = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${teamImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="text-white text-5xl font-semibold z-10">Join Our Team</h1>
    </div>
  );
};

export default Career;
