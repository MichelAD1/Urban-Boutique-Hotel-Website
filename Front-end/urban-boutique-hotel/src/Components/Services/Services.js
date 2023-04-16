import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Services = () => {
  return (
    <>
      <div className="servicesHero">
        <div className="banner">
          <h1>Services</h1>
          <div></div>
          <Link to="/services" className="btn-primary">
            Discover our exclusive packages
          </Link>
        </div>
      </div>
      <div className="service-item">
        <div className="service-image-container">
          <img
            src={require("../../assets/images/breakfast.jpg")}
            alt="image"
            className="service-image"
          />
        </div>
        <div className="service-content">
          <h3 className="service-title">BREAKFAST</h3>
          <p className="service-description">
            Start the day with a rich breakfast. Freshly prepared daily, we
            offer our guests a well-balanced meal. From 07:30 to 10:00 we serve
            a buffet in our breakfast room. If you want a "breakfast to go"
            instead of breakfast, our staff can also prepare you for it.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
