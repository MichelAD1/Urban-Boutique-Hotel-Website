import { useLocation, Link, useNavigate } from "react-router-dom";

// ***************** Logo and Icons *****************
// Logo
import logo from "../../assets/logo.png";

// Icons no fill
import home_nf from "../../assets/icons/home-nf.svg";
import options_nf from "../../assets/icons/apps-nf.svg";
import business_nf from "../../assets/icons/business-nf.svg";
import employee_nf from "../../assets/icons/employees-nf.svg";
import user_nf from "../../assets/icons/person-nf.svg";
import logout_nf from "../../assets/icons/logout-nf.svg";

// Icons fill
import home_fill from "../../assets/icons/home-fill.svg";
import business_fill from "../../assets/icons/business-fill.svg";
import employee_fill from "../../assets/icons/employee-fill.svg";
import user_fill from "../../assets/icons/person-fill.svg";
// import logout_fill from "../../assets/icons/logout-nf.svg";

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
						<img className='icons' src={home_nf} alt='' />
						<div className='routes'>Home</div>
					</Link>
				)}
				{path === "/" && (
					<div className='nav-link'>
						<img className='icons' src={home_fill} alt='' />
						<div className='routes active'>Home</div>
					</div>
				)}
				{/* Options Page navigation */}
				{path === "/options" && (
					<div className='nav-link'>
						<img className='icons' src={options_nf} alt='' />
						<div className='routes active'>Options</div>
					</div>
				)}

				{path !== "/options" && (
					<Link to='/options' className='nav-link'>
						<img className='icons' src={options_nf} alt='' />
						<div className='routes'>Options</div>
					</Link>
				)}
				{/* Businesses Page navigation */}
				{path !== "/businesses" && (
					<Link to='/businesses' className='nav-link'>
						<img className='icons' src={business_nf} alt='' />
						<div className='routes'>Partners</div>
					</Link>
				)}
				{path === "/businesses" && (
					<div className='nav-link'>
						<img className='icons' src={business_fill} alt='' />
						<div className='routes active'>Partners</div>
					</div>
				)}
				{/* Employees Page navigation */}
				{path !== "/employees" && (
					<Link to='/employees' className='nav-link'>
						<img className='icons' src={employee_nf} alt='' />
						<div className='routes'>Staff</div>
					</Link>
				)}
				{path === "/employees" && (
					<div className='nav-link'>
						<img className='icons' src={employee_fill} alt='' />
						<div className='routes active'>Staff</div>
					</div>
				)}
				{/* Users Page navigation */}
				{path === "/users" && (
					<div className='nav-link'>
						<img className='icons' src={user_fill} alt='' />
						<div className='routes active'>Users</div>
					</div>
				)}
				{path !== "/users" && (
					<Link to='/users' className='nav-link'>
						<img className='icons' src={user_nf} alt='' />
						<div className='routes'>Users</div>
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
				<img className='icons' src={logout_nf} alt='' />
				<div className='routes'>Log out</div>
			</div>
		</nav>
	);
}
