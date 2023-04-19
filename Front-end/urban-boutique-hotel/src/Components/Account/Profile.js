import { useState, useEffect } from "react";

// Components
import Footer from "../../Global/Components/Footer";

const Profile = () => {
	const [user, setUser] = useState({});

	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [dob, setDob] = useState("");
	const [nationality, setNationality] = useState("");
	const [address, setAddress] = useState("");
	const [gender, setGender] = useState("");

	const [edit, setEdit] = useState(false);

	useEffect(() => {
		setUser({
			id: 1,
			name: "John Doe",
			username: "john",
			email: "johndoe@example.com",
			phone: "+961 71 578 965",
			dob: "2023-04-08",
			nationality: "Lebanese",
			address: "Beirut, Lebanon",
			gender: "Male",
		});
	}, []);

	useEffect(() => {
		handleCancel();
	}, [user]);

	const handleEdit = () => {
		setEdit(true);
	};
	const handleCancel = () => {
		setEdit(false);
		setName(user.name);
		setUsername(user.username);
		setEmail(user.email);
		setPhone(user.phone);
		setDob(user.dob);
		setNationality(user.nationality);
		setAddress(user.address);
		setGender(user.gender);
	};
	const handleSubmit = () => {
		setEdit(console.log("Submitted"));
	};
	function formatDate(dateString) {
		const [year, month, day] = dateString.split("-");
		return `${month}/${day}/${year}`;
	}

	return (
		<>
			<div className='profile-container'>
				<form className='profile-section'>
					<div className='profile-item'>
						<div className='profile-title'>
							<h2>Personal information</h2>
							<h5>Update your personal information</h5>
						</div>
						<div>
							{edit && (
								<button
									type='Submit'
									className='profile-btn save'
									onClick={handleSubmit}>
									Save
								</button>
							)}
							<button
								type='button'
								className='profile-btn'
								onClick={() => {
									if (edit) {
										handleCancel();
									} else {
										handleEdit();
									}
								}}>
								{!edit ? "Edit" : "Cancel"}
							</button>
						</div>
					</div>
					<div className='account-item'>
						<div className='account-info'>
							<div className='info-item'>
								<label>Name</label>
							</div>
							{edit && (
								<div className='info-item'>
									<input
										type='text'
										className='account-input'
										value={name}
										onChange={(e) => {
											setName(e.target.value);
										}}
									/>
								</div>
							)}
							{!edit && (
								<div className='info-item'>
									<p>{user.name}</p>
								</div>
							)}
						</div>
					</div>
					<div className='account-item'>
						<div className='account-info'>
							<div className='info-item'>
								<label>Display name</label>
							</div>
							{edit && (
								<div className='info-item'>
									<input
										type='text'
										className='account-input'
										value={username}
										onChange={(e) => {
											setUsername(e.target.value);
										}}
									/>
								</div>
							)}
							{!edit && (
								<div className='info-item'>
									<p>{user.username}</p>
								</div>
							)}
						</div>
					</div>
					<div className='account-item'>
						<div className='account-info'>
							<div className='info-item'>
								<label>Email</label>
							</div>
							{edit && (
								<div className='info-item'>
									<input
										type='email'
										className='account-input'
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
								</div>
							)}
							{!edit && (
								<div className='info-item'>
									<p>{user.email}</p>
								</div>
							)}
						</div>
					</div>
					<div className='account-item'>
						<div className='account-info'>
							<div className='info-item'>
								<label>Phone number</label>
							</div>
							{edit && (
								<div className='info-item'>
									<input
										type='text'
										className='account-input'
										value={phone}
										onChange={(e) => {
											setPhone(e.target.value);
										}}
									/>
								</div>
							)}
							{!edit && (
								<div className='info-item'>
									<p>{user.phone}</p>
								</div>
							)}
						</div>
					</div>
					<div className='account-item'>
						<div className='account-info'>
							<div className='info-item'>
								<label>Date of birth</label>
							</div>
							{edit && (
								<div className='info-item'>
									<input
										type='date'
										className='account-input'
										value={dob}
										onChange={(e) => {
											setDob(e.target.value);
										}}
									/>
								</div>
							)}
							{!edit && (
								<div className='info-item'>
									<p>{formatDate(user.dob)}</p>
								</div>
							)}
						</div>
					</div>
					<div className='account-item'>
						<div className='account-info'>
							<div className='info-item'>
								<label>Nationality</label>
							</div>
							{edit && (
								<div className='info-item'>
									<input
										type='text'
										className='account-input'
										value={nationality}
										onChange={(e) => {
											setNationality(e.target.value);
										}}
									/>
								</div>
							)}
							{!edit && (
								<div className='info-item'>
									<p>{user.nationality}</p>
								</div>
							)}
						</div>
					</div>
					<div className='account-item'>
						<div className='account-info'>
							<div className='info-item'>
								<label>Gender</label>
							</div>
							{edit && (
								<div className='info-item'>
									<input
										type='text'
										className='account-input'
										value={gender}
										onChange={(e) => {
											setGender(e.target.value);
										}}
									/>
								</div>
							)}
							{!edit && (
								<div className='info-item'>
									<p>{user.gender}</p>
								</div>
							)}
						</div>
					</div>
					<div className='account-item'>
						<div className='account-info'>
							<div className='info-item'>
								<label>Address</label>
							</div>
							{edit && (
								<div className='info-item'>
									<input
										type='text'
										className='account-input'
										value={address}
										onChange={(e) => {
											setAddress(e.target.value);
										}}
									/>
								</div>
							)}
							{!edit && (
								<div className='info-item'>
									<p>{user.address}</p>
								</div>
							)}
						</div>
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
};

export default Profile;
