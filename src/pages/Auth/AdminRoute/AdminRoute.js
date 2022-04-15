import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../../auth/useAuth';

const AdminRoute = () => {
    const { user, admin } = useAuth();
    let location = useLocation();

    if (user.email && admin) {
        return <Outlet />;
    }

    return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;