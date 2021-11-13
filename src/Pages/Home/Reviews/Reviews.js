import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../../images/quote.png";
import Rating from "@mui/material/Rating";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://powerful-beyond-32668.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setIsLoading(false);
      });
  }, [setIsLoading]);

  return (
    <div className="my-5 py-5 bg-light">
      <h5 className="text-dark fw-light">Don’t Hear From Us Only</h5>
      <h2 className="text-primary">What People Say About Us</h2>
      <hr className="border-bottom border-4 border-primary w-25 mx-auto" />
      <Container>
        <Row className="g-4 py-3 my-4">
          {reviews.map((review) => (
            <Col key={review._id} className="" md={4}>
              <div className="shadow rounded-3 p-3 d-flex justify-content-center align-items-start">
                <img className="me-3" src={img} alt="" />
                <div>
                  <h5 className="fw-light text-start">{review.message}</h5>
                  <p className="mb-0 fst-italic text-start">
                    {review.scootyName}
                  </p>
                  <p className="fst-italic text-start">{review.model}</p>
                  <h4 className="text-start">{review.name}</h4>
                  <div className="d-flex justify-content-between  align-items-center">
                    <p className="text-start text-warning">
                      <Rating
                        name="read-only"
                        value={review.rating}
                        precision={0.1}
                        readOnly
                      />
                    </p>
                    <p className="text-start">({review.rating} out of 5)</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
