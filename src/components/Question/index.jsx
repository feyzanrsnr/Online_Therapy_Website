import React from 'react'
import image from '../../assets/images/image 2.png'

function index() {
  return (
    <section id='question' className='section'>

        <div className='question-card'>
            
        <div className='question-card-left'>
            <img src={image} width={500} alt="" />
        </div>

        <div className='question-card-right'>
            <h3>Merak Ettiklerinizi Sorun</h3>

            <div className='question-card-right-body'>
                <div>
                    <label htmlFor="">Adınız Soyadınız</label>
                    <input type="text"/>
                
                </div>

               
               <div>
                 <label htmlFor="">Email Adresiniz</label>
                <input type="text" />
               </div>

                <div>
                 <label htmlFor="">Sorunuz</label>
                <textarea name="" id=""></textarea>
               </div>

                <button className='button button-primary'>Gönder</button>
            </div>
        </div>

        </div>

    </section>
  )
}

export default index