import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useAuth from './../../auth/useAuth';

const TourDetails = () => {
    const { user } = useAuth();

    const { tourId } = useParams();
    const [tour, setTour] = useState([]);

    const { title, img, description, location, cost, duration } = tour;

    useEffect(() => {
        fetch(`https://jad-travels.herokuapp.com/tours/${tourId}`)
            .then(res => res.json())
            .then(data => setTour(data))
    }, [tourId])

    const refPhone = useRef();
    const refAdd = useRef();
    const refDate = useRef();
    const navigate = useNavigate();

    const handleBooking = (e) => {
        const name = user.displayName;
        const email = user.email;
        const phone = refPhone.current.value;
        const address = refAdd.current.value;
        const date = refDate.current.value;
        const status = false;
        const cart = { title, img, cost, name, email, phone, address, date, status };

        axios.post("https://jad-travels.herokuapp.com/bookings", cart)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Tour Booked Suceessfully!!");
                    navigate("/mycart");
                }
            })
        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="py-5 mx-lg-5 px-lg-5">
                <div className='d-flex justify-content-between align-items-center'>
                    <h1 className='text-danger'>{title}</h1>
                    <h3 className="mt-2 text-second">${cost}k</h3>
                </div>
                <div className='d-flex justify-content-between'>
                    <p className="text-second"><i className="pe-2 fas fa-map-marker-alt"></i> {location}</p>
                    <p className="mb-0 text-second"><i className="pe-2 fas fa-location-arrow"></i> {duration} Days Tour</p>
                </div>
                <img className="w-100 rounded shadow mt-3 mb-5" src={img} alt="tour" />
                <p className="mb-5 d-block fw-light">{description}</p>
                <form onSubmit={handleBooking} className="p-5 mt-5 bg-light ">
                    <h2 className="mt-4 mb-4 mb-0 text-danger text-center">Book Your Tour</h2>
                    <div className="my-3">
                        <label htmlFor="name" className="form-label">Your Full Name</label>
                        <input type="text" className="form-control" id="name" value={user.displayName} disabled />
                    </div>
                    <div className="my-3">
                        <label htmlFor="email" className="form-label">Your Email Address</label>
                        <input type="email" className="form-control" id="email" value={user.email} disabled />
                    </div>
                    <div className="my-3">
                        <label htmlFor="phone" className="form-label">Your Phone</label>
                        <input ref={refPhone} type="number" className="form-control" id="phone" required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="add" className="form-label">Your Address</label>
                        <input ref={refAdd} type="text" className="form-control" id="add" required />
                    </div>
                    <div className="my-3">
                        <label htmlFor="booktime" className="form-label">Your Suitable Date</label>
                        <input ref={refDate} type="date" className="form-control" id="booktime" required />
                    </div>
                    <div className='w-50 mx-auto'>
                        <button type="submit" className="mt-4 btn btn-danger w-100">Book This Package</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TourDetails;