import React from 'react'
import image from '../../assets/images/mid-shot-woman-therapist-with-clipboard.jpg'
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router';

function index() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/uzmanlarımız`)
  }
  return (
    <section className='section'>
        <h3 style= {{marginBottom:'50px'}} >UZMANLARIMIZ</h3>
        <div className='experts'>
            <div className="experts-card" onClick={handleClick}>
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