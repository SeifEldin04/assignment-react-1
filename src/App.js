import React from 'react';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfloio/Portfolio';
import Contact from './Components/Contact/Contact';
import Notfound from './Components/Notfound/Notfound';

let routers = createHashRouter([
    {
        path: '', element: <Layout />, children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'portfolio', element: <Portfolio /> },
            { path: 'contact', element: <Contact /> },
            { path: '*', element: <Notfound /> },
        ]
    }
])

export default function App() {
    return (
        <div>
            <RouterProvider router={routers}></RouterProvider>
        </div>
    )
}
