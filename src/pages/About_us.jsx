import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import AboutUsSection from '../components/aboutUs/ourStory/OurStorySection'
import OurStory from '../components/aboutUs/ourStory/OurStory'
import Who_we_are from '../components/aboutUs/ourStory/Who_we_are'
import Meet_team from '../components/aboutUs/ourStory/Meet_team'
import Testimonials from '../components/aboutUs/ourStory/Testimonals'
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