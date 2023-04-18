import { useNavigate } from "react-router-dom";
import SingleRoom from "../Rooms/SingleRoom";

const RoomsList = ({ rooms }) => {
	const navigate = useNavigate();
	if (rooms.length === 0) {
		return (
			<div className='empty-search'>
				<h3>unfortunately no rooms matched your search parameters</h3>
			</div>
		);
	}

	const handleRedirect = (item) => {
		navigate(`/rooms/${item.room_name}`, { state: { data: item } });
	};

	return (
		<section className='roomslist' id='roomlist'>
			{rooms.map((item) => (
				<SingleRoom reverse={false} room={item} type={null} />
			))}
		</section>
	);
};

export default RoomsList;
