import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.scss';
import blog1 from '../../assets/images/blog-1.jpg';

export default function BlogCard(props) {
    return (
        <>
            <div className='blog-card'>
                <div className='card-image'>
                    <img
                        src={blog1}
                        alt="blog"
                        className='img-fluid w-100'
                    />
                </div>
                <div className='blog-content'>
                    <p className='date'>24 March 2023</p>
                    <h5 class="title">A Beautiful Sunday Morning Renaissance</h5>
                    <p className='desc'>You're Only As Good as your last collection.
                        Which is an Enormous Pressure. I think there is something about ...
                    </p>
                    <Link className='button' to='/blog/:id'>Read more</Link>
                </div>
            </div>
        </>
    )
}