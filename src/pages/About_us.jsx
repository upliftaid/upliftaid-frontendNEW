import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import AboutUsSection from '../components/AboutUsSection'
import About from '../components/About'
import Who_we_are from '../components/Who_we_are'
import Meet_team from '../components/Meet_team'
import Testimonials from '../components/Testimonals'
import MobileNavbar from '../layout/MobileNavbar'

const About_us = () => {
  return (
    <div className='font-[Poppins]'>
        <Navbar/>
        <MobileNavbar/>
        <About/>
        <AboutUsSection/>
        <Who_we_are/>
        <Meet_team/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default About_us