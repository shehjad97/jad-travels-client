import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../auth/useAuth';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';

const MyCart = () => {
    const { user } = useAuth();
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch(`https://jad-travels.herokuapp.com/bookings?email=${user.email}`)
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [user.email]);

    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch("https://jad-travels.herokuapp.com/tours")
            .then(res => res.json())
            .then(data => setTours(data))
    }, []);

    const cancelBooking = id => {
        const proceed = window.confirm("Are you sure , you want to delete this booking?");
        if (proceed) {
            const url = `https://jad-travels.herokuapp.com/bookings/${id}`
            axios.delete(url)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert("Booking Cancelled Successfully!!");
                        const remainingBooking = carts.filter(cart => cart._id !== id);
                        setCarts(remainingBooking);
                    }
                })
        }
    }

    return (
        <div>
            <Header></Header>
            <section className="container mt-2 mb-5 text-center">
                <h1 className='text-center text-danger mt-5 mb-3'>My Bookings</h1>
                <div className="row g-4">
                    {
                        tours.length === 0 ?
                            (
                                <Loading></Loading>
                            )
                            :
                            carts.map((cart) => (
                                <div key={cart._id} className="p-2 col-xl-4 col-lg-6 text-start">
                                    <div className="p-3 shadow h-100 card-hover">
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
                                        <div className="p-2 mb-2 bg-light">
                                            <p className="my-0 d-block fw-light text-second">Package: <span className='fw-bold'>{cart.title}</span></p>
                                            <p className="my-0 d-block fw-light text-second">Cost: ${cart.cost}k</p>
                                            {
                                                cart.status ?
                                                    (<p>Status: <span className="py-0 text-success fw-bold">Accepted</span></p>)
                                                    :
                                                    (<p>Status: <span className="py-0 text-danger fw-bold">Pending</span></p>)
                                            }
                                        </div>
                                        <div className="mt-4 text-center">
                                            <Link onClick={() => cancelBooking(cart._id)} className="btn btn-outline-danger" to="/mycart">Cancel Booking</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default MyCart;