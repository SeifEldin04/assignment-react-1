import React from 'react'

export default function Beforefooter() {
  return (
    <div className='beforeFooter py-5 text-white'>
        <div className="row text-center">
            <div className="col-md-4">
                <div className="content1">
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
            </div>
            <div className="col-md-4 my-4">
                <div className="content1">
                    <h3>AROUND THE WEB</h3>
                    <div className="icons d-flex justify-content-evenly">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-solid fa-globe mx-1 icon"></i>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="content1">
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created <br /> by Route</p>
                </div>
            </div>
        </div>
    </div>
  )
}
