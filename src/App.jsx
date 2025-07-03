import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "../src/layout/Footer";
import CareerPage from "./pages/Career";
import Navbar from "./layout/Navbar";
import Testimonials from "./pages/Testimonials";
import MobileNavbar from "./layout/MobileNavBar";
function App() {

  return (
    <>
      <Navbar/>
      <MobileNavbar/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
