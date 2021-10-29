import React from 'react';
import { Col, Container, Form, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { handleEmailChange, handleLogin, error, handlePasswordChange, signInUsingGoogle } = useAuth();
    return (
        <Container>
            <Col md={6}>
                <h3>Enter your login details</h3>
                <Form className="form"  onSubmit={handleLogin}>
                    <input onBlur={handleEmailChange} type="email" placeholder="email" required></input>
                    <br />
                    <input onBlur={handlePasswordChange} type="password" placeholder="password" ></input>
                    <br />
                    <div className="row mb-3 text-danger">{error ? "Invalid User" : ""}</div>
                    <button type="submit" className="btn btn-success">Login</button>
                    <Nav.Link as={Link} to="/register">New member? Register</Nav.Link> 
                </Form>
                <button onClick={signInUsingGoogle} className="btn btn-success">Login with Google</button>
            </Col>
        </Container>
    );
};

export default Login;