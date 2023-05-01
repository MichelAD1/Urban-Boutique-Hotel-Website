import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Feedback = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("Translate"));
  });

  useEffect(() => {
    document.title = "Feedback";
  }, []);

  return <div></div>;
};

export default Feedback;
