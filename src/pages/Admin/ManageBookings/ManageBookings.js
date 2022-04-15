import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';

const ManageBookings = () => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch("https://jad-travels.herokuapp.com/bookings")
            .then(res => res.json())
            .then(data => setCarts(data))
    }, []);

    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch("https://jad-travels.herokuapp.com/tours")
            .then(res => res.json())
            .then(data => setTours(data))
    }, []);

    const updateStatus = (id) => {
        const url = `https://jad-travels.herokuapp.com/bookings/${id}`
        axios.put(url)
            .then(res => {
                if (res.data.modifiedCount) {
                    alert('Booking Accepted Sucessfully!!!');
                    // fetching API data again to refresh
                    fetch("https://jad-travels.herokuapp.com/bookings")
                        .then(res => res.json())
                        .then(data => setCarts(data));
                }
            })
    }

    const cancelBooking = (id) => {
        const proceed = window.confirm("Are you sure , you want to delete this booking?");
        if (proceed) {
            const url = `https://jad-travels.herokuapp.com/bookings/${id}`
            axios.delete(url)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert("Booking Deleted Successfully!!");
                        const remainingBooking = carts.filter(cart => cart._id !== id);
                        setCarts(remainingBooking);
                    }
                })
        }
    }

    return (
        <div className='row fullscreen'>
            <div className='col-3 bg-dark p-0'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-9 bg-light p-5'>
                <div>
                    <h1 className='text-center text-danger mb-3'>Manage Bookings</h1>
                    <section>
                        <div className="row g-4">
                            {
                                tours.length === 0 ?
                                    (
                                        <Loading></Loading>
                                    )
                                    :
                                    carts.map((cart) => (
                                        <div key={cart._id} className="p-2 col-lg-4 col-md-6 text-start">
                                            <div className="p-3 shadow  h-100 card-hover">
                                                <div style={{ height: '180px', overflow: 'hidden' }} className='rounded-3'>
                                                    <img style={{ height: 'auto', width: '100%' }} className="img-fluid rounded-3" src={cart.img} alt="cart img" />
                                                </div>
                                                <h5 className="text-danger mt-3">Client Details: </h5>
                                                <div className="p-2 mb-2 bg-light">
                                                    <p className="my-0 d-block fw-light text-second">Name: <span className='fw-bold'>{cart.name}</span></p>
                                                    <p className="my-0 d-block fw-light text-second">Email: {cart.email}</p>
                                                    <p className="my-0 d-block fw-light text-second">Phone: {cart.phone}</p>
                                                    <p className="my-0 d-block fw-light text-second">Address: {cart.address}</p>
                                                </div>
                                                <h5 className="text-danger">Booking Details: </h5>
                                                <div className="p-2 bg-light">
                                                    <p className="my-0 d-block fw-light text-second">Package: <span className='fw-bold'>{cart.title}</span></p>
                                                    <p className="my-0 d-block fw-light text-second">Cost: ${cart.cost}k</p>
                                                    {
                                                        cart.status ?
                                                            (<p>Status: <span className="py-0 text-success fw-bold">Accepted</span></p>)
                                                            :
                                                            (<p>Status: <span className="py-0 text-danger fw-bold">Pending</span></p>)
                                                    }
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    {
                                                        cart.status ?
                                                            (<span className='mt-2'><span className="btn btn-success disabled">Accepted</span></span>)
                                                            :
                                                            (<span className='mt-2'><span onClick={() => updateStatus(cart._id)} className="btn btn-outline-dark btn-sm">Click To Accept</span></span>)
                                                    }
                                                    <span className="mt-2 text-center">
                                                        <Link onClick={() => cancelBooking(cart._id)} className="btn btn-outline-dark btn-sm" to="/admin/managebookings">Delete Booking</Link>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                            }
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ManageBookings;