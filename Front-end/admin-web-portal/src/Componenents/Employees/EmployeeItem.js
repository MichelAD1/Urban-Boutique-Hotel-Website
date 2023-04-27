import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Componenets
import ReactModal from "react-modal";

// API
import AddEmployee from "../../api-client/Employees/AddEmployee";
import EditEmployee from "../../api-client/Employees/EditEmployee";
import DeleteEmployee from "../../api-client/Employees/DeleteEmployee";

// Functions
import checkEmpty from "../../Global/Functions/CheckEmpty";
import checkEqual from "../../Global/Functions/CheckEqual";

const EmployeeItem = () => {
	const loc = useLocation();
	const navigate = useNavigate();
	const [isValid, setIsValid] = useState(loc.state);

	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [dob, setDob] = useState("");
	const [gender, setGender] = useState("Male");
	const [position, setPosition] = useState("");
	const [password, setPassword] = useState("");
	const [err, setErr] = useState("");

	const [edit, setEdit] = useState(false);

	const authorizations = [
		{
			id: 1,
			name: "Super admin",
		},
		{
			id: 2,
			name: "Content manager",
		},
		{
			id: 3,
			name: "User manager",
		},
		{
			id: 4,
			name: "Reservation manager",
		},
		{
			id: 5,
			name: "Default employee",
		},
	];

	useEffect(() => {
		if (isValid) {
			handleCancel();
		} else {
			setEdit(true);
		}
	}, []);

	function capitalizeFirstLetter(string) {
		if (string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
	}

	// Date picker
	const formattedDate = () => {
		const parsedDate = new Date(isValid.data.dob);
		const year = parsedDate.getFullYear();
		const month =
			parsedDate.getMonth() + 1 < 10
				? `0${parsedDate.getMonth() + 1}`
				: parsedDate.getMonth() + 1;
		const day =
			parsedDate.getDate() < 10
				? `0${parsedDate.getDate()}`
				: parsedDate.getDate();
		const formattedDate = `${year}-${month}-${day}`;
		return formattedDate;
	};

	const dateChange = () => {
		const parsedDate = new Date(dob);
		const year = parsedDate.getFullYear();
		const month =
			parsedDate.getMonth() + 1 < 10
				? `0${parsedDate.getMonth() + 1}`
				: parsedDate.getMonth() + 1;
		const day =
			parsedDate.getDate() < 10
				? `0${parsedDate.getDate()}`
				: parsedDate.getDate();
		const formattedDate = `${month}/${day}/${year}`;
		return formattedDate;
	};

	// Modal
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const handleDelete = () => {
		openModal();
	};

	const handleConfirmDelete = () => {
		let user_id = isValid.data.id;
		const response = DeleteEmployee(user_id);
		response.then((res) => {
			navigate("/employees");
		});
		closeModal();
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	// Actions for edit, cancel and save
	const handleCancel = () => {
		if (isValid) {
			setUsername(isValid.data.username);
			setName(isValid.data.name);
			setEmail(isValid.data.email);
			setDob(formattedDate());
			setGender(isValid.data.gender);
			setPosition(isValid.data.position);
			setEdit(false);
		} else {
			navigate("/employees");
		}
	};

	function handleSubmit(e) {
		e.preventDefault();

		const reqData = {
			username: username,
			name: name,
			email: email,
			dob: dob,
			gender: gender,
			position: position,
			password: password,
		};

		const check_empty = checkEmpty(reqData);
		if (!check_empty) {
			alert("Please fill in all fields");
			return;
		}
		console.log(reqData);
	}

	function handleEdit(e) {
		e.preventDefault();
		setErr("");
		setEdit(false);
		console.log("Edit Employee");
	}

	return (
		<div className='container'>
			<form
				className='edit-container'
				onSubmit={(e) => {
					if (isValid) {
						handleEdit(e);
					} else {
						handleSubmit(e);
					}
				}}>
				<div className='edit-item'>
					{isValid && <h2>Employee #{isValid.data.id}</h2>}
					{!isValid && <h2>Add Employee</h2>}
					{isValid && (
						<button className='button' onClick={() => handleDelete()}>
							Delete
						</button>
					)}
					{!edit && isValid && (
						<button className='button' onClick={() => setEdit(true)}>
							Edit
						</button>
					)}
					{(edit || !isValid) && (
						<>
							<button className='save-button' type='submit'>
								Save
							</button>
							<button
								className='button'
								type='button'
								onClick={() => handleCancel()}>
								Cancel
							</button>
						</>
					)}
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Username</label>
						</div>
						<div>
							{!edit && <p>{username}</p>}
							{edit && (
								<input
									type='text'
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									className='input-box'
								/>
							)}
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Name</label>
						</div>
						<div>
							{!edit && <p>{name}</p>}
							{edit && (
								<input
									type='text'
									value={name}
									onChange={(e) => setName(e.target.value)}
									className='input-box'
								/>
							)}
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div style={{ alignSelf: "flex-start" }}>
							<label>Email</label>
						</div>
						<div>
							{!edit && <p>{email}</p>}
							{edit && (
								<input
									type='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className='input-box'
								/>
							)}
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Date of birth</label>
						</div>
						<div>
							{!edit && <p>{dateChange()}</p>}
							{edit && (
								<input
									type='date'
									value={dob}
									className='input-box'
									onChange={(e) => setDob(e.target.value)}
								/>
							)}
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Gender</label>
						</div>
						<div>
							{!edit && <p>{capitalizeFirstLetter(gender)}</p>}
							{edit && (
								<select
									value={gender}
									className='input-box'
									onChange={(e) => setGender(e.target.value)}>
									<option value='' hidden>
										Select gender
									</option>
									<option value='male'>Male</option>
									<option value='female'>Female</option>
								</select>
							)}
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Position</label>
						</div>
						<div>
							{!edit && (
								<p>{authorizations.find((item) => item.id === 3).name}</p>
							)}
							{edit && (
								<select
									value={position}
									className='input-box'
									onChange={(e) => setPosition(e.target.value)}>
									<option value='' hidden>
										Select position
									</option>
									{authorizations.map((auth) => (
										<option key={auth.id} value={auth.id}>
											{auth.name}
										</option>
									))}
								</select>
							)}
						</div>
					</div>
				</div>
				{edit && (
					<div className='edit-item'>
						<div className='edit-info'>
							<div>
								<label>Change Password</label>
							</div>
							<div>
								<input
									type='password'
									placeholder='*************'
									value={password}
									className='input-box'
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
						</div>
					</div>
				)}
			</form>
			<ReactModal
				className='custom-modal'
				isOpen={isModalOpen}
				style={{
					overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
					content: {
						backgroundColor: "rgba(0, 0, 0, 0.5)",
						border: "none",
						width: "100%",
						height: "100%",
						margin: "auto",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						zIndex: "100",
					},
				}}>
				<div>
					<h1>Confirm Delete</h1>
					<p>
						Are you sure you want to remove this room? This action cannot be
						undone.
					</p>
					<button onClick={handleConfirmDelete}>Yes</button>
					<button onClick={closeModal}>No</button>
				</div>
			</ReactModal>
		</div>
	);
};

export default EmployeeItem;
