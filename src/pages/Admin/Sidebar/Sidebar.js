import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div class="d-flex flex-column flex-shrink-0 pt-3 px-5 text-dark bg-white h-100">
                <Link to="/home" class="text-dark text-decoration-none">
                    <div class="fs-2 text-center text-danger">Jad Travels</div>
                </Link>
                <hr />
                <ul class="nav nav-pills flex-column mb-auto">
                    <li>
                        <NavLink to="/admin/managebookings" className={(navData) => navData.isActive ? "nav-link text-danger bg-none fs-5 fw-bold" : "nav-link text-dark bg-none fs-5"}>Manage Bookings</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/addpackage" className={(navData) => navData.isActive ? "nav-link text-danger bg-none fs-5 fw-bold" : "nav-link text-dark bg-none fs-5"}>Add Package</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;