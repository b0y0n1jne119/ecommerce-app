import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from '../components/Meta';
import singleblog1 from '../assets/images/blog-1.jpg';
import { Link } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi';

export default function SingleBlog(props) {
    return (
        <>
            <Meta title={"Single Blog"} />
            <BreadCrumb title="Single Blog" />

            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container">
                    <div className="row">


                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to='/blog' className="d-flex align-items-center gap-10">
                                    <BiArrowBack className="fs-4" /> Go back to Blogs
                                </Link>
                                <h3 className="title">
                                    A Beautiful Sunday Morning Renaissance
                                </h3>
                                <img
                                    src={singleblog1}
                                    alt="singleblog-1"
                                    className="img-fluid w-100 my-4"
                                />
                                <p>
                                    Trong vũ trụ học vật lý và thiên văn học, năng lượng tối là
                                    một dạng năng lượng chưa biết rõ chiếm phần lớn vũ trụ và có
                                    khuynh hướng tăng tốc độ giãn nở của vũ trụ. Năng
                                    lượng tối là thuyết được chấp nhận nhiều nhất kể từ những
                                    năm 1990, chỉ ra rằng vũ trụ đang giãn nở với vận tốc tăng
                                    dần. Theo Đội nghiên cứu Planck và dựa vào mô hình tiêu chuẩn
                                    của Vũ trụ học, tỷ lệ tương đối của vật chất-năng lượng, thì
                                    vũ trụ nhìn thấy được có chứa 26.8% vật chất tối, 68.3%
                                    năng lượng tối (tổng là 95.1%) với vật chất thường chỉ
                                    chiếm 4.9%. Một lần nữa, theo tỷ lệ tương đối vật
                                    chất-năng lượng, tỉ trọng của năng lượng tối (6.91 x 10-27 kg/m³)
                                    là rất thấp, còn thấp hơn cả tỉ trọng của vật chất thường và vật
                                    chất tối trong các thiên hà. Mặc dù thế, nó lại thống trị vật
                                    chất-năng lượng của Vũ trụ vì được dàn trải khắp không gian.
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}