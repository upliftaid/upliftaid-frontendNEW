import React, { useEffect } from 'react'
import Topbar from '../layout/Topbar'
import Navbar from '../layout/Navbar'
import { fetchDonations } from "../redux/donationSlice";
import Footer from '../layout/Footer'
import CausesContent from '../components/CausesContent'
import Pagination from '../components/Pagination'

const Causes = () => {




  return (
    <div>
      <Topbar />
      <Navbar />
      <CausesContent />
      
      <Footer />
    </div>
  )
}

export default Causes
