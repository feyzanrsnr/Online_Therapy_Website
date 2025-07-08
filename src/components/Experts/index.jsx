import React from 'react'
import image from '../../assets/images/mid-shot-woman-therapist-with-clipboard.jpg'
import { useNavigate } from 'react-router';

function index() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/uzmanlarımız`)
  }
  return (
    <section className='section'>
        <h3>Uzmanlarımız</h3>
        <div className="experts">
        <div className="experts-card">
          <img src={image} alt="avatar"/>
          <div className="experts-card-text">
            <p>Lorem ipsum</p>
          <ul>
            <li>Manevi Danışmanlık</li>
            <li>Bireysel Danışmanlık</li>
            <li>Kariyer Danışmanlığı</li>
            <li>Aile Danışmanlığı</li>
          </ul>
          </div>
          <button className='button button-primary' onClick={handleClick}>Özgeçmiş</button>
        </div>

        <div className="experts-card">
          <img src={image} alt="avatar"/>
          <div className="experts-card-text">
            <p>Lorem ipsum</p>
          <ul>
            <li>Manevi Danışmanlık</li>
            <li>Bireysel Danışmanlık</li>
            <li>Kariyer Danışmanlığı</li>
            <li>Aile Danışmanlığı</li>
          </ul>
          </div>
          <button className='button button-primary' onClick={handleClick}>Özgeçmiş</button>
        </div>

        <div className="experts-card">
          <img src={image} alt="avatar"/>
          <div className="experts-card-text">
            <p>Lorem ipsum</p>
          <ul>
            <li>Manevi Danışmanlık</li>
            <li>Bireysel Danışmanlık</li>
            <li>Kariyer Danışmanlığı</li>
            <li>Aile Danışmanlığı</li>
          </ul>
          </div>
          <button className='button button-primary' onClick={handleClick}>Özgeçmiş</button>
        </div>
        </div>
    </section>
  )
}

export default index