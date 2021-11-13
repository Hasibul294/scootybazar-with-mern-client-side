import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../../images/attractive/worldwide.png";
import img2 from "../../../images/attractive/original.png";
import img3 from "../../../images/attractive/offer.png";
import img4 from "../../../images/attractive/cleanup.png";

const Attractive = () => {
  return (
    <>
      <h2 className="text-primary text-center">WHY YOU CHOOSE US</h2>
      <hr className="border-bottom border-4 border-primary w-25 mx-auto" />
      <div className="bg-success p-5">
        <Container>
          <Row className="g-4 py-3 text-white">
            <Col md={3}>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="bg-primary rounded-3 p-3 me-3"
                  src={img1}
                  alt=""
                />
                <div>
                  <h2 className="">Over 25</h2>
                  <h5>Countries</h5>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="bg-primary rounded-3 p-3 me-3"
                  src={img2}
                  alt=""
                />
                <div>
                  <h2>100%</h2>
                  <h5>Genuine Product</h5>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="bg-primary rounded-3 p-3 me-3"
                  src={img3}
                  alt=""
                />
                <div>
                  <h2>Provide</h2>
                  <h5>Best Discount</h5>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="bg-primary rounded-3 p-3 me-3"
                  src={img4}
                  alt=""
                />
                <div>
                  <h2>Best</h2>
                  <h5>Sale Service</h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Attractive;
