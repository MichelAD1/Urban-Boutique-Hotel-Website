import { IoIosArrowBack } from "react-icons/io";
const Profile = () => {
	return (
		<div className='profile-container'>
			<div className='profile-section'>
				<div className='profile-item'>
					<h2>Personal information</h2>
					<h5>Update your personal information</h5>
				</div>
				<div className='account-item'>
					<div className='account-info'>
						<label>Name</label>
						<p>Marc Issa</p>
					</div>
					<button type='button'>Edit</button>
				</div>
			</div>
		</div>
	);
};

export default Profile;
