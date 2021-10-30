import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Header.css"

const Header = () => {
    const {user} = useAuth();
    return (
        <div className="header">
            <Container className="d-flex">
                <Row>
                    <Col md={6} sm={12} className="p-4">
                        <h2 className="text-center mt-3">FREE Delivery for FREE Products</h2>
                        <h4 className="text-center mt-3">Sharing and caring organization</h4>
                        <p className=" mt-3">In our organization you sent anything for other people and get anything that your love from other people. You will able to get when you shomething share for other.</p>
                        <h5 className=" mt-3">Join us today and enjoy your moments with happiness</h5>
                        <div className="mt-3 text-center">
                            {user?.email ? <Link to="/dashboard"><button className="btn btn-success">Dashboard</button></Link> :<Link to="/register"><button className="btn btn-primary">Register</button></Link>}
                        </div>
                    </Col>
                    <Col md={6} sm={12} className="p-4">
                        <img className="img-fluid" src="https://icdn.digitaltrends.com/image/digitaltrends/roadie-goodwill-donations-bg-720x720.jpg" alt="" />
                    </Col>
                </Row>
        </Container>
        </div>
    );
};

export default Header;