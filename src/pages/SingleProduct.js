import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from '../components/Meta';
import ProductCard from "../components/ProductCard/ProductCard";
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';
// import zoom1 from '../assets/images/watch.jpg';

export default function SingleProduct() {

    const props = {
        width: 400,
        height: 500,
        zoomWidth: 500,
        img: "https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(5):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/12/637985935050489552_apple-watch-series-8-gps-41mm-do-dd.jpg"
    };
    const [orderedProduct, setorderedProduct] = useState(true);

    return (
        <>
            <Meta title={"Single Product"} />
            <BreadCrumb title="Single Product" />

            <div className="main-product-wrapper home-wrapper-2 py-5">
                <div className="container">
                    <div className="row">


                        <div className="col-6">
                            <div className="main-product-img">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>

                            <div className="other-product-img d-flex flex-wrap gap-15">
                                <div><img src="https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(5):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/12/637985935050489552_apple-watch-series-8-gps-41mm-do-dd.jpg" className="img-fluid" /></div>
                                <div><img src="https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(5):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/12/637985935050489552_apple-watch-series-8-gps-41mm-do-dd.jpg" className="img-fluid" /></div>
                                <div><img src="https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(5):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/12/637985935050489552_apple-watch-series-8-gps-41mm-do-dd.jpg" className="img-fluid" /></div>
                                <div><img src="https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(5):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/12/637985935050489552_apple-watch-series-8-gps-41mm-do-dd.jpg" className="img-fluid" /></div>
                            </div>

                        </div>


                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3 className="title">
                                        Kids Headphones Bulk 10 Pack Multi Colored For Student
                                    </h3>
                                </div>

                                <div className="border-bottom py-3">
                                    <p className="price">$ 100</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className="mb-0">( 2 Reviews )</p>
                                    </div>
                                    <a href="#review">Write a Review</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


                <div className="description-wrapper py-5 home-wrapper-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h4>Description</h4>
                                <div className="bg-white p-3">
                                    <p>
                                        Lập luận chính của Harari là Sapiens đã thống trị
                                        thế giới vì đây là loài động vật duy nhất có thể
                                        cộng tác linh hoạt với số lượng lớn. Ông lập luận
                                        rằng Sapiens chính là nguyên nhân dẫn đến sự tuyệt
                                        chủng của các loài người khác như người Neanderthal,
                                        cùng với nhiều loài động vật lớn khác.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <section className="reviews-wrapper home-wrapper-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 id="review">Reviews</h3>
                                <div className="review-inner-wrapper py-5 home-wrapper-2">
                                    <div className="review-head d-flex justify-content-between align-items-end">
                                        <div>
                                            <h4 className="mb-2">Customer Reviews</h4>
                                            <div className="d-flex gap-10 align-items-center">
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={4}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                                <p className="mb-0">Based on 2 Reviews</p>
                                            </div>
                                        </div>


                                        {
                                            orderedProduct && (
                                                <div>
                                                    <a
                                                        href="https://www.google.com/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-dark text-decoration-underline"
                                                    >
                                                        Write a Review
                                                    </a>
                                                </div>
                                            )
                                        }


                                    </div>


                                    <div className="review-form py-4">
                                        <h4 className="">Write a Review</h4>
                                        <form action="" className="d-flex flex-column gap-15">
                                            <div>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={4}
                                                    edit={true}
                                                    activeColor="#ffd700"
                                                />
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

                                            <div className="d-flex justify-content-end">
                                                <button className="button border-0">Submit Review</button>
                                            </div>

                                        </form>
                                    </div>


                                    <div className="reviews mt-4">
                                        <div className="review">
                                            <div className="d-flex gap-10 align-items-center">
                                                <h6 className="mb-0">Navdeep</h6>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={4}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                            </div>
                                            <p className="mt-3">
                                                Gravitation is the mutual attraction between all masses in the universe,
                                                also known as gravitational attration. Gravity is the gravitational
                                                attraction at the surface of a planet or other celestial body.
                                            </p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className='popular-wrapper py-5 home-wrapper-2'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <h3 className='section-heading mb-3'>Our Popular Products</h3>
                            </div>
                            <div className='row'>
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                            </div>
                        </div>
                    </div>
                </section>



            </div>
        </>
    )
}