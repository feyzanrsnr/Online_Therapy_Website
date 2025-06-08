import React from 'react'
import image from '../../assets/images/image 2.png'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function index() {
   
  const initialValues = {
    namesurname: "",
    email:"",
    question:"",
    
    }

    const validationSchema = Yup.object({
      namesurname: Yup.string().required("Zorunlu alan"),
      email: Yup.string().email("Geçersiz email adresi").required("Zorunlu alan"),
      question: Yup.string().required("Zorunlu alan")
    })

  return (
    <section id='question' className='section'>

        <div className='question-card'>
            
        <div className='question-card-left'>
            <img src={image} width={500} alt="" />
        </div>

        <div className='question-card-right'>
            <h3>Merak Ettiklerinizi Sorun</h3>

            <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            >
              {({setFieldValue, values}) => (
                <Form>
                  <div className='question-card-right-body'>
                <div>
                    <label htmlFor="namesurname">Adınız Soyadınız</label>
                    <Field name="namesurname" type="text"/>
                    <ErrorMessage 
                    name='namesurname'
                    component="div"
                    className='error'
                    />
                
                </div>

               
               <div>
                 <label htmlFor="email">Email Adresiniz</label>
                <Field name="email" type="email" />
                <ErrorMessage 
                name='email'
                component='div'
                className='error'
                />
               </div>

                <div>
                 <label htmlFor="question">Sorunuz</label>
                <Field name="question" as="textarea" />
                <ErrorMessage name='question' component="div"
                className='error'
                />
               </div>

                <button className='button button-primary'>Gönder</button>
            </div>
                </Form>
              )}

            </Formik>
        </div>

        </div>

    </section>
  )
}

export default index