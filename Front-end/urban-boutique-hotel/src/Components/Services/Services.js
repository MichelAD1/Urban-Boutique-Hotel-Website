import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../../Global/Components/Footer";

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
      <div className="services-container">
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
              Begin your day with a delicious and nutritious breakfast, freshly
              prepared daily. We serve a buffet in our breakfast room from 07:30
              to 10:00. If you prefer a "breakfast to go", our staff will gladly
              prepare it for you.
            </p>
          </div>
        </div>
        <div className="service-item">
          <div className="service-content">
            <h3 className="service-title">GROUP OFFERS</h3>
            <p className="service-description">
              Whether you're traveling with a school group, a professional
              delegation, or for a wedding, we have customized group packages to
              fit your needs. Contact us to learn more about our tailored offers
              for groups.
            </p>
          </div>
          <div className="service-image-container-inversed">
            <img
              src={require("../../assets/images/group-offers.jpg")}
              alt="image"
              className="service-image"
            />
          </div>
        </div>
        <div className="service-item">
          <div className="service-image-container">
            <img
              src={require("../../assets/images/parking.jpg")}
              alt="image"
              className="service-image"
            />
          </div>
          <div className="service-content">
            <h3 className="service-title">PARKING</h3>
            <p className="service-description">
              To find a parking space in Vienna is very tedious and expensive.
              Thanks to our location there is a garage opposite the pension.
              Parking tickets can be purchased at the reception from just €18
              per day.
            </p>
          </div>
        </div>
        <div className="service-item">
          <div className="service-content">
            <h3 className="service-title">PROMOTIONS</h3>
            <p className="service-description">
              At our establishment, we provide a variety of vouchers and
              promotions that cater to your needs. You have the opportunity to
              save money and enjoy our services depending on the season.
            </p>
          </div>
          <div className="service-image-container-inversed">
            <img
              src={require("../../assets/images/promotions.jpg")}
              alt="image"
              className="service-image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
