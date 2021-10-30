import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const {user} = useAuth();
    return (
        <Container>
            <Row className="mt-5">
                <Col md={5} sm={6}>
                    <h3 className="text-center">Members Dashboard</h3>
                    <div className="border rounded border-dark">
                        {user?.displayName && <div className="p-3">{user.displayName}</div> }
                    </div>
                </Col>
                <Col md={7} sm={6}>
                    <h4 className="text-center">Full Dashboard Details</h4>
                    <div className="border rounded border-dark">
                        <h2>sgdsgds</h2>
                        <h2>sgdsgds</h2>
                        <h2>sgdsgds</h2>
                        <h2>sgdsgds</h2>
                        <h2>sgdsgds</h2>
                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default Dashboard;