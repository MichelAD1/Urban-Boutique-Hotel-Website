import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Slideshow from "../../Global/Components/Slideshow";
import att_1 from "../../assets/images/att-1.jpg";
import att_2 from "../../assets/images/att-2.jpg";
import att_3 from "../../assets/images/att-3.jpg";
import att_4 from "../../assets/images/att-4.jpg";
import att_5 from "../../assets/images/att-5.jpg";
const RoomsItem = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const room = location.state.data;

  const [title, setName] = useState(room.room.title);
  const [rent, setRent] = useState(room.room.rent);
  const [guests, setGuests] = useState(room.room.guests);
  const [description, setDescription] = useState(room.room.description);
  const [beds, setBeds] = useState(room.room.beds);
  const [tv, setTv] = useState(room.room.tv);
  const [wifi, setWifi] = useState(room.room.shower);
  const [shower, setShower] = useState(room.room.wifi);
  const [mini_bar, setMinibar] = useState(room.room.mini_bar);
  const [desk, setDesk] = useState(room.room.desk);
  const [floor, setFloor] = useState(room.room.floor);
  const [discount, setDiscount] = useState(room.room.discount);
  const [size, setSize] = useState(room.room.size);
  const [breakfast, setBreakfast] = useState(room.room.breakfast);
  const [pets, setPets] = useState(room.room.pets);
  const [images, setImages] = useState(room.images);
  const slideshowd_data = [
    {
      id: 1,
      image: att_1,
    },
    {
      id: 2,
      image: att_2,
    },
    {
      id: 3,
      image: att_3,
    },
    {
      id: 4,
      image: att_4,
    },
    {
      id: 5,
      image: att_5,
    },
  ];

  const handleBooking = () => {
    navigate(`/rooms/booking`, { state: { data: room } });
  };
  return (
    <div className="room-item-container">
      <div className="room-header">
        <div className="room-name">
          <h1>{title}</h1>
        </div>
        <div className="room-display">
          <p>PRICE</p>
          <p className="room-tag">${rent}.00</p>
          <button onClick={handleBooking}>BOOK NOW</button>
        </div>
      </div>
      <div className="room-images">
        <Slideshow data={slideshowd_data} type={"Room"} />
      </div>
      <div className="room-infos">
        <div className="room-display">
          <p>SQUARE M2</p>
          <p className="room-tag">{size}</p>
        </div>
        <div className="room-display">
          <p>GUESTS</p>
          <p className="room-tag">{guests}</p>
        </div>
        <div className="room-display">
          <p>FLOORS</p>
          <p className="room-tag">{floor}</p>
        </div>
        <div className="room-display">
          <p>BEDS</p>
          <p className="room-tag">{beds}</p>
        </div>
      </div>
      <div className="room-options">
        <div className="room-right">
          <div className="room-name description">
            <h1>Description</h1>
          </div>
          <div className="room-description">
            <p>{description}</p>
          </div>
          <div className="room-name description">
            <h1>Pricing</h1>
          </div>
          <div className="room-description">
            {discount === 0 ? (
              <div className="room-display pricing">
                <p>PRICE</p>
                <p className="room-tag pricing">${rent}.00</p>
              </div>
            ) : (
              <div>
                <div className="room-display pricing">
                  <p>NEW PRICE</p>
                  <p className="room-tag pricing">${rent}.00</p>
                </div>
                <div className="room-display pricing">
                  <p>OLD PRICE</p>
                  <p className="room-tag pricing">${rent + discount}.00</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="room-left">
          <div className="room-name description">
            <h1>Amenities</h1>
          </div>
          {wifi === 0 ? null : (
            <div className="room-display amenities">
              <p>FREE WIFI</p>
            </div>
          )}
          {tv === 0 ? null : (
            <div className="room-display amenities">
              <p>INTERNATIONAL TV CHANNELS</p>
            </div>
          )}
          {shower === 0 ? null : (
            <div className="room-display amenities">
              <p>SHOWER AVAILABLE</p>
            </div>
          )}
          {mini_bar === 0 ? null : (
            <div className="room-display amenities">
              <p>MINI BAR AVAILABLE</p>
            </div>
          )}
          {desk === 0 ? null : (
            <div className="room-display amenities">
              <p>DESK AVAILABLE</p>
            </div>
          )}
          {breakfast === 0 ? null : (
            <div className="room-display amenities">
              <p>BREAKFAST AVAILABLE</p>
            </div>
          )}
          {pets === 0 ? null : (
            <div className="room-display amenities">
              <p>PETS ALLOWED</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomsItem;
