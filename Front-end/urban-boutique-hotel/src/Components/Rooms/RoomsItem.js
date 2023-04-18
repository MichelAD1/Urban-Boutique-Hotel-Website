import { useLocation } from "react-router-dom";
import { useState } from "react";

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

  return (
    <div className="room-item-container">
      <div className="room-header">
        <div className="room-name">
          <h1>{room_name}</h1>
        </div>
        <div className="room-price">
          <p>PRICE</p>
          <p className="price-tag">${price}.00</p>
          <button type="submit">BOOK NOW</button>
        </div>
      </div>
    </div>
  );
};

export default RoomsItem;
