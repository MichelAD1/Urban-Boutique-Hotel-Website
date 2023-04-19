// Components
import Setting from "./Setting";

const Profile = () => {
	return (
		<div className='profile-container'>
			<div className='profile-section'>
				<h2>Account settings</h2>
				<h5>Manage your booking experience</h5>
				<div className='settings-section'>
					<Setting />
				</div>
			</div>
		</div>
	);
};

export default Profile;
