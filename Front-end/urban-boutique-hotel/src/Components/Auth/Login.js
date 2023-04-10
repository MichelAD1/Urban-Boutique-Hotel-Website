import "./auth-styles.css";

import { useNavigate } from "react-router-dom";

// MUI
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const Login = () => {
	const navigate = useNavigate();

	function handleSubmit() {
		console.log("Submitted");
	}

	function handleRedirect(route) {
		navigate(route);
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
					{/* Add hotel logo here */}
					<h1>Log in</h1>
					<Box
						component='form'
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}>
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
							<button type='submit' className='primary-button'>
								Log in
							</button>
						</form>
						<Grid container>
							<Grid item xs>
								<Link href='#' variant='body2'>
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href='/signup' variant='body2'>
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default Login;
