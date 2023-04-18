import { Link, useNavigate } from "react-router-dom";

const RoomsList = ({ rooms }) => {
  const navigate = useNavigate();
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }

  const handleRedirect = (item) => {
    navigate(`/rooms/${item.room_name}`, { state: { data: item } });
  };

  return (
    <section className="roomslist" id="roomlist">
      <div className="roomslist-center">
        {rooms.map((item) => (
          <div
            className="room"
            key={item.id}
            onClick={() => {
              handleRedirect(item);
            }}
          >
            <div className="img-container">
              <img src={item.images[0]} alt="single room" />
              <div className="price-top">
                <h6>${item.price}</h6>
                <p>per night</p>
              </div>
            </div>
            <p className="room-info">{item.room_name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomsList;
