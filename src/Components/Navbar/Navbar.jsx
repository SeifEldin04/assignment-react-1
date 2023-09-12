import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import $ from 'jquery';


export default function Navbar() {

    // useEffect(() => {
    //     function scrolling() {
    //         let navOffset = $('.navbar').offset();

    //         $(window).on('scroll', function () {
    //             let windowScroll = $(window).scrollTop();
    //             console.log(windowScroll);
    //             if (windowScroll > navOffset) {
    //                 $('.navbar').addClass('py-0').removeClass('py-4');
    //             }
    //             else {
    //                 $('.navbar').addClass('py-4').removeClass('py-0');
    //             }
    //         })
    //     }

    //     scrolling()
    // }, [])


    // useEffect(() => {
    //     function scrolling() {
    //         $(window).on('scroll', function () {
    //             let windowScroll = $(window).scrollTop();
    //             let navbar = $('.navbar');
    //             if (windowScroll > navbar.offset().top) {
    //                 navbar.removeClass('py-4').addClass('py-0');
    //             } else {
    //                 navbar.removeClass('py-0').addClass('py-4');
    //             }
    //         });
    //     }

    //     scrolling()
    // }, []);

    // useEffect(() => {
    //     let timeout;

    //     $(window).on('scroll', function () {
    //       let windowScroll = $(window).scrollTop();
    //       let navbar = $('.navbar');

    //       clearTimeout(timeout);

    //       if (windowScroll > navbar.offset().top) {
    //         navbar.removeClass('py-4').addClass('py-0');
    //         timeout = setTimeout(function() {
    //           navbar.addClass('transition');
    //         }, 500);
    //       } else {
    //         navbar.removeClass('transition').removeClass('py-0').addClass('py-4');
    //       }
    //     });
    //   }, []);

    const location = useLocation();

    useEffect(() => {
        $('.navbar .nav-link').each(function () {
            const linkPath = $(this).attr('href');
            if (linkPath === location.pathname) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    }, [location]);

    useEffect(() => {
        function handleScroll() {
            let sectionOffset = $('section').offset().top;
            let wScroll = $(window).scrollTop();

            if (wScroll > sectionOffset) {
                $('nav').addClass('py-2').removeClass('py-4');
            } else {
                $('nav').removeClass('py-2').addClass('py-4');
            }
        }
        $(window).on('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark py-4 fw-bolder fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">START FRAMEWORK</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link me-3 text-white" aria-current="page" to="about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-3 text-white" to="portfolio">PORTFOLIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-3 text-white" to="contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
