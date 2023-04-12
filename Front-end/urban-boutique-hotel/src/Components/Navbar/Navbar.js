import { useLocation, Link } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import { FaAlignRight } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
	const path = useLocation().pathname;

	const [active, setActive] = useState(false);

	const handleToggle = () => {
		setActive(!active);
	};

	return (
		<nav className='navbar'>
			<div className='nav-image'>Logo</div>
			<ul className={active ? "links-section show-nav" : "links-section"}>
				{" "}
				<Link to='/' className='nav-link'>
					<li className={`routes ${path === "/" ? "active" : ""}`}>Home</li>
				</Link>
				<Link to='/rooms' className='nav-link'>
					<li className={`routes ${path === "/rooms" ? "active" : ""}`}>
						Rooms
					</li>
				</Link>
				<Link to='/services' className='nav-link'>
					<li className={`routes ${path === "/services" ? "active" : ""}`}>
						Services
					</li>
				</Link>
				<Link to='/findus' className='nav-link'>
					<li className={`routes ${path === "/findus" ? "active" : ""}`}>
						Find Us
					</li>
				</Link>
				<Link to='/about' className='nav-link'>
					<li className={`routes ${path === "/about" ? "active" : ""}`}>
						About
					</li>
				</Link>
				<Link to='/contact' className='nav-link'>
					<li className={`routes ${path === "/contact" ? "active" : ""}`}>
						Contact
					</li>
				</Link>
			</ul>
			<div className='login-section'>
				<div className='login-btn'>
					<Link to='/login' className='nav-link'>
						<div className='login-img'>
							<HiUserCircle className='nav-image' />
						</div>
						<div className='routes'>Sign In</div>
					</Link>
				</div>
			</div>
			<button type='button' className='nav-btn' onClick={handleToggle}>
				<FaAlignRight className='nav-icon' />
			</button>
		</nav>
	);
};

export default Navbar;
