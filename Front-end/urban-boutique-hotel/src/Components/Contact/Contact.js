import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import Footer from "../../Global/Components/Footer";

const Contact = () => {
  return (
    <>
      <div className="contactHero">
        <div className="banner">
          <h1>Contact</h1>
          <div></div>
          <ScrollLink
            to="contact-section"
            smooth={true}
            duration={1000}
            offset={-100}
            className="btn-primary"
          >
            Contact us to book
          </ScrollLink>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
