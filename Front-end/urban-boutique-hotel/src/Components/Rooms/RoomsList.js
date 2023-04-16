import { defaultImg } from "../../images";

const RoomsList = (rooms) => {
	if (rooms.length === 0) {
		return (
			<div className='empty-search'>
				<h3>unfortunately no rooms matched your search parameters</h3>
			</div>
		);
	}

	return (
		<section className='roomslist'>
			<div className='roomslist-center'>
				{rooms.map((item) => {
					<article className='room'>
						<div className='img-container'>
							<img src={images[0] || defaultImg} alt='single room' />
							<div className='price-top'>
								<h6>${price}</h6>
								<p>per night</p>
							</div>
							<Link to={`/rooms/${slug}`} className='btn-primary room-link'>
								features
							</Link>
						</div>
						<p className='room-info'>{name}</p>
					</article>;
				})}
			</div>
		</section>
	);
};

export default RoomsList;
