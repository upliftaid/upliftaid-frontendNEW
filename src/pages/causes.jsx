import React, { useEffect } from 'react'
import Navbar from '../layout/Navbar'
import { fetchDonations } from "../redux/donationSlice";
import Footer from '../layout/Footer'
import CausesContent from '../components/CausesContent'
import Pagination from '../components/Pagination'
import MobileNavbar from '../layout/MobileNavBar';

const Causes = () => {

  return (
    <div className='font-[Poppins]'>
      <Navbar />
      <MobileNavbar/>

      {/* Header */}
      <div className="h-[115px] bg-[#f2f2f2] mt-18 px-10 lg:px-28 py-5 text-[42px] text-center">
        Causes
      </div>

      <CausesContent />
      
      <Footer />
    </div>
  )
}

export default Causes
