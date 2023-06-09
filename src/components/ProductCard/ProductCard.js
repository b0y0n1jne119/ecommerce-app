import React from 'react';
import './ProductCard.scss';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import produc1 from '../../assets/images/watch.jpg';
import produc2 from '../../assets/images/watch-1.jpg';
import bar1 from '../../assets/images/prodcompare.svg';
import bar2 from '../../assets/images/view.svg';
import bar3 from '../../assets/images/add-cart.svg';
import wish1 from '../../assets/images/wish.svg';

export default function ProductCard(props) {

    const { grid } = props;
    let location = useLocation();

    return (
        <>
            <div
                className={` ${location.pathname === '/store' ? `gr-${grid}` : "col-3"}`}>
                <Link to="/product/id:" className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <Link>
                            <img src={wish1} alt="wishlit" />
                        </Link>
                    </div>


                    <div className='product-img' alt="product img">
                        <img src={produc1} alt="watch" />
                        <img src={produc2} alt="watch1" />
                    </div>


                    <div className='product-details'>
                        <h6 className='brand'>Havels</h6>
                        <h5 className=''>
                            Kids headphones bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Trong vũ trụ học vật lý và thiên văn học, năng lượng tối
                            là một dạng năng lượng chưa biết rõ chiếm phần lớn vũ trụ
                            và có khuynh hướng tăng tốc độ giãn nở của vũ trụ. Năng
                            lượng tối là thuyết được chấp nhận nhiều nhất kể từ những
                            năm 1990, chỉ ra rằng vũ trụ đang giãn nở với vận tốc tăng dần.
                        </p>
                        <p className='price'>$100.00</p>
                    </div>


                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <Link>
                                <img src={bar1} alt="prodcompare" />
                            </Link>
                            <Link>
                                <img src={bar2} alt="vew" />
                            </Link>
                            <Link>
                                <img src={bar3} alt="add-cart" />
                            </Link>
                        </div>
                    </div>


                </Link>
            </div>


            <div
                className={` ${location.pathname === '/store' ? `gr-${grid}` : "col-3"}`}>
                <Link className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <Link>
                            <img src={wish1} alt="wishlit" />
                        </Link>
                    </div>


                    <div className='product-img' alt="product img">
                        <img src={produc1} alt="watch" />
                        <img src={produc2} alt="watch1" />
                    </div>


                    <div className='product-details'>
                        <h6 className='brand'>Havels</h6>
                        <h5 className=''>
                            Kids headphones bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Trong vũ trụ học vật lý và thiên văn học, năng lượng tối
                            là một dạng năng lượng chưa biết rõ chiếm phần lớn vũ trụ
                            và có khuynh hướng tăng tốc độ giãn nở của vũ trụ. Năng
                            lượng tối là thuyết được chấp nhận nhiều nhất kể từ những
                            năm 1990, chỉ ra rằng vũ trụ đang giãn nở với vận tốc tăng dần.
                        </p>
                        <p className='price'>$100.00</p>
                    </div>


                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <Link>
                                <img src={bar1} alt="prodcompare" />
                            </Link>
                            <Link>
                                <img src={bar2} alt="vew" />
                            </Link>
                            <Link>
                                <img src={bar3} alt="add-cart" />
                            </Link>
                        </div>
                    </div>


                </Link>
            </div>
        </>
    )
}