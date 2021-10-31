import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container>
            <div className="text-center m-5 p-5">
                <p className="fs-1 fw-bold">404 : ERROR</p>
                <p className="fs-2">What are you trying to looking for that not found</p>
                <p className="mt-5 fs-3">Back to<Link to={"/home"}><button className="btn btn-primary ms-2">HOME</button></Link></p>
            </div>
        </Container>
    );
};

export default NotFound;