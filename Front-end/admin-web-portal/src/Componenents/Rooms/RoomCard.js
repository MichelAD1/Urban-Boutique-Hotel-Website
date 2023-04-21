import { useNavigate } from "react-router-dom";

// Images

function RoomCard({ data }) {
	const navigate = useNavigate();
	const showPopup = (item) => {
		navigate("/room/profile", { state: { data: item } });
	};
	console.log(data);
	return (
		<div className='room-card' onClick={() => showPopup(data)}>
			<div className='room-logo'>
				<img className='image' src={data.images[0]} alt='Room image' />
			</div>
			<div className='name'>{data.name}</div>
			<div className='room-details'>
				<p className='paragraph'>
					<b>Size:</b> {data.size}
				</p>
				<p className='paragraph'>
					<b>Price:</b> {data.price}
				</p>
				{data.old_price && (
					<p className='paragraph'>
						<b>New Price</b> {data.old_price}
					</p>
				)}
				{!data.old_price && (
					<p className='paragraph'>
						<br />
					</p>
				)}
			</div>
		</div>
	);
}

export default RoomCard;
