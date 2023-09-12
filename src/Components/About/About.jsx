import React from 'react'

export default function About() {
  return (
    <section className='aboutPage text-white d-flex justify-content-center align-items-center'>
      <div className='aboutContent'>
        <div className='aboutH1 mb-4 text-center'>
          <h1 className='fw-bolder'>ABOUT COMPONENT</h1>
        </div>
        <div className="aboutContent container row">
          <div className="col-md-6 my-3">
            <div className="content1">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes <br /> the complete source files including HTML, CSS, and JavaScript as well as <br /> optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
          <div className="col-md-6 my-3">
            <div className="content2">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes <br /> the complete source files including HTML, CSS, and JavaScript as well as <br /> optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
