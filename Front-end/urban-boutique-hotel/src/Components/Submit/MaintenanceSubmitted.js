import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MaintenanceSubmitted = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("Translate"));
  }, []);

  return (
    <div className="faq-container">
      <h1>Submitting Request</h1>
      <div className="buffer-loader submit"></div>
    </div>
  );
};

export default MaintenanceSubmitted;
