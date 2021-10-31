import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const {user} = useAuth();
    const [items, setItem] = useState([])
    const [isDeleted, setIsDeleted] = useState(null);

    useEffect(() => {
        fetch ('http://localhost:5000/freeitems')
        .then(res => res.json())
        .then(data => setItem(data))
    },[isDeleted])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deletepd/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
                setIsDeleted(true);
                alert("File is being deleted!")

            } else {
                setIsDeleted(false);
            }
          });
      };

    return (
        <Container>
            <Row className="mt-5">
                <Col md={4} sm={12}>
                    <h3 className="text-center">Dashboard</h3>
                    <div className="border rounded border-dark">
                        {user?.displayName && <div className="p-3 fw-bold">Logged User: {user.displayName}</div> }
                        <h4 className="ms-5">Added History</h4>
                        <div className="ps-5 fw-bold">
                        <li>Total Product</li>
                        <li>Product Status</li>
                        <li></li>
                        <li></li>
                        <li></li>
                        </div>
                    </div>
                </Col>
                <Col md={8} sm={12}>
                    <h4 className="text-center">Controll all items</h4>
                    <div className="border rounded border-dark">
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Srl</th>
                                    <th>Product Name</th>
                                    <th>Category</th>
                                    <th>Location</th>
                                    <th>Sender</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                                {
                                    items.map((pd, index) =>
                                        <tbody key={pd._id}>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{pd.itemName}</td>
                                                <td>{pd.address}</td>
                                                <td>{pd.category}</td>
                                                <td>{pd.name}</td>
                                                <td><Link to={`/update/${pd._id}`}><small><button className="bg-info">Update</button></small></Link> </td>
                                                <td><small><button className="bg-danger" onClick={()=>handleDelete(pd._id)}>Delete</button></small></td>
                                            </tr>
                                        </tbody>)
                                }
                        </Table>
                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default Dashboard;