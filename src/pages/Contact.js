import React from 'react';
import BreadCrumb from "../../components/BreadCrumb";
import Meta from '../../components/Meta';

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
                            <div className='contact-warpper d-flex justify-content-between'>
                                <div>
                                    <h3 className='contact-title'>Contact Us</h3>
                                </div>
                                <div>
                                    <h3 className='contact-title'>Get in touch with us</h3>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}