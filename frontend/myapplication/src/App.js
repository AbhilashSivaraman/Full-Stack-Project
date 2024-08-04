// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignUpForm />} />
                <Route path="/" element={<PrivateRoute element={<Home />} />} />
            </Routes>
        </Router>
    );
}

export default App;
