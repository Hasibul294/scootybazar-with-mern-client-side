import React from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <Container>
      <div className="row g-2 my-5 text-start">
        <div className="col-md-4">
          <p className="text-color fw-bold">Information</p>
          <p className=" mb-0">Contact Info.</p>
          <h3>Connect With Us</h3>
          <hr className="border-bottom border-4 border-primary w-50" />
          <p className="fw-bold">Information</p>
          <p>
            <i className="text-color fas fa-phone-alt"></i> (+064)-342-68382
          </p>
          <p>
            <i className="text-color fas fa-mobile-alt"></i> (+880)-184-55600
          </p>
          <p>
            <i className="text-color far fa-envelope"></i>{" "}
            <a href="hasibulhasan294@gmail.com">hasibulhasan@gmail.com</a>
          </p>
        </div>
        <div className="col-md-8">
          <p className="text-color mb-0">Drop Us A Line</p>
          <h3>We’d Love To Hear From You</h3>
          <hr className="border-bottom border-4 border-primary w-50 mb-4" />
          <form className="row g-3 bg-secondary bg-opacity-50 rounded pb-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Name
              </label>
              <input
                required
                type="name"
                className="form-control"
                id="inputEmail4"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Email
              </label>
              <input
                required
                type="email"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Subject
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="inputAddress"
              />
            </div>
            <div className="col-12">
              <label for="exampleFormControlTextarea1" className="form-label">
                Example textarea
              </label>
              <textarea
                required
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn bg-orange text-white">
                Send Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
