import React from 'react'
import { MdOutlineExpandCircleDown } from "react-icons/md";
import { useState } from 'react';

function index() {

  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (i) => {
    setOpenIndex(prevIndex => prevIndex === i ? null : i)
  }


  return (
    <section id='faqs' className='section'>
      
      <h3>Terapi Hakkında Doğru Bilinen Yanlışlar</h3>
        <div className="main-container">
          <div className="faqs-container">
                {faqData.map((faq,i) => (
                    <div key={i} className='faqs-question-container'>
                        <h5 className='faqs-question-number'>
                            {(i + 1).toString().padStart(2,'0')}
                        </h5>
                        <div className='faqs-question'
                        onClick={() => toggleFAQ(i)}
                        style={{cursor:'pointer'}}
                        >
                            <p>{faq.question}</p>
                            <MdOutlineExpandCircleDown
                            className={`icon ${openIndex === i ? 'rotate' : ''}`}
                            />
                        </div>

                        { openIndex === i && (
                          <div className="faqs-answer">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                    </div>
                ))}

          </div>
        </div>
      
      
        
    </section>
  )
}

export default index


const faqData = [
  {
    question:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
    answer:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, consequatur."
  },
  {
    question:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
    answer:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, consequatur."
  },
  {
    question:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
    answer:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, consequatur."
  },
  {
    question:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
    answer:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, consequatur."
  },
  {
    question:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
    answer:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, consequatur."
  },
  {
    question:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
    answer:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, consequatur."
  },
  {
    question:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
    answer:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, consequatur."
  },
  {
    question:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
    answer:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, consequatur."
  },
  {
    question:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
    answer:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, consequatur."
  },
  {
    question:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
    answer:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, consequatur."
  },
]