import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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

	const [edit, setEdit] = useState(false);

	useEffect(() => {
		if (data) {
			handleClose();
		}
	}, [data]);

	const handleEdit = () => {
		setEdit(true);
	};

	const handleClose = () => {
		setEdit(false);

		setCheckin(data.checkin);
		setCheckout(data.checkout);
		setRoom_name(data.room_name);
		setAmount(data.amount);
		setStatus(data.status);
		setRequests(data.requests);
		setCustomerName(data.customer_name);
	};

	const handleSubmit = () => {
		setEdit(false);
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
							<label>Customer name</label>
						</div>
						<div>
							<p>{customer_name}</p>
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Room name</label>
						</div>
						<div>
							{!edit && <p>{room_name}</p>}
							{edit && (
								<select
									className='input-dropdown'
									value={room_name}
									onChange={(e) => setRoom_name(e.target.value)}>
									<option value=''>Select room</option>
									<option value='Room 1'>Room 1</option>
									<option value='Room 2'>Room 2</option>
									<option value='Room 3'>Room 3</option>
									<option value='Room 4'>Room 4</option>
									<option value='Room 5'>Room 5</option>
									<option value='Room 6'>Room 6</option>
									<option value='Room 7'>Room 7</option>
									<option value='Room 8'>Room 8</option>
									<option value='Room 9'>Room 9</option>
									<option value='Room 10'>Room 10</option>
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
