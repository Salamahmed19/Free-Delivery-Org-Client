import React, { useEffect, useState } from 'react';
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
const GetGift = () => {
    const [items, setItems] = useState([])
    const [deleted, setDeleted] = useState(null);
    const [proccessed, setProccessed] = useState(null);

    useEffect( () => {
        fetch('http://localhost:5000/getitems')
        .then (res => res.json())
        .then (data => setItems(data))
    },[deleted, proccessed])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteitem/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
                setDeleted(true);
                alert("Items is canceled!");
            } 
            else {
                setDeleted(false);
            }
          });
      };

      const handleUpdateStatus = index => {
        const data = items[index];
          fetch('http://localhost:5000/updatestatus', {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (data.modifiedCount) {
                    setProccessed(true);
                  }
                  else {
                    setProccessed(false);
                  }
            });

      }

    return (
        <Container className="mt-4">
                <h3 className="text-center">Review your gift and process it to delivery</h3>
                <Row>
                {
                    items.map((item, index) => <Col md={4} key={item._id}
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
                            <ListGroupItem>Status: {item.status}</ListGroupItem>
                            </ListGroup>
                            <div className="text-center m-2">
                                <button onClick={() => handleUpdateStatus(index)} className="btn btn-success">Click to process</button>
                                <button onClick={() => handleDelete(item._id)} className="btn btn-danger">Click to cancel</button>
                            </div>
                        </Card>
                    </Col>
                  )
                }
                </Row>
            </Container>
    );
};

export default GetGift;