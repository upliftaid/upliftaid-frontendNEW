import React from 'react'
import Navbar from '../layout/Navbar'
import BlogSection from '../components/BlogSection'
import Footer from '../layout/Footer'
import Pagination from '../components/Pagination'
import MobileNavbar from '../layout/MobileNavBar'

function Blog() {
  return (
    <div className='font-[Poppins]'>
      <Navbar />
      <MobileNavbar/>
      <BlogSection />
      <Pagination />
      <Footer />
    </div>
  )
}

export default Blog
