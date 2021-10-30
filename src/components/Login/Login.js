import React from 'react';
import { Col, Container, Form, Nav, Row } from 'react-bootstrap';
import { useHistory, useLocation } from "react-router";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { handleEmailChange, handleLogin, error, setUser, setIsLoading, handlePasswordChange, signInUsingGoogle } = useAuth();
    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || "/home"

    const handleGoogleLogin= () => {
        signInUsingGoogle()
        .then(result => {
            setUser(result.user);
            history.push(url)
        })
        .finally(() => setIsLoading(false));
    }

    return (
        <Container>
            <Row className="m-5 p-5">
                <Col md={6}>
                    <h3>Enter your login details</h3>
                    <Form className="form mt-5"  onSubmit={handleLogin}>
                        <input onBlur={handleEmailChange} type="email" placeholder="email" required></input>
                        <br />
                        <input onBlur={handlePasswordChange} type="password" placeholder="password" ></input>
                        <br />
                        <div className="row mb-3 text-danger">{error ? "Invalid User" : ""}</div>
                        <button type="submit" className="btn btn-success">Login</button>
                        <Nav.Link as={Link} to="/register">New member? Register</Nav.Link> 
                    </Form>
                    <button onClick={handleGoogleLogin} className="btn btn-success">Login with Google</button>
                </Col>
                <Col md={6}>
                    <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=338&ext=jpg" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;