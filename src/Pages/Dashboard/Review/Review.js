import axios from "axios";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://powerful-beyond-32668.herokuapp.com/review", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Review Added Successfully");
          reset();
        }
      });
  };
  return (
    <div className="container p-4">
      <h2 className="mb-5">Please Review Our Scooty</h2>
      <Row className="justify-content-center">
        <Col lg={8}>
          <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} defaultValue={user.displayName} />
            <input
              {...register("scootyName")}
              placeholder="Scooty Name"
              required
            />
            <input
              type="number"
              {...register("model")}
              placeholder="Model"
              required
            />
            <textarea
              {...register("message")}
              placeholder="Your Message"
              required
            />
            <input
              {...register("rating", { min: 0, max: 5 })}
              placeholder="Rating (Out of 5)"
              required
            />
            <input
              className="btn-success border-0 text-white py-2 rounded-pill"
              type="submit"
            />
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Review;
