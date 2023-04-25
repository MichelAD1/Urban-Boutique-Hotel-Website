import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const RequestItem = () => {
	const loc = useLocation();
	const [data, setData] = useState(loc.state.data);

	const [assigned, setAssigned] = useState(false);

	const [room, setRoom] = useState({});
	const [reservation, setReservation] = useState({});
	const [customer, setCustomer] = useState({});
	const [employee, setEmployee] = useState({});

	const [edit, setEdit] = useState(false);
	const [selected, setSelected] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		setRoom(data.room_object);
		setReservation(data.reservation_object);
		setCustomer(data.customer_object);

		if (data.status !== "pending") {
			setAssigned(true);
		}
	}, [data]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Submitted");
	};

	const handleCancel = () => {
		setEdit(false);

		if (!assigned) {
			navigate(-1);
		}
	};

	const openEdit = () => {
		setEdit(true);
	};

	const handleRedirect = (path, state) => () => {
		navigate(path, state);
	};

	return (
		<div className='container'>
			<form className='edit-container' onSubmit={handleSubmit}>
				<div className='edit-item'>
					<h2>Request #{data.id}</h2>
					{assigned && !edit && (
						<button type='button' className='button' onClick={openEdit}>
							Edit
						</button>
					)}
					{(!assigned || edit) && (
						<>
							<button type='submit' className='save-button'>
								Save
							</button>
							<button type='button' className='button' onClick={handleCancel}>
								Cancel
							</button>
						</>
					)}
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Customer Email</label>
						</div>
						<div>
							<p
								style={{ cursor: "pointer" }}
								onClick={handleRedirect("/user/profile", {
									state: { data: customer },
								})}>
								{customer.email}
							</p>
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Reservation</label>
						</div>
						<div>
							<p>#{reservation.id}</p>
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Room</label>
						</div>
						<div>
							<p>{room.title}</p>
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Status</label>
						</div>
						<div>
							<p>{data.status}</p>
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Employee</label>
						</div>
						{assigned && !edit && (
							<div>
								<p>{}</p>
							</div>
						)}
						{(!assigned || edit) && (
							<div>
								<select
									className='input-dropdown'
									value={employee}
									onChange={(e) => {
										setEmployee(e.target.value);
										setSelected(true);
									}}>
									<option value='' hidden>
										Select Employee
									</option>
									<option value='1'>Employee 1</option>
									<option value='2'>Employee 2</option>
									<option value='3'>Employee 3</option>
								</select>
							</div>
						)}
					</div>
				</div>
			</form>
		</div>
	);
};

export default RequestItem;
