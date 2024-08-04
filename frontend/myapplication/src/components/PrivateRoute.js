// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../services/authService';

const PrivateRoute = ({ element }) => {
    const isAuthenticated = !!getToken();
    
    return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
