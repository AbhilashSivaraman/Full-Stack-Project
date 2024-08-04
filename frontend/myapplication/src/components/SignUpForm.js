// src/components/SignUpForm.js
import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { register } from '../services/authService';

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(username, password);
            // Optionally redirect to login or show a success message
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="sign-up-form">
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Sign Up
                    </Button>
                    <div className="mt-3 text-center">
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </Form>
            </div>
        </Container>
    );
};

export default SignUpForm;
