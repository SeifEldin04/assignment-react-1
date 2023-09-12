import React from 'react'

export default function Notfound() {
    return (
        <section className='notfoundPage text-center d-flex justify-content-center align-items-center'>
            <div className="notfoundContent">
                <h1 className='my-4'>404</h1>
                <h1 className='mb-4'>File not found</h1>
                <h3>The site configured at this address does not contain the requested file.</h3>
                <h4 className='my-3'>If this is your site, make sure that the filename case matches the URL as well as <br /> any file permissions.</h4>
                <h5 className='my-4'>For root URLs (like http://example.com/) you must provide an index.html file.</h5>
            </div>
        </section>
    )
}
