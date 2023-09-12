import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Beforefooter from '../Beforefooter/Beforefooter'
import Footer from '../Footer/Footer'

export default function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <Beforefooter />
            <Footer />
        </div>
    )
}
