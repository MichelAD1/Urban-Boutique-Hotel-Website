import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const RequestItem = () => {
	const loc = useLocation();
	const [data, setData] = useState(loc.state.data);

	const [reqData, setReqData] = useState([]);

	const [name, setName] = useState(data.name);
	const [res, setRes] = useState(data.res);
	const [room, setRoom] = useState(data.room);
	const [status, setStatus] = useState(data.status);
	const [employee, setEmployee] = useState(data.employee);

	const [edit, setEdit] = useState(false);
	const [selected, setSelected] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		setData(data);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Submitted");
	};

	const handleCancel = () => {
		setEdit(false);
		setSelected(false);
	};

	const openEdit = () => {
		setEdit(true);
	};

	return (
		<div className='container'>
			<form className='edit-container' onSubmit={handleSubmit}>
				<div className='edit-item'>
					<h2>Request #{data.id}</h2>
					{data.employee !== null && !edit && (
						<button type='button' className='button' onClick={openEdit}>
							Edit
						</button>
					)}
					{(selected || edit) && (
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
							<label>Reservation</label>
						</div>
						<div>
							<p>#{res}</p>
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Room</label>
						</div>
						<div>
							<p>#{room}</p>
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
					<div className='edit-info'>
						<div>
							<label>Employee</label>
						</div>
						{data.employee && !edit && (
							<div>
								<p>{employee}</p>
							</div>
						)}
						{(!data.employee || edit) && (
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
