import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import mastercard from "../../assets/images/mastercard.jpg";
import paypal from "../../assets/images/paypal.jpg";
import offline from "../../assets/images/offline.jpg";

const Payment = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const data = location.state?.data;

  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  useEffect(() => {
    if (!location.state || !location.state.data) {
      navigation("/");
    }
  }, [location.state, navigation]);

  return (
    <div className="contact-section payment">
      <div className="message-form">
        <div className="message-header">
          <div className="room-display payment">
            <h1>Select payment option</h1>
          </div>
          <div className="payment-options">
            <label className="payment-label">
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethod === "creditCard"}
                onChange={handlePaymentMethodChange}
              />
              Pay with Credit Card
              <img
                className="credit-cards "
                src={mastercard}
                alt="Credit Card"
              />
            </label>
            <label className="payment-label">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={handlePaymentMethodChange}
              />
              Pay with Paypal
              <img className="credit-cards " src={paypal} alt="Credit Card" />
            </label>
            <label className="payment-label">
              <input
                type="radio"
                name="paymentMethod"
                value="offline"
                checked={paymentMethod === "offline"}
                onChange={handlePaymentMethodChange}
              />
              Pay Offline
              <img
                className="credit-cards offline"
                src={offline}
                alt="Credit Card"
              />
            </label>
          </div>
          {paymentMethod === "creditCard" && (
            <div>
              <p>Please enter your credit card details:</p>
              <input type="text" placeholder="Card Number" />
              <input type="text" placeholder="Expiration Date" />
              <input type="text" placeholder="CVV" />
            </div>
          )}
          {paymentMethod === "paypal" && (
            <div>
              <p>
                Please log in to your Paypal account to complete the payment.
              </p>
              <button>Log In</button>
            </div>
          )}
          {paymentMethod === "offline" && (
            <div>
              <p>Please contact us to arrange payment offline.</p>
              <button>Contact Us</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
