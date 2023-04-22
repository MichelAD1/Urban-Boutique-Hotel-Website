import { useState, useEffect } from "react";

const ReservationItem = () => {
	const loc = useLocation();
	const [data, setData] = useState(loc.state.data);

	const [checkin, setCheckin] = useState("");
	const [checkout, setCheckout] = useState("");
	const [room_name, setRoom_name] = useState("");
	const [amount, setAmount] = useState("");
	const [status, setStatus] = useState("");
	const [requests, setRequests] = useState("");
	const [customer_name, setCustomerName] = useState("");

	return (
		<div className='container'>
			<div className='edit-container'>
				<div className='edit-item'>
					<h2>Reservation #{data.id}</h2>
					<button className='button'>Edit</button>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Username</label>
						</div>
						<div>
							<p>{username}</p>
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Name</label>
						</div>
						<div>
							<p>{name}</p>
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Email</label>
						</div>
						<div>
							<p>{email}</p>
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Phone number</label>
						</div>
						<div>
							<p>{phoneNumber}</p>
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Date of birth</label>
						</div>
						<div>
							<p>{dob}</p>
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Gender</label>
						</div>
						<div>
							<p>{capitalizeFirstLetter(gender)}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReservationItem;
