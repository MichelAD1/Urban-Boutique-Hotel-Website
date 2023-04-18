import { Link } from "react-router-dom";

import { RxPerson } from "react-icons/rx";
import { TbResize } from "react-icons/tb";
import { AiOutlineWifi } from "react-icons/ai";
import { CgScreen } from "react-icons/cg";
import { MdOutlineShower, MdOutlineLocalBar } from "react-icons/md";
import { GiTowel, GiDesk } from "react-icons/gi";
import { IoIosArrowUp } from "react-icons/io";

import dummy1 from "../../assets/images/room-1.jpeg";
import { useEffect } from "react";

const SingleRoom = ({ reverse }) => {
	useEffect(() => {
		if (reverse) {
			document.getElementById("deals-rooms").style.flexDirection =
				"row-reverse";
		}
	}, [reverse]);
	return (
		<div className='deals-rooms' id='deals-rooms'>
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
	);
};

export default SingleRoom;
