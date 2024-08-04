// src/components/Home.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <Container className="home-page d-flex flex-column justify-content-center align-items-center min-vh-100">
            <h1 className="mb-4">Home Dashboard</h1>
            <p>Welcome to the Home Dashboard. You can manage your profile and settings here.</p>
            <Button variant="primary" onClick={handleLogout}>
                Logout
            </Button>
        </Container>
    );
};

export default Home;
