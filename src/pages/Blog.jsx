import React from "react";
import Search from "../components/Search";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import MobileNavBar from "../layout/MobileNavBar";

const Blog = () => {
  return (
    <div>
      <Navbar />

      <MobileNavBar />

      <div className="h-[600px] relative lg:mt-[40px]">
        <img
          src="https://upliftaid.org/images/bg_8.jpg"
          alt=""
          className="w-full h-full object-center opacity-90"
        />
        <div className="flex justify-center opacity-95 bg-black/40 w-full h-full absolute top-0 text-[60px] text-white">
          <h1 className="mt-[200px]">Our Blog</h1>
        </div>
      </div>

      <Search />

      <Footer />
    </div>
  );
};

export default Blog;
