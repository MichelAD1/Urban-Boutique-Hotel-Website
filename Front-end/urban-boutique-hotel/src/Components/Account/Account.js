import { Link } from "react-router-dom";

// Icons
import { MdManageAccounts, MdMarkEmailUnread } from "react-icons/md";
import { IoMdOptions } from "react-icons/io";
import { BsPersonLock } from "react-icons/bs";

const Profile = () => {
	return (
		<div className='account-container'>
			<div className='account-section'>
				<h2>Account settings</h2>
				<h5>Manage your booking experience</h5>
				<div className='settings-container'>
					<Link to='/account/profile' className='settings-box'>
						<MdManageAccounts className='settings-icon' />
						<div className='settings-content'>
							<h3>Personal information</h3>
							<p>Update your personal information</p>
							<div className='settings-link'>
								Manage your personal information
							</div>
						</div>
					</Link>
					<Link to='/account/preferences' className='settings-box'>
						<IoMdOptions className='settings-icon' />
						<div className='settings-content'>
							<h3>Preferences</h3>
							<p>Change your language and currency</p>
							<div className='settings-link'>Manage preferences</div>
						</div>
					</Link>
					<Link to='' className='settings-box'>
						<BsPersonLock className='settings-icon' />
						<div className='settings-content'>
							<h3>Security</h3>
							<p>Adjust your security settings</p>
							<div className='settings-link'>Manage security</div>
						</div>
					</Link>
					<Link to='' className='settings-box'>
						<MdMarkEmailUnread className='settings-icon' />
						<div className='settings-content'>
							<h3>Email notifications</h3>
							<p>Decide what you want to subscribe and unsubscribe from</p>
							<div className='settings-link'>Manage Notifications</div>
						</div>
					</Link>
				</div>
			</div>
			<div className='reservations-section'>
				<h2>Reservations</h2>
				<h5>Manage your reservations</h5>
			</div>
		</div>
	);
};

export default Profile;
