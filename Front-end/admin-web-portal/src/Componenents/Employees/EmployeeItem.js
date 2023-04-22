import "../../Global/Styles/styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import FormData from "form-data";
import ReactModal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";

import AddEmployee from "../../api-client/Employees/AddEmployee";
import EditEmployee from "../../api-client/Employees/EditEmployee";
import DeleteEmployee from "../../api-client/Employees/DeleteEmployee";

const EmployeeItem = () => {
	const loc = useLocation();
	const navigate = useNavigate();
	const [isValid, setIsValid] = useState(loc.state);

	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [dob, setDob] = useState(new Date());
	const [gender, setGender] = useState("Male");
	const [position, setPosition] = useState("");
	const [auth, setAuth] = useState("");
	const [password, setPassword] = useState("");
	const [err, setErr] = useState("");

	const [edit, setEdit] = useState(false);

	const authorizations = [
		"super admin",
		"content manager",
		"user manager",
		"reservation manager",
		"default employee",
	];

	useEffect(() => {
		if (isValid) {
			handleCancel();
		} else {
			setEdit(true);
		}
	}, []);

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function checkDatesAreEqual() {
		const date1 = new Date(formattedDate());
		const date2 = new Date(dob);
		return (
			date1.getDate() === date2.getDate() &&
			date1.getMonth() === date2.getMonth() &&
			date1.getFullYear() === date2.getFullYear()
		);
	}

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

		const formattedDate = `${year}/${month}/${day}`;

		const new_date = new Date(formattedDate);
		return new_date;
	};

	const checkChange = () => {
		return !(
			username === isValid.data.username &&
			name === isValid.data.full_name &&
			email === isValid.data.email &&
			phoneNumber === isValid.data.number &&
			checkDatesAreEqual() &&
			gender === isValid.data.gender &&
			position === isValid.data.position &&
			password === ""
		);
	};

	const dataToSend = () => {
		const requestData = new FormData();
		requestData.append("user_id", isValid.data.id);
		if (username !== isValid.data.username) {
			requestData.append("username", username);
		}
		if (name !== isValid.data.full_name) {
			requestData.append("full_name", name);
		}
		if (email !== isValid.data.email) {
			requestData.append("email", email);
		}
		if (phoneNumber !== isValid.data.number) {
			requestData.append("number", phoneNumber);
		}
		if (gender !== isValid.data.gender) {
			requestData.append("gender", gender);
		}
		if (!checkDatesAreEqual()) {
			requestData.append("dob", dob);
		}
		if (position !== isValid.data.position) {
			requestData.append("position", position);
		}
		if (password !== "") {
			requestData.append("password", password);
		}
		return requestData;
	};

	const mergeJson = (obj1, obj2) => {
		const obj3 = {};
		for (const attrname in obj1) {
			obj3[attrname] = obj1[attrname];
		}
		for (const attrname in obj2) {
			obj3[attrname] = obj2[attrname];
		}
		return obj3;
	};

	const [isModalOpen, setIsModalOpen] = useState(false);

	// Modal
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

	const handleCancel = () => {
		if (isValid) {
			setUsername(isValid.data.username);
			setName(isValid.data.full_name);
			setEmail(isValid.data.email);
			setDob(formattedDate());
			setPhoneNumber(isValid.data.number);
			setGender(isValid.data.gender);
			setPosition(isValid.data.position);
			setAuth(isValid.data.authorization);
			setEdit(false);
		} else {
			navigate("/employees");
		}
	};

	function handleSubmit(e) {
		e.preventDefault();
		// setErr("");
		// if (!isValid) {
		// 	if (
		// 		username === "" ||
		// 		email === "" ||
		// 		password === "" ||
		// 		name === "" ||
		// 		phoneNumber === "" ||
		// 		dob === "" ||
		// 		position === "" ||
		// 		gender === ""
		// 	) {
		// 		setErr("All fields are required.");
		// 	} else if (password.length < 6) {
		// 		setErr("Your password must be at least 6 characters long.");
		// 	} else if (dob === null) {
		// 		setErr("Date of birth is required.");
		// 	} else {
		// 		const response = AddEmployee(
		// 			username,
		// 			email,
		// 			password,
		// 			name,
		// 			phoneNumber,
		// 			dob,
		// 			position,
		// 			gender,
		// 		);
		// 		response.then((res) => {
		// 			console.log(res);
		// 			if (res.status === "error") {
		// 				if (res.message.username) {
		// 					setErr(res.message.username);
		// 				} else if (res.message.password) {
		// 					setErr(res.message.password);
		// 				} else if (res.message.number) {
		// 					setErr(res.message.number);
		// 				} else if (res.message.email) {
		// 					setErr(res.message.email);
		// 				} else if (res.message.dob) {
		// 					setErr(res.message.dob);
		// 				}
		// 			} else {
		// 				const new_data = mergeJson(res.user, res.user_details);
		// 				navigate("/employee/profile", { state: { data: new_data } });
		// 				window.location.reload();
		// 			}
		// 		});
		// 	}
		// }
		setEdit(false);
		console.log("Add Employee");
	}

	function handleEdit(e) {
		e.preventDefault();
		setErr("");
		// if (isValid) {
		// 	const response = EditEmployee(dataToSend());
		// 	response.then((res) => {
		// 		if (res.status === "error") {
		// 			if (res.message.username) {
		// 				setErr(res.message.username);
		// 			} else if (res.message.password) {
		// 				setErr(res.message.password);
		// 			} else if (res.message.number) {
		// 				setErr(res.message.number);
		// 			} else if (res.message.email) {
		// 				setErr(res.message.email);
		// 			}
		// 		} else {
		// 			const new_data = mergeJson(res.user, res.user_details);
		// 			setIsValid({ data: new_data });
		// 			loc.state = { data: new_data };
		// 			alert("Changes saved");
		// 		}
		// 	});
		// }
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
							<label>Phone number</label>
						</div>
						<div>
							{!edit && <p>{phoneNumber}</p>}
							{edit && (
								<input
									type='text'
									value={phoneNumber}
									className='input-box'
									onChange={(e) => setPhoneNumber(e.target.value)}
								/>
							)}
						</div>
					</div>
				</div>
				{/* <div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Date of birth</label>
						</div>
						<div>
							{!edit && <p>{dob}</p>}
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
				</div> */}
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
							{!edit && <p>{position}</p>}
							{edit && (
								<input
									type='text'
									value={position}
									className='input-box'
									onChange={(e) => setPosition(e.target.value)}
								/>
							)}
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Authorization</label>
						</div>
						<div>
							{!edit && <p>{capitalizeFirstLetter(auth)}</p>}
							{edit && (
								<select
									value={auth}
									className='input-box'
									onChange={(e) => setAuth(e.target.value)}>
									<option value='' hidden>
										Select authorization
									</option>
									{authorizations.map((auth, index) => (
										<option key={index} value={auth}>
											{capitalizeFirstLetter(auth)}
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
							<label>Change Password</label>
						</div>
						<div>
							{!edit && <p>{password}</p>}
							{edit && (
								<input
									type='password'
									placeholder='*************'
									value={password}
									className='input-box'
									onChange={(e) => setPassword(e.target.value)}
								/>
							)}
						</div>
					</div>
				</div>
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
