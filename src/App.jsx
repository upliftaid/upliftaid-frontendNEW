import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/home'
import Navbar from './layouts/navbar'
import MNavbar from './layouts/mobil-navbar'
import Footer from './layouts/footer'


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
