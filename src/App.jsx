import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/home.jsx'
import Navbar from './layouts/navbar.jsx'
import MNavbar from './layouts/mobil-navbar.jsx'
import Footer from './layouts/Footer.jsx'


const App = () => {
  return (
    <div>
      <MNavbar/>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
};

export default App;
