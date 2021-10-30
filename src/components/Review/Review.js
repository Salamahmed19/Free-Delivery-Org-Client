import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Carousel, Col, Container, Row } from 'react-bootstrap';

const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [item, setItem] = useState([]);
    const onSubmit = data => {
    fetch("http://localhost:5000/pdrequest", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(result => console.log(result));
    };

    useEffect(() => {
        fetch("http://localhost:5000/reviewitems")
        .then(res => res.json())
        .then(data => setItem(data))
    },[])
    return (
        <Container>
            <Row className="my-5">
                <Col md={6}>
                    <h3 className="text-center">Add something that you need</h3>
                    <form className="form p-4" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Your name"  {...register("name")} />
                    <br />
                    <input placeholder="Product Name" {...register("pdName", { required: true })} />
                    <br />
                    <input placeholder="Image" {...register("img", { required: true })} />
                    <br />
                    <input placeholder="Description" {...register("desc", { required: true })} />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <button className="btn btn-info" type="submit">Submit</button>
                </form>
                </Col>
                <Col md={6}>
                    <h3 className="text-center">Have a look that people need</h3>
                    <Carousel className="p-4">
                        {
                            item.map( pd => <Carousel.Item key={pd._id}>
                                <img
                                className="d-block w-100"
                                src={pd.img}
                                alt="First slide"
                                />
                                <Carousel.Caption className="text-info">
                                <h3>{pd.pdName}</h3>
                                <p>{pd.desc}</p>
                                </Carousel.Caption>
                                <span className="text-center">Request By: {pd.name}</span>
                            </Carousel.Item>)
                        }
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default Review;