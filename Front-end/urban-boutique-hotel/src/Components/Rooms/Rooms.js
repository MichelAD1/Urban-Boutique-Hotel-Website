import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import RoomsList from "./RoomsList";
import Footer from "../../Global/Components/Footer";

//APIS
import GetRooms from "../../api-client/Rooms/GetRooms";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [tmpRooms, setTmpRooms] = useState([]);
  const [types, setTypes] = useState(["All"]);
  const [capacity, setCapacity] = useState(0);
  const [people, setPeople] = useState([]);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [price, setPrice] = useState(0);

  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(0);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);

  const [type, setType] = useState("All");
  const [loading, setLoading] = useState(true);

  // Get all unique items
  const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item.room[value]))];
  };
  const {
    status,
    error,
    data: roomData,
  } = useQuery(["roomdata"], GetRooms, {
    staleTime: 300000, // 5 minutes
  });
  useEffect(() => {
    const shouldreload = localStorage.getItem("shouldReload");
    if (shouldreload === "true") {
      localStorage.removeItem("shouldReload");
      window.location.reload();
    }
  }, []);
  useEffect(() => {
    if (status === "success" && roomData) {
      setRooms(roomData);
      setTmpRooms(roomData);
      setLoading(false);
    }
  }, [roomData, status]);

  useEffect(() => {
    const types = ["All", ...getUnique(rooms, "beds")];
    const people = getUnique(rooms, "guests");
    const minPrice = Math.min(...rooms.map((item) => item.room.rent));
    const maxPrice = Math.max(...rooms.map((item) => item.room.rent));
    const minSize = Math.min(...rooms.map((item) => item.room.size));
    const maxSize = Math.max(...rooms.map((item) => item.room.size));

    setTypes(types);
    setPeople(people);
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
    setMaxSize(maxSize);
    setMinSize(minSize);
    setPrice(minPrice);
  }, [rooms]);

  const filterRoom = (tmpRooms) => {
    // filter by type
    if (type !== "All") {
      tmpRooms = tmpRooms.filter((room) => room.room.beds === type);
    }
    // filter by capacity
    if (capacity > 1) {
      tmpRooms = tmpRooms.filter((room) => room.room.guests >= capacity);
    }
    // filter by price
    tmpRooms = tmpRooms.filter((room) => room.room.rent >= price);
    // filter by size
    tmpRooms = tmpRooms.filter(
      (room) => room.room.size >= minSize && room.room.size <= maxSize
    );
    // filter by breakfast
    if (breakfast) {
      tmpRooms = tmpRooms.filter((room) => room.room.breakfast === 1);
    }
    // filter by pets
    if (pets) {
      tmpRooms = tmpRooms.filter((room) => room.room.pets === 1);
    }
    return tmpRooms;
  };

  return (
    <>
      <div className="roomsHero">
        <div className="banner">
          <h1>Our Rooms</h1>

          <ScrollLink
            to="roomlist"
            smooth={true}
            duration={1000}
            offset={-100}
            className="btn-primary"
          >
            Book your room
          </ScrollLink>
        </div>
      </div>
      {loading ? (
        <div className="buffer-space">
          <div className="buffer-loader home"></div>
        </div>
      ) : (
        <div>
          <section className="filter-container">
            <div className="section-title">
              <h4>Search rooms</h4>
              <div />
            </div>
            <form className="filter-form">
              {/* select type */}
              <div className="form-group">
                <label htmlFor="type">room type</label>
                <select
                  name="type"
                  id="type"
                  value={type}
                  className="form-control"
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  {types.map((item, id) => {
                    return (
                      <option key={id} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              {/* end of select type */}
              {/* guest */}
              <div className="form-group">
                <label htmlFor="capacity">guests</label>
                <select
                  name="capacity"
                  id="capacity"
                  value={capacity}
                  className="form-control"
                  onChange={(e) => {
                    setCapacity(e.target.value);
                  }}
                >
                  {people.map((item, id) => {
                    return (
                      <option key={id} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              {/* end of guest */}
              {/* rooms price */}
              <div className="form-group">
                <label htmlFor="price">room price ${price}</label>
                <input
                  type="range"
                  id="price"
                  name="price"
                  min={minPrice}
                  max={maxPrice}
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  className="form-control price-range"
                />
              </div>
              {/* end of rooms price */}
              {/* extras */}
              <div className="form-group">
                <div className="single-extra">
                  <input
                    type="checkbox"
                    name="breakfast"
                    id="breakfast"
                    checked={breakfast}
                    className="checkbox-input"
                    onChange={(e) => {
                      setBreakfast(e.target.checked);
                    }}
                  />
                  <label htmlFor="breakfast">breakfast</label>
                </div>
                <div className="single-extra">
                  <input
                    type="checkbox"
                    name="pets"
                    id="pets"
                    checked={pets}
                    className="checkbox-input"
                    onChange={(e) => {
                      setPets(e.target.checked);
                    }}
                  />
                  <label htmlFor="pets">pets</label>
                </div>
              </div>
              {/* end of extras */}
            </form>
          </section>
          <RoomsList rooms={filterRoom(tmpRooms)} />
        </div>
      )}
      <Footer />
    </>
  );
};

export default Rooms;
