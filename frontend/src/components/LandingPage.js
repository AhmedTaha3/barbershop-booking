import React from "react";
import "./LandingPage.css"; // Custom styles

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="container text-center py-5">
        <h1 className="text-white mb-4">Welcome to Our Barbershop</h1>
        <p className="text-white fs-5">
          Experience the best grooming services in town with our professional barbers.
        </p>
        <div className="row my-5">
          <div className="col-md-6 mx-auto">
            <h3 className="text-white mb-3">Our Location</h3>
            <iframe
              title="Barbershop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.214654770603!2d-5.552241623172433!3d33.89563947739508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda0ff287d34d94b%3A0xf17e40c660a8ec4f!2sBarbershop!5e0!3m2!1sen!2sma!4v1694705884714!5m2!1sen!2sma"
              className="w-100"
              height="300"
              style={{ border: "1px solid white" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <button
          className="btn btn-primary btn-lg mt-3"
          onClick={() => (window.location.href = "/booking")}
        >
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
