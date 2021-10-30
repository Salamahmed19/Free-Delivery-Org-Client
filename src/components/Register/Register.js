import React from 'react';
import { Col, Container, Form, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from "react-router";
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { handleEmailChange, handleNameChange, error, setUser, setIsLoading, handleRegistration, handlePasswordChange, signInUsingGoogle } = useAuth();
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
                    <button onClick={handleGoogleLogin} className="btn btn-primary">Login with Google</button>
                </Col>
                <Col md={6}>
                    <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=338&ext=jpg" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Register;