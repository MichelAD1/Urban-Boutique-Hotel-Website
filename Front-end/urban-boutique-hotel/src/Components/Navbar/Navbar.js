import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.svg";
import { FaAlignRight } from "react-icons/fa";

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='nav-center'>
				<div className='nav-header'>
					<Link to='/'>
						<img src={Logo} alt='Hotel Booking' />
					</Link>
					<button type='button' className='nav-btn'>
						<FaAlignRight className='nav-icon' />
					</button>
				</div>
				<ul className='nav-links show-nav'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/rooms'>Rooms</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
