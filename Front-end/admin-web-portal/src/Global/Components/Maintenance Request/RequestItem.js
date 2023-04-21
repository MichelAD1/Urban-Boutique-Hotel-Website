import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const RequestItem = () => {
	const loc = useLocation();
	const [data, setData] = useState(loc.state.data);

	console.log(data);

	const [name, setName] = useState(data.name);
	const [email, setEmail] = useState(data.email);
	const [phoneNumber, setPhoneNumber] = useState(data.phone);
	const [business, setBusiness] = useState(data.business);
	const [status, setStatus] = useState(data.status);
	const [employee, setEmployee] = useState(data.employee);

	useEffect(() => {
		setData(data);
	}, [data]);
	return (
		<div className='container'>
			<div className='edit-user'>
				<div className='info-box'>
					<div className='edit-info'>
						<div className='labels-section'>
							<div className='label-text'>Name: </div>
							<div className='label-text'>Email: </div>
							<div className='label-text'>Phone number: </div>
							<div className='label-text'>Business name: </div>
							<div className='label-text'>Status: </div>
							<div className='label-text'>Assign employee: </div>
						</div>
						<div className='inputs-section'>
							<div type='text' className='info-text'>
								{name}
							</div>
							<div type='text' className='info-text'>
								{email}
							</div>
							<div type='text' className='info-text'>
								{phoneNumber}
							</div>
							<div type='text' className='info-text'>
								{business}
							</div>
							<div type='text' className='info-text'>
								{status}
							</div>
							<div type='text' className='info-text'>
								<select>
									<option value=''>Employees</option>
									<option></option>
								</select>
							</div>
						</div>
					</div>
					<div className='action-buttons'>
						<button className='action-bt save'>Save</button>
						<button className='action-bt delete'>Reject</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RequestItem;
