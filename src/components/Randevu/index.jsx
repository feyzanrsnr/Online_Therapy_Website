import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import DatePicker from 'react-datepicker'
import { FaCalendarAlt } from 'react-icons/fa'

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
      date: Yup.date().required("Zorunlu alan"),
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
    
  return (
    <section style={{backgroundColor:'#fff', margin:'0'}} className='section'>
    
    <div className='formContainer'>

    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    >
      {({setFieldValue, values}) => (
        <Form className='mainForm'>
        <div className="form">
          <h3 style= {{marginBottom:'50px', textDecoration:'underline'}} >Kişisel Bilgiler</h3>

              <label htmlFor="namesurname">Adınız Soyadınız</label>
              <Field name="namesurname" type="text" />
              <ErrorMessage name="namesurname" component="div" className="error" />

              <label htmlFor="phone">Telefon Numarası</label>
              <Field name="phone" type="text" />
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
              onChange={(val) => setFieldValue('date', val)}
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

              <label htmlFor="message">Mesajınız</label>
              <Field as="textarea" name="message" />

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