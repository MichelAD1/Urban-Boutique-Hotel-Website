import { useNavigate } from "react-router-dom";

// Images

function RoomCard({ data }) {
	const navigate = useNavigate();
	console.log(data);
	const showPopup = (item) => {
		navigate("/room/profile", { state: { data: item } });
	};
	return (
		<div className='room-card' onClick={() => showPopup(data)}>
			<div className='room-logo'>
				<img className='image' alt='Room image' />
			</div>
			<div className='name'>{data.title}</div>
			<div className='room-details'>
				<p className='paragraph'>
					<b>Size:</b> {data.size} sqft
				</p>
				<p className='paragraph'>
					<b>Price:</b> USD {data.rent}
				</p>
				{data.discount !== 0 && (
					<p className='paragraph'>
						<b>New Price</b> {data.rent - data.discount}
					</p>
				)}
				{data.discount === 0 && (
					<p className='paragraph'>
						<br />
					</p>
				)}
			</div>
		</div>
	);
}

export default RoomCard;
