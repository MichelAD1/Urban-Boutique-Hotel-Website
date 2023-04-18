import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import Footer from "../../Global/Components/Footer";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaFax } from "react-icons/fa";

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
      <div className="contact-section">
        <div className="side-information">
          <div className="side-info-box">
            <div className="contact-icons">
              <BsFillTelephoneFill />
            </div>
            <div className="contact-stats">
              <div className="contact-stat">Phone Number</div>
              <div className="contact-paragraph">+43 1 526 19 28</div>
            </div>
          </div>
          <div className="side-info-box">
            <div className="contact-icons">
              <MdEmail />
            </div>
            <div className="contact-stats">
              <div className="contact-stat">Email Address</div>
              <div className="contact-paragraph">pension@hargita.at</div>
            </div>
          </div>
          <div className="side-info-box">
            <div className="contact-icons">
              <FaFax />
            </div>
            <div className="contact-stats">
              <div className="contact-stat">Fax Address</div>
              <div className="contact-paragraph">1070 Wien </div>
            </div>
          </div>
          <div className="side-info-box">
            <div className="contact-icons location">
              <MdLocationPin />
            </div>
            <div className="contact-stats">
              <div className="contact-stat">Location</div>
              <div className="contact-paragraph">
                Andreasgasse 1, 1070 Vienna
              </div>
            </div>
          </div>
        </div>
        <div className="message-form">
          <div className="message-header">
            <h1>Send Message</h1>
          </div>
          <div className="message-paragraph">
            <p>
              We're excited to welcome you to our hotel! Reach out to us to
              learn more about our accommodations and book your stay.
            </p>
          </div>
          <form className="message-inputs">
            <div className="message-name-email">
              <div className="message-input">
                <input type="text" id="name" name="name" placeholder="Name" />
              </div>
              <div className="message-input">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="message-input">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div className="message-textarea">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
