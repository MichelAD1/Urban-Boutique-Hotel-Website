import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import galleryImage1 from "../../assets/images/gallery-image1.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../../Global/Components/Footer";

const Book = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const [err, setErr] = useState("");

  const room = location.state.data;
  const [room_id, setRoonID] = useState(room.room.id);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [special_request, setSpecialRequest] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const lastFreeDate = room.free_dates[room.free_dates.length - 1];
  const firstFreeDate = room.free_dates[0];
  const firstOccupiedDate = room.occupied_dates[0];
  const lastOccupiedDate = room.occupied_dates[room.occupied_dates.length - 1];

  const startIndex = room.free_dates.findIndex(
    (date) => new Date(date) >= new Date(firstOccupiedDate)
  );
  const endIndex = startIndex >= 0 ? startIndex : room.free_dates.length;
  const freeDatesInRange = room.free_dates.slice(0, endIndex);
  const [total_price, setTotalPrice] = useState(
    room.room.rent * 0.1 + room.room.rent
  );
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
  //useEffect
  useEffect(() => {
    setCheckOutDate("");
  }, [checkInDate]);
  //Validators
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{7,15}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const validateRequest = (request) => {
    return request.length <= 255;
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setErr("");
    if (!validateEmail(email)) {
      setErr("Please enter a valid email address");
      return;
    }
    if (!validatePhoneNumber(phone)) {
      setErr("Please enter a valid phone number");
      return;
    }
    if (!validateRequest(special_request)) {
      setErr("Special request message too long");
      return;
    }

    let parsedDate1 = checkInDate;
    let year = parsedDate1.getFullYear();
    let month =
      parsedDate1.getMonth() + 1 < 10
        ? `0${parsedDate1.getMonth() + 1}`
        : parsedDate1.getMonth() + 1;
    let day =
      parsedDate1.getDate() < 10
        ? `0${parsedDate1.getDate()}`
        : parsedDate1.getDate();
    const reservation_date = `${year}-${month}-${day}`;
    parsedDate1 = checkOutDate;
    year = parsedDate1.getFullYear();
    month =
      parsedDate1.getMonth() + 1 < 10
        ? `0${parsedDate1.getMonth() + 1}`
        : parsedDate1.getMonth() + 1;
    day =
      parsedDate1.getDate() < 10
        ? `0${parsedDate1.getDate()}`
        : parsedDate1.getDate();
    const reservation_end = `${year}-${month}-${day}`;
    let requests = special_request;
    if (!special_request) {
      requests = "_";
    }
    const data = {
      room_id,
      reservation_date,
      reservation_end,
      requests,
      total_price,
    };
    navigation(`/rooms/payment`, { state: { data: data } });
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

          <form className="message-inputs book" onSubmit={handleSubmit}>
            <div className="message-name-email">
              <div className="message-input">
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  minDate={new Date(firstFreeDate)}
                  maxDate={new Date(lastFreeDate)}
                  excludeDates={room.occupied_dates.map(
                    (date) => new Date(date)
                  )}
                  placeholderText="Check In"
                  className="react-datepicker"
                  dateFormat="yyyy/MM/dd"
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                />
              </div>
              <div className="message-input">
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  minDate={checkInDate}
                  maxDate={
                    checkInDate < new Date(firstOccupiedDate)
                      ? new Date(freeDatesInRange[freeDatesInRange.length - 1])
                      : new Date(lastFreeDate)
                  }
                  placeholderText="Check Out"
                  className="react-datepicker"
                  dateFormat="yyyy/MM/dd"
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  disabled={!checkInDate}
                />
              </div>
            </div>
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
                  type="text"
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
                accepted the <Link to="/privacypolicies">Privacy Policies</Link>
                .
              </p>
            </div>
            <div className="booking-nav">
              <div className="login-error book">{err}</div>
              <button
                disabled={
                  !first_name ||
                  !last_name ||
                  !email ||
                  !phone ||
                  !country ||
                  !checkInDate ||
                  !checkOutDate
                }
                type="submit"
                className={
                  !first_name ||
                  !last_name ||
                  !email ||
                  !phone ||
                  !country ||
                  !checkInDate ||
                  !checkOutDate
                    ? "disabled-button"
                    : ""
                }
              >
                Continue to Check-out
              </button>
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
            <div className="order-infos">
              <div className="order-info">
                <p className="order-label">Name</p>
                <p className="order-desc">{room.room.title}</p>
              </div>
              <div className="order-info">
                <p className="order-label">Beds</p>
                <p className="order-desc">{room.room.beds}</p>
              </div>
              <div className="order-info">
                <p className="order-label">Guests</p>
                <p className="order-desc">{room.room.guests + " Adults"}</p>
              </div>
              <div className="underline"></div>
              <div className="order-info price">
                <p className="order-label price">Subtotal</p>
                <p className="order-desc price">€{room.room.rent}</p>
              </div>
              <div className="order-info">
                <p className="order-label price">Tax (10%) </p>
                <p className="order-desc price">€{room.room.rent * 0.1}</p>
              </div>
              <div className="underline"></div>
              <div className="order-info">
                <p className="order-label total">Total </p>
                <p className="order-desc total">€{total_price}</p>
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
