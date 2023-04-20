import "./login-styles.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Logo
import logo from "../../assets/splash.png";

// Auth
import FetchCred from "../../api-client/Auth/FetchCred";

function Login() {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [err, setErr] = useState("");

	function handleLogin(e) {
		e.preventDefault();
		setErr("");

		let response = FetchCred(email, password);

		response
			.then((res) => {
				if (res.email) {
					setErr("Please enter a valid email address");
				} else if (res.password) {
					setErr("Please enter your password");
				} else if (res.status === 401) {
					setErr(
						"Invalid credentials! Please double check your email or password",
					);
				} else {
					let token = res.authorisation.token;
					localStorage.setItem("token", "Bearer " + token);
					axios.defaults.headers.common["Authorization"] = "Bearer" + token;
					navigate("/");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div className='login-container'>
			<div className='login-box'>
				<img src={logo} alt='' className='login-logo' />
				<div className='login-header'>
					Welcome back! Please enter your login credentials.
				</div>
				<form onSubmit={handleLogin} className='login-input-box'>
					<input
						className='login-input'
						type='text'
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						className='login-input'
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className='login-button' type='submit' id='login-button'>
						Log in
					</button>
				</form>
				<div className='login-error'>{err}</div>
			</div>
		</div>
	);
}

export default Login;
