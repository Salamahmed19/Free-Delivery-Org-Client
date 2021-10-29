import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import "./SendGift.css"

const SendGift = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Container>
            <Col md={6}>
                <h1>Full-Fill this form to send gift</h1>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue="name" {...register("name")} />
                    <br />
                    <input defaultValue="email" {...register("email")} />
                    <br />
                    <input placeholder="address" {...register("address")} />
                    <br />
                    <input placeholder="items-category" {...register("items-category", { required: true })} />
                    <br />
                    <input placeholder="items-name" {...register("items-name", { required: true })} />
                    <br />
                    <input placeholder="items-image" {...register("items-image", { required: true })} />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <button className="btn btn-info" type="submit">Submit</button>
                </form>
            </Col>
        </Container>
    );
};

export default SendGift;