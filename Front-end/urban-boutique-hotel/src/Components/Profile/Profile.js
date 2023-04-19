import { Link } from "react-router-dom";

// Icons
import { MdManageAccounts, MdMarkEmailUnread } from "react-icons/md";
import { IoMdOptions } from "react-icons/io";
import { BsPersonLock } from "react-icons/bs";

const Profile = () => {
	return (
		<div className='profile-container'>
			<div className='profile-section'>
				<h2>Account settings</h2>
				<h5>Manage your booking experience</h5>
				<div className='settings-container'>
					<Link to='' className='settings-box'>
						<MdManageAccounts className='settings-icon' />
						<div className='settings-content'>
							<h3>Personal information</h3>
							<p>Update your personal information</p>
							<div className='settings-link'>
								Manage your personal information
							</div>
						</div>
					</Link>
					<Link to='' className='settings-box'>
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
							<p>
								Decide what you want to be notified about, and unsubscribe from
								what you don't
							</p>
							<div className='settings-link'>Manage Notifications</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Profile;
