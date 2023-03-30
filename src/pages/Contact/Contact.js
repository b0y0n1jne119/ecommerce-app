import React from 'react';
import BreadCrumb from "../../components/BreadCrumb";
import Meta from '../../components/Meta';
import './Contact.scss';
import { AiOutlineHome } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';

export default function Contact(props) {
    return (
        <>
            <Meta title={"Contact Us"} />
            <BreadCrumb title="Contact Us" />
            <div className='contact-wrapper py-y home-wrapper-2'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-12'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.1675152839027!2d105.85154128142523!3d21.019276517208546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab92a19800b5%3A0xd70a3b979ac8beeb!2zOCBQLiBUcuG6p24gUXXhu5FjIFRv4bqjbiwgSMOgbmcgQsOgaSwgSG_DoG4gS2nhur9tLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1680149289440!5m2!1sen!2s"
                                width="600"
                                height="450"
                                className='border-0 w-100'
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title='googlemap'>
                            </iframe>
                        </div>


                        <div className='col-12 mt-5'>
                            <div className='contact-inner-wrapper d-flex justify-content-between'>

                                <div>
                                    <h3 className='contact-title mb-4'>Contact Us</h3>
                                    <form action="" className="d-flex flex-column gap-15">

                                        <div>
                                            <input type="text" className="form-control" placeholder="Your Name" />
                                        </div>

                                        <div>
                                            <input type="email" className="form-control" placeholder='Your Email' />
                                        </div>

                                        <div>
                                            <input type="tell" className="form-control" placeholder='Your Mobile Number' />
                                        </div>

                                        <div>
                                            <textarea
                                                name=""
                                                id=""
                                                cols="30"
                                                rows="4"
                                                placeholder='Your Comments'
                                                className="w-100 form-control">
                                            </textarea>
                                        </div>

                                        <div>
                                            <buttion className="button">Submit</buttion>
                                        </div>

                                    </form>
                                </div>


                                <div>
                                    <h3 className='contact-title mb-4'>Get in touch with us</h3>
                                    <div>
                                        <ul className='ps-0'>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                                <AiOutlineHome className='fs-5' />
                                                <address className='mb-0'>
                                                    P3A1 TT Trần Quốc Toản, Hàng Bài, Hoàn Kiếm, TP.Hà Nội
                                                </address>
                                            </li>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                                <BsTelephone className='fs-5' />
                                                <a
                                                    href='https://www.facebook.com/duc.c.tu.1/'
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    +84 33 7099 460
                                                </a>
                                            </li>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                                <AiOutlineMail className='fs-5' />
                                                <a href='https://www.google.com/gmail/about/'
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    nguyenminhduc119@gmail.com
                                                </a>
                                            </li>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                                <BsInfoCircle className='fs-5' />
                                                <p className='mb-0'>Monday - Friday 8h30 AM - 6 PM</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}