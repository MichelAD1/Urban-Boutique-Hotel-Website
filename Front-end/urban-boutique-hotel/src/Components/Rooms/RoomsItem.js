import { useLocation } from "react-router-dom";
import { useState } from "react";
import Slideshow from "../../Global/Components/Slideshow";
import att_1 from "../../assets/images/att-1.jpg";
import att_2 from "../../assets/images/att-2.jpg";
import att_3 from "../../assets/images/att-3.jpg";
import att_4 from "../../assets/images/att-4.jpg";
import att_5 from "../../assets/images/att-5.jpg";
const RoomsItem = () => {
  const location = useLocation();
  const room = location.state.data;
  const [room_name, setName] = useState(room.room_name);
  const [price, setPrice] = useState(room.price);
  const [guests, setGuests] = useState(room.guests);
  const [room_type, setType] = useState(room.room_type);
  const [room_size, setSize] = useState(room.room_size);
  const [breakfast, setBreakfast] = useState(room.breakfast);
  const [pets, setPets] = useState(room.pets);
  const [images, setImages] = useState(room.images);
  console.log(images);
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
  return (
    <div className="room-item-container">
      <div className="room-header">
        <div className="room-name">
          <h1>{room_name}</h1>
        </div>
        <div className="room-display">
          <p>PRICE</p>
          <p className="room-tag">${price}.00</p>
          <button type="submit">BOOK NOW</button>
        </div>
      </div>
      <div className="room-images">
        <Slideshow data={slideshowd_data} type={"Room"} />
      </div>
      <div className="room-infos">
        <div className="room-display">
          <p>SQUARE M2</p>
          <p className="room-tag">{room_size}</p>
        </div>
        <div className="room-display">
          <p>GUESTS</p>
          <p className="room-tag">{guests}</p>
        </div>
        <div className="room-display">
          <p>BREAKFAST</p>
          <p className="room-tag">{breakfast ? "Yes" : "No"}</p>
        </div>
        <div className="room-display">
          <p>PETS</p>
          <p className="room-tag">{pets ? "Yes" : "No"}</p>
        </div>
      </div>
      <div className="room-options">
        <div className="room-right">
          <div className="room-name description">
            <h1>Description</h1>
          </div>
          <div className="room-description">
            <p>
              A hotel room is a private space within a hotel or lodging facility
              that is designed to provide comfortable accommodation to
              travelers. Hotel rooms typically include a bed or beds, bathroom
              facilities, seating area, work desk, and various amenities such as
              a television, minibar, and coffee maker. Hotel rooms may vary in
              size and layout, with options ranging from single rooms designed
              for solo travelers to larger suites designed for families or
              groups.
            </p>
          </div>
          <div className="room-name description">
            <h1>Pricing</h1>
          </div>
          <div className="room-description">
            <div className="room-display pricing">
              <p>WEEKDAYS</p>
              <p className="room-tag pricing">${price}.00</p>
            </div>
            <div className="room-display pricing">
              <p>WEEKDENDS</p>
              <p className="room-tag pricing">${price + 20}.00</p>
            </div>
          </div>
        </div>
        <div className="room-left">
          <div className="room-name description">
            <h1>Amenities</h1>
          </div>
          <div className="room-display amenities">
            <p>FREE WIFI</p>
          </div>
          <div className="room-display amenities">
            <p>INTERNATIONAL TV CHANNELS</p>
          </div>
          <div className="room-display amenities">
            <p>AIR CONDITIONER</p>
          </div>
          <div className="room-display amenities">
            <p>NO SMOKING</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsItem;
