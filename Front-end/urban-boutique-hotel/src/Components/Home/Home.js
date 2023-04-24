import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import { useEffect } from "react";
// Componenets
import Footer from "../../Global/Components/Footer";
import SingleRoom from "../Rooms/SingleRoom";
import Reviews from "../../Global/Components/Reviews";

// Images
import room1 from "../../assets/images/room-1.jpeg";
import room2 from "../../assets/images/room-2.jpeg";

const Home = () => {
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

  const rooms = [
    {
      id: 1,
      room_name: "Standard Room",
      price: 100.0,
      old_price: 150.0,
      guests: 2,
      room_type: "Queen Bed",
      room_size: 250,
      wifi: true,
      tv: true,
      shower: true,
      towels: false,
      minibar: true,
      desk: false,
      images: [room1],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam temporibus tenetur explicabo porro minus, odit excepturi, nemo, magnam iusto voluptates eligendi error. Eveniet dolor eos quia. Dolore nisi explicabo sint!",
    },
    {
      id: 2,
      room_name: "Executive Suite",
      price: 350.0,
      old_price: 400.0,
      guests: 4,
      room_type: "Two Queen Beds",
      room_size: 600,
      wifi: true,
      tv: false,
      shower: true,
      towels: true,
      minibar: false,
      desk: false,
      images: [room2],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam temporibus tenetur explicabo porro minus, odit excepturi, nemo, magnam iusto voluptates eligendi error. Eveniet dolor eos quia. Dolore nisi explicabo sint!",
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
      <SingleRoom reverse={false} room={rooms[0]} type={"Deal of the month"} />
      <SingleRoom reverse={true} room={rooms[1]} type={"Featured room"} />

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
