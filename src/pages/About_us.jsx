import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import AboutUsSection from '../components/OurStorySection'
import OurStory from '../components/OurStory'
import Who_we_are from '../components/Who_we_are'
import Meet_team from '../components/Meet_team'
import Testimonie from '../components/Testomonie'
import Testimonials from '../components/Testimonals'
import MobileNavBar from '../layout/MobileNavBar'

const About_us = () => {
  return (
    <div className='font-[Poppins]'>
        <Navbar/>
        <MobileNavBar />
        <OurStory/>
        <AboutUsSection/>
        <Who_we_are/>
        <Meet_team/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default About_us