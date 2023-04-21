import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const RequestItem = () => {
	const loc = useLocation();
	const [data, setData] = useState(loc.state.data);

	const [name, setName] = useState(data.name);
	const [res, setRes] = useState(data.res);
	const [room, setRoom] = useState(data.room);
	const [status, setStatus] = useState(data.status);
	const [employee, setEmployee] = useState(data.employee);

	const [edit, setEdit] = useState(false);

	useEffect(() => {
		setData(data);
	}, [data]);
	return (
		<div className='container'>
			<div className='edit-container'>
				<div className='edit-item'>
					<h2>Request #{data.id}</h2>
					{edit && <button type='button'>Edit</button>}
					<button type='button'>Edit</button>
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
						<div>
							{employee && <p>{employee}</p>}
							{!employee && <p>No employee assigned</p>}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RequestItem;
