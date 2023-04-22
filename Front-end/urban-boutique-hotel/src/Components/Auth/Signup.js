import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// MUI
import countries from "../../Global/Components/CountryCodes";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";

//APIs
import Register from "../../api-client/Auth/Register";

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
  const navigation = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phone_number, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [err, setErr] = useState("");

  //Validators
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const validatePassword = (password) => {
    return password.length >= 8;
  };
  const validateUsername = (username) => {
    return username.length >= 25;
  };
  const validateDate = (dob) => {
    return dob.length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErr("");
    if (!validateEmail(email)) {
      setErr("Please enter a valid email address");
      return;
    }
    if (!validatePassword(password)) {
      setErr("Please enter a password with at least 8 characters");
      return;
    }
    if (!validateUsername(username)) {
      setErr("Please enter a username that is not too long");
      return;
    }
    const parsedDate = new Date(dob);
    const year = parsedDate.getFullYear();
    const month =
      parsedDate.getMonth() + 1 < 10
        ? `0${parsedDate.getMonth() + 1}`
        : parsedDate.getMonth() + 1;
    const day =
      parsedDate.getDate() < 10
        ? `0${parsedDate.getDate()}`
        : parsedDate.getDate();
    const formattedDate = `${year}/${month}/${day}`;
    setDob(new Date(formattedDate));

    const data = { username, email, password, gender };
    let response = Register(data);
    response.then((res) => {
      if (res.data.status === "error") {
        setErr("Wrong credentials, Try again");
      } else {
        let token = res.data.authorisation.token;
        localStorage.setItem("token", "Bearer " + token);
        localStorage.setItem(
          "username",
          JSON.stringify(res.data.user.username)
        );
        axios.defaults.headers.common["Authorization"] = "Bearer" + token;
        navigation("/");
      }
    });
  };

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
