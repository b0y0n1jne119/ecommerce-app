import React, { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import ReactStars from 'react-rating-stars-component';
import Meta from '../../components/Meta';
import ProductCard from '../../components/ProductCard/ProductCard';
import './OurStore.scss';
import random1 from '../../assets/images/watch.jpg'
import gr1 from '../../assets/images/gr.svg';
import gr2 from '../../assets/images/gr2.svg';
import gr3 from '../../assets/images/gr3.svg';
import gr4 from '../../assets/images/gr4.svg';
import Color from "../../components/Color";

export default function OurStore(props) {

    const [grid, setGrid] = useState(4);

    return (
        <>
            <Meta title={"Out Store"} />
            <BreadCrumb title="Our Store" />
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container">
                    <div className="row">


                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Shop By Categories</h3>
                                <div>
                                    <ul className="ps-0">
                                        <li>Watch</li>
                                        <li>TV</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>


                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Filter By</h3>
                                <div>
                                    <h5 className="sub-title">Availablity</h5>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            In Stock (1)
                                        </label>
                                    </div>


                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id=""
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Out of Stock(0)
                                        </label>
                                    </div>


                                    <h5 className="sub-title">Price</h5>
                                    <div className="d-flex aligin-items-center gap-10">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="floatingInput"
                                                placeholder="From"
                                            />
                                            <label htmlFor="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="floatingInput1"
                                                placeholder="To"
                                            />
                                            <label htmlFor="floatingInput1">To</label>
                                        </div>
                                    </div>


                                    <h5 className="sub-title-colors">Colors</h5>
                                    <div>
                                        <Color />
                                    </div>


                                    <h5 className="sub-title-colors">Size</h5>
                                    <div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="color-1"
                                            />
                                            <label className="form-check-label" htmlFor="color-1">
                                                S (2)
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="color-2"
                                            />
                                            <label className="form-check-label" htmlFor="color-2">
                                                M (2)
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Product Tags</h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">

                                        <span className="badge bg-light text-secondary rounded-3 p-2 px-3">
                                            Headphone
                                        </span>


                                        <span className="badge bg-light text-secondary rounded-3 p-2 px-3">
                                            Mobile
                                        </span>


                                        <span className="badge bg-light text-secondary rounded-3 p-2 px-3">
                                            Laptop
                                        </span>


                                        <span className="badge bg-light text-secondary rounded-3 p-2 px-3">
                                            Wire
                                        </span>
                                    </div>
                                </div>
                            </div>


                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Random Product</h3>
                                <div>

                                    <div className="random-products mb-3 d-flex">
                                        <div className="w-50">
                                            <img
                                                src={random1}
                                                alt="random"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="w-50">
                                            <h5>
                                                Kids headphones bulk 10 pack multi colored for students
                                            </h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p>$ 300</p>
                                        </div>
                                    </div>


                                    <div className="random-products d-flex">
                                        <div className="w-50">
                                            <img
                                                src={random1}
                                                alt="random"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="w-50">
                                            <h5>
                                                Kids headphones bulk 10 pack multi colored for students
                                            </h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p>$ 300</p>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>



                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0 d-block" style={{ width: "100px" }}>Sort by: </p>
                                        <select className="form-control form-select" id="" name="">
                                            <option value="manual">Featured</option>
                                            <option value="best-selling" selected="selected">
                                                Best selling
                                            </option>
                                            <option value="title-ascending">
                                                Alphabetically, A-Z
                                            </option>
                                            <option value="title-descending">
                                                Aphabetically, Z-A
                                            </option>
                                            <option value="price-ascending">
                                                Price, low to high
                                            </option>
                                            <option value="price-descending">
                                                Price, high to low
                                            </option>
                                        </select>
                                    </div>


                                    <div className="d-flex align-items-center gap-10">
                                        <p className="totalproducts mb-0">21 products</p>
                                        <div className="d-flex gap-10 align-items-center grid">
                                            <img
                                                onClick={() => {
                                                    setGrid(3);
                                                }}
                                                className="d-block img-fluid"
                                                src={gr4}
                                                alt="grid"
                                            />
                                            <img
                                                onClick={() => {
                                                    setGrid(4);
                                                }}
                                                className="d-block img-fluid"
                                                src={gr3}
                                                alt="grid"
                                            />
                                            <img
                                                onClick={() => {
                                                    setGrid(6);
                                                }}
                                                className="d-block img-fluid"
                                                src={gr2}
                                                alt="grid"
                                            />
                                            <img
                                                onClick={() => {
                                                    setGrid(12);
                                                }}
                                                className="d-block img-fluid"
                                                src={gr1}
                                                alt="grid"
                                            />
                                        </div>
                                    </div>


                                </div>
                            </div>



                            <div className="products-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                    <ProductCard grid={grid} />
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}