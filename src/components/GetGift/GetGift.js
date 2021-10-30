import React from 'react';
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GetGift = () => {
    return (
        <Container>
                {/* <Row>
                {
                    items.map(item => <Col md={4} key={item._id}
                    >
                        <Card className="my-4" style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={item.imgUrl} />
                            <Card.Body>
                            <Card.Title>{item.itemName}</Card.Title>
                            <Card.Text>{item.desc}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                            <ListGroupItem>Item Category: {item.category}</ListGroupItem>
                            <ListGroupItem>Sender Name: {item.name}</ListGroupItem>
                            <ListGroupItem>Pickup Location: {item.address}</ListGroupItem>
                            </ListGroup>
                            <div className="d-flex py-2">
                            <Card.Link href="#"><Button>Get This Gift Free</Button></Card.Link>
                            <Card.Link as={Link} to="/sendgift"><Button>Wish to Send Gift</Button></Card.Link>
                            </div>
                        </Card>
                    </Col>
                  )
                }
                </Row> */}
            </Container>
    );
};

export default GetGift;