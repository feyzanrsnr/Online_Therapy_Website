import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaInstagram } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi';

function index() {
    const [isOpen, setIsOpen] = useState(false)

    return (
    <>
   <button className='open-button' onClick={() => setIsOpen(true)}><GiHamburgerMenu/></button>

    {isOpen && 
    
    <div className='sidebar'>

    <div className='sidebar-container'>

    <button className='close-button' onClick={() => setIsOpen(false)}><IoClose size={30}/>
    </button>

    <div className='sidebar-links'>
    
    <Link className='button' 
      to="/">
        Anasayfa
    </Link>

    <Link
      className='button' 
      to="/randevu">
        Randevu Al
    </Link>

    <Link
      className='button' 
      to="/randevu">
        Hakkımızda
    </Link>
      
    <Link
      className='button' 
      to="/randevu">
        İletişim
    </Link>
    

    </div>
     
    
    </div>
    </div>}

    </>

  )
}

export default index

