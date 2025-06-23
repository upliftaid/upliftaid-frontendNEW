import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "../src/layout/Footer";
import CareerPage from "./pages/Career";
import Navbar from "./layout/Navbar";
import Testimonials from "./pages/Testimonials";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
