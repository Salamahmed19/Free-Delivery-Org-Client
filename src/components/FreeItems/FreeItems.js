import React, { useEffect, useState } from 'react';
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FreeItems = () => {
    const [items, setItem] = useState([])

    useEffect(() => {
        fetch ('http://localhost:5000/freeitems')
        .then(res => res.json())
        .then(data => setItem(data))
    },[])

    const collectItems = (index) => {
        const data = items[index];
        data.status ="Pending";
        fetch('http://localhost:5000/reqgift', {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then(res => res.json())
          alert("Product is Added!");
        };
    return (
            <Container className="mt-3">
                <h2 className="text-center fs-1">Wish your dream of products will success</h2>
                <p className="my-3 fs-4">You can get all those items when you became with us as a member. Our goal is for those people who want something for free that have need and send those things to other members as gift items.</p>
                <Row>
                {
                    items.map((item, index) => <Col md={4} sm={6} xs={12} key={item._id}
                    >
                        <Card className="my-4 shadow-lg" style={{ width: '20rem' }}>
                            <Card.Img className="p-3" variant="top" src={item.imgUrl} />
                            <Card.Body>
                            <Card.Title>{item.itemName}</Card.Title>
                            <Card.Text>{item.desc}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                            <ListGroupItem>Item Category: {item.category}</ListGroupItem>
                            <ListGroupItem>Sender Name: {item.name}</ListGroupItem>
                            <ListGroupItem>Pickup Location: {item.address}</ListGroupItem>
                            </ListGroup>
                            <div  className="text-center m-2">
                            <button className="btn btn-primary" onClick={ () => collectItems(index) }>Want This Collect</button>
                            <Card.Link as={Link} to="/sendgift"><button className="btn btn-secondary ms-3">Wish to Send</button></Card.Link>
                            </div>
                        </Card>
                    </Col>
                  )
                }
                </Row>
            </Container>
    );
};

export default FreeItems;