import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import Footer from "../../Global/Components/Footer";

const Reservation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const room = location.state.data;

  const [checkInDate, setCheckInDate] = useState(
    new Date(room.reservation_date)
  );
  const [checkOutDate, setCheckOutDate] = useState(
    new Date(room.reservation_end)
  );
  const [userDates, setUserDates] = useState(
    getDatesBetween(checkInDate, checkOutDate)
  );
  const [filtered, setFilteredDates] = useState([]);

  const lastFreeDate = room.free_dates[room.free_dates.length - 1];
  const combinedDates = [...userDates, ...room.free_dates];
  const sortedDates = combinedDates.sort((a, b) => new Date(a) - new Date(b));
  const firstFreeDate = sortedDates[0];
  const [maxCheckout, setMaxDate] = useState(null);

  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("Translate"));
  }, []);

  useEffect(() => {
    setFilteredDates(removeValuesFromArray(room.occupied_dates, userDates));
  }, [userDates]);

  useEffect(() => {
    setCheckOutDate(checkOutDate);
    if (checkInDate > checkOutDate) {
      setCheckOutDate(checkInDate);
    }
    if (checkInDate) {
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
      const checkin = `${year}-${month}-${day}`;
      const selectedIndex = room.free_dates.findIndex(
        (date) => date === checkin
      );
      const consecutiveDates = [checkin];
      const checkdate = new Date(lastFreeDate);
      for (let i = selectedIndex + 1; i < room.free_dates.length; i++) {
        const prevDate = new Date(room.free_dates[i - 1]);
        const currDate = new Date(room.free_dates[i]);
        if (currDate.toISOString() === checkdate.toISOString()) {
          setMaxDate(new Date(lastFreeDate));
          break;
        }
        if ((currDate - prevDate) / (1000 * 60 * 60 * 24) === 1) {
          consecutiveDates.push(room.free_dates[i]);
        } else {
          setMaxDate(new Date(consecutiveDates[consecutiveDates.length - 1]));
          break;
        }
      }
    }
  }, [checkInDate]);
  function getDatesBetween(startDate, endDate) {
    const dates = [];
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      dates.push(currentDate.toISOString().slice(0, 10));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }
  function removeValuesFromArray(arr1, arr2) {
    return arr1.filter((value) => !arr2.includes(value));
  }
  const handleSubmit = () => {
    navigate(`/account`);
  };

  return (
    <>
      <div className="reservations-edit-container">
        <div className="reservations">
          <h2>{t("acc_res")}</h2>
        </div>
        <form className="message-inputs book" onSubmit={handleSubmit}>
          <div className="message-name-email">
            <div className="message-input">
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                minDate={new Date(firstFreeDate)}
                maxDate={new Date(lastFreeDate)}
                excludeDates={filtered.map((date) => new Date(date))}
                placeholderText={t("res_checkin")}
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
                maxDate={new Date(lastFreeDate)}
                excludeDates={filtered.map((date) => new Date(date))}
                placeholderText={t("res_checkout")}
                className="react-datepicker"
                dateFormat="yyyy/MM/dd"
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
            </div>
          </div>
          <div className="confirm-edit">
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Reservation;
