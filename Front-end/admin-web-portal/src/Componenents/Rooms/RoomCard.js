import "./rooms-styles.css";

import { useNavigate } from "react-router-dom";

// Images

function RoomCard({ data }) {
  const navigate = useNavigate();
  const showPopup = (item) => {
    navigate("/room/profile", { state: { data: item } });
  };
  return (
    <div className="link" onClick={() => showPopup(data)}>
      <div className="room-logo">
        <img className="image" src={data.logo_url} alt="Room logo" />
      </div>
      <div className="name">{data.name}</div>
      <div className="room-details">
        <p className="paragraph">
          <b>Phone number:</b> {data.number}
        </p>
        <p className="paragraph">
          <b>Email:</b> {data.email}
        </p>
        <p className="paragraph">
          <b>Location:</b> {data.location}
        </p>
      </div>
    </div>
  );
}

export default RoomCard;
