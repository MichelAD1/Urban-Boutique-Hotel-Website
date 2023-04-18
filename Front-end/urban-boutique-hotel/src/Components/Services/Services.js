import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import Footer from "../../Global/Components/Footer";

import breakfastImg from "../../assets/images/breakfast.jpg";
import groupOffersImg from "../../assets/images/group-offers.jpg";
import parkingImg from "../../assets/images/parking.jpg";
import promotionsImg from "../../assets/images/promotions.jpg";

const servicesData = [
  {
    id: 1,
    title: "BREAKFAST",
    description:
      "Begin your day with a delicious and nutritious breakfast, freshly prepared daily. We serve a buffet in our breakfast room from 07:30 to 10:00. If you prefer a 'breakfast to go', our staff will gladly prepare it for you.",
    image: breakfastImg,
  },
  {
    id: 2,
    title: "GROUP OFFERS",
    description:
      "Whether you're traveling with a school group, a professional delegation, or for a wedding, we have customized group packages to fit your needs. Contact us to learn more about our tailored offers for groups.",
    image: groupOffersImg,
  },
  {
    id: 3,
    title: "PARKING",
    description:
      "To find a parking space in Vienna is very tedious and expensive. Thanks to our location there is a garage opposite the pension. Parking tickets can be purchased at the reception from just €18 per day.",
    image: parkingImg,
  },
  {
    id: 4,
    title: "PROMOTIONS",
    description:
      "At our establishment, we provide a variety of vouchers and promotions that cater to your needs. You have the opportunity to save money and enjoy our services depending on the season.",
    image: promotionsImg,
  },
];

const Services = () => {
  return (
    <>
      <div className="servicesHero">
        <div className="banner">
          <h1>Services</h1>
          <div></div>
          <ScrollLink
            to="services-container"
            smooth={true}
            duration={1000}
            offset={-100}
            className="btn-primary"
          >
            Discover our exclusive services
          </ScrollLink>
        </div>
      </div>
      <div className="services-container">
        {servicesData.map((service) => (
          <div className="service-item" key={service.id}>
            {service.id % 2 === 0 ? (
              <>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
                <div className="service-image-container-inversed">
                  <img
                    src={service.image}
                    alt="image"
                    className="service-image"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="service-image-container">
                  <img
                    src={service.image}
                    alt="image"
                    className="service-image"
                  />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Services;
