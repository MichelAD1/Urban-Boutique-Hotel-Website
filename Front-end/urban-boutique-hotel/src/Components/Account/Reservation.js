import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
const Reservation = () => {
  const location = useLocation();
  const room = location.state.data;
  return;
};

export default Reservation;
