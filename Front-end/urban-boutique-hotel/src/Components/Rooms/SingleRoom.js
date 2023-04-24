import { useNavigate } from "react-router-dom";

import { RxPerson } from "react-icons/rx";
import { TbResize } from "react-icons/tb";
import { AiOutlineWifi } from "react-icons/ai";
import { CgScreen } from "react-icons/cg";
import { MdOutlineShower, MdOutlineLocalBar } from "react-icons/md";
import { GiTowel, GiDesk } from "react-icons/gi";
import { IoIosArrowUp } from "react-icons/io";

import dummy1 from "../../assets/images/room-1.jpeg";
import { useEffect } from "react";

const SingleRoom = ({ reverse, room, type }) => {
  const navigate = useNavigate();

  const handleRedirect = (item) => {
    navigate(`/rooms/${item.title}`, { state: { data: item } });
  };
  return (
    <div
      className={`deals-rooms ${type ? "" : "mg-bot"} ${
        reverse ? "reverse" : ""
      }`}
      id="deals-rooms"
      onClick={() => handleRedirect(room.room)}
    >
      <img src={dummy1} alt="" className="deal-image" />
      <div className="deal-info">
        {type && <h2>{type}</h2>}
        {type && <h5>{room.room.title}</h5>}
        {!type && <h2>{room.room.title}</h2>}
        <p>{room.room.description}</p>
        <div className="deal-stats">
          <div className="stat-item">
            <RxPerson />
            <p>Occupancy: {room.room.guests}</p>
          </div>
          <div className="stat-item">
            <TbResize />
            <p>Size: {room.room.size}sqm</p>
          </div>
          {room.room.wifi ? (
            <div className="stat-item">
              <AiOutlineWifi />
              <p>WI-Fi</p>
            </div>
          ) : null}
          {room.room.tv ? (
            <div className="stat-item">
              <CgScreen />
              <p>TV</p>
            </div>
          ) : null}
          {room.room.shower ? (
            <div className="stat-item">
              <MdOutlineShower />
              <p>Shower</p>
            </div>
          ) : null}
          {room.room.towels ? (
            <div className="stat-item">
              <GiTowel />
              <p>Towels</p>
            </div>
          ) : null}
          {room.room.mini_bar ? (
            <div className="stat-item">
              <MdOutlineLocalBar />
              <p>Minibar</p>
            </div>
          ) : null}
          {room.room.desk ? (
            <div className="stat-item">
              <GiDesk />
              <p>Work Space</p>
            </div>
          ) : null}
        </div>
        <div className="prices">
          <h4>${room.room.rent}</h4>
          {room.room.discount && (
            <h4 className="old-price">
              ${room.room.rent + room.room.discount}
            </h4>
          )}
        </div>
        <button className="btn-secondary">
          Learn more
          <IoIosArrowUp className="arrow" />
        </button>
      </div>
    </div>
  );
};

export default SingleRoom;
