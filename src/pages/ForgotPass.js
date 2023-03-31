import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from '../components/Meta';
import { Link } from "react-router-dom";

export default function ForgotPass(props) {
    return (
        <>
            <Meta title={"Forgot Password"} />
            <BreadCrumb title="Forgot Password" />

            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Reset Password</h3>
                                <p className="text-center mt-2 mb-3">
                                    We will send you an email to reset your password
                                </p>
                                <form action="" className="d-flex flex-column gap-15">
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Your Email"
                                        />
                                    </div>


                                    <div>
                                        <div className="d-flex justify-content-center gap-15 align-items-center mt-3 flex-column">
                                            <button className="button border-0" type="submit">
                                                Submit
                                            </button>
                                            <Link to="/login">Cancel</Link>
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