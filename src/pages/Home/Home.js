import React from 'react';
import bannerImg from "../../images/Home.jpg";
import Tours from '../Tours/Tours';

const Home = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-between align-items-center text-center">
                <div className="my-3 col-lg-6 pe-4">
                    <p className="py-0 my-0 text-danger"></p>
                    <p className="py-0 my-0 text-danger">Let the journey begin</p>
                    <h1 className='py-1'>Start Dreaming of Tomorrow's Adventures</h1>
                    <small className="py-2 d-block text-second">A solid and “believed” travel brand of Bangladesh, our qualities incorporate a vast and faithful client base, a multi-channel stage for relaxation and business explorers, a powerful portable eco-framework for a range of voyagers and providers.</small>
                </div>
                <div className="my-3 col-lg-6">
                    <div className='rounded shadow'>
                        <img className="img-fluid rounded w-100 h-100" src={bannerImg} alt="banner img" />
                    </div>
                </div>
            </div>
            <div className='row text-center my-5'>
                <div className='col-12 col-lg-4 my-3'>
                    <div className='shadow p-5 h-100 rounded border-3 border-top border-danger'>
                        <h3 className='text-danger'>Plan with confidence</h3>
                        <p className='text-secondary'>Stay one step ahead with flexible flight tickets, free hotel and car cancellation and the cleanest rooms around.</p>
                    </div>
                </div>
                <div className='col-12 col-lg-4 my-3'>
                    <div className='shadow p-5 h-100 rounded border-3 border-top border-danger'>
                        <h3 className='text-danger'>Ready when you are</h3>
                        <p className='text-secondary'>See where you can travel to right now and find the best deals across thousands of flights, hotels and car hire options</p>
                    </div>
                </div>
                <div className='col-12 col-lg-4 my-3'>
                    <div className='shadow p-5 h-100 rounded border-3 border-top border-danger'>
                        <h3 className='text-danger'>Keep it simple</h3>
                        <p className='text-secondary'>No hidden fees. No hidden charges. With us, you'll always know exactly where your money goes. So you can relax before your trip even begins.</p>
                    </div>
                </div>
            </div>
            <Tours></Tours>
        </div>
    );
};


export default Home;