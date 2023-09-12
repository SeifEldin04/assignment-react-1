import React from 'react'
import x from '../../avataaars.svg';

export default function Home() {
    return (
        <section className='homePage text-white text-center d-flex justify-content-center align-items-center'>
            <div className='homeContent'>
                <img src={x} className='w-75 mb-5' alt="" />
                <h1>START FRAMEWORK</h1>
                <h5>Graphic Artist - Web Designer - Illustrator</h5>
            </div>
        </section>
    )
}
