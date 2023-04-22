import { useLocation, Link, useNavigate } from "react-router-dom";

// ***************** Logo and Icons *****************
// Logo
import logo from "../../assets/logo.png";

// Icons
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import {
	IoOptionsOutline,
	IoOptions,
	IoBedOutline,
	IoBed,
} from "react-icons/io5";
import { HiOutlineUserGroup, HiUserGroup } from "react-icons/hi";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import {
	RiMoneyDollarBoxFill,
	RiMoneyDollarBoxLine,
	RiFeedbackLine,
	RiFeedbackFill,
} from "react-icons/ri";

import finance_fill from "../../assets/icons/finance-fill.svg";
import support_fill from "../../assets/icons/support-fill.svg";
import finance_nf from "../../assets/icons/finance-nf.svg";
import support_nf from "../../assets/icons/support-nf.svg";

import Logout from "../../api-client/Auth/Logout";

export default function Navbar() {
	const path = useLocation().pathname;
	const navigate = useNavigate();
	return (
		<nav className='navbar'>
			<div>
				<div className='logo'>
					<img src={logo} alt='' />
				</div>
				{/* Home Page navigation */}
				{path !== "/" && (
					<Link to='/' className='nav-link'>
						<AiOutlineHome className='icons' alt='home' />
						<div className='routes'>Home</div>
					</Link>
				)}
				{path === "/" && (
					<div className='nav-link'>
						<AiFillHome className='icons' alt='' />
						<div className='routes active'>Home</div>
					</div>
				)}
				{/* Options Page navigation */}
				{path === "/options" && (
					<div className='nav-link'>
						<IoOptions className='icons' alt='' />
						<div className='routes active'>Options</div>
					</div>
				)}

				{path !== "/options" && (
					<Link to='/options' className='nav-link'>
						<IoOptionsOutline className='icons' alt='' />
						<div className='routes'>Options</div>
					</Link>
				)}
				{/* Room Page navigation */}
				{path !== "/rooms" && (
					<Link to='/rooms' className='nav-link'>
						<IoBedOutline className='icons' alt='' />
						<div className='routes'>Rooms</div>
					</Link>
				)}
				{path === "/rooms" && (
					<div className='nav-link'>
						<IoBed className='icons' alt='' />
						<div className='routes active'>Rooms</div>
					</div>
				)}
				{/* Employees Page navigation */}
				{path !== "/employees" && (
					<Link to='/employees' className='nav-link'>
						<HiOutlineUserGroup className='icons' alt='' />
						<div className='routes'>Staff</div>
					</Link>
				)}
				{path === "/employees" && (
					<div className='nav-link'>
						<HiUserGroup className='icons' alt='' />
						<div className='routes active'>Staff</div>
					</div>
				)}
				{/* Users Page navigation */}
				{path === "/users" && (
					<div className='nav-link'>
						<BsPersonFill className='icons' alt='' />
						<div className='routes active'>Users</div>
					</div>
				)}
				{path !== "/users" && (
					<Link to='/users' className='nav-link'>
						<BsPerson className='icons' alt='' />
						<div className='routes'>Users</div>
					</Link>
				)}
				{/* Finance Page navigation */}
				{path === "/finance" && (
					<div className='nav-link'>
						<RiMoneyDollarBoxFill className='icons' />
						<div className='routes active'>Finance</div>
					</div>
				)}

				{path !== "/finance" && (
					<Link to='/finance' className='nav-link'>
						<RiMoneyDollarBoxLine className='icons' s />
						<div className='routes'>Finance</div>
					</Link>
				)}
				{/* Support Page navigation */}
				{path === "/support" && (
					<div className='nav-link'>
						<RiFeedbackFill className='icons' />
						<div className='routes active'>Support</div>
					</div>
				)}
				{path !== "/support" && (
					<Link to='/support' className='nav-link'>
						<RiFeedbackLine className='icons' />
						<div className='routes'>Support</div>
					</Link>
				)}
			</div>
			<div
				className='nav-link logout'
				onClick={() => {
					const response = Logout();
					response
						.then((res) => {
							navigate("/login");
						})
						.catch((err) => err);
				}}>
				<MdLogout className='icons' alt='' />
				<div className='routes'>Log out</div>
			</div>
		</nav>
	);
}
