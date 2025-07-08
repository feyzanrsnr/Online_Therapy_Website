import React from 'react'
import image from '../../assets/images/mid-shot-woman-therapist-with-clipboard.jpg'

function index() {
  return (
    <section className='section'>
        <div className='expert-container'>
            <img className='expert-container-image' src={image} alt="avatar" />

            <div className='expert-container-text'>
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis assumenda ab, numquam adipisci iusto sint quia vel autem eveniet iure voluptates soluta dolore nulla ducimus voluptatibus quaerat tempora fugiat magni deserunt suscipit accusantium nesciunt repellendus odit! Deserunt sint illo accusantium quae, quod enim corrupti perferendis doloribus exercitationem alias magnam!</p>
            </div>
        </div>
    </section>
  )
}

export default index