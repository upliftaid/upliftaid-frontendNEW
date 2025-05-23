import React from 'react'
import Navbar from '../layout/Navbar'
import BlogSection from '../components/BlogSection'
import LogoStrip from '../components/LogoStrip'
import Footer from '../layout/Footer'
import Topbar from '../layout/Topbar'

function Blog() {
  return (
    <div>
 <Topbar />
      <Navbar />
      <BlogSection />
      <LogoStrip />
      <Footer />
    </div>
  )
}

export default Blog
