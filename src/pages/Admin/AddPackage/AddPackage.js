import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';

const AddPackage = () => {

    const refTitle = useRef();
    const refLocation = useRef();
    const refImg = useRef();
    const refDescription = useRef();
    const refCost = useRef();
    const refDuration = useRef();
    const navigate = useNavigate();

    const handleAddNewTour = (e) => {
        const title = refTitle.current.value;
        const location = refLocation.current.value;
        const img = refImg.current.value;
        const description = refDescription.current.value;
        const cost = parseFloat(refCost.current.value);
        const duration = parseInt(refDuration.current.value);

        const newTour = { title, location, img, description, cost, duration };

        axios.post("https://jad-travels.herokuapp.com/tours", newTour)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Tour Added Suceessfully!!");
                    navigate("/tours");
                }
            })
        e.preventDefault();
    }

    return (
        <div className='row fullscreen'>
            <div className='col-3 bg-dark p-0'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-9 bg-light p-5'>
                <h1 className="mb-1 text-center text-danger">Add A New Tour</h1>
                <div className="container mt-4" >
                    <div className="row">
                        <form onSubmit={handleAddNewTour} className="col-12 col-md-10 col-lg-10 bg-light rounded py-1 px-4 mx-auto">
                            <div className="my-3">
                                <input ref={refTitle} type="text" className="form-control" id="title" placeholder=" Title" required />
                            </div>
                            <div className="my-3">
                                <input ref={refImg} type="url" className="form-control" id="img" placeholder=" Image URL" required />
                            </div>
                            <div className="my-3">
                                <input ref={refLocation} type="text" className="form-control" id="location" placeholder=" Destination Name" required />
                            </div>
                            <div className="my-3">
                                <input ref={refDuration} type="number" className="form-control" id="duration" placeholder=" Number Of Days" required />
                            </div>
                            <div className="my-3">
                                <input ref={refCost} type="text" className="form-control" id="cost" placeholder="Package Price" required />
                                <small className='text-danger ms-2'>*Price input will be converted into thousands</small>
                            </div>
                            <div className="my-3">
                                <textarea ref={refDescription} className="mt-3 form-control" rows="4" id="description" placeholder=" Description" required />
                            </div>

                            <button type="submit" to="/tours" className="px-4 py-2 mx-auto mt-3 fs-6 btn d-block btn-danger">Add New Package</button>
                        </form>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default AddPackage;