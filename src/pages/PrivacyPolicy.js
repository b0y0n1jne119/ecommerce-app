import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from '../components/Meta';

export default function PrivacyPolicy(props) {
    return (
        <>
            <Meta title={"Privacy Policy"} />
            <BreadCrumb title="Privacy Policy" />


            <section className="policy-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}