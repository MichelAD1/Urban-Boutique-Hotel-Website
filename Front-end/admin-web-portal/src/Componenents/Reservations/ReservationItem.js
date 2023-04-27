import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// API
import GetRoom from "../../api-client/Rooms/GetRoom";

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

	const [roomId, setRoomId] = useState("");

	const [edit, setEdit] = useState(false);
	const [rooms, setRooms] = useState(false);
	const [unavailableDates, setUnavailableDates] = useState([]);
	const [availableDates, setAvailableDates] = useState([]);

	useEffect(() => {
		if (data) {
			handleClose();
			const reqRooms = GetRoom();
			reqRooms.then((res) => {
				if (res) {
					if (res.length > 0) {
						setRooms(res);
						setUnavailableDates(res.occupied_dates);
						setAvailableDates(res.free_dates);
					}
				}
			});
		}
	}, [data]);

	const handleEdit = () => {
		setEdit(true);
	};

	const handleClose = () => {
		setEdit(false);

		setCheckin(data.reservation_date);
		setCheckout(data.reservation_end);
		setRoom_name(data.room_object.title);
		setAmount(data.amount);
		setStatus(data.status);
		setRequests(data.requests);
		setCustomerName(data.customer_object.email);
		setRoomId(data.room_object.id);
	};

	const handleSubmit = () => {
		setEdit(false);
	};

	const navigate = useNavigate();
	const handleRedirect = (url, state) => {
		navigate(url, state);
	};

	return (
		<div className='container'>
			<div className='edit-container'>
				<div className='edit-item'>
					<h2>Reservation #{data.id}</h2>
					{!edit && (
						<button className='button' onClick={handleEdit}>
							Edit
						</button>
					)}
					{edit && (
						<>
							<button className='save-button' onClick={handleSubmit}>
								Save
							</button>
							<button className='button' onClick={handleClose}>
								cancel
							</button>
						</>
					)}
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Customer email</label>
						</div>
						<div>
							<p
								style={{ cursor: "pointer" }}
								onClick={() =>
									handleRedirect("/user/profile", {
										state: { data: data.customer_object },
									})
								}>
								{customer_name}
							</p>
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Room name</label>
						</div>
						<div>
							{!edit && (
								<p
									style={{ cursor: "pointer" }}
									onClick={() => {
										data.room = data.room_object;
										handleRedirect("/room/profile", {
											state: { data: data },
										});
									}}>
									{room_name}
								</p>
							)}
							{edit && (
								<select
									className='input-dropdown'
									value={roomId}
									onChange={(e) => setRoomId(e.target.value)}>
									<option value='' hidden>
										Select room
									</option>
									{rooms.map((room) => (
										<option key={room.room.id} value={room.room.id}>
											{room.room.title}
										</option>
									))}
								</select>
							)}
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Check in</label>
						</div>
						<div>
							{!edit && <p>{checkin}</p>}
							{edit && (
								<input
									className='input-box'
									type='date'
									value={checkin}
									onChange={(e) => setCheckin(e.target.value)}
								/>
							)}
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Check out</label>
						</div>
						<div>
							{!edit && <p>{checkout}</p>}
							{edit && (
								<input
									className='input-box'
									type='date'
									value={checkout}
									onChange={(e) => setCheckout(e.target.value)}
								/>
							)}
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Payment amount</label>
						</div>
						<div>
							<p>USD {amount}</p>
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Status</label>
						</div>
						<div>
							<p>{status}</p>
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info info-large'>
						<div>
							<label>Request</label>
						</div>
						<div>
							<p>{requests}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReservationItem;
