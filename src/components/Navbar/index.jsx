import React, {useState} from 'react'
import { Link } from 'react-router'
import { Link as ScrollLink } from 'react-scroll';
import { FaInstagram } from 'react-icons/fa'



function index() {
  return (
    <>
    <nav className='navbar'>
          <div className='navbar-container'>
                <Link to='/'><button className='button button-oval'>Anasayfa</button></Link>
                <Link to='/randevu'><button className='button button-oval'>Randevu Al</button></Link>
                <Link><button className='button button-oval'>Uzmanımı Bul</button></Link>
                <Link><button className='button button-oval'>Bana Uygun Destek Türünü Bul</button></Link>
                <ScrollLink><button className='button button-oval'>Soru Sor</button></ScrollLink>
          </div>
        
        
    </nav>
  
    </>
  )
}

export default index