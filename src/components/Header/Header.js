import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user} = useAuth();
    return (
        <Container>
            <Col className="bg-info p-3">
                <h2 className="text-center mt-3">FREE Delivery for FREE Products</h2>
                <h4 className="text-center mt-2">Sharing and caring organization</h4>
                <p>In our organization you sent anything for other people and get anything that your love from other people. You will able to get when you shomething share for other.</p>
                <div className="d-flex">
                    <h5 className=" me-auto">Join us today and enjoy your moments with happiness</h5>
                    {user?.email ? <Link to="/dashboard"><button className="btn btn-success">Dashboard</button></Link> :<Link to="/register"><button className="btn btn-primary">Register</button></Link>}
                </div>
            </Col>
        </Container>
    );
};

export default Header;