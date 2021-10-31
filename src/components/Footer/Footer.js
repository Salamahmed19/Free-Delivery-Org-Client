import React from 'react';
import { Container } from 'react-bootstrap';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer" expand="lg">
            <Container  className=" text-center">
            <p>It's a Sharing and caring organization &copy; 2021 All rights reserved.</p>
            </Container>
        </div>
    );
};

export default Footer;