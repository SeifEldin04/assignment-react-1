import React, { useEffect } from 'react'
import photo1 from '../../port1.png';
import photo2 from '../../port2.png';
import photo3 from '../../port3.png';
import $ from 'jquery';

export default function Portfolio() {
  useEffect(() => {
    function jqueryy() {
      $('.photoContent').on('click', function () {
        let imgSrc = $(this).find('img').attr('src');
        $('.portfolioLayer').addClass('d-flex').removeClass('d-none');
        $('.portfolioLayer img').attr('src', imgSrc);
        $('.closeBtn').on('click', function () {
          $('.portfolioLayer').addClass('d-none').removeClass('d-flex');
        })
        $('document').on('click', function () {
          $('.portfolioLayer').addClass('d-none').removeClass('d-flex');
        })
      });
    }

    jqueryy();
  }, []);

  return (
    <section className='portfolioPage py-5 d-flex justify-content-center align-items-center'>
      <div className="portfolioContent">
        <div className='portfolioH1 text-center mt-5'>
          <h1 className='fw-bolder mb-4'>PORTFOLIO COMPONENT</h1>
        </div>
        <div className="container photos">
          <div className="row gy-5 gx-5">
            <div className="col-lg-4 col-md-6">
              <div className="photoContent">
                <img src={photo1} className='w-100 rounded-3' alt="" />
                <div className="photoLayer">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="photoContent">
                <img src={photo2} className='w-100 rounded-3' alt="" />
                <div className="photoLayer">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="photoContent">
                <img src={photo3} className='w-100 rounded-3' alt="" />
                <div className="photoLayer">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="photoContent">
                <img src={photo1} className='w-100 rounded-3' alt="" />
                <div className="photoLayer">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="photoContent">
                <img src={photo2} className='w-100 rounded-3' alt="" />
                <div className="photoLayer">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="photoContent">
                <img src={photo3} className='w-100 rounded-3' alt="" />
                <div className="photoLayer">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='portfolioLayer d-none justify-content-center align-items-center'>
        <img src={photo1} className='showLayer' alt="" />
        <div className='closeBtn'>
          <i className="fa-solid fa-circle-xmark"></i>
        </div>
      </div>
    </section>
  )
}
