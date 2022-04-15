import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';

const ToursList = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch("https://jad-travels.herokuapp.com/tours")
            .then(res => res.json())
            .then(data => setTours(data))
    }, []);

    return (
        <>
            <div className="container py-5">
                <h1 className='text-center text-danger mb-3'>Tour Packages</h1>
                <div className="row">
                    {
                        tours.length === 0 ?
                            (
                                <Loading></Loading>
                            )
                            :
                            (
                                tours.map((tour) => (
                                    <div className="col-lg-4 col-md-6 p-2">
                                        <div className='shadow h-100 rounded-3 card-hover'>
                                            <div style={{ height: '180px', overflow: 'hidden' }} className='rounded-3'>
                                                <img style={{ height: 'auto', width: '100%' }} className="img-fluid rounded-3" src={tour.img} alt="" />
                                            </div>
                                            <div className='p-3'>
                                                <div className='mb-3'>
                                                    <h4 className='mb-0'>{tour.title}</h4>
                                                    <h5 className='text-secondary'><i className='pe-2 fas fa-map-marker-alt'></i>{tour.location}</h5>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <h5>${tour.cost}k</h5>
                                                    <h5>{tour.duration} Days Tour</h5>
                                                </div>
                                                <Link className="btn btn-danger my-1" to={`/tours/${tour._id}`}>Package Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                    }
                </div>
            </div>
        </>
    );
};

export default ToursList;