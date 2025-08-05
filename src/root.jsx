import React from 'react'
import Navbar from "./layout/Navbar";
import MobileNavbar from "./layout/MobileNavBar";
import Footer from "./layout/Footer";
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <>
    <Navbar />
    <MobileNavbar />

    <Outlet/>

    <Footer />
      
    </>
  )
}
