import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import "./SendGift.css"

const SendGift = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth()
    const onSubmit = data => {
    fetch("https://shocking-tomb-50590.herokuapp.com/sendgift", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      alert("Items is Added as Gift!");
    };
    return (
        <Container>
            <Row className="my-5">
                <h1>Full-Fill this form to send gift</h1>
                <Col md={6}>
                    <form className="form p-3" onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.displayName} {...register("name")} />
                        <br />
                        <input defaultValue={user.email} {...register("email")} />
                        <br />
                        <input placeholder="address" {...register("address")} />
                        <br />
                        <input placeholder="item category" {...register("category", { required: true })} />
                        <br />
                        <input placeholder="item Name" {...register("itemName", { required: true })} />
                        <br />
                        <input placeholder="items Image" {...register("imgUrl", { required: true })} />
                        <br />
                        <input placeholder="items Description" {...register("desc", { required: true })} />
                        <br />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <button className="btn btn-info" type="submit">Submit</button>
                    </form>
                </Col>
                <Col md={6}>
                    <img className="img-fluid mt-4 pb-5 rounded" src="https://www.cnet.com/a/img/wwb59XpdJBijssVqfEleIMHJ__k=/940x0/2020/10/15/fba8e36f-7139-4ac7-a4e8-921592cfc260/apple-iphone-gift-wrapping-bow-9068.jpg" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default SendGift;