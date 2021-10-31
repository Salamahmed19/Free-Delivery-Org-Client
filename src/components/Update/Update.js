import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const Update = () => {
    const {productID} = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch (`https://shocking-tomb-50590.herokuapp.com/singlepd/${productID}`)
        .then(res=>res.json())
        .then(data => setProduct(data))
    },[])

    const onSubmit = data => {
        fetch(`https://shocking-tomb-50590.herokuapp.com/updatepd/${productID}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      alert("Items is updated!");
      
    };
    return (
        <Container>
            <Row className="my-5">
                <h1>Full-Fill this form to send gift</h1>
                <Col md={6}>
                    <form className="form p-3" onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={product.name} {...register("name")} />
                        <br />
                        <input defaultValue={product.email} {...register("email")} />
                        <br />
                        <input defaultValue={product.address} {...register("address")} />
                        <br />
                        <input defaultValue={product.category} {...register("category")} />
                        <br />
                        <input defaultValue={product.itemName} {...register("itemName")} />
                        <br />
                        <input defaultValue={product.imgUrl} {...register("imgUrl")} />
                        <br />
                        <input defaultValue={product.desc} type="textarea" {...register("desc")} />
                        <br />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <button className="btn btn-info" type="submit">Submit</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Update;