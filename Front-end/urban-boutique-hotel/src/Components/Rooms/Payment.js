import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const data = location.state.data;
  console.log(data);
  return;
};

export default Payment;
