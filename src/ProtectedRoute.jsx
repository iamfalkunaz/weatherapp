import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const { Component } = props;
    const navigate = useNavigate();

    // protected Route
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/signin', { replace: true });
        }
       
    }, [navigate]);
    if (!localStorage.getItem('token')) {
        return null;
    }

    return (
        <div>
            <Component />
        </div>
    );
};

export default ProtectedRoute;
