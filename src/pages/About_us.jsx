import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import AboutUsSection from '../components/OurStorySection'
import OurStory from '../components/OurStory'
import Who_we_are from '../components/Who_we_are'
import Meet_team from '../components/Meet_team'
import Testimonie from '../components/Testomonie'

const About_us = () => {
  return (
    <div>
        <Navbar/>
        <OurStory/>
        <AboutUsSection/>
        <Who_we_are/>
        <Meet_team/>
        <Testimonie/>
        <Footer/>
    </div>
  )
}

export default About_us