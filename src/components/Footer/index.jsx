import React from 'react'
import { Link } from 'react-router'
import { FaLocationDot } from 'react-icons/fa6'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { color } from 'framer-motion'



function index() {
  return (
    <footer className='footer'>

      <div className='footer-contact'>
        <span><FaLocationDot /> <p>Lorem ipsum dolor sit amet.</p></span>
        <span><BsFillTelephoneFill /> <p>0555 555 55 55</p></span>
        <span><MdEmail /> <p>Lorem@info.com</p></span>

        
      </div>
        
      <p>
        Copyright &#169; 2025 | Designed and Developed by Feyzanur Sener
      </p>

      
    </footer>
  )
}

export default index