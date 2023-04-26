import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import Footer from "../../Global/Components/Footer";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaFax } from "react-icons/fa";

//Apis
import SendMessage from "../../api-client/Contact/SendMessage";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [err, setErr] = useState("");

  //validators
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const validateMessage = (message) => {
    return message.length <= 255;
  };
  const validateSubject = (subject) => {
    return subject.length <= 35;
  };
  //API handler
  const handleSubmit = (event) => {
    event.preventDefault();
    setErr("");
    if (!validateEmail(email)) {
      setErr("Please enter a valid email address");
      return;
    }
    if (!validateSubject(subject)) {
      setErr("Subject too long");
      return;
    }
    if (!validateMessage(message)) {
      setErr("Message too long");
      return;
    }
    const body = message;
    const data = {
      name,
      subject,
      email,
      body,
    };
    let response = SendMessage(data);
    response.then((res) => {
      if (res) {
        console.log(res);
      }
    });
  };

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
      <div className="contact-section" id="contact-section">
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
              learn more about our accommodations and bookings.
            </p>
          </div>
          <form className="message-inputs contact" onSubmit={handleSubmit}>
            <div className="message-name-email">
              <div className="message-input">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="message-input">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <div className="message-input">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              />
            </div>
            <div className="message-textarea">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              ></textarea>
            </div>
            <div className="login-error contact">{err}</div>

            <button
              disabled={!name || !email || !subject || !message}
              type="submit"
              className={
                !name || !email || !subject || !message ? "disabled-button" : ""
              }
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
