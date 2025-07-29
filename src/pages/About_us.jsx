import React from 'react'
import AboutUsSection from '../components/aboutUs/AboutUsSection'
import About from '../components/aboutUs/About'
import Who_we_are from '../components/aboutUs/Who_we_are'
import Meet_team from '../components/aboutUs/Meet_team'
import Testimonials from '../components/aboutUs/Testimonals'

const About_us = () => {
  return (
    <div className='font-[Poppins]'>
        <About/>
        <AboutUsSection/>
        <Who_we_are/>
        <Meet_team/>
        <Testimonials/>
    </div>
  )
}

export default About_us