import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../../auth/useAuth';

const PrivateRoute = () => {
    const { user } = useAuth();
    let location = useLocation();

    if (user.email) {
        return <Outlet />;
    }
    
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;