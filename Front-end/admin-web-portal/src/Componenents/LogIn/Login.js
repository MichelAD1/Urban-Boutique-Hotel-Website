import { useNavigate } from "react-router-dom";

// MUI
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";

// logo
import logo from "../../assets/logo.png";

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
	const navigation = useNavigate();

	function handleSubmit() {
		navigation("/");
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
					<form onSubmit={handleSubmit}>
						<TextField
							margin='normal'
							fullWidth
							id='email'
							label='Email Address'
							autoComplete='email'
							autoFocus
						/>
						<TextField
							margin='normal'
							fullWidth
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
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
