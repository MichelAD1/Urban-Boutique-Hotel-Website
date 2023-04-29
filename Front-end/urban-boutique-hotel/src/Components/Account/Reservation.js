import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import Footer from "../../Global/Components/Footer";

const Reservation = () => {
  const location = useLocation();
  const room = location.state.data;
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("Translate"));
  }, []);
  const handleSubmit = () => {};
  return (
    <>
      <div className="reservations-edit-container">
        <div className="reservations">
          <h2>{t("acc_res")}</h2>
        </div>
        <form className="message-inputs book" onSubmit={handleSubmit}>
          <div className="message-name-email">
            <div className="message-input">
              <DatePicker placeholderText={t("res_checkin")} />
            </div>
            <div className="message-input">
              <DatePicker placeholderText={t("res_checkout")} />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Reservation;
