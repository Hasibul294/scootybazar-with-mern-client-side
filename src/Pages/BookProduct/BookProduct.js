import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./BookProduct.css";

const BookProduct = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [product, setProduct] = useState();
  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
    data.productName = product.name;
    axios.post("http://localhost:5000/product/booking", data).then((res) => {
      if (res.data.insertedId) {
        alert("Your Order is Confirmed");
        reset();
        history.push("/home");
      }
    });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div className="my-5">
      <h2 className="mb-3 text-color">Book Your Order</h2>
      <hr className="border-bottom border-4 border-success mx-auto w-25" />
      <Container>
        <Row className="g-4 my-3">
          <Col md={7} lg={8}>
            <h4>---Scooty Details---</h4>
            <div>
              <img className="book-image" src={product?.img} alt="" />
              <hr className="text-secondary mb-2" />
              <div className="text-start d-flex justify-content-between align-items-center">
                <h2 className="">
                  <i className="text-success me-2 fas fa-motorcycle"></i>
                  {product?.name}
                </h2>
                <p>
                  <i className="fs-6 fw-lighter me-1 fas fa-calendar-alt"></i>
                  {product?.model}
                </p>
              </div>
              <div className="text-start">
                <hr className="text-secondary mb-2" />
                <h4>Overview</h4>
                <p>{product?.description}</p>
                <hr className="text-secondary mb-2" />
                <h3 className="fw-bold">
                  Cost:
                  <span className="text-danger"> {product?.price}</span>{" "}
                </h3>
                <hr className="text-secondary mb-2" />
                <div className="text-start d-flex justify-content-between">
                  <div>
                    <Rating
                      initialRating={product?.rating}
                      readonly
                      emptySymbol="text-warning far fa-star"
                      fullSymbol="text-warning fas fa-star"
                    />
                    {product?.rating > 4.5 ? (
                      <span> (Excellent)</span>
                    ) : (
                      <span> (Average)</span>
                    )}
                  </div>
                  <p>800+ Review</p>
                </div>
                <hr className="text-secondary mb-2" />
              </div>
            </div>
          </Col>
          <Col md={5} lg={4}>
            <h4>--Order Info--</h4>
            <div className="bg-secondary bg-gradient p-3 rounded">
              <h4 className="text-white">Book This Scooty</h4>
              <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} defaultValue={user.displayName} />
                <input {...register("email")} defaultValue={user.email} />
                <input
                  {...register("address")}
                  placeholder="Your Address"
                  required
                />
                <input
                  type="number"
                  {...register("age", { min: 20, max: 80 })}
                  placeholder="Age (18 to 90)"
                  required
                />
                <textarea {...register("massage")} placeholder="Massage" />
                <p className="text-start text-white mb-0 mt-1">Your Scooty</p>
                <input defaultValue={product?.name} required />
                <input
                  className="bg-success border-0 text-white py-2 rounded-pill"
                  type="submit"
                  value="Confirm"
                />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookProduct;
