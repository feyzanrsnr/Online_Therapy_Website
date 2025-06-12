import React from 'react'

function index() {
  return (
    <section id='hizmetler'>
      <h3>Terapi Hizmetlerimiz</h3>
        
        <div className='hizmetler'>
            <div className='hizmetler-card' >
                    
                <p className='hizmetler-card-title'>
                    Kariyer Danışmanlığı
                </p>
            </div>
            
            <div className='hizmetler-card' >  
                <p className='hizmetler-card-title'>
                    Manevi Danışmanlık
                </p>
            </div>

            <div className='hizmetler-card' >
                    
                <p className='hizmetler-card-title'>
                    Aile Danışmanlığı
                </p>
                
            </div>
            
            <div className='hizmetler-card' >
              
                <p className='hizmetler-card-title'>
                 Bireysel Danışmanlık
                </p>
               
            </div>
            
        </div>
    </section>
  )
}

export default index