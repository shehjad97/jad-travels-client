import React from "react";
import aboutImg from "../../images/About.jpg";

const About = () => {

    return (
        <div className="container">
            <div className="text-center">
                <h1 className="text-danger pt-5 pb-3 mb-0">About Us</h1>
                <p className="text-secondary">We, at Jad Travels, swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly. We have been moving excellent encounters for a considerable length of time through our cutting-edge tour packages and other fundamental travel administrations. We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters. Through our exceptionally curated tour packages, we need to take you on an adventure where you personally enjoy the stunning magnificence of the world. We need you to observe sensational scenes that are a long way past your creative ability. The powerful inclination to travel more nowadays is something that keeps us inspired to satisfy our vacation necessities. Our vision to give you a consistent occasion encounter makes us one of the main visit administrators in the regularly extending travel industry. To guarantee that you have a satisfying occasion and healthy encounters, all our vacation administrations are available to your no matter what. We have journey occasions for individuals who are searching for solace and reasonable extravagance. We offer the best limits on our top-rated visit bundles to clients who pick our viable administrations over and over. How about we remind you indeed that we don't expect to be your visit and travel specialists; we endeavor to be your vacation accomplices until the end of time.</p>
                <div className="row align-items-center my-5">
                    <h3 className="col-lg-6 text-danger pt-5 pb-1 px-5 order-last order-lg-first">“Travel is the main thing you purchase that makes you more extravagant”</h3>
                    <div className="col-lg-6 order-first order-lg-last">
                        <img className="w-100 img-fluid rounded shadow" src={aboutImg} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;