import React from 'react'
import image from '../../assets/images/mid-shot-woman-therapist-with-clipboard.jpg'
import { FaStar } from "react-icons/fa";

function index() {
  return (
    <section className='section'>
        <h3 style= {{marginBottom:'50px'}} >UZMANLARIMIZ</h3>
        <div className='experts'>
            <div className="experts-card">
                <div className='experts-card-expert'> 
                <img src={image} alt="avatar" className='experts-card-expert-icon'/>
               <div className="experts-card-expert-text">
                 <span>Süeda İnan</span>
                <ul>
                  <li>
                    <FaStar style={{ marginRight: '8px' , color:'#F0B478' }} />
                    Aile Danışmanlığı</li>
                  <li>
                    <FaStar style={{ marginRight: '8px' , color:'#F0B478' }} />
                    Manevi Danışmanlık</li>
                  <li>
                    <FaStar style={{ marginRight: '8px' , color:'#F0B478'}} />
                    Kariyer Danışmanlığı</li>
                    <li>
                    <FaStar style={{ marginRight: '8px' , color:'#F0B478'}} />
                    Bireysel Danışmanlık</li>
                </ul>
               </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default index