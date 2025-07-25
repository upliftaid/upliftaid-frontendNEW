import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../App.css'
import HomePage from '../components/Home/HomePage.jsx'
import Navbar from '../layouts/navbar.jsx'
import MNavbar from '../layouts/mobil-navbar.jsx'
import Footer from '../layouts/footer.jsx'


const Home = () => {
  return (
    <div>
      <MNavbar/>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
};

export default Home;
