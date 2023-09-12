import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default function Contact() {

  useEffect(() => {
    const labels = $('label');
    labels.fadeOut(0);

    $('.contactContent input').on('input', function () {
      const label = $(this).prev('label');
      if ($(this).val() === '') {
        label.fadeOut(300);
      } else {
        label.fadeIn(300);
      }
    });
  }, []);

  return (
    <section className='contactPage d-flex justify-content-center align-items-center'>
      <div className="contactContent container">
        <div className='contactH1 mb-4 text-center'>
          <h1 className='fw-bolder'>CONATCT SECTION</h1>
        </div>

        <div className="row">
          <div className="col-lg-6 mx-auto">
            <label htmlFor="" className='overflow-hidden'>User Name :</label>
            <input type="text" placeholder='User Name :' className='mb-4' />
            <label htmlFor="" className=''>User Age :</label>
            <input type="text" placeholder='User Age :' className='mb-4' />
            <label htmlFor="" className=''>User Email :</label>
            <input type="email" placeholder='User Email :' className='mb-4' />
            <label htmlFor="" className=''>User Password :</label>
            <input type="password" placeholder='User Password :' className='' />

            <button className='btn btn-outline-info my-4'>send message</button>
          </div>
        </div>
      </div>
    </section>
  )
}
