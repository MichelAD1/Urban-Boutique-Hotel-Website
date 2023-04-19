// Images
import logo from "../../assets/images/logo.png";
import { HiUserCircle } from "react-icons/hi";

const AccountNav = () => {
	return (
		<nav className='account-navbar' id='navbar'>
			<div></div>
			<img className='nav-image' src={logo} />
			<HiUserCircle className='account-image' />
			<div></div>
		</nav>
	);
};

export default AccountNav;
