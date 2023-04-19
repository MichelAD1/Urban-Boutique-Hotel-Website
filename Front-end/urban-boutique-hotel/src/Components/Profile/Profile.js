import { Link } from "react-router-dom";

// Icons
import { MdManageAccounts } from "react-icons/md";

const Profile = () => {
	return (
		<div className='profile-container'>
			<div className='profile-section'>
				<h2>Account settings</h2>
				<h5>Manage your booking experience</h5>
				<div className='settings-container'>
					<div className='settings-box'>
						<MdManageAccounts className='settings-icon' />
						<div className='settings-content'>
							<h3>Personal information</h3>
							<p>Update your personal information</p>
							<Link to='' className='settings-link'>
								Manage your personal details
							</Link>
						</div>
					</div>
					<div className='settings-box'>
						<MdManageAccounts className='settings-icon' />
						<div className='settings-content'>
							<h3>Personal information</h3>
							<p>Update your personal information</p>
							<Link to='' className='settings-link'>
								Manage your personal details
							</Link>
						</div>
					</div>
					<div className='settings-box'>
						<MdManageAccounts className='settings-icon' />
						<div className='settings-content'>
							<h3>Personal information</h3>
							<p>Update your personal information</p>
							<Link to='' className='settings-link'>
								Manage your personal details
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
