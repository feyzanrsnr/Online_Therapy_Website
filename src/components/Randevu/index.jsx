import React, { useRef } from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import DatePicker from 'react-datepicker'
import { FaCalendarAlt } from 'react-icons/fa'
import "react-datepicker/dist/react-datepicker.css";
import emailjs from '@emailjs/browser'

function index() {
    const initialValues = {
      namesurname:"",
      phone:"",
      email:"",
      date:null,
      expert:"",
      field:"",
      message:"",
  };

  const validationSchema = Yup.object({
      namesurname: Yup.string().required("Zorunlu alan"),
      phone: Yup.string().required("Zorunlu alan"),
      email: Yup.string().email("Geçersiz email").required("Zorunlu alan"),
      date: Yup.date()
    .nullable().typeError("Zorunlu alan").transform((value, originalValue) => {
    return originalValue === "" || originalValue === null ? null : value;
  })
  .required("Zorunlu alan"),
      expert: Yup.string().required("Zorunlu alan"),
      field: Yup.string().required("Zorunlu alan"),
      message: Yup.string(),
  })

  const CustomDateInput = ({value, onClick}) => (
    <div className="date-input-wrapper" onClick={onClick}>
      <input
        type="text"
        value={value || ''}
        readOnly
        placeholder="Tarih seçin"    
      />
      <FaCalendarAlt className="calendar-icon" />
    </div>
  )

  const form = useRef()
  
      const sendEmail = (e) => {
          e.preventDefault()
          emailjs
          .sendForm('service_bnjbar4', 'template_lqc2p4a', form.current, {
          publicKey: 'z4YSe-3ipDja0QQpo',
      })
        .then(
        () => {
          console.log('SUCCESS!');
          alert('Randevu talebiniz başarıyla oluşturuldu')
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Bir hata oluştu')
        },
      );}
  
    
  return (
    <section style={{backgroundColor:'#fff', margin:'0'}} className='section'>
    
    <div className='formContainer'>

    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    validateOnBlur={true}
    validateOnChange={true}
    >
      {({setFieldValue,  setFieldTouched, values}) => (
        <Form 
        ref={form} 
        onSubmit={sendEmail} 
        className='mainForm'>
        <div className="form">
          <h3 style= {{marginBottom:'50px', textDecoration:'underline'}} >Kişisel Bilgiler</h3>

              <label htmlFor="namesurname">Adınız Soyadınız</label>
              <Field name="namesurname" type="text" />
              <ErrorMessage name="namesurname" component="div" className="error" />

              <label htmlFor="phone">Telefon Numarası</label>
              <Field name="phone" type="text" placeholder='5xx xxx xx xx'/>
              <ErrorMessage name="phone" component="div" className="error" />

              <label htmlFor="email">Email Adresiniz</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" className="error" />
        </div>

        <div className='form'>
            <h3 style= {{marginBottom:'50px', textDecoration:'underline'}}>Randevu Bilgileri</h3>

              <label htmlFor="date">Randevu Tarihi</label>
             
              <DatePicker
              selected={values.date}
              onChange={(val) => {
              setFieldTouched("date", true);
              setFieldValue("date", val);
              }}
              onBlur={() => setFieldTouched("date", true)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              customInput={<CustomDateInput />}
              />
              <ErrorMessage name='date' component="div" className='error'/>
              
              <label htmlFor="expert">Randevu Almak istediğiniz Uzman</label>
              <Field as="select" name="expert" className="select-input">
                <option value="">Uzman Seçiniz</option>
                <option value="Süeda İnan">Süeda İnan</option>
                <option value="Hümeyra Büşra Nalci">Hümeyra Büşra Nalci</option>
              </Field>
              <ErrorMessage name="expert" component="div" className="error" />

              <label htmlFor="field">Randevu Almak istediğiniz Alan</label>
              <Field as="select" name="field" className="select-input">
                <option value="">Alan Seçiniz</option>
                <option value="Kariyer Danışmanlığı">Kariyer Danışmanlığı</option>
                <option value="Manevi Danışmanlık">Manevi Danışmanlık</option>
                <option value="Bireysel Danışmanlık">Bireysel Danışmanlık</option>
                <option value="Aile Danışmanlığı">Aile Danışmanlığı</option>
                <option value="Oyun Terapisi">Oyun Terapisi</option>
              </Field>
              <ErrorMessage name="field" component="div" className="error" />

              <label className='message-label' htmlFor="message">Mesajınız
                <span className='star'>*</span>
              </label>
              
              <Field as="textarea" name="message"/>

              <button className="button button-primary" type="submit">
                Randevu Talebi Oluştur
              </button>
        </div>

        </Form>
      )}
    </Formik>

    </div>

   
    </section>
  )
}

export default index