import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Menu.css"

const Menu = () => {
    const {user, logOut} = useAuth();
    return (
        <Navbar className="navbar" sticky="top" expand="lg">
            <Container className="">
                <Navbar.Brand  as={Link} to="/">FDFP-<span className="org">ORG</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/freeitems">Free-Items</Nav.Link>
                    <Nav.Link as={Link} to="/sendgift">Send-Gift</Nav.Link>
                    <Nav.Link as={Link} to="/getgift">Added-Gift</Nav.Link>
                    <Nav.Link as={Link} to="/aboutus">About-Us</Nav.Link>
                </Nav>
                { user?.email ? <Nav>
                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                    <Navbar.Text> Hello: {user?.displayName}</Navbar.Text>
                    <button onClick={logOut} className="btn btn-danger ms-2">Logout</button>
                </Nav> : <Nav>
                    <Nav.Link as={Link} to="/login"><button className="btn btn-success ms-2 py-2 px-3">Login</button></Nav.Link>
                    <Nav.Link as={Link} to="/register"><button className="btn btn-primary ms-2 p-2">Register</button></Nav.Link>
                </Nav>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;