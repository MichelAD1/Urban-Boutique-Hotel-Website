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
	const [address, setAddress] = useState("");
	const [password, setPassword] = useState("");
	const [err, setErr] = useState("");

	useEffect(() => {
		if (isValid) {
			setUsername(isValid.data.username);
			setName(isValid.data.full_name);
			setEmail(isValid.data.email);
			setDob(formattedDate());
			setPhoneNumber(isValid.data.number);
			setGender(isValid.data.gender);
			setPosition(isValid.data.position);
			setAddress(isValid.data.address);
		}
	}, []);

	function checkDatesAreEqual() {
		const date1 = new Date(formattedDate());
		const date2 = new Date(dob);
		return (
			date1.getDate() === date2.getDate() &&
			date1.getMonth() === date2.getMonth() &&
			date1.getFullYear() === date2.getFullYear()
		);
	}

	const checkChange = () => {
		return !(
			username === isValid.data.username &&
			name === isValid.data.full_name &&
			email === isValid.data.email &&
			phoneNumber === isValid.data.number &&
			checkDatesAreEqual() &&
			gender === isValid.data.gender &&
			address === isValid.data.address &&
			position === isValid.data.position &&
			password === ""
		);
	};

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
		if (address !== isValid.data.address) {
			requestData.append("address", address);
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

	function handleSave(e) {
		e.preventDefault();
		setErr("");
		if (isValid) {
			const response = EditEmployee(dataToSend());
			response.then((res) => {
				if (res.status === "error") {
					if (res.message.username) {
						setErr(res.message.username);
					} else if (res.message.password) {
						setErr(res.message.password);
					} else if (res.message.number) {
						setErr(res.message.number);
					} else if (res.message.email) {
						setErr(res.message.email);
					}
				} else {
					const new_data = mergeJson(res.user, res.user_details);
					setIsValid({ data: new_data });
					loc.state = { data: new_data };
					alert("Changes saved");
				}
			});
		}
	}

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

	function handleAddEmployee(e) {
		e.preventDefault();
		setErr("");
		if (!isValid) {
			if (
				username === "" ||
				email === "" ||
				password === "" ||
				name === "" ||
				phoneNumber === "" ||
				dob === "" ||
				address === "" ||
				position === "" ||
				gender === ""
			) {
				setErr("All fields are required.");
			} else if (password.length < 6) {
				setErr("Your password must be at least 6 characters long.");
			} else if (dob === null) {
				setErr("Date of birth is required.");
			} else {
				const response = AddEmployee(
					username,
					email,
					password,
					name,
					phoneNumber,
					dob,
					address,
					position,
					gender,
				);
				response.then((res) => {
					console.log(res);
					if (res.status === "error") {
						if (res.message.username) {
							setErr(res.message.username);
						} else if (res.message.password) {
							setErr(res.message.password);
						} else if (res.message.number) {
							setErr(res.message.number);
						} else if (res.message.email) {
							setErr(res.message.email);
						} else if (res.message.dob) {
							setErr(res.message.dob);
						}
					} else {
						const new_data = mergeJson(res.user, res.user_details);
						navigate("/employee/profile", { state: { data: new_data } });
						window.location.reload();
					}
				});
			}
		}
	}

	return (
		<div className='container'>
			<div className='edit-user'>
				<form onSubmit={handleAddEmployee} className='info-box'>
					<div className='edit-info'>
						<div className='labels-section'>
							<div className='label-text'>Username: </div>
							<div className='label-text'>Name: </div>
							<div className='label-text'>Email: </div>
							<div className='label-text'>Phone number: </div>
							<div className='label-text'>Date of Birth: </div>
							<div className='label-text'>Gender: </div>
							<div className='label-text'>Address: </div>
							<div className='label-text'>Position: </div>
							{isValid && <div className='label-text'>Change password: </div>}
							{!isValid && <div className='label-text'>Password: </div>}
						</div>
						<div className='inputs-section'>
							<input
								type='text'
								className='input-box'
								value={username}
								onInput={(e) => {
									setUsername(e.target.value);
								}}
							/>
							<input
								type='text'
								className='input-box'
								value={name}
								onInput={(e) => {
									setName(e.target.value);
								}}
							/>
							<input
								type='email'
								className='input-box'
								value={email}
								onInput={(e) => {
									setEmail(e.target.value);
								}}
							/>
							<input
								type='tel'
								className='input-box'
								value={phoneNumber}
								onInput={(e) => {
									setPhoneNumber(e.target.value);
								}}
							/>

							<DatePicker
								selected={dob}
								onChange={(date) => setDob(date)}
								dateFormat='yyyy/MM/dd'
								className='input-box'
								peekNextMonth
								showMonthDropdown
								showYearDropdown
								dropdownMode='select'
							/>
							<select
								className='input-dropdown'
								value={gender}
								onInput={(e) => {
									setGender(e.target.value);
								}}>
								{gender === "male" && (
									<>
										<option value='male'>Male</option>{" "}
										<option value='female'>Female</option>
									</>
								)}
								{gender === "female" && (
									<>
										<option value='male'>Male</option>
										<option value='female'>Female</option>{" "}
									</>
								)}
								{gender !== "female" && gender !== "male" && (
									<>
										<option value='' hidden>
											Select gender
										</option>{" "}
										<option value='female'>Female</option>{" "}
										<option value='male'>Male</option>
									</>
								)}
							</select>
							<input
								type='text'
								className='input-box'
								value={address}
								onInput={(e) => {
									setAddress(e.target.value);
								}}
							/>
							<input
								type='text'
								className='input-box'
								value={position}
								onInput={(e) => {
									setPosition(e.target.value);
								}}
							/>
							<input
								type='password'
								className='input-box'
								value={password}
								onInput={(e) => {
									setPassword(e.target.value);
								}}
								placeholder='************'
							/>
						</div>
					</div>
					<div className='action-buttons'>
						{isValid && (
							<>
								{checkChange() && (
									<button
										onClick={handleSave}
										className='action-bt save'
										id='save'>
										Save
									</button>
								)}
								{!checkChange() && (
									<button
										className='action-bt save-disabled'
										id='save'
										disabled>
										Save
									</button>
								)}
								<button onClick={handleDelete} className='action-bt delete'>
									Delete
								</button>
								<ReactModal
									className='custom-modal'
									isOpen={isModalOpen}
									style={{
										overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
									}}>
									<div>
										<h1>Confirm Delete</h1>
										<p>
											Are you sure you want to remove this employee? This action
											cannot be undone.
										</p>
										<button onClick={handleConfirmDelete}>Yes</button>
										<button onClick={closeModal}>No</button>
									</div>
								</ReactModal>
							</>
						)}
						{!isValid && <button className='action-bt save'>Add</button>}
					</div>
					<div className='add-error'>{err}</div>
				</form>
			</div>
		</div>
	);
};

export default EmployeeItem;
