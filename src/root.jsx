import React from "react";
import Navbar from "./layout/Navbar";
import MobileNavbar from "./layout/MobileNavBar";
import Footer from "./layout/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./layout/ScrollToTop";

export default function Root() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <MobileNavbar />
      <Outlet />
      <Footer />
    </>
  );
}
