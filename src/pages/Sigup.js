import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from '../components/Meta';
// import { Link } from "react-router-dom";

export default function Sigup(props) {
    return (
        <>
            <Meta title={"Signup"} />
            <BreadCrumb title="Signup" />

            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Sign Up</h3>
                                <form action="" className="d-flex flex-column gap-15">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Your Email"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="tel"
                                            name="mobile"
                                            className="form-control"
                                            placeholder="Your Telephone number"
                                        />
                                    </div>

                                    <div className="mt-1">
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            placeholder="Your Password"
                                        />
                                    </div>

                                    <div>
                                        <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                                            <button className="button border-0">Sign Up</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}