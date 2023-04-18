import { Link } from "react-router-dom";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// Componenets
import Footer from "../../Global/Components/Footer";
import SingleRoom from "../Rooms/SingleRoom";

import room1 from "../../assets/images/room-1.jpeg";
import room2 from "../../assets/images/room-2.jpeg";

const Home = () => {
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
			guests: 2,
			room_type: "Queen Bed",
			room_size: 250,
			breakfast: false,
			pets: true,
			images: [room1],
		},
		{
			id: 2,
			room_name: "Executive Suite",
			price: 350.0,
			guests: 4,
			room_type: "Two Queen Beds",
			room_size: 600,
			breakfast: true,
			pets: false,
			images: [room2],
		},
	];

	return (
		<>
			<div className='defaultHero'>
				<div className='banner'>
					<h1>Urban Boutique Hotel</h1>
					<div></div>
					<p>Delux Rooms Starting at $299</p>
					<Link to='/rooms' className='btn-primary'>
						our rooms
					</Link>
				</div>
			</div>
			<SingleRoom reverse={true} room={rooms[0]} />
			<SingleRoom reverse={false} room={rooms[0]} />

			<div className='services'>
				<div className='section-title'>
					<h4>Services</h4>
					<div />
				</div>
				<div className='services-center'>
					{services.map((item, index) => {
						return (
							<article key={index} className='service'>
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						);
					})}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
