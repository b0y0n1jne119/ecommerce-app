import React from 'react';
import Meta from '../components/Meta';
import './style/Wishlist.scss'
import BreadCrumb from "../components/BreadCrumb";
import wishlist1 from '../assets/images/cross.svg';
import wishlist2 from '../assets/images/watch.jpg';

export default function Wishlist(props) {
    return (
        <>
            <Meta title={"Wish List"} />
            <BreadCrumb title="Wish List" />

            <div className='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='container'>
                    <div className='row'>


                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img
                                    src={wishlist1}
                                    alt="cross"
                                    className="cross position-absolute img-fluid"
                                />
                                <div className='wishlist-card-img'>
                                    <img
                                        src={wishlist2}
                                        alt="watch.jpg"
                                        className='img-fluid w-100'
                                    />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>
                                        Honor T1 7.0.1 GB RAM 8GB ROM 7 Inch with Wifi +3G Tablet
                                    </h5>
                                    <h6 className='price'>$ 100</h6>
                                </div>
                            </div>
                        </div>


                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img
                                    src={wishlist1}
                                    alt="cross"
                                    className="cross position-absolute img-fluid"
                                />
                                <div className='wishlist-card-img'>
                                    <img
                                        src={wishlist2}
                                        alt="watch.jpg"
                                        className='img-fluid w-100'
                                    />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>
                                        Honor T1 7.0.1 GB RAM 8GB ROM 7 Inch with Wifi +3G Tablet
                                    </h5>
                                    <h6 className='price'>$ 100</h6>
                                </div>
                            </div>
                        </div>


                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img
                                    src={wishlist1}
                                    alt="cross"
                                    className="cross position-absolute img-fluid"
                                />
                                <div className='wishlist-card-img'>
                                    <img
                                        src={wishlist2}
                                        alt="watch.jpg"
                                        className='img-fluid w-100'
                                    />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>
                                        Honor T1 7.0.1 GB RAM 8GB ROM 7 Inch with Wifi +3G Tablet
                                    </h5>
                                    <h6 className='price'>$ 100</h6>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}