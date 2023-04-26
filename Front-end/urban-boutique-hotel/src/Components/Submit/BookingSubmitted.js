import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookingSubmitted = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="faq-container">
      <h1>Thank you for booking at our hotel</h1>
      <h4>You will be redirected to the home page shortly</h4>
      <div className="buffer-loader submit"></div>
    </div>
  );
};

export default BookingSubmitted;
