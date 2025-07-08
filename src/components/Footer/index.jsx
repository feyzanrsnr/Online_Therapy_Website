import React from 'react'
import { Link } from 'react-router'
import { FaLocationDot } from 'react-icons/fa6'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { color } from 'framer-motion'

const url = 'https://github.com/feyzanrsnr'


function index() {
  return (
    <footer className='footer'>

      <div className='footer-contact'>
        <span><FaLocationDot /> <p>Lorem ipsum dolor sit amet.</p></span>
        <span><BsFillTelephoneFill /> <p>0555 555 55 55</p></span>
        <span><MdEmail /> <p>Lorem@info.com</p></span>
      </div>
        <hr/>
      <p>
        Copyright &#169; 2025 | Designed and Developed by <Link target='blank' to={url} style={{textDecoration:'underline'}}>Feyzanur Sener</Link>
      </p>
      
    </footer>
  )
}

export default index