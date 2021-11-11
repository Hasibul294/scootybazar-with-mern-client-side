import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-dark p-3 text-white">
        <div className="py-5 d-lg-flex justify-content-around">
          <div>
            <img style={{ width: "50px", marginLeft: "5px" }} src="" alt="" />
            <h3>
              Tour.
              <span className="text-color">Ranger</span>
            </h3>
            <p className="mb-0">"Never loos hope,</p>
            <p className="mt-0">Never stop travelling"</p>
          </div>
          <div>
            <p>About Tour Ranger</p>
            <p>Read Our Blog</p>
            <p>Sign up to Discount</p>
            <p>Add your Package</p>
          </div>
          <div>
            <p>Get Help</p>
            <p>Read FAQs</p>
            <p>Views All Cities</p>
            <p>Hotel Near Me</p>
          </div>
        </div>
        <p>Follow Us</p>
        <p className="d-md-flex justify-content-center">
          <i className="fab fa-google me-3 me-lg-5"></i>
          <i className="fab fa-facebook me-3 me-lg-5"></i>
          <i className="fab fa-twitter me-3 me-lg-5"></i>
          <i className="fab fa-instagram-square me-3 me-lg-5"></i>
        </p>
      </div>
      <p className="mb-0 p-3 text-center text-white bg-primary">
        Copyright<i className="far fa-copyright"></i> 2025 Tour.Ranger All right
        reserved.
      </p>
    </>
  );
};

export default Footer;
