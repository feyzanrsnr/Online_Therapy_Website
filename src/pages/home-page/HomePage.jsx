import React, {useState} from 'react'
import Navbar from '../../components/Navbar'
import Home from '../../components/Home'
import Options from '../../components/Options'
import Experts from '../../components/Experts'
import Question from '../../components/Question'
import Faqs from '../../components/Faqs'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'
import Hizmetler from '../../components/Hizmetler'


function HomePage() {

  return (
    <>
    <Navbar/>
    <Sidebar/>
    <Home/>
    <Hizmetler/>
    <Experts/>
    <Question/>
    <Faqs/>
    <Footer/>
    </>
  )
}

export default HomePage