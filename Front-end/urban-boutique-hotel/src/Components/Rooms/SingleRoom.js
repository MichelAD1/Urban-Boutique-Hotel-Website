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
	useEffect(() => {
		if (reverse) {
			document.getElementById("deals-rooms").style.flexDirection =
				"row-reverse";
		}
	}, [reverse]);

	const navigate = useNavigate();

	const handleRedirect = (item) => {
		navigate(`/rooms/${item.room_name}`, { state: { data: item } });
	};
	return (
		<div
			className={`deals-rooms ${type ? "" : "mg-bot"}`}
			id='deals-rooms'
			onClick={() => handleRedirect(room)}>
			<img src={dummy1} alt='' className='deal-image' />
			<div className='deal-info'>
				{type && <h2>{type}</h2>}
				{type && <h5>{room.room_name}</h5>}
				{!type && <h2>{room.room_name}</h2>}
				<p>{room.description}</p>
				<div className='deal-stats'>
					<div className='stat-item'>
						<RxPerson />
						<p>Occupancy: {room.guests}</p>
					</div>
					<div className='stat-item'>
						<TbResize />
						<p>Size: {room.room_size}sqm</p>
					</div>
					{room.wifi && (
						<div className='stat-item'>
							<AiOutlineWifi />
							<p>WI-Fi</p>
						</div>
					)}
					{room.tv && (
						<div className='stat-item'>
							<CgScreen />
							<p>TV</p>
						</div>
					)}
					{room.shower && (
						<div className='stat-item'>
							<MdOutlineShower />
							<p>Shower</p>
						</div>
					)}
					{room.towels && (
						<div className='stat-item'>
							<GiTowel />
							<p>Towels</p>
						</div>
					)}
					{room.minibar && (
						<div className='stat-item'>
							<MdOutlineLocalBar />
							<p>Minibar</p>
						</div>
					)}
					{room.work_space && (
						<div className='stat-item'>
							<GiDesk />
							<p>Work Space</p>
						</div>
					)}
				</div>
				<div className='prices'>
					<h4>${room.price}</h4>
					{room.old_price && <h4 className='old-price'>${room.old_price}</h4>}
				</div>
				<button className='btn-secondary'>
					Learn more
					<IoIosArrowUp className='arrow' />
				</button>
			</div>
		</div>
	);
};

export default SingleRoom;
