import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Payment = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const data = location.state?.data;

  useEffect(() => {
    if (!location.state || !location.state.data) {
      navigation("/");
    }
  }, [location.state, navigation]);
  return;
};

export default Payment;
