import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
// Componenets
import Footer from "../../Global/Components/Footer";
import SingleRoom from "../Rooms/SingleRoom";
import Reviews from "../../Global/Components/Reviews";

//APIS
import GetDiscountedRooms from "../../api-client/Rooms/GetDiscountedRooms";
// Images
import room1 from "../../assets/images/room-1.jpeg";
import room2 from "../../assets/images/room-2.jpeg";

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  //Token handler
  const token = localStorage.getItem("token");
  useEffect(() => {
    const shouldReload = localStorage.getItem("shouldReload");
    if (shouldReload === "true") {
      localStorage.removeItem("shouldReload");
      window.location.reload(true);
    }
  }, []);
  if (token) {
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000; // Convert to seconds

    if (decoded.exp < currentTime) {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
    }
  }

  //Api handler
  const {
    status,
    error,
    data: responsedata,
  } = useQuery(["data"], GetDiscountedRooms);
  useEffect(() => {
    if (responsedata) {
      setRooms(responsedata);
      setLoading(false);
    }
  }, [responsedata, error]);

  console.log(rooms);
  const services = [
    {
      icon: <FaCocktail />,
      title: "free cocktails",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: <FaHiking />,
      title: "endless hiking",
      info: " Lorem It was popularised in the 1960s with the release of Letraset sheets containing.",
    },
    {
      icon: <FaShuttleVan />,
      title: "free shuttles",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: <FaBeer />,
      title: "strongest beers",
      info: "Lorem There are many variations of passages of Lorem Ipsum available, but the majority form.",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Sara Smith",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestiae repudiandae aspernatur nisi temporibus eligendi aperiam magnam recusandae! Soluta dolor quam dignissimos architecto accusamus consequuntur qui, quod similique ullam error?",
      rating: 4,
    },
    {
      id: 2,
      name: "John Doe",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestiae repudiandae aspernatur nisi temporibus eligendi aperiam magnam recusandae! Soluta dolor quam dignissimos architecto accusamus consequuntur qui, quod similique ullam error?",
      rating: 3.5,
    },
    {
      id: 3,
      name: "Peter Jones",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestiae repudiandae aspernatur nisi temporibus eligendi aperiam magnam recusandae! Soluta dolor quam dignissimos architecto accusamus consequuntur qui, quod similique ullam error?",
      rating: 2,
    },
  ];

  return (
    <>
      <div className="defaultHero">
        <div className="banner">
          <h1>Urban Boutique Hotel</h1>
          <div></div>
          <p>Delux Rooms Starting at $299</p>
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </div>
      </div>
      {rooms.map((room, index) => (
        <SingleRoom
          key={index}
          reverse={index % 2 === 0}
          room={room}
          type={
            room.room.featured === 1 ? "Featured room" : "Deal of the month"
          }
        />
      ))}

      <div className="services">
        <div className="section-title">
          <h4>Services</h4>
          <div />
        </div>
        <div className="services-center">
          {services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </div>
      <Reviews data={reviews} />
      <Footer />
    </>
  );
};

export default Home;
