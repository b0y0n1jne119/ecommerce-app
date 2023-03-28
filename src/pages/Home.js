import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

import main_banner from '../assets/images/main-banner-1.jpg';
import small_banner1 from '../assets/images/catbanner-01.jpg';
import small_banner2 from '../assets/images/catbanner-02.jpg';
import small_banner3 from '../assets/images/catbanner-03.jpg';
import small_banner4 from '../assets/images/catbanner-04.jpg';
import services1 from '../assets/images/service.png';
import services2 from '../assets/images/service-02.png';
import services3 from '../assets/images/service-03.png';
import services4 from '../assets/images/service-04.png';
import services5 from '../assets/images/service-05.png';
import categories1 from '../assets/images/camera.jpg';
import categories2 from '../assets/images/tv.jpg';
import categories3 from '../assets/images/headphone.jpg';
import picbrand1 from '../assets/images/brand-01.png';
import picbrand2 from '../assets/images/brand-02.png';
import picbrand3 from '../assets/images/brand-03.png';
import picbrand4 from '../assets/images/brand-04.png';
import picbrand5 from '../assets/images/brand-05.png';
import picbrand6 from '../assets/images/brand-06.png';
import picbrand7 from '../assets/images/brand-07.png';
import picbrand8 from '../assets/images/brand-08.png';
import BlogCard from '../components/BlogCard/BlogCard';
import ProductCard from '../components/ProductCard/ProductCard';
import SpecialProduct from '../components/SpecialProduct/SpecialProduct';

export default function Home(props) {
    return (
        <>
            <section className='home-wrapper-1 py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-banner position-relative'>
                                <img
                                    className='img-fluid rounded-3'
                                    src={main_banner}
                                    alt="main banner"
                                />
                                <div className='main-banner-content position-absolute'>
                                    <h4>SUPERCHARGED FOR PROS.</h4>
                                    <h5>iPad S13+ Pro.</h5>
                                    <p>From $299.00 or $41.62/mo.</p>
                                    <Link className='button'>BUY NOW</Link>
                                </div>
                            </div>
                        </div>


                        <div className='col-6'>
                            <div className='d-flex flex-wrap justify-content-between align-items-center gap-10'>

                                <div className='small-banner position-relative'>
                                    <img
                                        className='img-fluid rounded-3'
                                        src={small_banner1}
                                        alt="main banner"
                                    />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>Best sake</h4>
                                        <h5>iPad S13+ Pro.</h5>
                                        <p>From $299.00 <br /> or $41.62/mo.</p>
                                    </div>
                                </div>

                                <div className='small-banner position-relative'>
                                    <img
                                        className='img-fluid rounded-3'
                                        src={small_banner2}
                                        alt="main banner"
                                    />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>New Arrival</h4>
                                        <h5>iPad S13+ Pro.</h5>
                                        <p>From $299.00 <br /> or $41.62/mo.</p>
                                    </div>
                                </div>

                                <div className='small-banner position-relative'>
                                    <img
                                        className='img-fluid rounded-3'
                                        src={small_banner3}
                                        alt="main banner"
                                    />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>New Arriva</h4>
                                        <h5>iPad S13+ Pro.</h5>
                                        <p>From $299.00 <br /> or $41.62/mo.</p>
                                    </div>
                                </div>

                                <div className='small-banner position-relative'>
                                    <img
                                        className='img-fluid rounded-3'
                                        src={small_banner4}
                                        alt="main banner"
                                    />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>New Arriva</h4>
                                        <h5>iPad S13+ Pro.</h5>
                                        <p>From $299.00 <br /> or $41.62/mo.</p>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </section>



            <section className='home-wrapper-2 py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='services d-flex align-items-center justify-content-between'>


                                <div className='d-flex align-items-center gap-15'>
                                    <img src={services1} alt="services" />
                                    <div>
                                        <h6>Free Shipping</h6>
                                        <p className='mb-0'>From all orders over $100</p>
                                    </div>
                                </div>


                                <div className='d-flex align-items-center gap-15'>
                                    <img src={services2} alt="services" />
                                    <div>
                                        <h6>Daily Surprise Offers</h6>
                                        <p className='mb-0'>Save up to 25% off</p>
                                    </div>
                                </div>


                                <div className='d-flex align-items-center gap-15'>
                                    <img src={services3} alt="services" />
                                    <div>
                                        <h6>Support 24/7</h6>
                                        <p className='mb-0'>Shop with an expert</p>
                                    </div>
                                </div>


                                <div className='d-flex align-items-center gap-15'>
                                    <img src={services4} alt="services" />
                                    <div>
                                        <h6>Affordable Prices</h6>
                                        <p className='mb-0'>Get Factory direct price</p>
                                    </div>
                                </div>


                                <div className='d-flex align-items-center gap-15'>
                                    <img src={services5} alt="services" />
                                    <div>
                                        <h6>Secure Payments</h6>
                                        <p className='mb-0'>100% Protected Payments</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className='home-wrapper-2 py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='categories d-flex justify-content-between  flex-wrap align-items-center'>


                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={categories1} alt="camera" />
                                </div>


                                <div className='d-flex align-items-center'>
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={categories1} alt="camera" />
                                </div>


                                <div className='d-flex align-items-center'>
                                    <div>
                                        <h6>Smart TV</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={categories2} alt="tivi" />
                                </div>


                                <div className='d-flex align-items-center'>
                                    <div>
                                        <h6>Smart Watches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={categories3} alt="headphone" />
                                </div>


                                <div className='d-flex align-items-center'>
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={categories1} alt="camera" />
                                </div>


                                <div className='d-flex align-items-center'>
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={categories1} alt="camera" />
                                </div>


                                <div className='d-flex align-items-center'>
                                    <div>
                                        <h6>Smart TV</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={categories2} alt="tivi" />
                                </div>


                                <div className='d-flex align-items-center'>
                                    <div>
                                        <h6>Smart Watches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={categories3} alt="headphone" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className='featured-wrapper py-5 home-wrapper-2'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading mb-3'>Featured Collection</h3>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>



            <section className='famous-wrapper py-5 home-wrapper-2'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='famous-card bg-dark'>
                                <h5>Big Screen</h5>
                                <h6>Smart Watch Series 7</h6>
                                <p>From $399 or $16.62/mo. for 24 mo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className='special-wrapper py-5 home-wrapper-2'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Special Products</h3>
                        </div>
                        <div className='row'>
                            <SpecialProduct />
                            <SpecialProduct />
                            <SpecialProduct />
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



            <section className='marque-wrapper py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='marquee-inner-wrapper card-wrapper'>
                                <Marquee className='d-flex'>
                                    <div className='mx-4 w-25'>
                                        <img src={picbrand1} alt="brand" />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img src={picbrand2} alt="brand" />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img src={picbrand3} alt="brand" />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img src={picbrand4} alt="brand" />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img src={picbrand5} alt="brand" />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img src={picbrand6} alt="brand" />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img src={picbrand7} alt="brand" />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img src={picbrand8} alt="brand" />
                                    </div>

                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className='blog-wrapper py-5 home-wrapper-2'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading mb-3'>Our Latest Blogs</h3>
                        </div>
                        <BlogCard />
                    </div>
                </div>
            </section>
        </>
    )
}