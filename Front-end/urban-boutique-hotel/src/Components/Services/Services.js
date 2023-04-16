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
    </>
  );
};

export default Services;
