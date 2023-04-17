import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	const path = useLocation().pathname;
	const [active, setActive] = useState(false);
	const [windowSize, setWindowSize] = useState([
		window.innerWidth,
		window.innerHeight,
	]);

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize([window.innerWidth, window.innerHeight]);
		};

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	useEffect(() => {
		const navbar = document.getElementById("navbar");
		const links = document.getElementById("links-section");
		const login_btn = document.getElementById("login-btn");

		if (windowSize[0] > 1000) {
			navbar.style.height = "4em";
			links.style.pointerEvents = "all";
			login_btn.style.opacity = "1";
			login_btn.style.pointerEvents = "all";

			console.log(windowSize[0]);
		}
		if (windowSize[0] < 1000) {
			login_btn.style.opacity = "0";
			login_btn.style.pointerEvents = "none";
		}
	}, [windowSize]);

	const handleToggle = () => {
		console.log(windowSize[0]);
		if (windowSize[0] < 1000) {
			setActive(!active);
			const navbar = document.getElementById("navbar");
			const links = document.getElementById("links-section");
			const login_btn = document.getElementById("login-btn");

			navbar.style.height = "auto";
			links.style.pointerEvents = "all";
			login_btn.style.opacity = "1";
			login_btn.style.pointerEvents = "all";
		}
	};

	const handleClose = () => {
		if (windowSize[0] < 1000) {
			setActive(!active);
			const navbar = document.getElementById("navbar");
			const links = document.getElementById("links-section");
			const login_btn = document.getElementById("login-btn");

			navbar.style.height = "4em";
			login_btn.style.opacity = "0";
			links.style.pointerEvents = "none";
			login_btn.style.pointerEvents = "none";
		}
	};

	return (
		<nav className='navbar' id='navbar'>
			<div className='nav-image'>Logo</div>
			<ul
				className={active ? "links-section" : "links-section show-nav"}
				id='links-section'>
				{" "}
				<Link to='/' className='nav-link' onClick={handleClose}>
					<li className={`routes ${path === "/" ? "active" : ""}`}>Home</li>
				</Link>
				<Link to='/rooms' className='nav-link' onClick={handleClose}>
					<li className={`routes ${path === "/rooms" ? "active" : ""}`}>
						Rooms
					</li>
				</Link>
				<Link to='/services' className='nav-link' onClick={handleClose}>
					<li className={`routes ${path === "/services" ? "active" : ""}`}>
						Services
					</li>
				</Link>
				<Link to='/findus' className='nav-link' onClick={handleClose}>
					<li className={`routes ${path === "/findus" ? "active" : ""}`}>
						Find Us
					</li>
				</Link>
				<Link to='/about' className='nav-link' onClick={handleClose}>
					<li className={`routes ${path === "/about" ? "active" : ""}`}>
						About
					</li>
				</Link>
				<Link to='/contact' className='nav-link' onClick={handleClose}>
					<li className={`routes ${path === "/contact" ? "active" : ""}`}>
						Contact
					</li>
				</Link>
			</ul>
			<div className='login-section'>
				<div className='login-btn' id='login-btn'>
					<Link to='/login' className='nav-link' onClick={handleClose}>
						<div className='login-img'>
							<HiUserCircle className='nav-image' />
						</div>
						<div className='routes'>Log in</div>
					</Link>
				</div>
			</div>
			{!active && (
				<button type='button' className='nav-btn' onClick={handleToggle}>
					<AiOutlineMenu className='nav-icon' />
				</button>
			)}
			{active && (
				<button
					type='button'
					className='nav-btn close-btn'
					onClick={handleClose}>
					<AiOutlineClose className='nav-icon' />
				</button>
			)}
		</nav>
	);
};

export default Navbar;
