import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.scss';
import blog1 from '../../assets/images/blog-1.jpg';
import blog2 from '../../assets/images/blog-2.jpg';
import blog3 from '../../assets/images/blog-3.jpg';
import blog4 from '../../assets/images/blog-4.jpg';

export default function BlogCard(props) {
    return (
        <>
            <div className='col-12 d-flex justify-content-between flex-wrap align-items-center'>

                <div className='col-3 d-flex'>
                    <div className='blog-card'>
                        <div className='card-image'>
                            <img
                                src={blog1}
                                alt="blog"
                                className='img-fluid'
                            />
                        </div>
                        <div className='blog-content'>
                            <p className='date'>24 March 2023</p>
                            <h5 class="title">A Beautiful Sunday Morning Renaissance</h5>
                            <p className='desc'>You're Only As Good as your last collection.
                                Which is an Enormous Pressure. I think there is something about ...
                            </p>
                            <Link className='button' to='/'>Read more</Link>
                        </div>
                    </div>
                </div>


                <div className='col-3 d-flex'>
                    <div className='blog-card'>
                        <div className='card-image'>
                            <img
                                src={blog2}
                                alt="blog"
                                className='img-fluid'
                            />
                        </div>
                        <div className='blog-content'>
                            <p className='date'>11 Sep 1992</p>
                            <h5 class="title">A Beautiful Sunday Morning Renaissance</h5>
                            <p className='desc'>You're Only As Good as your last collection.
                                Which is an Enormous Pressure. I think there is something about ...
                            </p>
                            <Link className='button' to='/'>Read more</Link>
                        </div>
                    </div>
                </div>


                <div className='col-3 d-flex'>
                    <div className='blog-card'>
                        <div className='card-image'>
                            <img
                                src={blog3}
                                alt="blog"
                                className='img-fluid'
                            />
                        </div>
                        <div className='blog-content'>
                            <p className='date'>24 March 2023</p>
                            <h5 class="title">A Beautiful Sunday Morning Renaissance</h5>
                            <p className='desc'>You're Only As Good as your last collection.
                                Which is an Enormous Pressure. I think there is something about ...
                            </p>
                            <Link className='button' to='/'>Read more</Link>
                        </div>
                    </div>
                </div>


                <div className='col-3 d-flex'>
                    <div className='blog-card'>
                        <div className='card-image'>
                            <img
                                src={blog4}
                                alt="blog"
                                className='img-fluid'
                            />
                        </div>
                        <div className='blog-content'>
                            <p className='date'>24 March 2023</p>
                            <h5 class="title">A Beautiful Sunday Morning Renaissance</h5>
                            <p className='desc'>You're Only As Good as your last collection.
                                Which is an Enormous Pressure. I think there is something about ...
                            </p>
                            <Link className='button' to='/'>Read more</Link>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}