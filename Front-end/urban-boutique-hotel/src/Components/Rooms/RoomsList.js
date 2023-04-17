import { Link } from "react-router-dom";

const RoomsList = ({ rooms }) => {
	if (rooms.length === 0) {
		return (
			<div className='empty-search'>
				<h3>unfortunately no rooms matched your search parameters</h3>
			</div>
		);
	}

	return (
		<section className='roomslist' id='roomlist'>
			<div className='roomslist-center'>
				{rooms.map((item) => (
					<Link to={"/rooms"} className='room' key={item.id}>
						<div className='img-container'>
							<img src={item.images[0]} alt='single room' />
							<div className='price-top'>
								<h6>${item.price}</h6>
								<p>per night</p>
							</div>
						</div>
						<p className='room-info'>{item.room_name}</p>
					</Link>
				))}
			</div>
		</section>
	);
};

export default RoomsList;
