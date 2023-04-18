import { Link } from "react-router-dom";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { TbResize } from "react-icons/tb";
import { AiOutlineWifi } from "react-icons/ai";
import { CgScreen } from "react-icons/cg";
import { MdOutlineShower, MdOutlineLocalBar } from "react-icons/md";
import { GiTowel, GiDesk } from "react-icons/gi";
import { IoIosArrowUp } from "react-icons/io";

// Componenets
import Footer from "../../Global/Components/Footer";

import dummy1 from "../../assets/images/room-1.jpeg";

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
			<div className='deals-rooms'>
				<img src={dummy1} alt='' className='deal-image' />
				<div className='deal-info'>
					<h2>Deal of the month</h2>
					<h5>Room Name</h5>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
						praesentium iste at iure fuga. Nesciunt fugiat, eos aliquid, sint
						enim, doloribus similique praesentium sunt harum accusantium dolore.
						Nemo, eos et!
					</p>
					<div className='deal-stats'>
						<div className='stat-item'>
							<RxPerson />
							<p>Occupancy: 2</p>
						</div>
						<div className='stat-item'>
							<TbResize />
							<p>Size: 100-150sqm</p>
						</div>
						<div className='stat-item'>
							<AiOutlineWifi />
							<p>WI-Fi</p>
						</div>
						<div className='stat-item'>
							<CgScreen />
							<p>TV</p>
						</div>
						<div className='stat-item'>
							<MdOutlineShower />
							<p>Shower</p>
						</div>
						<div className='stat-item'>
							<GiTowel />
							<p>Towels</p>
						</div>
						<div className='stat-item'>
							<MdOutlineLocalBar />
							<p>Minibar</p>
						</div>
						<div className='stat-item'>
							<GiDesk />
							<p>Work Space</p>
						</div>
					</div>
					<div className='prices'>
						<h4>$500</h4>
						<h4 className='old-price'>$400</h4>
					</div>
					<Link to='/rooms' className='btn-secondary'>
						Book now
						<IoIosArrowUp className='arrow' />
					</Link>
				</div>
			</div>
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

			<div className='featured-rooms'>
				<div className='section-title'>
					<h4>Featured Rooms</h4>
					<div />
				</div>
				<div className='featured-rooms-center'>
					{/* {loading ? <Loading /> : rooms} */}
					<Link to={"/rooms"} className='room'>
						<div className='img-container'>
							<img src={dummy1} alt='single room' />
							<div className='price-top'>
								<h6>$100</h6>
								<p>per night</p>
							</div>
						</div>
						<p className='room-info'>Room Name</p>
					</Link>
					<Link to={"/rooms"} className='room'>
						<div className='img-container'>
							<img src={dummy1} alt='single room' />
							<div className='price-top'>
								<h6>$100</h6>
								<p>per night</p>
							</div>
						</div>
						<p className='room-info'>Room Name</p>
					</Link>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
