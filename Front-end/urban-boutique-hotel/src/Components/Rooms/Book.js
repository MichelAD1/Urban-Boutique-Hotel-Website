import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import galleryImage1 from "../../assets/images/gallery-image1.jpg";

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
  const countries = [
    "USA",
    "Canada",
    "Mexico",
    "Brazil",
    "Argentina",
    "Chile",
    "Peru",
    "Colombia",
    "Ecuador",
    "Bolivia",
    "Paraguay",
    "Uruguay",
    "Lebanon",
  ];
  const handleGoBack = () => {
    navigate(`/rooms`);
  };
  const handleSelectChange = (event) => {
    setCountry(event.target.value);
  };
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSpecialRequestChange = (event) => {
    setSpecialRequest(event.target.value);
  };
  console.log(country);

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
                <input
                  type="text"
                  id="first_name"
                  placeholder="First Name"
                  value={first_name}
                  onChange={handleFirstNameChange}
                />
              </div>
              <div className="message-input">
                <input
                  type="text"
                  id="last_name"
                  placeholder="Last Name"
                  value={last_name}
                  onChange={handleLastNameChange}
                />
              </div>
            </div>
            <div className="message-name-email">
              <div className="message-input">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="message-input">
                <input
                  type="number"
                  id="phone"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
            </div>
            <div className="message-input">
              <select
                id="country"
                value={country}
                onChange={handleSelectChange}
              >
                <option className="option-booking" value="">
                  Country
                </option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="message-textarea">
              <textarea
                id="special_request"
                placeholder="Special Request"
                value={special_request}
                onChange={handleSpecialRequestChange}
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
        <div className="message-form order">
          <div className="message-header">
            <div className="room-display order">
              <h1>Order Summary</h1>
            </div>
            <div className="order-image">
              <div className="gallery-image order">
                <img src={galleryImage1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Book;
