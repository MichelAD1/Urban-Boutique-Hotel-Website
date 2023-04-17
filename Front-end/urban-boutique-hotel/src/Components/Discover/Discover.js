import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import Footer from "../../Global/Components/Footer";

import aboutImage1 from "../../assets/images/about-image1.jpg";
import aboutImage2 from "../../assets/images/about-image2.jpeg";
import galleryImage1 from "../../assets/images/gallery-image1.jpg";
import galleryImage2 from "../../assets/images/gallery-image2.jpeg";

const Discover = () => {
  return (
    <>
      <div className="aboutHero">
        <div className="banner">
          <h1>Discover</h1>
          <div></div>
          <ScrollLink
            to="about-section"
            smooth={true}
            duration={1000}
            offset={-100}
            className="btn-primary"
          >
            Welcome to Our Hotel
          </ScrollLink>
        </div>
      </div>
      <div className="about">
        <section class="about-section" id="about-section">
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
      <div className="gallery">
        <h2>Photo Gallery</h2>
        <div className="gallery-images">
          <div className="gallery-image">
            <img src={galleryImage1} alt="" />
          </div>
          <div className="gallery-image">
            <img src={galleryImage2} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Discover;
