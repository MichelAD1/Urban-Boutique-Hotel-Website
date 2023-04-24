import { useNavigate } from "react-router-dom";
import { useState } from "react";

// MUI
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// logo
import logo from "../../assets/logo.png";

// API
import FetchCred from "../../api-client/Auth/FetchCred";

const theme = createTheme({
	palette: {
		primary: {
			light: "#2a3249",
			main: "#2a3249",
			contrastText: "#fff",
		},
	},
});

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		FetchCred(email, password).then((res) => {
			if (res.status === "success") {
				localStorage.setItem("token", res.authorisation.token);
				navigate("/");
			} else if (res.status === 401) {
				console.log("Unauthorized");
			}
		});
	}

	return (
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<img src={logo} alt='' />
					<form onSubmit={(e) => handleSubmit(e)}>
						<TextField
							margin='normal'
							fullWidth
							id='email'
							label='Email Address'
							autoComplete='email'
							autoFocus
							onChange={(e) => setEmail(e.target.value)}
						/>
						<TextField
							margin='normal'
							fullWidth
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button type='submit' className='btn-primary'>
							Log in
						</button>
					</form>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default Login;
