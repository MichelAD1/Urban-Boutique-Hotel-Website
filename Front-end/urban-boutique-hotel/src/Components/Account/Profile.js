import { useState, useEffect } from "react";

// Components
import Footer from "../../Global/Components/Footer";
const Profile = () => {
	const [user, setUser] = useState({});
	useEffect(() => {
		setUser({
			id: 1,
			name: "John Doe",
			username: "john",
			email: "johndoe@example.com",
			phone: "+961 71 578 965",
			dob: "21/05/2000",
			nationality: "Lebanese",
			address: "Beirut, Lebanon",
			gender: "Male",
		});
	}, []);

	const handleEdit = () => {
		console.log("Edit");
	};
	return (
		<>
			<div className='profile-container'>
				<div className='profile-section'>
					<div className='profile-item'>
						<div className='profile-title'>
							<h2>Personal information</h2>
							<h5>Update your personal information</h5>
						</div>
						<button type='button' className='profile-btn' onClick={handleEdit}>
							Edit
						</button>
					</div>
					<div className='account-item'>
						<div className='account-info'>
							<div className='info-item'>
								<label>Name</label>
							</div>
							<div className='info-item'>
								<p>{user.name}</p>
							</div>
						</div>
					</div>
					<div className='account-item'>
						<div className='account-info'>
							<div className='info-item'>
								<label>Display name</label>
							</div>
							<div className='info-item'>
								<p>{user.username}</p>
							</div>
						</div>
					</div>
					<div className='account-item'>
						<div className='account-info'>
							<div className='info-item'>
								<label>Email</label>
							</div>
							<div className='info-item'>
								<p>{user.email}</p>
							</div>
						</div>
					</div>
					<div className='account-item'>
						<div className='account-info'>
							<div className='info-item'>
								<label>Phone number</label>
							</div>
							<div className='info-item'>
								<p>{user.phone}</p>
							</div>
						</div>
					</div>
					<div className='account-item'>
						<div className='account-info'>
							<div className='info-item'>
								<label>Date of birth</label>
							</div>
							<div className='info-item'>
								<p>{user.dob}</p>
							</div>
						</div>
					</div>
					<div className='account-item'>
						<div className='account-info'>
							<div className='info-item'>
								<label>Nationality</label>
							</div>
							<div className='info-item'>
								<p>{user.nationality}</p>
							</div>
						</div>
					</div>
					<div className='account-item'>
						<div className='account-info'>
							<div className='info-item'>
								<label>Gender</label>
							</div>
							<div className='info-item'>
								<p>{user.gender}</p>
							</div>
						</div>
					</div>
					<div className='account-item'>
						<div className='account-info'>
							<div className='info-item'>
								<label>Address</label>
							</div>
							<div className='info-item'>
								<p>{user.address}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Profile;
