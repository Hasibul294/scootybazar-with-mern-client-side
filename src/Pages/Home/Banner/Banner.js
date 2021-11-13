import React from "react";
import { Carousel, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import banner1 from "../../../images/banner/banner-1.jpg";
import banner2 from "../../../images/banner/banner-2.jpg";
import banner3 from "../../../images/banner/banner-3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Carousel interval={2000}>
        <Carousel.Item className="item-1">
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption className="text-uppercase">
            <div className="banner-text">
              <h1 className="fst-italic text-start">
                Start your journey with your favorite "sccoty"
              </h1>
              <Nav.Link
                className="banner-btn px-0 d-block text-start"
                as={NavLink}
                to="/products"
              >
                <button className="btn btn-success text-white">Get More</button>
              </Nav.Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
          <Carousel.Caption className="text-uppercase">
            <div className="banner-text">
              <h1 className="fst-italic text-start">
                Start your journey with your favorite "sccoty"
              </h1>
              <Nav.Link
                className="banner-btn px-0 d-block text-start"
                as={NavLink}
                to="/register"
              >
                <button className="btn btn-success text-white">Get More</button>
              </Nav.Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
          <Carousel.Caption className="text-uppercase">
            <div className="banner-text">
              <h1 className="fst-italic text-end">
                Start your journey with your favorite "sccoty"
              </h1>
              <Nav.Link
                className="banner-btn px-0 d-block text-end"
                as={NavLink}
                to="/register"
              >
                <button className="btn btn-success text-white">Get More</button>
              </Nav.Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
