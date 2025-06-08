import React from 'react'
import { MdOutlineExpandCircleDown } from "react-icons/md";
import { useState } from 'react';

function index() {

// const [openIndexes, setOpenIndexes] = useState(Array(faqData.length).fill(false))

// const toggleFAQ = (index) => {
//   setOpenIndexes((prev) => 
//   prev.map((item, i) => (i === index ? !item : item))
//   )
// }

const [openIndex, setOpenIndex] = useState(null);

const toggleFAQ = (index) => {
  setOpenIndex(prevIndex => (prevIndex === index ? null : index));
};

  return (
    <section id='faqs' className='section'>
      
      <h3>TERAPİ HAKKINDA DOĞRU BİLİNEN YANLIŞLAR</h3>
        <div className='main-container'>

        <div className='faqs-container'>
        {faqData.map((faq,index) => (
        <div key={index} className={`faqs-question-container ${openIndex === index ? 'open' : ''}`}>
          <h5 className='faqs-question-number'>
            {(index + 1).toString().padStart(2,'0')}
          </h5>
          <div className='faqs-question' onClick={() => toggleFAQ(index)} style={{cursor:'pointer'}}>
          <p>{faq.question}</p>
          <MdOutlineExpandCircleDown className={`icon ${openIndex === index ? 'rotate' : ''}`} />
          </div>
          {openIndex === index && (
            <div className='faqs-answer'>
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