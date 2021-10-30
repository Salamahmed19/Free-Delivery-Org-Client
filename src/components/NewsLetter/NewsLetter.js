import React from 'react';
import { Container } from 'react-bootstrap';

const NewsLetter = () => {
    return (
            <Container className="pb-5">                
                <h1 className="text-center">NewsLetter</h1>
                <div className="text-center py-3 bg-light">
                    <h4>Stay up to date with our latest news and products</h4>
                    <input className="w-25 me-3" type="text" placeholder="Enter your email"/>
                    <input type="button" value="SUBSCRIBE" />
                    <br />
                    <span>Your email is safe with us. We don't spam</span>
                </div>
            </Container>
    );
};

export default NewsLetter;