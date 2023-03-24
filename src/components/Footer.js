import React from 'react';
import { Link } from 'react-router-dom';
import { BsTwitter, BsGithub, BsYoutube, BsTelegram } from 'react-icons/bs';
import imgfooter from '../assets/images/newsletter.png';

export default function Footer(props) {
    return (
        <>
            <footer className="footer-upper py-4">
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-5'>
                            <div className='footer-top-data d-flex gap-30 align-items-center'>
                                <img src={imgfooter} alt="newsletter" />
                                <h2 className='text-white'>Sign Up for News Letter</h2>
                            </div>
                        </div>

                        <div className='col-7'>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder="Your Email Address"
                                    aria-label="Your Email Address"
                                    aria-describedby="basic-addon2" />
                                <span className="input-group-text p-2" id="basic-addon2">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>



            <footer className="footer-middle py-4">
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <h4 className='text-white'>Contact Us</h4>
                            <div>
                                <address className='text-white fs-6'>
                                    Address: Tp. HN <br />
                                    P3A1 TT Tran Quoc Toan, Hang Bai<br />
                                </address>
                                <a
                                    href='https://www.facebook.com/duc.c.tu.1/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='d-flex flex-block text-white mb-2'>
                                    +84 33 7099 460
                                </a>
                                <a
                                    href='https://gmail.com/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-white mb-4'>
                                    nguyenminhduc119@gmail.com
                                </a>
                                <div className='social-icons d-flex algin-items-center gap-30 mt-5'>
                                    <a href='https://twitter.com/' target="_blank" rel="noopener noreferrer">
                                        <BsTwitter className='text-white fs-4' />
                                    </a>
                                    <a href='https://github.com/' target="_blank" rel="noopener noreferrer">
                                        <BsGithub className='text-white fs-4' />
                                    </a>
                                    <a href='https://www.youtube.com/' target="_blank" rel="noopener noreferrer">
                                        <BsYoutube className='text-white fs-4' />
                                    </a>
                                    <a href='https://web.telegram.org/z/' target="_blank" rel="noopener noreferrer">
                                        <BsTelegram className='text-white fs-4' />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='col-3'>
                            <h4 className='text-white'>Information</h4>
                            <div className='footer-links'>
                                <Link className='text-white py-2 mb-1 d-flex flex-column'>Privacy Policy</Link>
                                <Link className='text-white py-2 mb-1 d-flex flex-column'>Refund Policy</Link>
                                <Link className='text-white py-2 mb-1 d-flex flex-column'>Shipping Policy</Link>
                                <Link className='text-white py-2 mb-1 d-flex flex-column'>Term & Conditions</Link>
                                <Link className='text-white py-2 mb-1 d-flex flex-column'>Blogs</Link>
                            </div>
                        </div>

                        <div className='col-3'>
                            <h4 className='text-white'>Account</h4>
                            <div className='footer-links'>
                                <Link className='text-white py-2 mb-1 d-flex flex-column'>Laptops</Link>
                                <Link className='text-white py-2 mb-1 d-flex flex-column'>Headphones</Link>
                                <Link className='text-white py-2 mb-1 d-flex flex-column'>Tablets</Link>
                                <Link className='text-white py-2 mb-1 d-flex flex-column'>Watch</Link>
                            </div>
                        </div>

                        <div className='col-2'>
                            <h4 className='text-white'>Quick Links</h4>
                            <div className='footer-links'>
                                <Link className='text-white py-2 mb-1 d-flex flex-column'>Laptops</Link>
                                <Link className='text-white py-2 mb-1 d-flex flex-column'>Headphones</Link>
                                <Link className='text-white py-2 mb-1 d-flex flex-column'>Tablets</Link>
                                <Link className='text-white py-2 mb-1 d-flex flex-column'>Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>



            <footer
                className="py-4">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='text-center mb-0 text-white'>
                                &copy; {new Date().getFullYear()}; Powered by Virgo
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}