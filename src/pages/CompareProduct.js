import React from "react";
import './style/CompareProduct.scss';
import BreadCrumb from "../components/BreadCrumb";
import Meta from '../components/Meta';
import compare1 from '../assets/images/watch.jpg';
import compare2 from '../assets/images/cross.svg';

export default function CompareProduct(props) {
    return (
        <>
            <Meta title={"Compare Product"} />
            <BreadCrumb title="Compare Product" />
            <div className="compare-product-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img
                                    src={compare2}
                                    alt="cross"
                                    className="cross position-absolute" />
                                <div className="product-card-image">
                                    <img src={compare1} alt='watch' />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">
                                        Honor T1 7.0.1 GB RAM 8GB ROM 7 Inch with Wifi +3G Tablet
                                    </h5>
                                    <h6 className="price">$100.00</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
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