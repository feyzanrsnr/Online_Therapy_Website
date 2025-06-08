import React from 'react'
import { Link } from 'react-router'
import { Link as ScrollLink } from 'react-scroll';
import icon1 from '../../assets/icons/icon1.png'
import icon2 from '../../assets/icons/icon2.png'
import icon3 from '../../assets/icons/icon3.png'
import icon4 from '../../assets/icons/icon4.png'
import icon5 from '../../assets/icons/icon5.png'

function index() {
  return (
    <section>
      
        <div className='options'>
            <Link to="randevu">
            <div className='options-card' >
                    <img className='options-card-image' src={icon1}  alt="icon" />
                <p className='options-card-title'>
                    Randevu Al
                </p>
            </div>
            </Link>

            <ScrollLink to="question">
            <div className='options-card' >
                
                    <img className='options-card-image' src={icon2}  alt="icon" />
                <p className='options-card-title'>
                    Soru Sor
                </p>
                
            </div>
            </ScrollLink>

            <Link to='' smooth={true} duration={500}>
            <div className='options-card' >
                
                    <img className='options-card-image' src={icon3} alt="icon" />
                <p className='options-card-title'>
                    Uzmanımı Bul
                </p>
                
            </div>
            </Link>

            <Link to="/">
            <div className='options-card' >
              
                 <img className='options-card-image' src={icon4}  alt="icon" />
                <p className='options-card-title'>
                 Bana Uygun Destek Türünü Bul
                </p>
               
            </div>
            </Link>

            <ScrollLink to="faqs">
            <div className='options-card' >
                
                <img className='options-card-image' src={icon5} alt="icon" />
                <p className='options-card-title'>
                   Bilgi Al
                </p>
                
            </div>
            </ScrollLink>
        </div>
    </section>
  )
}

export default index