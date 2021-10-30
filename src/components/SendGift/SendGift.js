import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import "./SendGift.css"

const SendGift = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth()
    const onSubmit = data => {
    fetch("http://localhost:5000/sendgift", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(result => console.log(result));
    };
    return (
        <Container>
            <Col md={6}>
                <h1>Full-Fill this form to send gift</h1>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
        </Container>
    );
};

export default SendGift;