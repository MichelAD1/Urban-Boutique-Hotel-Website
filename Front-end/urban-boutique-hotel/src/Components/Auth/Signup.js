import { useState } from "react";
import { useNavigate } from "react-router-dom";

// MUI
import countries from "../../Global/Components/CountryCodes";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";

const theme = createTheme({
  palette: {
    primary: {
      light: "#2a3249",
      main: "#2a3249",
      contrastText: "#fff",
    },
  },
});

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phone_number, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const navigation = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    // Do something with the form data
    console.log({
      username,
      email,
      password,
      countryCode,
      phone_number,
      dob,
      gender,
    });
    navigation("/");
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Add hotel logo here */}
          <h1 className="no-cursor">Sign up</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Box sx={{ display: "flex" }}>
              <TextField
                margin="normal"
                id="phone_number_country_code"
                label="Country Code"
                select
                sx={{ minWidth: 100, mr: 1 }}
                SelectProps={{
                  MenuProps: {
                    PaperProps: {
                      style: {
                        maxHeight: "300px",
                        width: "250px",
                        fontSize: "13px",
                      },
                    },
                  },
                  renderValue: (selected) => {
                    const selectedCountry = countries.find(
                      (item) => item.dial_code === selected
                    );
                    return selectedCountry
                      ? `${selectedCountry.dial_code}`
                      : "";
                  },
                }}
                value={countryCode}
                onChange={(event) => {
                  setCountryCode(event.target.value);
                }}
              >
                {countries.map((item) => {
                  return (
                    <MenuItem
                      key={item.name}
                      value={item.dial_code}
                      sx={{
                        width: "100%",
                        height: "30px",
                        fontSize: "13px",
                      }}
                    >
                      {`${item.dial_code} (${item.name})`}
                    </MenuItem>
                  );
                })}
              </TextField>

              <TextField
                margin="normal"
                fullWidth
                id="phone_number"
                label="Phone Number"
                type="number"
                InputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                autoComplete="phone_number"
                autoFocus
                value={phone_number}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </Box>
            <TextField
              margin="normal"
              fullWidth
              id="dob"
              label="Date of Birth"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              autoComplete="dob"
              autoFocus
              value={dob}
              onChange={(event) => setDob(event.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              select
              id="gender"
              label="Gender"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
              autoFocus
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </TextField>

            <button type="submit" className="btn-primary">
              Sign up
            </button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Signup;
