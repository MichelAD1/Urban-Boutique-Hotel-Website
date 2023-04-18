import { useLocation } from "react-router-dom";

const RoomsItem = () => {
  const location = useLocation();
  const room = location.state.data;

  return <div></div>;
};

export default RoomsItem;
