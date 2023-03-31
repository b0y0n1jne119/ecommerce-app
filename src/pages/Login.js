import React from "react";
import './style/Login.scss';
import BreadCrumb from "../components/BreadCrumb";
import Meta from '../components/Meta';
import { Link } from "react-router-dom";

export default function Login(props) {
    return (
        <>
            <Meta title={"Login"} />
            <BreadCrumb title="Login" />

            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Login</h3>
                                <form action="" className="d-flex flex-column gap-15">
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Your Email"
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
                                        <Link to="/forgot-pass">Forgot Password?</Link>

                                        <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                                            <button className="button border-0" type="submit">
                                                Login
                                            </button>
                                            <Link to='/sign-up' className="button signup">
                                                SingUp
                                            </Link>
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