import React, {useEffect, useState} from 'react'
import { Link } from 'react-router'
import { Link as ScrollLink } from 'react-scroll';
import { FaInstagram } from 'react-icons/fa'



function index() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      const offset = window.scrollY
      if ( offset > 600) {
        setScrolled(true)
      }
      else{
        setScrolled(false)
      }
    }

    window.addEventListener('scroll' , handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)

  }, [])

  return (
    <>
    <nav className= {`${scrolled ? 'navbar-scrolled' : 'navbar'}`}>
          <div className='navbar-container'>
                <Link to='/' className='button button-oval'>Anasayfa</Link>
                <Link to='/randevu' className='button button-oval'>Randevu Al</Link>
                <Link className='button button-oval'>Uzmanımı Bul
                </Link>
                <Link className='button button-oval'>Bana Uygun Destek Türünü Bul</Link>
                <ScrollLink to='#question' className='button button-oval'>Soru Sor</ScrollLink>
          </div>
        
        
    </nav>
  
    </>
  )
}

export default index