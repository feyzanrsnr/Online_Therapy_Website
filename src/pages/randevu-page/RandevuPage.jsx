import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Randevu from '../../components/Randevu'
import Sidebar from '../../components/Sidebar'
import Faqs from '../../components/Faqs'

function RandevuPage() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <Randevu/>
    {/* <Faqs/> */}
    <Footer/>
    </>
  )
}

export default RandevuPage