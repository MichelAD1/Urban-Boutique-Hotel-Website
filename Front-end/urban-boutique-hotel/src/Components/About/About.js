import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../../Global/Components/Footer";

import aboutImage1 from "../../assets/images/about-image1.jpg";
import aboutImage2 from "../../assets/images/about-image2.jpeg";

const About = () => {
  return (
    <>
      <div className="servicesHero">
        <div className="banner">
          <h1>About</h1>
          <div></div>
          <Link to="/about" className="btn-primary">
            Discover the Hotel
          </Link>
        </div>
      </div>
      <div className="about">
        <section class="about-section">
          <div class="about-img">
            <div className="about-img1">
              <img src={aboutImage2} alt="" class="about-image1" />
            </div>
            <div className="about-img2">
              <img src={aboutImage1} alt="" class="about-image2" />
            </div>
          </div>
          <div class="about-description">
            <div class="heading">
              <h5>RAISING COMFOMRT TO THE HIGHEST LEVEL</h5>
            </div>
            <h2>Discover the Hotel</h2>
            <p>
              Our pension is located in a typical Wilhelminian style house on
              the Mariahilferstrasse. The guesthouse is spread over 3 floors and
              offers 30 rooms &amp; 2 apartments with different room &amp; price
              categories. Each of our rooms is different but furnished with
              attention to detail. High-quality mattresses and individual
              furniture identify us.
            </p>
            <p>
              Linger in our breakfast room and enjoy a rich buffet breakfast
              before setting out to explore the city from our fabulous location.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default About;
