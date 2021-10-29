import React from 'react';
import { Col, Container, Form, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { handleEmailChange, handleNameChange, error, handleRegistration, handlePasswordChange, signInUsingGoogle } = useAuth();
    return (
        <Container>
            <Col md={6}>
                <h3>Enter your details</h3>
                <Form  onSubmit={handleRegistration} className="form">
                    <input  onBlur={handleNameChange} type="text" placeholder="name" ></input>
                    <br />
                    <input onBlur={handleEmailChange} type="email" placeholder="email" ></input>
                    <br />
                    <input onBlur={handlePasswordChange} type="password" placeholder="password" ></input>
                    <br />
                    <div className="row mb-3 text-danger">{error ? error : ""}</div>
                    <button  type="submit" className="btn btn-primary">Register</button>
                    <Nav.Link as={Link} to="/login">Already member? Login</Nav.Link>
                </Form>
                <button onClick={signInUsingGoogle} className="btn btn-primary">Login with Google</button>
            </Col>
        </Container>
    );
};

export default Register;