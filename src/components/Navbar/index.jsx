import React from 'react'
import { Link } from 'react-router'
import { Link as ScrollLink } from 'react-scroll';
import { FaInstagram } from 'react-icons/fa'


function index() {
  return (
    <nav className='navbar'>
        <div className='navbar-left'>
          <Link to='/' className='button button-secondary'>Anasayfa</Link>
          <Link className='button'><FaInstagram size={30} color='#3E3E3E'/></Link>
        </div>
        <div className='navbar-right'>
          <Link to='/randevu' className='button button-outline'>Randevu Al</Link>
          <Link className='button button-outline'>Uzmanımı Bul</Link>
          <Link className='button button-outline'>Bana Uygun Destek Türünü Bul</Link>
          <ScrollLink to='question' className='button button-outline'>Soru Sor</ScrollLink>
        </div>
    </nav>
  )
}

export default index