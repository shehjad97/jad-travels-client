import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {

    const [admin, setAdmin] = useState(false)

    const handleAccess = () => {
        setAdmin(!admin)
    }

    return (
        <>
            {
                admin ?
                    <div>
                        <div className="my-5 py-5 text-center">
                            <h1>This page is not available for general users.</h1>
                            <div className='btn btn-danger mt-4 disabled'><i class="fas fa-user"></i> Admin</div>
                            <div className='my-3 py-4 bg-light container rounded'>
                                <Link className="btn btn-outline-danger mx-3" to="/managebookings">Manage Bookings</Link>
                                <Link className="btn btn-outline-danger mx-3" to="/addpackage">Add Package</Link>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='text-center my-5 py-5'>
                        <h1>This page is not available for general users.</h1>
                        <div onClick={handleAccess} className='btn btn-danger mt-4'>Proceed as an admin</div>
                    </div>
            }
        </>
    );
};

export default Admin;