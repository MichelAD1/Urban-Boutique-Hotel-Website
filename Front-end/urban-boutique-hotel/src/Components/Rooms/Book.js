import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";

import Footer from "../../Global/Components/Footer";

const Book = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const room = location.state.data;

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [special_request, setSpecialRequest] = useState("");

  const handleGoBack = () => {
    navigate(`/rooms`);
  };

  return (
    <>
      <div className="contact-section book">
        <div className="message-form book">
          <div className="message-header">
            <div className="room-display book">
              <h1>Guest Details</h1>
            </div>
          </div>

          <form className="message-inputs book">
            <div className="message-name-email">
              <div className="message-input">
                <input type="text" id="first_name" placeholder="First Name" />
              </div>
              <div className="message-input">
                <input type="text" id="last_name" placeholder="Last Name" />
              </div>
            </div>
            <div className="message-name-email">
              <div className="message-input">
                <input type="email" id="email" placeholder="Email" />
              </div>
              <div className="message-input">
                <input type="number" id="phone" placeholder="Phone Number" />
              </div>
            </div>
            <div className="message-input">
              <input type="text" id="country" placeholder="Country" />
            </div>
            <div className="message-textarea">
              <textarea
                id="special_request"
                placeholder="Special Request"
              ></textarea>
            </div>
            <div className="booking-policies">
              <p>
                {" "}
                By completing this booking I acknowledge I have read and
                accepted the <a href="">Property Policies</a>.
              </p>
            </div>
            <div className="booking-nav">
              <div className="goback">
                <button className="goback-button" onClick={handleGoBack}>
                  <IoIosArrowBack />
                  Go Back
                </button>
              </div>
              <button type="submit">Continue to Check-out</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Book;
