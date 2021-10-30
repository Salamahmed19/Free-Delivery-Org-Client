import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div>
            <Container className="my-5">
                <Row className="d-flex">
                    <Col md={6}>
                        <img className="img-fluid" src="https://www.dreamhost.com/blog/wp-content/uploads/2020/11/310ad4be-c64b-40c2-af35-7aeaf85dcb96_Great-about-us-pages-opt-750x498.jpg" alt="" />
                    </Col>
                    <Col md={6}>
                        <h3 className="text-center">About Us</h3>
                        <p>Hey, we are more people here who are not like other normal people who are not involved in helping others, we are not the best but we are trying to make the most of them in our common world. Join us today and start with us</p>                       
                        <li>It's not the amount that matters but the meaning behind your donation.</li>
                        <li>Giving a little is better than not giving at all</li>
                        <li>Even the smallest gift to charity can make a huge impact.</li>
                        <li>To give is to invest yourself in the life of someone else.</li>
                        <li> might not be able to buy happiness, but giving it away can.</li>
                        <li>The value of money isn't what it can buy, but how many it can help.</li>
                        <li>No gift is ever a wasted effort as long as it's given with your whole heart.</li>
                        <li>Journey to finding your best self starts by giving your best self to others.</li>
                        <li>No gift is too big or too small. What's important is we help them all.</li>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;